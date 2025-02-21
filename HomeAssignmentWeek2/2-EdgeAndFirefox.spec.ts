import test, { chromium, firefox } from '@playwright/test'

test('Loading Red bus in an edge browser', async() => {
const browserInstance = await chromium.launch();
const browserContext = await browserInstance.newContext();
const page = await browserContext.newPage();
await page.goto("https://www.redbus.in");
const url = page.url();
console.log(`The title of the page is ${await page.title()}`);
console.log(url);

})

test('Loading Flipcart in a Firefox browser', async() => {
    const browserInstance = await firefox.launch();
    const browserContext = await browserInstance.newContext();
    const page = await browserContext.newPage();
    await page.goto("https://www.flipkart.com");
    const url = page.url();
    console.log(`The title of the page is ${await page.title()}`);
    console.log(url);
    
})