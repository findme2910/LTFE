import { Route, Routes, useLocation } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import LoadingDetail from '@/components/LoadingDetail'
import ParticlesBg from '@/components/ParticlesBg'
import { UserProvider } from '@/context/UserContext';
import Profile from '@/pages/Profile/Profile.tsx'
const Detail = lazy(() => import('@/pages/Detail/Detail'))
const Home = lazy(() => import('@/pages/Home/Home'))
const NotFound = lazy(() => import('@/pages/NotFound/NotFound'))
const ThoiSu = lazy(() => import('@/pages/ThoiSu/ThoiSu'))
const Login = lazy(() => import('@/pages/Login/Login.tsx'))
const History = lazy(() => import('@/pages/History/History.tsx'))
const Contact = lazy(() => import('@/pages/Contact/Contact'))
const BanCanBiet = lazy(() => import('@/pages/BanCanBiet/BanCanBiet.tsx'))
const DoiSong = lazy(() => import('@/pages/DoiSong/DoiSong.tsx'))
const DuLich = lazy(() => import('@/pages/DuLich/DuLich.tsx'))
const GiaoDuc = lazy(() => import('@/pages/GiaoDuc/GiaoDuc.tsx'))
const PodCast = lazy(() => import('@/pages/PodCast/PodCast.tsx'))
const SucKhoe = lazy(() => import('@/pages/SucKhoe/SucKhoe.tsx'))
const TheThao = lazy(() => import('@/pages/TheThao/TheThao.tsx'))
const ChaoNgayMoi = lazy(() => import('@/pages/ChaoNgayMoi/ChaoNgayMoi.tsx'))
const CongNgheGame = lazy(() => import('@/pages/CongNghe/CongNghe-Game.tsx'))
const RaoVat = lazy(() => import('@/pages/RaoVat/RaoVat.tsx'))
const Xe = lazy(() => import('@/pages/Xe/Xe.tsx'))
const GiaiTri = lazy(() => import('@/pages/GiaiTri/GiaiTri.tsx'))
const GioiTre = lazy(() => import('@/pages/GioiTre/GioiTre.tsx'))
const ThoiTrangTre = lazy(() => import('@/pages/ThoiTrangTre/ThoiTrangTre.tsx'))
const TieuDung = lazy(() => import('@/pages/TieuDung/TieuDung.tsx'))
const Video = lazy(() => import('@/pages/Video/Video.tsx'))
const BanDoc = lazy(() => import('@/pages/BanDoc/BanDoc.tsx'))
const KinhTe = lazy(() => import('@/pages/KinhTe/KinhTe.tsx'))
const Magazine = lazy(() => import('@/pages/Magazine/Magazine.tsx'))
const TheGioi = lazy(() => import('@/pages/TheGioi/TheGioi.tsx'))
const ThiTruong = lazy(() => import('@/pages/ThiTruong/ThiTruong.tsx'))
const Tin24h = lazy(() => import('@/pages/Tin24h/Tin24h.tsx'))
const TinNhanh360 = lazy(() => import('@/pages/TinNhanh360/TinNhanh360.tsx'))
const VanHoa = lazy(() => import('@/pages/VanHoa/VanHoa.tsx'))
const BlogPhongVien = lazy(() => import('@/pages/BlogPhongVien/BlogPhongVien.tsx'))
const CaiChinh = lazy(() => import('@/pages/CaiChinh/CaiChinh.tsx'))
const CungCon = lazy(() => import('@/pages/CungCon/CungCon.tsx'))
const DienDan = lazy(() => import('@/pages/DienDan/DienDan.tsx'))
const NhatKyTetViet = lazy(() => import('@/pages/NhatKyTetViet/NhatKyTetViet.tsx'))
const TNO = lazy(() => import('@/pages/TNO/TNO.tsx'))
const ToiViet = lazy(() => import('@/pages/ToiViet/ToiViet.tsx'))
const ViecLam = lazy(() => import('@/pages/ViecLam/ViecLam.tsx'))
const SearchResults = lazy(() => import('@/pages/Timkiem/TimKiem.tsx'))
const TienIch = lazy(() => import('@/pages/TienIch/TienIch.tsx'))
function App() {
   const location = useLocation();
   const isLoginPage = location.pathname === '/';
   return (
      <UserProvider>
         {!isLoginPage && <Header />}
         {!isLoginPage && <ParticlesBg />}
         <main className='container py-5 min-h-screen mt-14 lg:mt-[100px]'>
            <Suspense fallback={<LoadingDetail />}>
               <Routes>
                  <Route path={'/'} element={<Login />} />
                  <Route path={'/home'} element={<Home />} />
                  <Route path={'/thoi-su'} element={<ThoiSu />} />
                  <Route path={'/doi-song'} element={<DoiSong />} />
                  <Route path={'/detail/:slug'} element={<Detail />} />
                  <Route path={'/history'} element={<History />} />
                  <Route path='/lien-he' element={<Contact />} />
                  <Route path='/tien-ich' element={<TienIch />} />
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
                  <Route path='/tieu-dung-thong-minh' element={<TieuDung />} />
                  <Route path='/video' element={<Video />} />
                  <Route path='/ban-can-biet' element={<BanCanBiet />} />
                  <Route path='*' element={<NotFound />} />
                  <Route path='/ban-doc' element={<BanDoc />} />
                  <Route path='/kinh-te' element={<KinhTe />} />
                  <Route path='/magazine' element={<Magazine />} />
                  <Route path='/the-gioi' element={<TheGioi />} />
                  <Route path='/thi-truong' element={<ThiTruong />} />
                  <Route path='/tin-24h' element={<Tin24h />} />
                  <Route path='/tin-nhanh-360' element={<TinNhanh360 />} />
                  <Route path='/van-hoa' element={<VanHoa />} />
                  <Route path='/blog-phong-vien' element={<BlogPhongVien />} />
                  <Route path='/cai-chinh' element={<CaiChinh />} />
                  <Route path='/cung-con-di-tiep-cuoc-doi' element={<CungCon />} />
                  <Route path='/dien-dan' element={<DienDan />} />
                  <Route path='/nhat-ky-tet-viet' element={<NhatKyTetViet />} />
                  <Route path='/tno' element={<TNO />} />
                  <Route path='/toi-viet' element={<ToiViet />} />
                  <Route path='/viec-lam' element={<ViecLam />} />
                  <Route path='/search' element={<SearchResults />} />
                  <Route path='/profile' element={<Profile />} />
               </Routes>
            </Suspense>
         </main>
         {!isLoginPage && <Footer />}
         {!isLoginPage && (
            <div
            onClick={() =>
               window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
               })
            }
            className='voltage-button !fixed !z-[49] !bottom-5 !left-5'
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
         </div>)}
      </UserProvider>
   )
}

export default App
