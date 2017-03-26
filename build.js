
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

	}

	function prepareDir () {

		// remove public directory contents
		fs.emptyDirSync(config.resultsDir);

		// copy file templates to public directory
		fs.copySync(config.templatesDir, config.resultsDir);

	}

	function replaceDocsData () {

		// Replace docsData
		replaceHashInFile({
			sourceFilePath: config.templatesDir + 'js/docs.js',
			destFilePath:   config.resultsDir   + 'js/docs.js',

			hashKey: 'docsData',
			hashKeyTemplate: "'{{ hash }}'",

			valueToSet: JSON.stringify(getDocsData())
		});

	}

	function replaceContributorsList () {

		// Replace contributors list
		replaceHashInFile({
			sourceFilePath: config.templatesDir + 'docs.html',
			destFilePath:   config.resultsDir   + 'docs.html',

			hashKey: 'contributors',

			valueToSet: md.toHTML(fs.readFileSync(__dirname + '/CONTRIBUTORS.md').toString())
		});

	}

	function replaceHashInFile (options) {

		if (!options || !options.sourceFilePath || !options.destFilePath || !options.hashKey || !options.valueToSet) {
			throw 'Bad options';
		}

		var hash = cry.createHash('md5').update(options.hashKey).digest('hex');
		var fileContent = fs.readFileSync(options.sourceFilePath).toString();

		if (options.hashKeyTemplate) {
			hash = options.hashKeyTemplate.replace('{{ hash }}', hash);
		}

		fs.outputFile(
			options.destFilePath,
			fileContent.replace(hash, options.valueToSet)
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
