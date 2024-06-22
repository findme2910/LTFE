import Footer from '@/components/Footer'
import Header from '@/components/Header'
import TopHeader from '@/components/TopHeader'
import Detail from '@/pages/Detail/Detail'
import Home from '@/pages/Home/Home'
import NotFound from '@/pages/NotFound/NotFound'
import ThoiSu from '@/pages/ThoiSu/ThoiSu'
import { Route, Routes } from 'react-router-dom'
import Contact from '@/pages/Contact/Contact'
import BanCanBiet from '@/pages/BanCanBiet/BanCanBiet.tsx'
import DoiSong from '@/pages/DoiSong/DoiSong.tsx'
import DuLich from '@/pages/DuLich/DuLich.tsx'
import GiaoDuc from '@/pages/GiaoDuc/GiaoDuc.tsx'
import PodCast from '@/pages/PodCast/PodCast.tsx'
import SucKhoe from '@/pages/SucKhoe/SucKhoe.tsx'
import TheThao from '@/pages/TheThao/TheThao.tsx'
import ChaoNgayMoi from '@/pages/ChaoNgayMoi/ChaoNgayMoi.tsx'
import CongNgheGame from '@/pages/CongNghe/CongNghe-Game.tsx'
import RaoVat from '@/pages/RaoVat/RaoVat.tsx'
import Xe from '@/pages/Xe/Xe.tsx'
import GiaiTri from '@/pages/GiaiTri/GiaiTri.tsx'
import GioiTre from '@/pages/GioiTre/GioiTre.tsx'
import ThoiTrangTre from '@/pages/ThoiTrangTre/ThoiTrangTre.tsx'
import TieuDung from '@/pages/TieuDung/TieuDung.tsx'
import Video from '@/pages/Video/Video.tsx'


