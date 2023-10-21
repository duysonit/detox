import {
    BeforeAll,
    Before,
    AfterStep,
    After,
    AfterAll,
  } from '@cucumber/cucumber';
  import {init, onTestStart, onTestDone, cleanup} from 'detox/internals';
  import testData from '../../testData/TestData';
  import utilities from '../../helper/Utilities';
  import moment from 'moment';
  import report from '../../helper/ReportGeneration';
  import replace from 'replace-in-file';
  const date = moment().format('DD-MM-YYY_HH-mm-ss_a');
  let executionStart;
  
  BeforeAll({timeout: 60 * 1000}, async () => {
    console.log('Execution start: ', moment(executionStart).format('HH:mm:ss'));
    executionStart = moment();
    await init();
  });
  
  Before(async testCase => {
    let instanceBoolean = true;
    for (let i = 0; i < testCase.pickle.tags.length; i++) {
      let tag = testCase.pickle.tags[i].name;
      if (
        tag === '@addmembers' ||
        testData.getLastTag() === '@addmembers' ||
        tag === '@editmembers' ||
        testData.getLastTag() === '@editmembers'
      ) {
        instanceBoolean = false;
      } else if (tag === '@addmembers' || tag === '@editmembers') {
        testData.setLastTag(tag);
      }
    }
    await device.launchApp({delete: instanceBoolean, newInstance: true});
  
    const testSummary = {
      fullName: testCase.pickle.name,
      status: 'running',
    };
  
    await onTestStart(testSummary);
  });
  
  AfterStep(async function (step) {
    if (step.result.status === 'FAILED') {
      const stepName = step.pickleStep.text.replace(/\s+/g, '-');
      await this.attach(
        await utilities.takeScreenshotStream(
          `${device.getPlatform()}_${stepName}_${date}`,
        ),
        'image/png',
      );
    }
  });
  
  After(async scenario => {
    const testSummary = {
      fullName: scenario.pickle.name,
      status: scenario.result.status.toLowerCase(),
    };
  
    await onTestDone(testSummary);
  });
  
  AfterAll(async () => {
    const deviceOS = device.getPlatform();
    await cleanup();
    executionEnd = moment();
    console.log('Execution end: ', moment(executionEnd).format('HH:mm:ss'));
  
    const options = {
      files: 'e2e/Gulpfile.js',
      from: new RegExp('reporter.generate.*'),
      to: `reporter.generate(${report.getReportValues(
        deviceOS,
        executionStart,
        executionEnd,
      )})`,
    };
  
    await replace(options);
  });
  