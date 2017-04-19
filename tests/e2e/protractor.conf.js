//protractor.conf.js
'use strict'

let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
 module.exports.config = {
 seleniumAddress: 'http://localhost:4444/wd/hub',
 capabilities: {
 	'browserName': 'chrome',
 // 	shardTestFiles: true,
 // 	maxInstances: 2
 },
 specs: ['specs/*.spec.js'],
 //baseUrl: 'http://www.protractortest.org/'
 baseUrl: 'http://todomvc.com/examples/angularjs/',
onPrepare() {
	jasmine.getEnv().addReporter(new SpecReporter({
   	displayFailuresSummary: true,
 		displayFailedSpec: true,
 		displaySuiteNumber: true,
 		displaySpecDuration: true
 	}));
 // 	jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
 // 		//fixedScreenShotName: true
 // 	}));
 }
};
