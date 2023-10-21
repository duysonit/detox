import { When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import utilities from '../../helper/Utilities';

setDefaultTimeout(120 * 1000);



// Interacting with Calendar
Then('I select {string} {string} of {string} {string} date in the Calendar', async (weekday, day, month, year) => {
    await utilities.scrollToElement(element(by.id('formInput-startDate')), 
        by.id('formBackground'),
        300,
        'down');
    await element(by.id('formLabel-startDate')).tap();
    await element(by.id('formBackground')).swipe('up');
    await utilities.selectCalendarDate(weekday, day, month, year);
});

// Scrolling to element
When ("I scroll {string} to {string} at {int} pixels {string}", async (backgroundId, targetElementId, pixels, direction) => {
    // await waitFor(element(by.id(targetElementId))).toBeVisible().whileElement(by.id(backgroundId)).scroll(pixels,direction);
    await utilities.scrollToElement((element(by.id(targetElementId))),by.id(backgroundId),pixels, direction);
});

// Scrolling actions
When ("I scroll {string} {int} pixels {string}", async (elementId, pixel, direcion) => {
    await element(by.id(elementId)).scroll(pixel,direcion);
});

Then ("I scroll {string} {int} pixels {string} with X: {float} and Y: {float}", async (elementdId, pixel, direcion, x, y)=> {
    await element(by.id(elementdId)).scroll(pixel, direcion, x, y);
});

When ("I scroll {string} to the {string}", async(elementdId, direcion) => {
    await element(by.id(elementdId)).scrollTo(direcion);
});


// Swiping actions
Then('I swipe {string} {string}', async (elementId, direction) => {
    await element(by.id(elementId)).swipe(direction);
});

Then('I swipe {string} {string} {string}', async (elementId, direction, speed) => {
    await element(by.id(elementId)).swipe(direction, speed);
});

Then('I swipe {string} {string} {string} for {float} of the screen', async (elementId, direction, speed, float) => {
    await element(by.id(elementId)).swipe(direction, speed, float);
});


// typing
Then ("I type {string} as Name and {string} as Surname", async(name,surname) => {
    await element(by.id('formInput-name')).typeText(name);
    await element(by.id('formInput-surname')).typeText(surname);
    await element(by.id('formInput-surname')).tapBackspaceKey();
    await utilities.sleep(5000);


});

Then ("I replace {string} in Name and {string} in Surname", async (name, surname)=> {
    await element(by.id('formInput-name')).replaceText(name);
    await element(by.id('formInput-surname')).replaceText(surname);
    await element(by.id('formInput-surname')).tapReturnKey();
    await utilities.sleep(5000);
});



Then ("I enter {string} in Name and {string} in Surname", async (name, surname)=> {

    await utilities.typeInElement(element(by.id('formInput-name')),name);
    await utilities.typeInElement(element(by.id('formInput-surname')),surname);
    await utilities.sleep(5000);
});