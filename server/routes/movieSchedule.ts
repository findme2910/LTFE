import express from 'express';
import puppeteer from 'puppeteer';
import { ParsedQs } from 'qs';

const router = express.Router();

router.get('/api/movie-schedule', async (req, res) => {
   const { city, cinema } = req.query as ParsedQs & { city?: string, cinema?: string };

   if (!city || !cinema) {
      return res.status(400).send('City and Cinema are required');
   }

   try {
      const browser = await puppeteer.launch({ args: ['--no-sandbox'],headless: true });
      const page = await browser.newPage();
      await page.goto('https://thanhnien.vn/tien-ich/lich-chieu-phim.htm', { waitUntil: 'networkidle2' });
      await page.select('select#city__cinema', city);
      await new Promise(resolve => setTimeout(resolve, 500)); // chờ tải
      //Chọn cinema
      await page.select('select#film__cinema', cinema);
      await new Promise(resolve => setTimeout(resolve, 500)); // chờ tải

      const movieSchedule = await page.evaluate(() => {
         //lấy phần tử có lớp box-uti-lp đang hiển thị trên màn hình
         const visibleSection = Array.from(document.querySelectorAll('.box-uti-lp')).find(section => {
            return window.getComputedStyle(section).display !== 'none';
         });
         // không có phần tử nào thì ném lỗi
         if (!visibleSection) {
            throw new Error('No visible sections found');
         }
         //lấy thông tin rạp chiếu từ phần tử
         const theaterName = visibleSection.querySelector('.table-title')?.textContent?.trim() || '';
         const cinemaDate = document.querySelector('#cinema__date')?.textContent?.trim() || '';
         const movies = [];

         const rows = Array.from(visibleSection.querySelectorAll('.table-uti-lichphim .row')).slice(1);

         for (const row of rows) {
            const name = row.querySelector('.name')?.textContent?.trim() || '';
            if (name.toLowerCase() === 'tên phim') break;

            const times = row.querySelector('.time')?.textContent?.trim().split(' ') || [];
            const type = row.querySelector('.type')?.textContent?.trim() || '';
            movies.push({ name, times, type });
         }
         return { theaterName, cinemaDate, movies };
      });
      //Đóng trình duyệt
      await browser.close();
      res.json(movieSchedule);
   } catch (error) {
      const err = error as Error;
      console.error('Error fetching movie schedule:', err.message);
      res.status(500).send(`Error occurred while fetching movie schedule: ${err.message}`);
   }
});

export default router;
