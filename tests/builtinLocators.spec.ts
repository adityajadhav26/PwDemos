import{test,expect, Locator} from "@playwright/test"

//total 7 built-in locators

//1. page.getByAltText()
// locate by 'alt' attribte text

test("Verify Alt text locator", async({page})=>{
    // launch the url in browser
    await page.goto("https://demo.nopcommerce.com/");

    const logo:Locator= page.getByAltText("nopCommerce demo store");
    await logo.click(); // click is metnod & is returning a promise
    
    await expect(logo).toBeVisible();

    // 2. page.getByText()
    // locate by text- visible text/innertext, h1, p,div,span etc
    
    //const text:Locator=   page.getByText("Welcome to our store");
    //await expect(   text  ).toBeVisible();
 
    //await expect(  page.getByText("Welcome to our store")   ).toBeVisible();   // full string/full text

    //await expect(page.getByText("Welcome to")).toBeVisible();   // provided substring/partial text
    await expect(page.getByText(/Welcome\s+To\s+Our\s+Store/i)).toBeVisible();   //regular expression

});


/* 
// 2. page.getByText()
// locate by text- visible text/innertext, h1, p,div,span etc

test("Verify visible text locator", async({page})=>{
   
    // launch the url in browser
    await page.goto("https://demo.nopcommerce.com/");
    // so here wr are visiting same website again .. so include all expect() assertions in single test(), instead of making 7 test() test cases

}); */