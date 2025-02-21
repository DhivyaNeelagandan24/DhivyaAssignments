import {test,expect} from '@playwright/test'

test('Create and Verify New case in chatter', async({page}) => {

    await page.goto("https://login.salesforce.com/");
    await page.locator("#username").fill("ravindran.ramdas@testleaf.com");
    await page.locator("#password").fill("Indran#1432");
    await page.locator("#Login").click();
    await page.locator(".slds-icon-waffle").click();
    await page.locator("//button[text()='View All']").click();
    await page.getByPlaceholder('Search apps or items...').click();
    await page.getByPlaceholder('Search apps or items...').fill('Service');
    await page.locator("(//mark[text()='Service'])[1]").click();
    await page.locator("(//span[text()='Cases'])[1]").click();
    await page.getByRole('button', {name:'New'}).click();
    await page.getByPlaceholder('Search Contacts...').click();
    await page.locator("//span[text()='New Contact']").click();
    await page.getByRole('combobox', {name :'salutation'}).click();
    await page.getByText("Ms.").click();
    await page.getByPlaceholder('First Name').fill("Dhivya");
    await page.getByPlaceholder('Last Name').fill("Neelagandan");
    await page.locator("(//button[text()='Save'])[2]").click();
    await page.getByRole('combobox', { name: 'Status' }).click();
    //await page.getByText('New').click();
    await page.getByRole('option', { name: 'New' }).click();
    await page.getByRole('combobox', { name: 'Priority' }).click();
    await page.getByText('High').click();
    await page.getByRole('combobox', { name: 'Case Origin' }).click();
    //await page.getByText('Email').click();
    await page.getByRole('option', { name: 'Email' }).click();
    await page.locator("[name='Subject']").fill("Product Return Request");
    await page.getByRole('textbox', { name: 'Description' }).fill("Request return for a defective product")
    await page.locator("[name='SaveEdit']").click();
    const newCase = await page.locator(".forceToastMessage").innerText();
        expect (newCase).toContain('created');
    await page.getByRole('button', { name: 'Edit Status' }).click();
    // await page.waitForTimeout(2000);
    //await page.locator("(//span[text()='New'])[5]").click();
    await page.getByRole('combobox', { name: 'Status' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('option', { name: 'Escalated' }).click();
    await page.locator("[name='SaveEdit']").click();
    // const Details = page.locator("(//lightning-formatted-text[(text()='Escalated')])[2]").innerText();
    // expect (Details).toContain('Escalated');
    await expect(page.locator("(//lightning-formatted-text[(text()='Escalated')])[2]")).toContainText('Escalated');
    await page.waitForTimeout(3000);
    await page.getByTitle('Share an update...').click();
    await page.waitForTimeout(2000);
    // await page.getByPlaceholder('Share an update...').click();
    await page.getByLabel('Share an update...').locator('p').fill("Testing");
    await page.getByRole('button', { name: 'Share' }).click();
    await page.locator("(//div[@class='cuf-media-right forceChatterOverflowActionMenu uiMenu'])[1]/a").click();
    await page.waitForTimeout(2000);
    await page.getByText("Like on Chatter").click();
    const chatterLikePopup = await page.locator(".toastContainer").innerText();
    expect (chatterLikePopup).toContain('liked.');
    await page.locator("//span[text()='Chatter']").click();
    await expect(page.getByRole('link', { name: '00001033' })).toBeVisible();
    await page.getByRole('button', { name: 'Close' }).click();
})