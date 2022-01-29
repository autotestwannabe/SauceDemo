import {test, expect} from '@playwright/test';

test('Login to sauce demo', async ({page}) => {
   // aaconst { firefox } = require('playwright');
   // const browser = await firefox.launch();
   // const page = await browser.newPage();
        await page.goto('https://chats.landbot.io/v3/H-1112687-95TUYQNPLDSM8XS5/index.html');
     //page.waitForSelector
     page.locator('"..Welcome.. to the next big thing!"');
     page.locator('"I\'m LaunchBot and..."');
     page.locator('"This Product Launch chatbot template gives you an idea on how YOU could showcase your product"');
     page.locator('"Stoked!"').click();
    //console.log();
    await page.locator('"Let\'s see!"').click();
    await page.locator('text="And what can you do?"').click();
   /**  //await page.click('text=Sing In');
    await page.fill('id=username', 'this.muzaffar@gmail.com');
    await page.fill('id=password', 'qb!Z*sAVfC$h5@w');
    await page.locator('"Login"').click()
    //await page.click('text=Login'); */
    await page.innerText
    //waitForTimeout(3000);
    
});

