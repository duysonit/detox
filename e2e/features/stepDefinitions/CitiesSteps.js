import { When, Then } from '@cucumber/cucumber';
import citiesPage from '../../pageObjects/CitiesPage';


When("the Cities page is correctly displayed", async() => {
    await citiesPage.verifyCitiesPage();
});


Then ("I scroll {string} {string} to image number {int}", async(contient, direction, number) => {
    await citiesPage.scrollCities(contient.toLowerCase(), direction.toLowerCase(), number -1)
});

