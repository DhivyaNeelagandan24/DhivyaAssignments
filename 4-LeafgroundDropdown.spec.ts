import {test, expect} from '@playwright/test'

test('Leafground Dropdown', async({page}) =>{

await page.goto('https://leafground.com/select.xhtml');
//Which is your favorite UI Automation tool?
await page.selectOption(".ui-selectonemenu", {value: "Playwright"})
//count
const dropdownCard = await page.locator(".card").filter({hasText:"Which is your favorite UI Automation tool?"})
const dropDown = dropdownCard.locator(".ui-selectonemenu>option");
const dropDownCount = await dropDown.count();
console.log(dropDownCount);
//print
for(let i=1; i<dropDownCount; i++){

    console.log(await dropDown.nth(i).innerText());
}
//Choose your preferred country.
const country = await page.locator(".card").filter({hasText:"Choose your preferred country."})
await country.locator(".ui-widget").click();
await page.locator("//li[text()='India']").click();
await page.waitForTimeout(4000);
//Confirm Cities belongs to Country is loaded
const cities = await page.locator(".card").filter({hasText:"Confirm Cities belongs to Country is loaded"})
await cities.locator(".ui-widget").click();
await page.locator("//li[text()='Chennai']").click();
//Choose the Course
const course = await page.locator(".card").filter({hasText:"Choose the Course"})
await course.locator(".ui-corner-right").click();
await page.locator("//li[text()='Playwright']").click();
await course.locator(".ui-corner-right").click();
await page.locator("//li[text()='Selenium WebDriver']").click();
await course.locator(".ui-corner-right").click();
await page.locator("//li[text()='RestAssured']").click();
// Choose language randomly
const lang = await page.locator(".card").filter({hasText:"Choose language randomly"})
await lang.locator(".ui-corner-right").click();
await lang.locator("//li[text()='English']").click();
//count
const langCount = page.locator("//li[@role='option']");
const language = await langCount.count();
console.log(language);
//print
for(let i=1; i<language; i++){
    console.log(await langCount.nth(i).innerText());
}
//Select 'Two' irrespective of the language chosen
const irrLang = await page.locator(".card").filter({hasText:`Select 'Two' irrespective of the language chosen`});
await irrLang.locator(".ui-corner-right").click();
await irrLang.locator(".ui-corner-right").click();
await page.locator("//li[text()='One']").click();
});