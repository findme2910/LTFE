import express from 'express';
import puppeteer from 'puppeteer';
import { ParsedQs } from 'qs';

const router = express.Router();

router.get('/api/tv-schedule', async (req, res) => {
   const { channel } = req.query as ParsedQs & { channel?: string };
   if (!channel) {
      return res.status(400).send('Channel is required');
   }

   try {
      //Mở trình duyệt không cần giao diện (headless:true)
      const browser = await puppeteer.launch({ args: ['--no-sandbox'],headless: true });
      const page = await browser.newPage();
      await page.goto('https://thanhnien.vn/tien-ich/truyen-hinh.htm', { waitUntil: 'networkidle2' });
      // Chọn channel từ dropdown
      await page.select('select#select_channel', channel);
      // Set thời gian chờ
      await new Promise(resolve => setTimeout(resolve, 2000));
      // Đợi load phần tử channel_canlendar
      await page.waitForSelector('#channel_calender', { timeout: 5000 });
      const tvSchedule = await page.evaluate(() => {
         const channelName = document.querySelector('#channel_name')?.textContent?.trim() || '';
         const date = document.querySelector('#channel_day')?.textContent?.trim() || '';
         const programs = Array.from(document.querySelectorAll('#channel_calender .row')).slice(1).map(row => {
            const time = row.querySelector('.name')?.textContent?.trim() || '';
            const title = row.querySelector('.number')?.textContent?.trim() || '';
            return { time, title };
         });
         return { channelName, date, programs };
      });

      await browser.close();
      res.json(tvSchedule);
   } catch (error) {
      const err = error as Error;
      console.error('Error fetching TV schedule:', err.message);
      res.status(500).send(`Error occurred while fetching TV schedule: ${err.message}`);
   }
});

export default router;
