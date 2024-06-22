import { ModeToggle } from '@/components/mode-toggle'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Tippy from '@tippyjs/react'
import 'tippy.js/animations/perspective-extreme.css'
import { useState } from 'react'
import { Input } from '@/components/ui/input'

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
   const [searchQuery, setSearchQuery] = useState<string>('')
   const navigate = useNavigate()

   const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      navigate(`/search?query=${searchQuery}`)
   }

   return (
      <header className='py-2 font-medium border-b border-b-gray-300 bg-primary-foreground fixed z-50 inset-x-0 top-0 mt-[37px]'>
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
                     type='text'
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
            </div>
         </div>
      </header>
   )
}
