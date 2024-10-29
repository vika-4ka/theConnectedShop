import { test, expect } from '@playwright/test';
import exp from 'constants';
test.use({viewport: {width:1920, height: 1080}});
test.describe('Check homepage elements' , () => {  
test.beforeEach(async ({page})=>{
    await page.goto('https://theconnectedshop.com/');
})

test ('Validation of opening the website and title', async ({page}) =>{
    await expect(page).toHaveTitle("The Connected Shop - Smart Locks, Smart Sensors, Smart Home & Office");
    await expect(page).toHaveURL("https://theconnectedshop.com/")
})

test('Check logo elements', async ({page}) =>{
    const primaryLogo = page.locator('.Header__LogoImage--primary');
    await expect(primaryLogo).toBeVisible();
    await expect(primaryLogo).toBeTruthy();
    await expect(primaryLogo).toHaveAttribute('src', '//theconnectedshop.com/cdn/shop/files/The_Connected_Shop_250x.png?v=1705959137');
    await expect(primaryLogo).toHaveAttribute('alt', 'The Connected Shop Logo');
    await expect(primaryLogo).toHaveAttribute('width','250');
    await expect(primaryLogo).toHaveAttribute('height', '75px');

    // Check transparent header logo
    const transparentLogo = page.locator('.Header__LogoImage--transparent');
    await expect(transparentLogo).toBeVisible();
    await expect(transparentLogo).toBeTruthy();
    await expect(transparentLogo).toHaveAttribute('src', '//theconnectedshop.com/cdn/shop/files/The_Connected_Shop_logo_250x.png?v=1705959163');
    await expect(transparentLogo).toHaveAttribute('width', '250');
    await expect(transparentLogo).toHaveAttribute('height', '75px');

})

test('Check main navigation area', async({page})=>{
    const mainNav = page.locator('nav.Header__MainNav');
    await expect(mainNav).toBeVisible();
    const navigationLinks = [
        { selector: 'a[href="/"].Heading.u-h6', text: 'Home' },
        { selector: 'a[href="/collections/new-in"]', text: 'New In' },
        { selector: 'a[href="/pages/products"]', text: 'Collections' },
        { selector: 'a[href="/pages/personal"]', text: 'Personal' },
        { selector: 'a[href="/pages/businesses"]', text: 'Businesses' },
        { selector: 'a[href="/blogs/tech-talk"]', text: 'Tech Talk' },
        { selector: 'a[href="/pages/about-us"]', text: 'About us' },
        { selector: 'a[href="/pages/faqs"]', text: 'FAQ' },
        { selector: 'a[href="/pages/contact-us"]', text: 'Contact' }
      ];
  
      for (const link of navigationLinks) {
        const element = page.locator(link.selector).first();
        await expect(element).toBeTruthy();
        // await expect(element).toBeVisible({timeout:5000});
        await expect(element).toContainText(link.text);
       
        
      
      }

// test('Check collection dropdown', async ({page})=>{
//     const collectionHeader = page.locator('.HoruzontalList_Item').hover();
//     const navigationCollectionLinks = [
//         { selector: 'a[href="/collections/smart-door-locks"]', text: 'Smart Locks'},
//         { selector: 'a[href="/collections/smart-locks"]', text: 'Smart Door Locks'},
//         { selector: 'a[href="/collections/smart-sensors"]', text: 'Smart Sensors'},
//         { selector: 'a[href="/collections/camera-monitors"]', text: 'Camera Monitors'},
//         { selector: 'a[href="/collections/cleaning-robots"]', text: 'Smart Robots'},
//         { selector: 'a[href="/collections/smart-wallets"]', text: 'Smart Wallets'},
//         { selector: 'a[href="/collections/car-dash-cams"]', text: 'Car Dash Cams'},
//       ];
  
//       for (const link of navigationCollectionLinks) {
//         const elementColection = page.locator(link.selector);
//         // await expect(element).toBeVisible();
//         // await expect(element).toHaveText(link.text);
//         await expect(elementColection).toBeVisible();
        
      
//       }

// })
})




})
