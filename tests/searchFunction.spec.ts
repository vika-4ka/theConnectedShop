import { test, expect } from '@playwright/test';
test.use({viewport: {width:1920, height: 1080}});
test.describe('Check search function' , () => {  
test.beforeEach(async ({page})=>{
    await page.goto('https://theconnectedshop.com/');
});
});

test ('Search of existing items', async ({page}) =>{
    //checking search link is available and clickable
    const searchLink = page.locator('#section-header').getByRole('link', { name: 'Search' });
    await expect (searchLink).toBeTruthy();
    await expect(searchLink).toBeVisible();
    await expect(searchLink).toHaveAttribute('href', '/search');
    await searchLink.click();
    const searchInput = await page.locator('input[name="q"]');
    await expect(searchInput).toBeTruthy();
    await expect(searchInput).toBeVisible();
    await expect(searchInput).toHaveAttribute('placeholder', 'Search...');
    await searchInput.fill('Smart locks');
    //to make sure the value has been filled out in serach input line
    await expect(searchInput).toHaveValue('Smark locks');
    
    // await page.getByPlaceholder(searchInput).click();

    // checking search functionality
    await page.locator('#search-input').fill('Smart Locks');
    await page.locator('text=Smart Locks').click();
    await expect(page).toHaveURL("https://theconnectedshop.com/pages/smart-locks");
});
