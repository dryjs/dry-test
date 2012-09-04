//require('tamejs').register();
var _ = require('dry-underscore');

//exports.TestRunner = require('./test-runner.tjs').TestRunner;

exportReporters();

function exportReporters(){

    var fs = require('fs');
    var path = require('path');

    var reportersRoot = __dirname + '/reporters/';

    var reporters = fs.readdirSync(reportersRoot);

    var Reporters = exports.Reporters = {};

    _.each(reporters, function(fileName){

        var reporter = require(path.join(reportersRoot, fileName)).Reporter;

        if(!reporter.Type){ reporter.Type = fileName; }

        Reporters[reporter.Type] = reporter;
    });
}


