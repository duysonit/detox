import { Given, When, And, Then, setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(120 * 1000);

// By text

Given('I tap on the Counters section by text', async() => {
    await element(by.text('Counters')).tap();

});

When('I tap on the Water counter by text', async() => {
    await element(by.text('WATER COUNTER')).tap();

});

Then('I tap on the Electricity counter by text', async() => {
    await element(by.text('ELECTRICITY COUNTER')).tap();

});

Then('I tap on the Gas counter by text', async() => {
    await element(by.text('GAS COUNTER')).tap();

});

Then('I tap on the Broadband counter by text', async() => {
    await element(by.text('BROADBAND COUNTER')).tap();

});


// By id

When('I tap on the Water counter by id', async() => {
    await element(by.id('superman')).longPress(5000);

});

Then('I tap on the Electricity counter by id', async() => {
    await element(by.id('superman1')).multiTap(5);

});

Then('I tap on the Gas counter by id', async() => {
    await element(by.id('superman2')).multiTap(6);

});

Then('I tap on the Broadband counter by id', async() => {
    await element(by.id('superman3')).tap({ x:5, y:250 });

});


// By multiple matchers

When('I tap on the Water counter by type and text', async() => {
    const typeLocator = device.getPlatform() === 'ios' ? 'RCTTextView' : 'android.widget.TextView'
    await element(by.type(typeLocator).and(by.text('WATER COUNTER'))).tap();

});

Then ("I tap on the Electricity counter by trait and text", async() => {
    await element(by.traits(['staticText']).and(by.text('ELECTRICITY COUNTER'))).tap();
});

Then ("I tap on the Gas counter by ancestor ID and descendant text", async() => {
    await element(by.id('counterButton').withDescendant(by.text('GAS COUNTER'))).tap();
});

Then ("I tap on the Broadband counter by descendant text and ancestor type", async() => {
    const typeLocator = device.getPlatform() === 'ios' ? 'RCTView' : 'android.view.ViewGroup'

    await element(by.text('BROADBAND COUNTER').withAncestor(by.type(typeLocator))).tap();
});
