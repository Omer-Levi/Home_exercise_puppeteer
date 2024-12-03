const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://testsite.getjones.com/ExampleForm/');
    
    await page.type('#name', 'Omer Levi');
    await page.type('#email', 'omer@exemple.com');
    await page.type('#phone', '0501234567');
    await page.type('#company', 'Jones');

    //Selects a value in the select selector
    await page.select('#employees', '51-500');

    await page.screenshot({path: 'automationExample.png'});
    
    await page.click('p > .primary.button');
    await page.waitForSelector('h1'); 
    
    console.log('Sent successfully!');

    await browser.close();
})();