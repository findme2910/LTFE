import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css' // Import Font Awesome
import { format } from 'date-fns' // import date
import { vi } from 'date-fns/locale' // Import ngôn ngữ tiếng Việt
import axios from 'axios'
// cài đặt font awesome npm install @fortawesome/fontawesome-free
// cài đặt thư viện date-fns để lấy ngày tháng npm install date-fns
// cài đặt axios để gọi API thời tiết npm install axios

type CityType = 'Ho Chi Minh' | 'Ha Noi' | 'Da Nang' | 'Hue' | 'Can Tho' | 'Tay Ninh' // Thêm các thành phố khác vào đây nếu cần
const cities = [
   { name: 'Hồ Chí Minh', value: 'Ho Chi Minh' },
   { name: 'Hà Nội', value: 'Ha Noi' },
   { name: 'Đà Nẵng', value: 'Da Nang' },
   { name: 'Huế', value: 'Hue' },
   { name: 'Cần Thơ', value: 'Can Tho' },
   { name: 'Tây Ninh', value: 'Tay Ninh' },
   { name: 'Nha Trang', value: 'Nha Trang' },
   { name: 'Vũng Tàu', value: 'Vung Tau' },
   { name: 'Phan Thiết', value: 'Phan Thiet' },
   { name: 'Buôn Ma Thuột', value: 'Buon Ma Thuot' },
   { name: 'Lâm Đồng', value: 'Lam Dong' },
   { name: 'An Giang', value: 'An Giang' },
   { name: 'Bà Rịa - Vũng Tàu', value: 'Ba Ria - Vung Tau' },
   { name: 'Bắc Giang', value: 'Bac Giang' },
   { name: 'Bắc Kạn', value: 'Bac Kan' },
   { name: 'Bạc Liêu', value: 'Bac Lieu' },
   { name: 'Bắc Ninh', value: 'Bac Ninh' },
   { name: 'Bến Tre', value: 'Ben Tre' },
   { name: 'Bình Định', value: 'Binh Dinh' },
   { name: 'Bình Dương', value: 'Binh Duong' },
   { name: 'Bình Phước', value: 'Binh Phuoc' },
   { name: 'Bình Thuận', value: 'Binh Thuan' },
   { name: 'Cà Mau', value: 'Ca Mau' },
   { name: 'Cao Bằng', value: 'Cao Bang' },
   { name: 'Đắk Lắk', value: 'Dak Lak' },
   { name: 'Đắk Nông', value: 'Dak Nong' },
   { name: 'Điện Biên', value: 'Dien Bien' },
   { name: 'Đồng Nai', value: 'Dong Nai' },
   { name: 'Đồng Tháp', value: 'Dong Thap' },
   { name: 'Gia Lai', value: 'Gia Lai' },
   { name: 'Hà Giang', value: 'Ha Giang' },
   { name: 'Hà Nam', value: 'Ha Nam' },
   { name: 'Hà Tĩnh', value: 'Ha Tinh' },
   { name: 'Hải Dương', value: 'Hai Duong' },
   { name: 'Hải Phòng', value: 'Hai Phong' },
   { name: 'Hậu Giang', value: 'Hau Giang' },
   { name: 'Hòa Bình', value: 'Hoa Binh' },
   { name: 'Hưng Yên', value: 'Hung Yen' },
   { name: 'Khánh Hòa', value: 'Khanh Hoa' },
   { name: 'Kiên Giang', value: 'Kien Giang' },
   { name: 'Kon Tum', value: 'Kon Tum' },
   { name: 'Lai Châu', value: 'Lai Chau' },
   { name: 'Lạng Sơn', value: 'Lang Son' },
   { name: 'Lào Cai', value: 'Lao Cai' },
   { name: 'Long An', value: 'Long An' },
   { name: 'Nam Định', value: 'Nam Dinh' },
   { name: 'Nghệ An', value: 'Nghe An' },
   { name: 'Ninh Bình', value: 'Ninh Binh' },
   { name: 'Ninh Thuận', value: 'Ninh Thuan' },
   { name: 'Phú Thọ', value: 'Phu Tho' },
   { name: 'Phú Yên', value: 'Phu Yen' },
   { name: 'Quảng Bình', value: 'Quang Binh' },
   { name: 'Quảng Nam', value: 'Quang Nam' },
   { name: 'Quảng Ngãi', value: 'Quang Ngai' },
   { name: 'Quảng Ninh', value: 'Quang Ninh' },
   { name: 'Quảng Trị', value: 'Quang Tri' },
   { name: 'Sóc Trăng', value: 'Soc Trang' },
   { name: 'Sơn La', value: 'Son La' },
   { name: 'Tây Ninh', value: 'Tay Ninh' },
   { name: 'Thái Bình', value: 'Thai Binh' },
   { name: 'Thái Nguyên', value: 'Thai Nguyen' },
   { name: 'Thanh Hóa', value: 'Thanh Hoa' },
   { name: 'Thừa Thiên Huế', value: 'Thua Thien Hue' },
   { name: 'Tiền Giang', value: 'Tien Giang' },
   { name: 'Trà Vinh', value: 'Tra Vinh' },
   { name: 'Tuyên Quang', value: 'Tuyen Quang' },
   { name: 'Vĩnh Long', value: 'Vinh Long' },
   { name: 'Vĩnh Phúc', value: 'Vinh Phuc' },
   { name: 'Yên Bái', value: 'Yen Bai' }
]

