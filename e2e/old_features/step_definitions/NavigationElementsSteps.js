import { Then, setDefaultTimeout, Given } from '@cucumber/cucumber';

setDefaultTimeout(120 * 1000);

Then('I tap the Add Member Icon', async () => {
    await element(by.id('memberListHeader')).atIndex(0).tap();
    await element(by.id('addMemberIcon')).atIndex(0).tap();
});


Given("I tap on the {string} navigation tab", async(title) =>{

    await element(by.id(`${title.toLowerCase()}NavigationSection`)).atIndex(0).tap();
    await element(by.id(`${title.toLowerCase()}NavigationImage`)).atIndex(0).tap();

});