import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome
import { format } from 'date-fns'; // import date
import { vi } from 'date-fns/locale'; // Import ngôn ngữ tiếng Việt
import axios from 'axios';

// cài đặt font awesome npm install @fortawesome/fontawesome-free
// cài đặt thư viện date-fns để lấy ngày tháng npm install date-fns
// cài đặt axios để gọi API thời tiết npm install axios

type CityType = 'Ho Chi Minh' | 'Ha Noi' | 'Da Nang' | 'Hue' | 'Can Tho' | 'Tay Ninh'; // Thêm các thành phố khác vào đây nếu cần

export default function TopHeader() {
   const currentDate = format(new Date(), 'EEEE, dd/MM/yyyy', { locale: vi }); // Định dạng ngày tháng hiện tại với tiếng Việt
   const [weather, setWeather] = useState({ temp: 29});
   const [city, setCity] = useState<CityType>('Ho Chi Minh');

   const cities = [
      { name: 'Hồ Chí Minh', value: 'Ho Chi Minh' },
      { name: 'Hà Nội', value: 'Ha Noi' },
      { name: 'Đà Nẵng', value: 'Da Nang' },
      { name: 'Huế', value: 'Hue'},
      { name: 'Cần Thơ', value: 'Can Tho'},
      { name: 'Tây Ninh', value: 'Tay Ninh'},
      // Thêm các tỉnh thành khác vào đây
   ];

   useEffect(() => {
      const fetchWeather = async (city: CityType): Promise<void> => {
         try {
            const apiKey = '3969490f133ac0be1449ae2f365d58cf'; // Sử dụng API key của bạn
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
            const data = response.data;
            setWeather({
               temp: data.main.temp,
            });
         } catch (error) {
            console.error('Error fetching weather data:', error);
         }
      };

      fetchWeather(city);
   }, [city]);

   return (
      <div className="bg-gray-100 py-2 px-8 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
         <div className="flex space-x-2 text-sm text-gray-600">
            <span>{currentDate}</span>
            <span>|</span>
            <span>
                    <select
                       className="text-gray-600 bg-transparent border-none"
                       value={city}
                       onChange={(e) => setCity(e.target.value as CityType)}
                    >
                        {cities.map((city) => (
                           <option key={city.value} value={city.value}>
                              {city.name}
                           </option>
                        ))}
                    </select>
                </span>

            <span>
                    {weather.temp}°C <i className="fa-regular fa-sun text-red-900"></i>
                </span>
            <span>|</span>
            <Link to="/ban-can-biet" className="hover:text-blue-600">Bạn cần biết</Link>
            <span>|</span>
            <Link to="/tien-ich" className="hover:text-blue-600">Tiện ích</Link>
            <span>|</span>
            <Link to="/lien-he" className="hover:text-blue-600">Liên hệ</Link>
         </div>
         <div className="flex space-x-3 text-gray-600 mr-[100px]">
            <span>Theo dõi báo trên</span>
            <a href="https://www.youtube.com/channel/UCIW9cGgoRuGJnky3K3tbzNg" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
               <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.facebook.com/thanhnien" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
               <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.tiktok.com/@baothanhnien.official" target="_blank" rel="noopener noreferrer" className="hover:text-black">
               <i className="fab fa-tiktok"></i>
            </a>
         </div>
      </div>
   );
}
