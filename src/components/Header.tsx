import { ModeToggle } from '@/components/mode-toggle'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
   return (
      <header className='pt-2 font-medium border-b border-b-gray-300 bg-primary-foreground fixed z-50 inset-x-0 top-0'>
         <div className='container flex items-center justify-between pb-2'>
            <div className='flex flex-col'>
               <img
                  src='https://media-cdn-v2.laodong.vn/laodong/1.0.3.32/images/logo/ldo_red.png'
                  alt='logo'
                  className='w-[225px] h-14 object-cover'
               />
               <p className='text-[8px]'>CƠ QUAN CỦA TỔNG LIÊN ĐOÀN LAO ĐỘNG VIỆT NAM</p>
            </div>
            <div className='flex items-center gap-x-4'>
               <ModeToggle />
               <Link to={'/#'}>
                  <img
                     src='https://media-cdn-v2.laodong.vn/laodong/1.0.3.32/images/icons/icon-ldtv-group.png'
                     alt=''
                     className='w-7 h-7 object-cover'
                  />
               </Link>
               <Link to={'/#'}>
                  <img
                     src='	https://media-cdn-v2.laodong.vn/laodong/1.0.3.32/images/icons/icon-dulich-group.png'
                     alt=''
                     className='w-20 h-7 object-cover'
                  />
               </Link>
               <Link to={'/#'}>
                  <img
                     src='	https://media-cdn-v2.laodong.vn/laodong/1.0.3.32/images/icons/icon-cdvn-group.png'
                     alt=''
                     className='w-36 h-7 object-cover'
                  />
               </Link>
               <Link to={'/#'}>
                  <img
                     src='	https://media-cdn-v2.laodong.vn/laodong/1.0.3.32/images/icons/icon-dttg-group.png'
                     alt=''
                     className='w-[120px] h-7 object-cover'
                  />
               </Link>
               <Link to={'/#'}>
                  <img
                     src='	https://media-cdn-v2.laodong.vn/laodong/1.0.3.32/images/icons/icon-ldt-group.png'
                     alt=''
                     className='w-[82px] h-7 object-cover'
                  />
               </Link>
               <NavLink to={'/'} className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>
                  Home
               </NavLink>
               <NavLink to={'/about'} className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>
                  About
               </NavLink>
            </div>
         </div>
         <div className='border-t-2 border-t-primaryColor text-sm'>
            <div className=' flex items-center justify-between py-1 container'>
               <div className='flex items-center gap-x-4'>
                  <Link to={'/'}>
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-6 h-6'
                     >
                        <path d='M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z' />
                        <path d='m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z' />
                     </svg>
                  </Link>
                  {Array(5)
                     .fill(0)
                     .map((_, index) => (
                        <Link key={index} to='/'>
                           Xã hội
                        </Link>
                     ))}
               </div>
               <div className='flex items-center gap-x-4'>
                  <button className='flex items-center gap-x-1'>
                     Tìm kiếm
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-4 h-4'
                     >
                        <path
                           fillRule='evenodd'
                           d='M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z'
                           clipRule='evenodd'
                        />
                     </svg>
                  </button>
                  <button className='flex items-center gap-x-1'>
                     Đăng nhập
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-4 h-4'
                     >
                        <path
                           fillRule='evenodd'
                           d='M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z'
                           clipRule='evenodd'
                        />
                     </svg>
                  </button>
               </div>
            </div>
         </div>
      </header>
   )
}
