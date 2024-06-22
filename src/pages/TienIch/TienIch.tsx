import { ListArticle } from '@/components/ListArticle'
import { Helmet } from 'react-helmet'

export const Navigation = () => {
   return (
      <nav className='bg-gray-200 p-4'>
         <ul className='flex space-x-4'>
            <li>
               <a href='#weather' className='text-primaryColor'>
                  Thời tiết
               </a>
            </li>
            <li>
               <a href='#exchange-rate'>Tỷ giá ngoại tệ</a>
            </li>
            <li>
               <a href='#gold-price'>Giá vàng</a>
            </li>
            <li>
               <a href='#lottery-results'>Kết quả xổ số</a>
            </li>
            <li>
               <a href='#stock-market'>Chứng khoán</a>
            </li>
            <li>
               <a href='#tv-schedule'>Lịch truyền hình</a>
            </li>
            <li>
               <a href='#movie-schedule'>Lịch chiếu phim</a>
            </li>
            <li>
               <a href='#gas-price'>Giá xăng dầu</a>
            </li>
            <li>
               <a href='#aqi'>AQI</a>
            </li>
         </ul>
      </nav>
   )
}

// export const WeatherWidget = () => {
//    const [weather, setWeather] = useState(null);
//    const [forecast, setForecast] = useState([]);
//    const [city, setCity] = useState('Da Nang');
//
//    useEffect(() => {
//       fetchWeather();
//    }, [city]);
//
//    const fetchWeather = async () => {
//       try {
//          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`);
//          const data = await response.json();
//          setWeather(data);
//
//          const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=YOUR_API_KEY&units=metric`);
//          const forecastData = await forecastResponse.json();
//          setForecast(forecastData.list.slice(0, 7)); // Lấy 7 ngày dự báo
//       } catch (error) {
//          console.error('Error fetching weather data:', error);
//       }
//    };
//
//    const handleCityChange = (event) => {
//       setCity(event.target.value);
//    };
//
//    return (
//       <div id="weather" className="p-4">
//          <div className="mb-4">
//             <select onChange={handleCityChange} value={city} className="p-2 border rounded">
//                <option value="Da Nang">Đà Nẵng</option>
//                <option value="Hanoi">Hà Nội</option>
//                <option value="Ho Chi Minh City">TP. Hồ Chí Minh</option>
//                {/* Thêm các thành phố khác nếu cần */}
//             </select>
//          </div>
//          {weather && (
//             <div className="bg-white p-4 rounded shadow">
//                <h2 className="text-3xl font-bold">{weather.main.temp}°C</h2>
//                <p>Thứ bảy, 22/06/2024</p>
//                <p>{weather.weather[0].description}</p>
//                <p>Nhiệt độ: {weather.main.temp_min}° - {weather.main.temp_max}°</p>
//                <p>Độ ẩm: {weather.main.humidity}%</p>
//             </div>
//          )}
//          <div className="mt-4">
//             <h3 className="text-xl font-semibold">Dự báo thời tiết 7 ngày tới</h3>
//             <div className="grid grid-cols-7 gap-2">
//                {forecast.map((day, index) => (
//                   <div key={index} className="bg-white p-2 rounded shadow text-center">
//                      <p>{new Date(day.dt * 1000).toLocaleDateString()}</p>
//                      <p>{day.main.temp_min}° - {day.main.temp_max}°</p>
//                      <p>{day.weather[0].description}</p>
//                   </div>
//                ))}
//             </div>
//          </div>
//       </div>
//    );
// };

export default function ThoiTrangTre() {
   return (
      <>
         <Helmet>
            <title>Thời trang trẻ - Bộ sưu tập, xu hướng, phong cách giới trẻ</title>
            <meta
               name='description'
               content='Báo thời trang trẻ, xu hướng thời trang mới của giới trẻ hiện đại. Phong cách thời trang đa dạng, phong phú, phù hợp phong cách giới trẻ hiện nay.'
            />
         </Helmet>
         <ListArticle url='thoi-trang-tre' title={'Thời Trang Trẻ'} />
      </>
   )
}
