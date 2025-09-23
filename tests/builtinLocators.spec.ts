import{test,expect, Locator} from "@playwright/test"

//total 7 built-in locators

//1. page.getByAltText()

test("Verify Playwright locators", async({page})=>{
    // launch the url in browser
    await page.goto("https://demo.nopcommerce.com/");

    const logo:Locator= page.getByAltText("nopCommerce demo store");
    await logo.click(); // click is metnod & is returning a promise
    
    await expect(logo).toBeVisible();

});
