import {test, expect} from "@playwright/test"

// test is used for each test cases.
// expect is used for assertions/validations.
/* 

//simple syntax of writing our test is 

SYNTAX:

test("title for test", async () =>{
    //step1
    //step2
    //step3
}) ;

 */

//fixture - it acts as global variable  examples.- page, browser
// default fixture is page.


// test case: verify title of Google.com
test("Verify Page Title ", async( {page} )=>{
    await page.goto("https://www.google.com/");
    
    let title :string = await page.title();

    console.log("actual title is:", title);
    
    await expect(page).toHaveTitle("Google");
    
    // as soon as you launch webpaege of URL, validate title of page
    //so for validations/assertions- ues expect()
    // for one test(), use only one expect(). // best practice 

});