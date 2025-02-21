import {test,expect} from '@playwright/test'



test('Create a lead', async({page}) => {

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
    await page.locator("#createLeadForm_personalTitle").fill("Ms")
    await page.locator("#createLeadForm_generalProfTitle").fill("Test")
    await page.locator("#createLeadForm_annualRevenue").fill("50000")
    await page.locator("#createLeadForm_departmentName").fill("IT")
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("9978890098")
    await page.locator("//input[@name='submitButton']").click();
    const CompanyName = await page.locator("#viewLead_companyName_sp").innerText();
    expect (CompanyName).toContain('CTS');
    const FirstName = await page.locator("#viewLead_firstName_sp").innerText();
    expect (FirstName).toContain('Dhivya');
    const LastName = await page.locator("#viewLead_lastName_sp").innerText();
    expect (LastName).toContain('Neelagandan');
    const status = await page.locator("#viewLead_statusId_sp").innerText();
    expect (status).toContain('Assigned');
})

test('Edit a lead', async({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("demosalesmanager");
    await page.locator("#password").fill("crmsfa");
    await page.locator(".decorativeSubmit").click();
    await page.locator("//a[contains(text(), 'CRM/SFA')]").click();
    await page.locator("//a[contains(text(), 'Leads')]").click();
    await page.locator("//a[contains(text(), 'Find Leads')]").click();
    await page.locator("(//input[@name='firstName'])[3]").fill("Dhivya");
    await page.locator("//button[text()='Find Leads']").click();
    await page.locator(".ext-safari").click();
    await page.locator("//a[text()='Edit']").click();
    await page.locator("#updateLeadForm_companyName").fill("Infosys");
    await page.locator("#updateLeadForm_annualRevenue").fill("900000");
    await page.locator("#updateLeadForm_departmentName").fill("XYZDept");
    await page.locator("#updateLeadForm_description").fill("xxxxxyyyyyzzzz");
    await page.locator("(//input[@name='submitButton'])[1]").click();
    const CompanyName1 = await page.locator("#viewLead_companyName_sp").innerText();
    expect (CompanyName1).toContain('Infosys');
    const AnnualRevenue = await page.locator("#viewLead_annualRevenue_sp").innerText();
    expect (AnnualRevenue).toContain("$900,000.00");
    const Department = await page.locator("#viewLead_departmentName_sp").innerText();
    expect (Department).toContain('XYZDept');
    const Descreption = await page.locator("#viewLead_description_sp").innerText();
    expect (Descreption).toContain('xxxxxyyyyyzzzz');


})

test ('Crea a new Account', async({page}) => {

    await page.goto("https://login.salesforce.com/");
    await page.getByLabel("username").fill("dhivyaneelu@testleaf.com");
    await page.getByLabel("password").fill("1Testteam!");
    await page.locator("#Login").click();
    const url = page.url();
    const title = page.title();
    console.log(`The title of the page is ${title}`); //din'tWork
    console.log(url);
    await page.locator(".slds-icon-waffle").click();
    await page.getByText('View All').click();
    await page.getByPlaceholder('Search apps or items...').click
    await page.getByPlaceholder('Search apps or items...').fill('Service');
    await page.locator("(//mark[text()='Service'])[1]").click();
    await page.locator("[title='Accounts']").click();
    await page.getByRole('button', {name:'New'}).click();
    await page.locator("[name='Name']").fill('XXDHXX');
    await page.locator("//button[@name='SaveEdit']").click();

    //TO CAPTURE TOAST MESSAGE
    const ToastMsg = await page.locator(".forceToastMessage").innerText();
    expect (ToastMsg).toContain('created');
})
