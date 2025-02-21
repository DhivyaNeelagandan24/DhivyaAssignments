import {test, expect} from '@playwright/test'

test('Auto Waiting', async({page}) =>{

    await page.goto('https://leafground.com/waits.xhtml');
    //Wait for Visibility (1 - 10 Sec)
    const visibleElement = await page.locator(".card").filter({hasText:'Wait for Visibility (1 - 10 Sec)'})
    await visibleElement.locator("button").filter({hasText: 'Click'}).click();
    await expect(visibleElement.locator("button").filter({hasText:"I am here"})).toBeVisible({timeout: 10000})
    //Wait for Invisibility (1 - 10 Sec)
    const inVisibleElement = await page.locator(".card").filter({hasText:'Wait for Invisibility (1 - 10 Sec)'});
    await inVisibleElement.locator("button").filter({hasText:'Click'}).click();
    expect (inVisibleElement.locator("button").filter({hasText:"I am bout to hide"})).toBeHidden({timeout: 10000})
    //Wait for Text Change (1 - 10 Sec)
    const textChange = await page.locator(".card").filter({ hasText: "Wait for Text Change (1 - 10 Sec)"});
    await textChange.locator("button").filter({hasText: 'Click'}).click();
    await expect(textChange.locator("button").filter({hasText: 'Did you notice?'})).toBeVisible({timeout: 13000})
  
});