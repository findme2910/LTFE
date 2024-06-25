"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const puppeteer_1 = __importDefault(require("puppeteer")); // puppeteer dùng để chạy các html động
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 5000;
app.use((0, cors_1.default)());
// lịch phim truyền hình
app.get('/api/tv-schedule', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { channel } = req.query;
    if (!channel) {
        return res.status(400).send('Channel is required');
    }
    try {
        // Mở trình duyệt không giao diện
        const browser = yield puppeteer_1.default.launch({ headless: true });
        // Mở trang
        const page = yield browser.newPage();
        yield page.goto('https://thanhnien.vn/tien-ich/truyen-hinh.htm', { waitUntil: 'networkidle2' });
        // Log để kiểm tra xem Puppeteer có truy cập đúng trang không
        console.log('Page loaded');
        // Chọn channel từ dropdown
        yield page.select('select#select_channel', channel);
        // Chờ một khoảng thời gian để trang tải lại
        yield new Promise(resolve => setTimeout(resolve, 2000));
        //đợi page load
        yield page.waitForSelector('#channel_calender', { timeout: 5000 });
        const tvSchedule = yield page.evaluate(() => {
            var _a, _b, _c, _d;
            const channelName = ((_b = (_a = document.querySelector('#channel_name')) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim()) || '';
            const date = ((_d = (_c = document.querySelector('#channel_day')) === null || _c === void 0 ? void 0 : _c.textContent) === null || _d === void 0 ? void 0 : _d.trim()) || '';
            const programs = Array.from(document.querySelectorAll('#channel_calender .row')).slice(1).map(row => {
                var _a, _b, _c, _d;
                const time = ((_b = (_a = row.querySelector('.name')) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim()) || '';
                const title = ((_d = (_c = row.querySelector('.number')) === null || _c === void 0 ? void 0 : _c.textContent) === null || _d === void 0 ? void 0 : _d.trim()) || '';
                return { time, title };
            });
            return { channelName, date, programs };
        });
        yield browser.close();
        console.log('TV Schedule:', tvSchedule); // Log the whole schedule
        res.json(tvSchedule);
    }
    catch (error) {
        // Khai báo kiểu của error hoặc ép kiểu
        const err = error;
        console.error('Error fetching TV schedule:', err.message);
        res.status(500).send(`Error occurred while fetching TV schedule: ${err.message}`);
    }
}));
// Lịch chiếu phim
app.get('/api/movie-schedule', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { city, cinema } = req.query;
    if (!city || !cinema) {
        return res.status(400).send('City and Cinema are required');
    }
    try {
        const browser = yield puppeteer_1.default.launch({ headless: true });
        const page = yield browser.newPage();
        yield page.goto('https://thanhnien.vn/tien-ich/lich-chieu-phim.htm', { waitUntil: 'networkidle2' });
        yield page.select('select#city__cinema', city);
        yield new Promise(resolve => setTimeout(resolve, 1000)); // Chờ trang tải lại
        // Chọn lại cinema
        yield page.select('select#film__cinema', cinema);
        yield new Promise(resolve => setTimeout(resolve, 1000)); // Chờ trang tải lại
        // Chờ cho uti__section hiện
        // await page.waitForSelector('.uti__section-middle', { timeout: 1000 });
        const movieSchedule = yield page.evaluate(() => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            // Lấy phần tử có lớp box-uti-lp đang hiển thị
            const visibleSection = Array.from(document.querySelectorAll('.box-uti-lp')).find(section => {
                return window.getComputedStyle(section).display !== 'none';
            });
            // Nếu không có phần tử nào được hiển thị thì ném lỗi
            if (!visibleSection) {
                throw new Error('No visible sections found');
            }
            // Lấy tên rạp chiếu và ngày chiếu từ phần tử hiển thị đầu tiên
            const theaterName = ((_b = (_a = visibleSection.querySelector('.table-title')) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim()) || '';
            const cinemaDate = ((_d = (_c = document.querySelector('#cinema__date')) === null || _c === void 0 ? void 0 : _c.textContent) === null || _d === void 0 ? void 0 : _d.trim()) || '';
            const movies = [];
            // Lấy danh sách phim và thời gian chiếu từ phần tử hiển thị đầu tiên
            const rows = Array.from(visibleSection.querySelectorAll('.table-uti-lichphim .row')).slice(1);
            for (const row of rows) {
                const name = ((_f = (_e = row.querySelector('.name')) === null || _e === void 0 ? void 0 : _e.textContent) === null || _f === void 0 ? void 0 : _f.trim()) || '';
                if (name.toLowerCase() === 'tên phim')
                    break; // Dừng lại khi gặp 'Tên phim'
                const times = ((_h = (_g = row.querySelector('.time')) === null || _g === void 0 ? void 0 : _g.textContent) === null || _h === void 0 ? void 0 : _h.trim().split(' ')) || [];
                const type = ((_k = (_j = row.querySelector('.type')) === null || _j === void 0 ? void 0 : _j.textContent) === null || _k === void 0 ? void 0 : _k.trim()) || '';
                movies.push({ name, times, type });
            }
            return { theaterName, cinemaDate, movies };
        });
        // Đóng trình duyệt
        yield browser.close();
        console.log('Movie Schedule:', movieSchedule);
        res.json(movieSchedule);
    }
    catch (error) {
        const err = error;
        console.error('Error fetching movie schedule:', err.message);
        res.status(500).send(`Error occurred while fetching movie schedule: ${err.message}`);
    }
}));
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
