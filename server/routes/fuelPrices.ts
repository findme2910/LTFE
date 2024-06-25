import express from 'express';
import puppeteer from 'puppeteer';

const router = express.Router();

router.get('/api/fuel-prices', async (req, res) => {
   try {
      const browser = await puppeteer.launch({args: ['--no-sandbox'], headless: true });
      const page = await browser.newPage();
      await page.goto('https://thanhnien.vn/tien-ich/xang-dau.htm', { waitUntil: 'networkidle2' });

      const fuelPrices = await page.evaluate(() => {
         const date = document.querySelector('.uti__section-top .blue')?.textContent?.trim() || '';
         const source = document.querySelector('.top-right')?.textContent?.trim().replace('Nguồn: ', '') || '';
         const rows = Array.from(document.querySelectorAll('.table-uti-xangdau .row')).slice(1);

         const prices = rows.map(row => {
            const type = row.querySelector('.name')?.textContent?.trim() || '';
            const unit = row.querySelector('.col')?.textContent?.trim() || '';
            const price1 = row.querySelector('.col:nth-child(3)')?.textContent?.trim() || '';
            const price2 = row.querySelector('.last')?.textContent?.trim() || '';
            return { type, unit, price1, price2 };
         });

         return { date, source, prices };
      });

      await browser.close();

      res.json(fuelPrices);
   } catch (error) {
      console.error('Error fetching fuel prices:', error);
      res.status(500).send('Error occurred while fetching fuel prices');
   }
});

export default router;
