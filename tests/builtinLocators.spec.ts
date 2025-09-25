import{test,expect, Locator} from "@playwright/test"

//total 7 built-in locators

//1. page.getByAltText()
// locate by 'alt' attribte text

test("Verify PW locator", async({page})=>{
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

    // 3. page.getByRole() - Locating by Role   ( role is not an attribute)
  /* Role locators include buttons, checkboxes, headings, links, lists, tables, 
     and many more and follow W3C specifications for ARIA role.
     Prefer for interactive elements like buttons, checkboxes, links, lists, headings, tables, etc.
*/
    await page.getByRole("link",{name:'Register'}).click();
    // so it open register page, and we see Regiter text in h1, but register text is matching in 3 locations, so we cant use getByText().
   await expect(page.getByRole('heading',{name:"Register"})).toHaveText("Register");
    

   // 4. page.getByLabel() - Locate form control by label's text
  // When to use: Ideal for form fields with visible labels.
   await page.getByLabel("First name:").fill("Aditya");
   await page.getByLabel("Email:").fill("abc@xyz.com");

   // 5. page.getByPlaceholder() - Finds element with a given placeholder text.
  // Best for inputs without a label but having a placeholder
    await page.getByPlaceholder("Search store").fill("macbbok");

    //// 6. page.getByTitle() to locate an element by its title attribute.
  // When to use: When your element has a meaningful title attribute.
    // we are adding .html file for demo next 2 functions.
    await page.goto('http://127.0.0.1:5500/tests/locators.html');

    await expect(page.getByTitle('Home page link')).toHaveText("Home");

    
// 7. page.getByTestId() : Locate an element based on its data-testid attribute (other attributes can be configured)
  // When to use: When text or role-based locators are unstable or not suitable.

 await expect( page.getByTestId("profile-name")).toHaveText("John Doe");

  await expect(page.getByTestId('profile-email')).toHaveText("john.doe@example.com");
    // in betBYTestId() only, we can configure testId attribute name in playwright.config.ts
    //so after configuring,changing .html file, it will work.
});


/* 
// 2. page.getByText()
// locate by text- visible text/innertext, h1, p,div,span etc

test("Verify visible text locator", async({page})=>{
   
    // launch the url in browser
    await page.goto("https://demo.nopcommerce.com/");
    // so here wr are visiting same website again .. so include all expect() assertions in single test(), instead of making 7 test() test cases

}); */