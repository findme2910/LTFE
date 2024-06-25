import express from 'express';
import puppeteer from 'puppeteer';

const router = express.Router();

router.get('/api/aqi', async (req, res) => {
   try {
      const browser = await puppeteer.launch({ headless: true });
      const page = await browser.newPage();
      await page.goto('https://thanhnien.vn/tien-ich/aqi.htm', { waitUntil: 'networkidle2' });

      const aqiData = await page.evaluate(() => {
         const date = document.querySelector('.uti__section-top .blue')?.textContent?.trim() || '';
         const rows = Array.from(document.querySelectorAll('.table-uti-aqi .row')).slice(1);

         const cities = rows.map(row => {
            const city = row.querySelector('.name')?.textContent?.trim() || '';
            const aqi = row.querySelector('.value span')?.textContent?.trim() || '';
            const aqiClass = row.querySelector('.value span')?.className || '';
            return { city, aqi, aqiClass };
         });

         return { date, cities };
      });

      await browser.close();
      res.json(aqiData);
   } catch (error) {
      console.error('Error fetching AQI data:', error);
      res.status(500).send('Error occurred while fetching AQI data');
   }
});

export default router;
