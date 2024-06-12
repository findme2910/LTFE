import { ModeToggle } from '@/components/mode-toggle'
import { Input } from '@/components/ui/input'
import { Link, NavLink } from 'react-router-dom'
const menu1 = [
   {
      title: 'PODCAST',
      icon: (
         <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-4 h-4'
         >
            <path
               strokeLinecap='round'
               strokeLinejoin='round'
               d='M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z'
            />
         </svg>
      ),
      url: '/'
   },
   {
      title: 'QUẢNG CÁO',
      icon: (
         <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-4 h-4'
         >
            <path
               strokeLinecap='round'
               strokeLinejoin='round'
               d='M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z'
            />
         </svg>
      ),
      url: '/'
   },
   {
      title: 'ĐẶT BÁO',
      icon: (
         <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-4 h-4'
         >
            <path
               strokeLinecap='round'
               strokeLinejoin='round'
               d='M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z'
            />
         </svg>
      ),
      url: '/'
   },
   {
      title: 'ĐĂNG NHẬP',
      icon: (
         <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-4 h-4'
         >
            <path
               strokeLinecap='round'
               strokeLinejoin='round'
               d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
            />
         </svg>
      ),
      url: '/'
   }
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
   return (
      <header className='pt-2 font-medium border-b border-b-gray-300 bg-primary-foreground fixed z-50 inset-x-0 top-0'>
         <div className='container flex items-center justify-between pb-2'>
            <div className='flex items-center gap-x-5'>
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-10 h-10'
               >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
               </svg>
               <div className='flex items-center gap-x-2 border border-gray-300 rounded overflow-hidden'>
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     fill='none'
                     viewBox='0 0 24 24'
                     strokeWidth={1.5}
                     stroke='currentColor'
                     className='w-5 h-5 flex-shrink-0 ml-3'
                  >
                     <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                     />
                  </svg>
                  <Input type='text' placeholder='Tìm kiếm...' className='outline-none border-none p-0' />
               </div>
            </div>
            <Link to="/contact">Liên hệ</Link>
            <div className='flex items-center gap-x-5'>
               <ModeToggle />
               <img src='https://static.thanhnien.com.vn/thanhnien.vn/image/logo.svg' alt='' />
               {menu1.map((item) => (
                  <Link key={item.title} to={item.url} className='flex items-center text-xs'>
                     <span className='font-medium'>{item.title}</span>
                     <div className='w-9 h-9 flex items-center justify-center bg-primaryColor rounded-full'>
                        {item.icon}
                     </div>
                  </Link>
               ))}
            </div>
         </div>
         <div className='border-t border-t-gray-300'></div>
         <div className='flex items-center flex-wrap gap-x-2 container py-2'>
            <Link to={'/'}>
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-5 h-5 text-primaryColor'
               >
                  <path d='M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z' />
                  <path d='m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z' />
               </svg>
            </Link>
            {menu.map((item) => (
               <NavLink
                  className={({ isActive }) =>
                     isActive ? 'text-primaryColor font-medium' : 'hover:text-primaryColor transition-all'
                  }
                  key={item.url}
                  to={item.url}
               >
                  {item.title}
               </NavLink>
            ))}
         </div>
      </header>
   )
}