export default function TopHeader() {
   const currentDate = format(new Date(), 'EEEE, dd/MM/yyyy', { locale: vi }) // Định dạng ngày tháng hiện tại với tiếng Việt
   const [weather, setWeather] = useState({ temp: 29 })
   const [city, setCity] = useState<CityType>('Ho Chi Minh')

   useEffect(() => {
      const fetchWeather = async (city: CityType): Promise<void> => {
         try {
            const apiKey = '3969490f133ac0be1449ae2f365d58cf' // Sử dụng API key của bạn
            const response = await axios.get(
               `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
            )
            const data = response.data
            setWeather({
               temp: data.main.temp
            })
         } catch (error) {
            console.error('Error fetching weather data:', error)
         }
      }

      fetchWeather(city)
   }, [city])

   return (
      <div className='py-2 px-8 flex justify-between items-center bg-secondary fixed top-0 left-0 right-0 z-50'>
         <div className='flex space-x-2 text-sm '>
            <span>{currentDate}</span>
            <span>|</span>
            <span>
               <select
                  className='bg-transparent border-none outline-none'
                  value={city}
                  onChange={(e) => setCity(e.target.value as CityType)}
               >
                  {cities.map((city) => (
                     <option className='bg-primary-foreground' key={city.value} value={city.value}>
                        {city.name}
                     </option>
                  ))}
               </select>
            </span>

            <div className='flex items-center gap-x-1'>
               {weather.temp}°C{' '}
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-5'
               >
                  <path
                     strokeLinecap='round'
                     strokeLinejoin='round'
                     d='M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z'
                  />
               </svg>
            </div>
            <span>|</span>
            <Link to='/ban-can-biet' className='hover:text-primaryColor'>
               Bạn cần biết
            </Link>
            <span>|</span>
            <Link to='/tien-ich' className='hover:text-primaryColor'>
               Tiện ích
            </Link>
            <span>|</span>
            <Link to='/lien-he' className='hover:text-primaryColor'>
               Liên hệ
            </Link>
         </div>
         <div className='flex space-x-3  mr-[100px]'>
            <span>Theo dõi báo trên</span>
            <a
               href='https://www.youtube.com/channel/UCIW9cGgoRuGJnky3K3tbzNg'
               target='_blank'
               rel='noopener noreferrer'
               className='hover:text-red-600'
            >
               <i className='fab fa-youtube'></i>
            </a>
            <a
               href='https://www.facebook.com/thanhnien'
               target='_blank'
               rel='noopener noreferrer'
               className='hover:text-primaryColor'
            >
               <i className='fab fa-facebook'></i>
            </a>
            <a
               href='https://www.tiktok.com/@baothanhnien.official'
               target='_blank'
               rel='noopener noreferrer'
               className='hover:text-black'
            >
               <i className='fab fa-tiktok'></i>
            </a>
         </div>
      </div>
   )
}
