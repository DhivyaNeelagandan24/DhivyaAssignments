import  {test } from '@playwright/test'

test('Login to Salesforce', async({page}) => {

await page.goto("https://login.salesforce.com/");
await page.locator("#username").fill("dhivyaneelu@testleaf.com");
await page.locator("#password").fill("1Testteam!");
await page.locator("#Login").click();
const url = page.url();
console.log(`The title of the page is ${await page.title()}`);
console.log(url);

})