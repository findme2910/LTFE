import express from 'express';
import puppeteer from 'puppeteer'; // puppeteer dùng để chạy các html động
import cors from 'cors';
import { ParsedQs } from 'qs';

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/tv-schedule', async (req, res) => {
   const { channel } = req.query as ParsedQs & { channel?: string };
   if (!channel) {
      return res.status(400).send('Channel is required');
   }

   try {
      // Mở trình duyệt không giao diện
      const browser = await puppeteer.launch({ headless: true });
      // Mở trang
      const page = await browser.newPage();
      await page.goto('https://thanhnien.vn/tien-ich/truyen-hinh.htm', { waitUntil: 'networkidle2' });
      // Log để kiểm tra xem Puppeteer có truy cập đúng trang không
      console.log('Page loaded');
      // Chọn channel từ dropdown
      await page.select('select#select_channel', channel);
      // Chờ một khoảng thời gian để trang tải lại
      await new Promise(resolve => setTimeout(resolve, 2000));
      //đợi page load
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

      console.log('TV Schedule:', tvSchedule); // Log the whole schedule
      res.json(tvSchedule);
   } catch (error) {
      // Khai báo kiểu của error hoặc ép kiểu
      const err = error as Error;
      console.error('Error fetching TV schedule:', err.message);
      res.status(500).send(`Error occurred while fetching TV schedule: ${err.message}`);
   }
});

app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});
