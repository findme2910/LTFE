import { Helmet } from 'react-helmet'
import ExchangeRates from '@/components/TienIch/ExchangeRate.tsx'
import GoldPrices from '@/components/TienIch/GoldPrices.tsx'


const Navigation = () => {
   return (
      <nav className="bg-gray-200 p-4">
         <ul className="flex space-x-4">
            {/*<li><a href="#weather" className="text-blue-500">Thời tiết</a></li>*/}
            <li><a href="#exchange-rate">Tỷ giá ngoại tệ</a></li>
            <li><a href="#gold-price">Giá vàng</a></li>
            <li><a href="#lottery-results">Kết quả xổ số</a></li>
            <li><a href="#stock-market">Chứng khoán</a></li>
            <li><a href="#tv-schedule">Lịch truyền hình</a></li>
            <li><a href="#movie-schedule">Lịch chiếu phim</a></li>
            <li><a href="#gas-price">Giá xăng dầu</a></li>
            <li><a href="#aqi">AQI</a></li>
         </ul>
      </nav>
   );
};
export default function TienIch() {
   return (
      <>
         <Helmet>
            <title>Tiện ích |  Báo Thanh Niên</title>
            <meta name="keywords" content="Tin tức thời sự nhanh 24h, tin nóng nhất Việt Nam, pháp luật, xã hội, đời sống, chính trị, kinh doanh, kinh tế, công nghệ thông tin, game, giới trẻ, văn hóa, giáo dục, thể thao. Video clip, hình ảnh tin độc quyền, tin nóng trên mạng xã hội được cập nhật mới và nhanh nhất trong ngày"/>
         </Helmet>
         <h1 className='text-3xl font-bold pb-2 mb-6 border-b-2 border-b-primaryColor flex items-center justify-between'>
            Tiện Ích
         </h1>
         <Navigation/>
         <ExchangeRates/>
         <GoldPrices/>
      </>
   )
}
