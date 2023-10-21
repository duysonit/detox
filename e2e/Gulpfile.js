const gulp = require('gulp');
const reporter = require('multiple-cucumber-html-reporter');

gulp.task('report-generation', async () => {
    reporter.generate({"jsonDir":".tmp/","reportPath":"reports/","pageTitle":"Pinnacle QA Academy - iOS Test Automation Report","reportName":"Pinnacle QA Academy - iOS Test Automation Report: Regression Test Suite","displayDuration":true,"metadata":{"device":"iPhone 14 Pro","platform":{"name":"iOS","version":"16.4"},"app":{"name":"membersApp","version":"1.0.0"}},"customData":{"title":"Run Information","data":[{"label":"Execution Date","value":"Monday, 2nd of October 2023"},{"label":"Execution Start Time","value":"20:32:11"},{"label":"Execution End Time","value":"20:32:44"},{"label":"Execution Duration","value":"00:00:33"},{"label":"Environment","value":"UAT"},{"label":"Framework","value":"Detox"}]}})
});