require('string.prototype.startswith');

var fs  = require('fs'),
	md  = require('markdown').markdown,
	cry = require('crypto');

function requireItem(pathPieces) {
	pathPieces.unshift(__dirname + '/..');
	return require(pathPieces.join('/'));
}

function replaceHashInFile(filePath, key, value) {
	var hash = cry.createHash('md5').update(key).digest('hex'),
	    fileContent = fs.readFileSync('_' + filePath).toString();

	fs.writeFileSync(
		filePath,
		fileContent.replace(hash, value)
	);
}


var docsData = []

var moduleDirs = fs.readdirSync(__dirname + '/..');
moduleDirs.forEach(function (moduleDir) {
	if (moduleDir.indexOf('.') === -1) { // This is a directory

		// We skip the node_modules folder and any folder that starts with an
		// underscore.
		if (moduleDir === 'node_modules' || moduleDir.startsWith('_')) {
			return;
		}

		// Gather module information
		var curModule = requireItem([moduleDir, '_index.json']);
		curModule.items = [];

		var sectionDirs = fs.readdirSync(__dirname + '/../' + moduleDir);
		sectionDirs.forEach(function (sectionDir) {
			if (sectionDir !== '_index.json') {

				// Gather section information
				var curSection = requireItem([moduleDir, sectionDir, '_index.json']);
				curSection.items = [];

				var entryFiles = fs.readdirSync(__dirname + '/../' + moduleDir + '/' + sectionDir);
				entryFiles.forEach(function (entryFile) {
					if (entryFile !== '_index.json') {
						curSection.items.push(requireItem([moduleDir, sectionDir, entryFile]));
					}
				});

				curModule.items.push(curSection);
			}
		});

		docsData.push(curModule);
	}
});

// Replace docsData
replaceHashInFile(
	'docs.js',
	'docsData',
	JSON.stringify(docsData)
);

// Replace contributors list
replaceHashInFile(
	'docs.html',
	'contributors',
	md.toHTML(fs.readFileSync(__dirname + '/../CONTRIBUTORS.md').toString())
);