function App() {
   return (
      <>
         <TopHeader />
         <Header />
         <main className='container py-5 min-h-screen mt-[100px]'>
            <Routes>
               <Route path={'/'} element={<Home />} />
               <Route path={'/thoi-su'} element={<ThoiSu />} />
               <Route path={'/doi-song'} element={<DoiSong />} />
               <Route path={'/detail/:slug'} element={<Detail />} />
               <Route path='/lien-he' element={<Contact />} />
               <Route path='/giao-duc' element={<GiaoDuc />} />
               <Route path='/du-lich' element={<DuLich />} />
               <Route path='/podcast' element={<PodCast />} />
               <Route path='/suc-khoe' element={<SucKhoe />} />
               <Route path='/the-thao' element={<TheThao />} />
               <Route path='/chao-ngay-moi' element={<ChaoNgayMoi />} />
               <Route path='/cong-nghe-game' element={<CongNgheGame />} />
               <Route path='/xe' element={<Xe />} />
               <Route path='/rao-vat' element={<RaoVat />} />
               <Route path='/giai-tri' element={<GiaiTri />} />
               <Route path='/gioi-tre' element={<GioiTre />} />
               <Route path='/thoi-trang-tre' element={<ThoiTrangTre />} />
               <Route path='/tieu-dung' element={<TieuDung />} />
               <Route path='/video' element={<Video />} />
               <Route path='/ban-can-biet' element={<BanCanBiet />} />
               <Route path='*' element={<NotFound />} />
               {/* <Route path={'/tim-kiem/'} element={<Search />} /> */}
            </Routes>
         </main>
         <Footer />
         <div
            onClick={() =>
               window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
               })
            }
            className='voltage-button !fixed !z-50 !bottom-5 !right-5'
         >
            <button>
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-6'
               >
                  <path strokeLinecap='round' strokeLinejoin='round' d='m4.5 18.75 7.5-7.5 7.5 7.5' />
                  <path strokeLinecap='round' strokeLinejoin='round' d='m4.5 12.75 7.5-7.5 7.5 7.5' />
               </svg>
            </button>
            <svg
               version='1.1'
               xmlns='http://www.w3.org/2000/svg'
               x='0px'
               y='0px'
               viewBox='0 0 234.6 61.3'
               preserveAspectRatio='none'
               xmlSpace='preserve'
               className='svg'
            >
               <filter id='glow'>
                  <feGaussianBlur className='blur' result='coloredBlur' stdDeviation={2} />
                  <feTurbulence type='fractalNoise' baseFrequency='0.075' numOctaves='0.3' result='turbulence' />
                  <feDisplacementMap
                     in='SourceGraphic'
                     in2='turbulence'
                     scale={30}
                     xChannelSelector='R'
                     yChannelSelector='G'
                     result='displace'
                  />
                  <feMerge>
                     <feMergeNode in='coloredBlur' />
                     <feMergeNode in='coloredBlur' />
                     <feMergeNode in='coloredBlur' />
                     <feMergeNode in='displace' />
                     <feMergeNode in='SourceGraphic' />
                  </feMerge>
               </filter>
               <path
                  className='voltage line-1'
                  d='m216.3 51.2c-3.7 0-3.7-1.1-7.3-1.1-3.7 0-3.7 6.8-7.3 6.8-3.7 0-3.7-4.6-7.3-4.6-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-0.9-7.3-0.9-3.7 0-3.7-2.7-7.3-2.7-3.7 0-3.7 7.8-7.3 7.8-3.7 0-3.7-4.9-7.3-4.9-3.7 0-3.7-7.8-7.3-7.8-3.7 0-3.7-1.1-7.3-1.1-3.7 0-3.7 3.1-7.3 3.1-3.7 0-3.7 10.9-7.3 10.9-3.7 0-3.7-12.5-7.3-12.5-3.7 0-3.7 4.6-7.3 4.6-3.7 0-3.7 4.5-7.3 4.5-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-10-7.3-10-3.7 0-3.7-0.4-7.3-0.4-3.7 0-3.7 2.3-7.3 2.3-3.7 0-3.7 7.1-7.3 7.1-3.7 0-3.7-11.2-7.3-11.2-3.7 0-3.7 3.5-7.3 3.5-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-2.9-7.3-2.9-3.7 0-3.7 8.4-7.3 8.4-3.7 0-3.7-14.6-7.3-14.6-3.7 0-3.7 5.8-7.3 5.8-2.2 0-3.8-0.4-5.5-1.5-1.8-1.1-1.8-2.9-2.9-4.8-1-1.8 1.9-2.7 1.9-4.8 0-3.4-2.1-3.4-2.1-6.8s-9.9-3.4-9.9-6.8 8-3.4 8-6.8c0-2.2 2.1-2.4 3.1-4.2 1.1-1.8 0.2-3.9 2-5 1.8-1 3.1-7.9 5.3-7.9 3.7 0 3.7 0.9 7.3 0.9 3.7 0 3.7 6.7 7.3 6.7 3.7 0 3.7-1.8 7.3-1.8 3.7 0 3.7-0.6 7.3-0.6 3.7 0 3.7-7.8 7.3-7.8h7.3c3.7 0 3.7 4.7 7.3 4.7 3.7 0 3.7-1.1 7.3-1.1 3.7 0 3.7 11.6 7.3 11.6 3.7 0 3.7-2.6 7.3-2.6 3.7 0 3.7-12.9 7.3-12.9 3.7 0 3.7 10.9 7.3 10.9 3.7 0 3.7 1.3 7.3 1.3 3.7 0 3.7-8.7 7.3-8.7 3.7 0 3.7 11.5 7.3 11.5 3.7 0 3.7-1.4 7.3-1.4 3.7 0 3.7-2.6 7.3-2.6 3.7 0 3.7-5.8 7.3-5.8 3.7 0 3.7-1.3 7.3-1.3 3.7 0 3.7 6.6 7.3 6.6s3.7-9.3 7.3-9.3c3.7 0 3.7 0.2 7.3 0.2 3.7 0 3.7 8.5 7.3 8.5 3.7 0 3.7 0.2 7.3 0.2 3.7 0 3.7-1.5 7.3-1.5 3.7 0 3.7 1.6 7.3 1.6s3.7-5.1 7.3-5.1c2.2 0 0.6 9.6 2.4 10.7s4.1-2 5.1-0.1c1 1.8 10.3 2.2 10.3 4.3 0 3.4-10.7 3.4-10.7 6.8s1.2 3.4 1.2 6.8 1.9 3.4 1.9 6.8c0 2.2 7.2 7.7 6.2 9.5-1.1 1.8-12.3-6.5-14.1-5.5-1.7 0.9-0.1 6.2-2.2 6.2z'
                  fill='transparent'
                  stroke='#fff'
               />
               <path
                  className='voltage line-2'
                  d='m216.3 52.1c-3 0-3-0.5-6-0.5s-3 3-6 3-3-2-6-2-3 1.6-6 1.6-3-0.4-6-0.4-3-1.2-6-1.2-3 3.4-6 3.4-3-2.2-6-2.2-3-3.4-6-3.4-3-0.5-6-0.5-3 1.4-6 1.4-3 4.8-6 4.8-3-5.5-6-5.5-3 2-6 2-3 2-6 2-3 1.6-6 1.6-3-4.4-6-4.4-3-0.2-6-0.2-3 1-6 1-3 3.1-6 3.1-3-4.9-6-4.9-3 1.5-6 1.5-3 1.6-6 1.6-3-1.3-6-1.3-3 3.7-6 3.7-3-6.4-6-6.4-3 2.5-6 2.5h-6c-3 0-3-0.6-6-0.6s-3-1.4-6-1.4-3 0.9-6 0.9-3 4.3-6 4.3-3-3.5-6-3.5c-2.2 0-3.4-1.3-5.2-2.3-1.8-1.1-3.6-1.5-4.6-3.3s-4.4-3.5-4.4-5.7c0-3.4 0.4-3.4 0.4-6.8s2.9-3.4 2.9-6.8-0.8-3.4-0.8-6.8c0-2.2 0.3-4.2 1.3-5.9 1.1-1.8 0.8-6.2 2.6-7.3 1.8-1 5.5-2 7.7-2 3 0 3 2 6 2s3-0.5 6-0.5 3 5.1 6 5.1 3-1.1 6-1.1 3-5.6 6-5.6 3 4.8 6 4.8 3 0.6 6 0.6 3-3.8 6-3.8 3 5.1 6 5.1 3-0.6 6-0.6 3-1.2 6-1.2 3-2.6 6-2.6 3-0.6 6-0.6 3 2.9 6 2.9 3-4.1 6-4.1 3 0.1 6 0.1 3 3.7 6 3.7 3 0.1 6 0.1 3-0.6 6-0.6 3 0.7 6 0.7 3-2.2 6-2.2 3 4.4 6 4.4 3-1.7 6-1.7 3-4 6-4 3 4.7 6 4.7 3-0.5 6-0.5 3-0.8 6-0.8 3-3.8 6-3.8 3 6.3 6 6.3 3-4.8 6-4.8 3 1.9 6 1.9 3-1.9 6-1.9 3 1.3 6 1.3c2.2 0 5-0.5 6.7 0.5 1.8 1.1 2.4 4 3.5 5.8 1 1.8 0.3 3.7 0.3 5.9 0 3.4 3.4 3.4 3.4 6.8s-3.3 3.4-3.3 6.8 4 3.4 4 6.8c0 2.2-6 2.7-7 4.4-1.1 1.8 1.1 6.7-0.7 7.7-1.6 0.8-4.7-1.1-6.8-1.1z'
                  fill='transparent'
                  stroke='#fff'
               />
            </svg>
            <div className='dots'>
               <div className='dot dot-1' />
               <div className='dot dot-2' />
               <div className='dot dot-3' />
               <div className='dot dot-4' />
               <div className='dot dot-5' />
            </div>
         </div>
      </>
   )
}

export default App
