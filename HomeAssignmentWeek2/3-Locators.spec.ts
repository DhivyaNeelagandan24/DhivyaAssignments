import  {test, expect } from '@playwright/test'

test('Create Lead', async({page}) => {

await page.goto("https://login.salesforce.com/");
await page.locator("#username").fill("dhivyaneelu@testleaf.com");
await page.locator("#password").fill("1Testteam!");
await page.locator("#Login").click();
await page.locator(".slds-icon-waffle").click();
await page.locator("//button[text()='View All']").click();
await page.locator("//span/p[text()='Sales']").click();
await page.locator("//a//span[text()='Leads']").click();
await page.locator("//button[text()='New']").click();
//dropdown
await page.getByRole('combobox', { name: 'Salutation' }).click();
await page.getByText('Ms.').click();
await page.getByPlaceholder("Last Name").fill("Neelagandan");
await page.locator("//input[@name='Company']").fill("cognizant");
await page.locator("//button[@name='SaveEdit']").click();
//verification
const verifyLead = await page.locator("(//span[contains(text(),'Lead')])[last()]").innerText();
    expect(verifyLead).toContain('Lead')

})


test('Edit Lead', async({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("demosalesmanager");
    await page.locator("#password").fill("crmsfa");
    await page.locator(".decorativeSubmit").click();
    await page.locator("//a[contains(text(), 'CRM/SFA')]").click();
    await page.locator("//a[contains(text(), 'Leads')]").click();
    await page.locator("//a[contains(text(), 'Create Lead')]").click();
    await page.locator("#createLeadForm_companyName").fill("CTS");
    await page.locator("#createLeadForm_firstName").fill("Dhivya");
    await page.locator("#createLeadForm_lastName").fill("Neelagandan")
    await page.locator("[name='submitButton']").click();
    await page.locator("//a[text()='Edit']").click();
    await page.locator("#updateLeadForm_companyName").fill("TCS");
    await page.locator("(//input[@name='submitButton'])[1]").click();
})

test('Create individuals', async({page}) => {
    await page.goto("https://login.salesforce.com/");
    await page.locator("#username").fill("dhivyaneelu@testleaf.com");
    await page.locator("#password").fill("1Testteam!");
    await page.locator("#Login").click();
    await page.locator(".slds-icon-waffle").click();
    await page.locator("//button[text()='View All']").click();
    await page.locator("//p[text()='Individuals']").click();
    await page.getByRole('button', { name: 'New' }).click();
    await page.getByRole('group', { name: '* Name' }).getByRole('combobox').click();
    await page.getByText('Ms.').click();
    await page.getByPlaceholder("Last Name").fill("Neelagandan");
    await page.locator("(//span[text()='Save'])[2]").click();
    const popupTest = await page.locator("//span[text()='Individual']").innerText();
    expect(popupTest).toContain('created')
})


test('Edit Idividuals', async({page}) => {
    await page.goto("https://login.salesforce.com/");
    await page.locator("#username").fill("dhivyaneelu@testleaf.com");
    await page.locator("#password").fill("1Testteam!");
    await page.locator("#Login").click();
    await page.locator(".slds-icon-waffle").click();
    await page.locator("//button[text()='View All']").click();
    await page.locator("//p[text()='Individuals']").click();
    await page.locator("//input[@name='Individual-search-input']").click();
    await page.locator("//input[@name='Individual-search-input']").fill("Neelagandan");  
    await page.locator("//input[@name='Individual-search-input']").press("Enter");
    await page.getByRole('button', { name: 'Show more actions' }).click();
    await page.locator("//div[text()='Edit']").click();
    await page.getByRole('combobox', {name :'salutation'}).click();
    await page.getByText("Mr").click();
    await page.getByPlaceholder('First Name').click();
    await page.getByText("(//span[text()='Save'])[2]").click();
    const verifyFirstName = await page.locator("//div/span[text()='Individual']").innerText();
    expect (verifyFirstName).toContain('save');

})