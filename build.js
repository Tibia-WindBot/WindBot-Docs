
/*

 Removes ./_build/ directory contents
 puts contents from templates in ./assets/ directory
 and fills them with newly generated data

 */

require('string.prototype.startswith');

(function () {

	var fs  = require('fs-extra');
	var cry = require('crypto');
	var md  = require('markdown').markdown;

	var config = {
		templatesDir: './assets/',
		resultsDir:   './_build/',
		docsDirs: [
			'events',
			'functions',
			'huds',
			'iterators',
			'tibia-11',
			'types',
			'variables',
			'widgets'
		]
	};

	activate();

	function activate () {

		prepareDir();

		replaceDocsData();
		replaceContributorsList();
		replaceResourcesPath();

	}

	function prepareDir () {

		// remove public directory contents
		fs.emptyDirSync(config.resultsDir);

		// copy file templates to public directory
		fs.copySync(config.templatesDir, config.resultsDir);

	}

	function replaceDocsData () {

		// Replace docsData
		replaceInFile({
			sourceFilePath: config.templatesDir + 'js/docs.js',
			destFilePath:   config.resultsDir   + 'js/docs.js',

			valueToReplace: cry.createHash('md5').update('docsData').digest('hex'),
			valueToSet: JSON.stringify(getDocsData()),
			valueTemplate: "'{{ value }}'"

		});

	}

	function replaceContributorsList () {

		// Replace contributors list
		replaceInFile({
			sourceFilePath: config.templatesDir + 'docs.html',
			destFilePath:   config.resultsDir   + 'docs.html',

			valueToReplace: cry.createHash('md5').update('contributors').digest('hex'),
			valueToSet: md.toHTML(fs.readFileSync(__dirname + '/CONTRIBUTORS.md').toString())
		});

	}

	function replaceResourcesPath () {

		var pattern = '{{ resourcesPath }}';

		// resources for local
		replaceInFile({
			sourceFilePath: config.templatesDir + 'docs.html',
			destFilePath:   config.resultsDir   + 'docs_local.html',

			valueToReplace: pattern,
			valueToSet: 'https://www.tibiawindbot.com/'
		});

		// resources for production
		replaceInFile({
			sourceFilePath: config.templatesDir + 'docs.html',
			destFilePath:   config.resultsDir   + 'docs.html',

			valueToReplace: pattern,
			valueToSet: ''
		});

	}

	function replaceInFile (options) {

		if (!options || !options.sourceFilePath || !options.destFilePath || !options.valueToReplace || !options.hasOwnProperty('valueToSet')) {
			throw 'Bad options';
		}

		var fileContent = fs.readFileSync(options.sourceFilePath).toString();

		if (options.valueTemplate) {
			options.valueToReplace = options.valueTemplate.replace('{{ value }}', options.valueToReplace);
		}

		fs.createFileSync(options.destFilePath);

		fs.outputFile(
			options.destFilePath,
			fileContent.replace(new RegExp(options.valueToReplace, 'g'), options.valueToSet)
		);

	}

	function getDocsData () {

		var result = [];

		var requireItem = function  (pathPieces) {
			pathPieces.unshift(__dirname);
			return require(pathPieces.join('/'));
		};

		// moduleDirs
		fs.readdirSync(__dirname).forEach(function (moduleDir) {
			if (config.docsDirs.indexOf(moduleDir) > -1) { // This is an allowed directory

				// gather module information
				var curModule = requireItem([moduleDir, '_index.json']);
				curModule.items = [];

				var sectionDirs = fs.readdirSync(__dirname + '/' + moduleDir);
				sectionDirs.forEach(function (sectionDir) {
					if (sectionDir !== '_index.json') {

						// gather section information
						var curSection = requireItem([moduleDir, sectionDir, '_index.json']);
						curSection.items = [];

						var entryFiles = fs.readdirSync(__dirname + '/' + moduleDir + '/' + sectionDir);
						entryFiles.forEach(function (entryFile) {
							if (entryFile !== '_index.json') {
								curSection.items.push(requireItem([moduleDir, sectionDir, entryFile]));
							}
						});

						curModule.items.push(curSection);
					}
				});

				result.push(curModule);

			}
		});

		return result;

	}

}());
