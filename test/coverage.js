var fs = require('fs');
var browserify = require('browserify');

var covered = [
    './lib/a',
    // './lib/b'
];

var scaffold = [
    // node_modules
    './node_modules/backbone',
    './node_modules/backbone/node_modules/underscore'
];

var suite = [
    // suite
    './lib/a.spec',
    // './lib/b.spec'
];

var covered_b = browserify();
var scaffold_b = browserify();
var suite_b = browserify();

for (var i=0; i < covered.length; i++) {
    covered_b.require(covered[i]);
}

for (var i=0; i < scaffold.length; i++) {
    scaffold_b.require(scaffold[i]);
    covered_b.external(scaffold[i]);
}




suite_b.add('./test/suite.js');
var ex_suite = (covered.slice()).concat(scaffold.slice());
for (var i=0; i < ex_suite.length; i++) {
    suite_b.external(ex_suite[i]);
};

covered_b.bundle().pipe(fs.createWriteStream('test/test.covered.js'));
scaffold_b.bundle().pipe(fs.createWriteStream('test/test.scaffold.js'));
suite_b.bundle().pipe(fs.createWriteStream('test/test.suite.js'));