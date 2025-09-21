import{test,expect} from "@playwright/test" 

// verify URL of webpage conatin specific word or not
// step1. goto  "https://www.facebook.com/"
// step 2. verify 'book' word is present or not in url

test("verify URL", async({page})=>{
    await page.goto("https://www.facebook.com/");
    //let actualURL:string = await page.url();
    let actualURL:string = await page.url();
    console.log(actualURL);
    //await expect(page).toHaveURL("https://www.facebook.com"); // string url
    await expect(page).toHaveURL(/book/); // regular expresssion
}); 