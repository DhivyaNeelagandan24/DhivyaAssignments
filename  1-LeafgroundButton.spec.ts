import {test, expect} from '@playwright/test'

test('Leafground Button', async({page}) =>{

await page.goto('https://leafground.com/button.xhtml');
//confirm if the button is visible
const dis = await page.locator(".card").filter({hasText:"Confirm if the button is disabled."});
await expect(dis.locator("//span[text()='Disabled']")).toBeDisabled();
const val = await dis.locator("//span[text()='Disabled']").innerText();
expect (val).toContain("Disabled");
//Click Image Button and Click on any hidden button
const imageButton = await page.locator(".card").filter({hasText:"Click Image Button and Click on any hidden button"}) 
await imageButton.locator("//span[text()='Image']").click();
//How many rounded buttons are there?
let noOfButtons = await page.locator(".card").filter({hasText:"How many rounded buttons are there?"});
let value = await noOfButtons.locator("//button[@type='button']").count()
console.log(`Rounded buttons count : ${value}`);
});


