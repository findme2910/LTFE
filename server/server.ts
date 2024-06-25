import express from 'express';
import puppeteer from 'puppeteer'; // puppeteer dùng để chạy các html động
import cors from 'cors';
import { ParsedQs } from 'qs';

const app = express();
const PORT = 5000;

app.use(cors());
// lịch phim truyền hình
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
// Lịch chiếu phim
app.get('/api/movie-schedule', async (req, res) => {
   const { city, cinema } = req.query as ParsedQs & { city?: string, cinema?: string };

   if (!city || !cinema) {
      return res.status(400).send('City and Cinema are required');
   }

   try {
      const browser = await puppeteer.launch({ headless: true });
      const page = await browser.newPage();
      await page.goto('https://thanhnien.vn/tien-ich/lich-chieu-phim.htm', { waitUntil: 'networkidle2' });
      await page.select('select#city__cinema', city);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Chờ trang tải lại
      // Chọn lại cinema
      await page.select('select#film__cinema', cinema);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Chờ trang tải lại
      // Chờ cho uti__section hiện
      // await page.waitForSelector('.uti__section-middle', { timeout: 1000 });

      const movieSchedule = await page.evaluate(() => {
         // Lấy phần tử có lớp box-uti-lp đang hiển thị
         const visibleSection = Array.from(document.querySelectorAll('.box-uti-lp')).find(section => {
            return window.getComputedStyle(section).display !== 'none';
         });

         // Nếu không có phần tử nào được hiển thị thì ném lỗi
         if (!visibleSection) {
            throw new Error('No visible sections found');
         }

         // Lấy tên rạp chiếu và ngày chiếu từ phần tử hiển thị đầu tiên
         const theaterName = visibleSection.querySelector('.table-title')?.textContent?.trim() || '';
         const cinemaDate = document.querySelector('#cinema__date')?.textContent?.trim() || '';
         const movies = [];

         // Lấy danh sách phim và thời gian chiếu từ phần tử hiển thị đầu tiên
         const rows = Array.from(visibleSection.querySelectorAll('.table-uti-lichphim .row')).slice(1);

         for (const row of rows) {
            const name = row.querySelector('.name')?.textContent?.trim() || '';
            if (name.toLowerCase() === 'tên phim') break; // Dừng lại khi gặp 'Tên phim'

            const times = row.querySelector('.time')?.textContent?.trim().split(' ') || [];
            const type = row.querySelector('.type')?.textContent?.trim() || '';
            movies.push({ name, times, type });
         }

         return { theaterName, cinemaDate, movies };
      });
      // Đóng trình duyệt
      await browser.close();
      console.log('Movie Schedule:', movieSchedule);
      res.json(movieSchedule);
   } catch (error) {
      const err = error as Error;
      console.error('Error fetching movie schedule:', err.message);
      res.status(500).send(`Error occurred while fetching movie schedule: ${err.message}`);
   }
});
app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});
