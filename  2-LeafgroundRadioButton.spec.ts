import {test, expect} from '@playwright/test'
import { log } from 'console';

test('Leafground RadioButton', async({page}) =>{

    async function cardReader(value1:String){
        const radioBut = page.locator(".card").filter({ hasText: 'value1' });
        const defaultChecked1 = radioBut.locator("[checked='checked']");
        await expect(defaultChecked1).toBeChecked();   
    }

await page.goto('https://leafground.com/radio.xhtml');
//default select radio button
cardReader("Find the default select radio button");
//Your most fav browser
const browser = await page.locator(".card").filter({hasText:"Your most favorite browser"})
await browser.locator("(//label[text()='Chrome'])[1]").check();
const favBrowser = browser.locator("(//label[text()='Chrome'])[1]")
await expect(favBrowser).toBeChecked();
//Unselectable
await page.locator(".card").filter({hasText:"UnSelectable"})
await page.locator("//label[text()='Chennai']").check();
//select the age group
cardReader("Select the age group (only if not selected)");

});