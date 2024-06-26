import { ModeToggle } from '@/components/mode-toggle'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Tippy from '@tippyjs/react'
import 'tippy.js/animations/perspective-extreme.css'
import { useEffect, useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css' // Import Font Awesome
import { format } from 'date-fns' // import date
import { vi } from 'date-fns/locale' // Import ngôn ngữ tiếng Việt
import axios from 'axios'
import { Input } from '@/components/ui/input'
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
const menu = [
   {
      title: 'Thời sự',
      url: '/thoi-su'
   },
   {
      title: 'Chào ngày mới',
      url: '/chao-ngay-moi'
   },
   {
      title: 'Thế giới',
      url: '/the-gioi'
   },
   {
      title: 'Kinh tế',
      url: '/kinh-te'
   },
   {
      title: 'Đời sống',
      url: '/doi-song'
   },
   {
      title: 'Sức khỏe',
      url: '/suc-khoe'
   },
   {
      title: 'Giới trẻ',
      url: '/gioi-tre'
   },
   {
      title: 'Tiêu dùng thông minh',
      url: '/tieu-dung-thong-minh'
   },
   {
      title: 'Giáo dục',
      url: '/giao-duc'
   },
   {
      title: 'Du lịch',
      url: '/du-lich'
   },
   {
      title: 'Văn hóa',
      url: '/van-hoa'
   },
   {
      title: 'Giải trí',
      url: '/giai-tri'
   },
   {
      title: 'Thể thao',
      url: '/the-thao'
   },
   {
      title: 'Công nghệ - Game',
      url: '/cong-nghe-game'
   },
   {
      title: 'Xe',
      url: '/xe'
   },
   {
      title: 'Thời trang trẻ',
      url: '/thoi-trang-tre'
   },
   {
      title: 'Bạn đọc',
      url: '/ban-doc'
   },
   {
      title: 'Rao vặt',
      url: '/rao-vat'
   },
   {
      title: 'Video',
      url: '/video'
   },
   {
      title: 'Diễn đàn',
      url: '/dien-dan'
   },
   {
      title: 'Podcast',
      url: '/podcast'
   },
   {
      title: 'Nhật ký Tết Việt',
      url: '/nhat-ky-tet-viet'
   },
   {
      title: 'Magazine',
      url: '/magazine'
   },
   {
      title: 'Cùng con đi tiếp cuộc đời',
      url: '/cung-con-di-tiep-cuoc-doi'
   },
   {
      title: 'Bạn cần biết',
      url: '/ban-can-biet'
   },
   {
      title: 'Cải chính',
      url: '/cai-chinh'
   },
   {
      title: 'Blog phóng viên',
      url: '/blog-phong-vien'
   },
   {
      title: 'Tôi viết',
      url: '/toi-viet'
   },
   {
      title: 'Việc làm',
      url: '/viec-lam'
   },
   {
      title: 'TNO',
      url: '/tno'
   },
   {
      title: 'Tin 24h',
      url: '/tin-24h'
   },
   {
      title: 'Tin thị trường',
      url: '/thi-truong'
   },
   {
      title: 'Tin nhanh 360',
      url: '/tin-nhanh-360'
   }
]

export default function Header() {
   const [openCategory, setOpenCategory] = useState<boolean>(false)
   const [openCategoryMobile, setOpenCategoryMobile] = useState<boolean>(false)
   const [openMenuMobile, setOpenMenuMobile] = useState<boolean>(false)
   const [searchQuery, setSearchQuery] = useState<string>('')
   const currentDate = format(new Date(), 'EEEE, dd/MM/yyyy', { locale: vi }) // Định dạng ngày tháng hiện tại với tiếng Việt
   const [weather, setWeather] = useState({ temp: 29 })
   const [city, setCity] = useState<CityType>('Ho Chi Minh')
   const navigate = useNavigate()
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
   const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
     setOpenMenuMobile(false)
      navigate(`/search?query=${searchQuery}`)
   }

   useEffect(()=>{
      if(openMenuMobile){
         document.body.classList.add('hide-scroll')
      }else{
         document.body.classList.remove('hide-scroll')
      }
   },[openMenuMobile])

   return (
      <>
      <div className='py-2 px-8 bg-secondary fixed top-0 left-0 right-0 z-50 lg:block hidden'>
         <div className='flex justify-between items-center container'>
         <div className='flex space-x-2'>
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
             <NavLink
                  className={({ isActive }) =>
                     isActive ? 'text-primaryColor font-medium' : 'hover:text-primaryColor transition-all'
                  }
                  to='/ban-can-biet'
               >
                   Bạn cần biết
               </NavLink>
      
            <span>|</span>
           
             <NavLink
                  className={({ isActive }) =>
                     isActive ? 'text-primaryColor font-medium' : 'hover:text-primaryColor transition-all'
                  }
                  to='/tien-ich'
               >
                   Tiện ích
               </NavLink>
            <span>|</span>
             <NavLink
                  className={({ isActive }) =>
                     isActive ? 'text-primaryColor font-medium' : 'hover:text-primaryColor transition-all'
                  }
                  to='/lien-he'
               >
                   Liên hệ
               </NavLink>
            
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
       
      </div>
      <header className='py-2 lg:block hidden font-medium border-b border-b-gray-300 bg-primary-foreground fixed z-50 inset-x-0 top-0 mt-[37px]'>
         <div className='flex container items-center justify-between'>
            <Link to={'/'}>
               <img
                  src='https://static.thanhnien.com.vn/thanhnien.vn/image/logo.svg'
                  alt='logo'
                  className='w-28 aspect-[3.5]'
               />
            </Link>

            <div className='flex items-center gap-x-5'>
               <NavLink
                  className={({ isActive }) =>
                     isActive ? 'text-primaryColor font-medium' : 'hover:text-primaryColor transition-all'
                  }
                  to={'/'}
               >
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className={`w-5 h-5`}>
                     <path d='M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z' />
                     <path d='m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z' />
                  </svg>
               </NavLink>
               <Tippy
                  animation={'perspective-extreme'}
                  onClickOutside={() => setOpenCategory(false)}
                  visible={openCategory}
                  content={
                     <div className='bg-primary-foreground grid grid-cols-4 gap-2 p-3 rounded shadow-2xl'>
                        {menu.map((item) => (
                           <NavLink
                              className={({ isActive }) =>
                                 isActive ? 'text-primaryColor font-medium' : 'hover:text-primaryColor transition-all'
                              }
                              onClick={() => setOpenCategory(false)}
                              key={item.url}
                              to={item.url}
                           >
                              {item.title}
                           </NavLink>
                        ))}
                     </div>
                  }
                  interactive={true}
                  arrow={false}
                  offset={[0, 0]}
                  placement={'bottom-start'}
                  maxWidth={'auto'}
               >
                  <button
                     className='flex items-center gap-x-1 hover:text-primaryColor transition-all'
                     onClick={() => setOpenCategory((prev) => !prev)}
                  >
                     Danh mục{' '}
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={2}
                        stroke='currentColor'
                        className={`size-5 ${openCategory ? 'rotate-180' : ''} transition-all`}
                     >
                        <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                     </svg>
                  </button>
               </Tippy>

               <form onSubmit={handleSearch} className='flex items-center border rounded'>
                  <Input
                     type='search'
                     className='p-2 rounded-l outline-none border-none'
                     placeholder='Tìm kiếm...'
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button type='submit' className='bg-primaryColor p-2 whitespace-nowrap rounded-r text-white'>
                     Tìm kiếm
                  </button>
               </form>
               <ModeToggle />
               <Link to={'/history'}>
                  <svg
                     data-v-c3ad5561='true'
                     data-v-eb07a472='true'
                     xmlns='http://www.w3.org/2000/svg'
                     xmlnsXlink='http://www.w3.org/1999/xlink'
                     aria-hidden='true'
                     role='img'
                     className='icon text-blue-500'
                     width='30px'
                     height='30px'
                     viewBox='0 0 24 24'
                  >
                     <path
                        fill='currentColor'
                        d='M13 3a9 9 0 0 0-9 9H1l3.89 3.89l.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.25 2.52l.77-1.28l-3.52-2.09V8z'
                     />
                  </svg>
               </Link>
               {/* <Button><NavLink to={'/loign'}>Đăng nhập</NavLink></Button> */}
            </div>
         </div>
      </header>
      {/* header mobile */}
      <header className='py-2 lg:hidden font-medium border-b border-b-gray-300 bg-primary-foreground fixed z-50 inset-x-0 top-0'>
            <div className='container flex items-center justify-between'>
               <button onClick={()=>setOpenMenuMobile(true)}>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

               </button>
               <Link to={'/'}>
               <img
                  src='https://static.thanhnien.com.vn/thanhnien.vn/image/logo.svg'
                  alt='logo'
                  className='w-28 aspect-[3.5]'
               />
            </Link>
            </div>
      </header>
      {/* menu mobile */}
      <div className={`bg-secondary fixed inset-0 z-[50] ${openMenuMobile?'translate-x-0':'-translate-x-full'} transition-all duration-300`}>
         <button onClick={()=>setOpenMenuMobile(false)} className='absolute top-3 right-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
</button>
<div className='container mt-14'>
<div className='flex justify-between items-center flex-wrap'>
         <div className='flex gap-x-2 flex-wrap items-center'>
            <span>{currentDate}</span>
            <span>|</span>
            <span>
               <select
                  className='bg-transparent border rounded border-secondary-foreground outline-none'
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

            <div className='flex items-center gap-1'>
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
            <Link  onClick={()=>setOpenMenuMobile(false)} to='/ban-can-biet' className='hover:text-primaryColor'>
               Bạn cần biết
            </Link>
            <span>|</span>
            <Link  onClick={()=>setOpenMenuMobile(false)} to='/tien-ich' className='hover:text-primaryColor'>
               Tiện ích
            </Link>
            <span>|</span>
            <Link  onClick={()=>setOpenMenuMobile(false)} to='/lien-he' className='hover:text-primaryColor'>
               Liên hệ
            </Link>
         </div>
         <div className='flex space-x-3'>
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
           <div className='flex items-center gap-5 flex-wrap justify-between mt-5'>
               <div className='flex items-center gap-x-4'>
                  <NavLink
                   onClick={()=>setOpenMenuMobile(false)}
                  className={({ isActive }) =>
                     isActive ? 'text-primaryColor font-medium' : 'hover:text-primaryColor transition-all'
                  }
                  to={'/'}
               >
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className={`w-5 h-5`}>
                     <path d='M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z' />
                     <path d='m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z' />
                  </svg>
               </NavLink>
               <Tippy
                  animation={'perspective-extreme'}
                  onClickOutside={() => setOpenCategoryMobile(false)}
                  visible={openCategoryMobile}
                  content={
                     <div className='bg-primary-foreground grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 p-3 rounded shadow-2xl'>
                        {menu.map((item) => (
                           <NavLink
                           
                              className={({ isActive }) =>
                                 isActive ? 'text-primaryColor font-medium' : 'hover:text-primaryColor transition-all'
                              }
                               onClick={()=>setOpenMenuMobile(false)}
                              key={item.url}
                              to={item.url}
                           >
                              {item.title}
                           </NavLink>
                        ))}
                     </div>
                  }
                  interactive={true}
                  arrow={false}
                  offset={[0, 0]}
                  placement={'bottom-start'}
                  maxWidth={'auto'}
               >
                  <button
                     className='flex items-center gap-x-1 hover:text-primaryColor transition-all'
                     onClick={() => setOpenCategoryMobile((prev) => !prev)}
                  >
                     Danh mục{' '}
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={2}
                        stroke='currentColor'
                        className={`size-5 ${openCategoryMobile ? 'rotate-180' : ''} transition-all`}
                     >
                        <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                     </svg>
                  </button>
               </Tippy>

               </div>
              <div className='flex items-center gap-x-4'>
                <form onSubmit={handleSearch} className='flex items-center border rounded bg-primary-foreground'>
                  <Input
                     type='search'
                     className='p-2 rounded-l outline-none border-none bg-primary-foreground'
                     placeholder='Tìm kiếm...'
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button type='submit' className='bg-primaryColor p-2 whitespace-nowrap rounded-r text-white'>
                     Tìm kiếm
                  </button>
               </form>
               <ModeToggle />
               <Link to={'/history'}  onClick={()=>setOpenMenuMobile(false)}>
                  <svg
                     data-v-c3ad5561='true'
                     data-v-eb07a472='true'
                     xmlns='http://www.w3.org/2000/svg'
                     xmlnsXlink='http://www.w3.org/1999/xlink'
                     aria-hidden='true'
                     role='img'
                     className='icon text-blue-500'
                     width='30px'
                     height='30px'
                     viewBox='0 0 24 24'
                  >
                     <path
                        fill='currentColor'
                        d='M13 3a9 9 0 0 0-9 9H1l3.89 3.89l.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.25 2.52l.77-1.28l-3.52-2.09V8z'
                     />
                  </svg>
               </Link>
              </div>
               {/* <Button><NavLink to={'/loign'}>Đăng nhập</NavLink></Button> */}
            </div>
</div>
        
      </div>
      </>
   )
}