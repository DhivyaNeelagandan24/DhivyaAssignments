import {test, expect} from '@playwright/test'
import { log } from 'node:console';

test('Leafground CheckBox', async({page}) =>{

await page.goto('https://leafground.com/checkbox.xhtml');
//BasicCheckbox
const basicCheckbox = await page.locator(".card").filter({hasText:"Basic Checkbox"})
await basicCheckbox.locator(".ui-chkbox-label").click();

//Notification
const notification = await page.locator(".card").filter({hasText:"Notification"})
await notification.locator("//span[text()='Ajax']").click();
const popup = await page.locator(".ui-growl-message");
await expect(popup).toBeVisible();
const popupInnerText = await page.locator(".ui-growl-message").innerText();
await expect(popupInnerText).toContain("Checked")
await page.waitForTimeout(8000);

//ChooseYourFavLang
const favLang = await page.locator(".card").filter({hasText:"Choose your favorite language(s)"})
await favLang.locator("//label[text()='Javascript']").click();

//TriStateCheckbox
const triState = await page.locator(".card").filter({ hasText: "Tri State Checkbox"});
await triState.locator(".ui-state-default").click();
const triStateInnerText = await page.locator(".ui-growl-message>span").innerText();
console.log(`Inner Text is: ${triStateInnerText}`);
await expect(triStateInnerText).toContain('State has been changed.')


//ToggleSwitch
const ToggleSwitch = await page.locator(".card").filter({hasText:"Toggle Switch"})
await ToggleSwitch.locator(".ui-toggleswitch-slider").click();
await page.waitForTimeout(5000);

//SelectMultiple
const multiple = await page.locator(".card").filter({hasText:"Select Multiple"});
await multiple.locator("//ul[@data-label='Cities']").click();
await page.locator("//div[@role='dialog']/div/div[1]").click();


});
