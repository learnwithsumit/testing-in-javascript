// jest.mock('../js/postToServer.js');

const puppeteer = require('puppeteer');
const {generateResult, validateInput, checkAndGenerate} = require('../js/lib');

// unit test for generateResult()
test("testing generate result function", () => {
    expect(generateResult('1', "This is a test")).toBe("User ID: 1 created an article titled This is a test");
});

// unit test for validateInput()
test("testing validateInput function", () => {
    expect(validateInput(1, true, true)).toBeTruthy();
});

// integration test for checkAndGenerate()
test("testing checkandgenerate function", async () => {
    const result = await checkAndGenerate(1, "Title 1", "This is a test");
    expect(result).toBe("User ID: 1 created an article titled Title 1");
});

//e2e testing for addPost()
// test("checking e2e for addpost", async (done) => {
//     const browser = await puppeteer.launch({
//         headless: false,
//         slowMo: 80,
//         args: ["--window-size=1920,1080"],
//     });
//     const page = await browser.newPage();
//     await page.goto("http://127.0.0.1:5500/");
//     await page.click('input#userid');
//     await page.type('input#userid', "1");
//     await page.click('input#title');
//     await page.type('input#title', "Article 1");
//     await page.click('textarea#article');
//     await page.type('textarea#article', "Article 1 description");
//     await page.click('#addNewPostBtn');
//     //await browser.close();
//     done();
// }, 20000)