require('string.prototype.endswith');

var fs     = require('fs'),
    test   = require('utest'),
    walk   = require('walk'),
    assert = require('assert'),
    walker = walk.walk(__dirname, {filters: ['node_modules', '.git', '_build']});

var tests = {};

walker.on('file', function(root, fileStats, next) {
	if (fileStats.name.endsWith('.json')) {
		var filePath = root + '/' + fileStats.name;
		fs.readFile(filePath, function(err, data) {
			tests[filePath] = assert.doesNotThrow.bind(null, JSON.parse.bind(null, data));

			next();
		});
	} else {
		next();
	}
});

walker.on('end', function() {
	test('validJSON', tests);
});