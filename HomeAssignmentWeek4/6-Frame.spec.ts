import {expect, test} from "@playwright/test";

test(`Frames`, async ({page}) => {

await page.goto(`https://leafground.com/frame.xhtml`);
//Click Me (Inside frame)
const frame = page.frameLocator("//iframe[@src='default.xhtml']")
await frame.locator("//button[text()='Click Me']").click();
await expect (frame.locator("button").filter({hasText:"Hurray! You Clicked Me."})).toBeVisible();
//How many frames in this page?
//To get the frames
const allFrame = page.frames();
console.log("allFrame");
//To get the count of the frames
const frameCount = allFrame.length;
console.log(`The Frame count is ${frameCount}`);
//Click Me (Inside Nested frame)

const nestedFrame = await page.locator(".card").filter({hasText:"Click Me (Inside Nested frame)"})
const nestedFrame1= await nestedFrame.frameLocator("iframe")
const nestedFrame2= await nestedFrame1.frameLocator("iframe")
await nestedFrame2.locator("//button[text()='Click Me']").click();
await expect (nestedFrame2.locator("button").filter({hasText:"Hurray! You Clicked Me."})).toBeVisible();
})