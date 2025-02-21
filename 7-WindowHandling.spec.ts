import {test, expect} from '@playwright/test'

test('Window Handling', async({page, context}) =>{

await page.goto('https://login.salesforce.com/');
await page.locator("#username").fill("dhivyaneelu@testleaf.com");
await page.locator("#password").fill("1Testteam!");
await page.locator("#Login").click();
//Click on the "Learn More” button under Mobile Publisher
await page.locator("//span[text()='Learn More']").click();
await page.waitForTimeout(3000);
const [newWindow] = await Promise.all([context.waitForEvent('page'),page.locator("//span[text()='Learn More']").click()])
//Capture the title of the new window that opens
expect(newWindow).toHaveTitle("Service Cloud: AI-powered Customer Service Agent Console | Salesforce US");
await newWindow.locator("(//button[text()='Accept All Cookies'])[1]").click();
console.log(`The New Window Title is ${await page.title()}`);
})
