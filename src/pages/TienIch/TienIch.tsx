import { Helmet } from 'react-helmet'
import React, { useState } from 'react'
import ExchangeRates from '@/components/TienIch/ExchangeRate.tsx'
import GoldPrices from '@/components/TienIch/GoldPrices.tsx'
import LotteryResults from '@/components/TienIch/LotteryResult.tsx'
import StockInfo from '@/components/TienIch/StockData.tsx'
import TvSchedule from '@/components/TienIch/TVSchedule.tsx'
import MovieSchedule from '@/components/TienIch/MovieSchedule.tsx'
import FuelPrice from '@/components/TienIch/FuelPrices.tsx'
import Aqi from '@/components/TienIch/Aqi.tsx'

interface NavigationProps {
   setActiveTab: React.Dispatch<React.SetStateAction<string>>
   activeTab: string
}

const Navigation: React.FC<NavigationProps> = ({ setActiveTab, activeTab }) => {
   return (
      <nav className='bg-primary-foreground p-4'>
         <ul className='flex space-x-4'>
            <li>
               <button
                  className={`${activeTab === 'exchange-rate' && 'text-primaryColor'}`}
                  onClick={() => setActiveTab('exchange-rate')}
               >
                  Tỷ giá ngoại tệ
               </button>
            </li>
            <li>
               <button
                  className={`${activeTab === 'gold-price' && 'text-primaryColor'}`}
                  onClick={() => setActiveTab('gold-price')}
               >
                  Giá vàng
               </button>
            </li>
            <li>
               <button
                  className={`${activeTab === 'lottery-results' && 'text-primaryColor'}`}
                  onClick={() => setActiveTab('lottery-results')}
               >
                  Kết quả xổ số
               </button>
            </li>
            <li>
               <button
                  className={`${activeTab === 'stock-market' && 'text-primaryColor'}`}
                  onClick={() => setActiveTab('stock-market')}
               >
                  Chứng khoán
               </button>
            </li>
            <li>
               <button
                  className={`${activeTab === 'tv-schedule' && 'text-primaryColor'}`}
                  onClick={() => setActiveTab('tv-schedule')}
               >
                  Lịch truyền hình
               </button>
            </li>
            <li>
               <button
                  className={`${activeTab === 'movie-schedule' && 'text-primaryColor'}`}
                  onClick={() => setActiveTab('movie-schedule')}
               >
                  Lịch chiếu phim
               </button>
            </li>
            <li>
               <button
                  className={`${activeTab === 'fuel-price' && 'text-primaryColor'}`}
                  onClick={() => setActiveTab('fuel-price')}
               >
                  Giá xăng dầu
               </button>
            </li>
            <li>
               <button className={`${activeTab === 'aqi' && 'text-primaryColor'}`} onClick={() => setActiveTab('aqi')}>
                  AQI
               </button>
            </li>
         </ul>
      </nav>
   )
}

export default function TienIch() {
   const [activeTab, setActiveTab] = useState<string>('exchange-rate')

   return (
      <>
         <Helmet>
            <title>Tiện ích | Báo Thanh Niên</title>
            <meta
               name='keywords'
               content='Tin tức thời sự nhanh 24h, tin nóng nhất Việt Nam, pháp luật, xã hội, đời sống, chính trị, kinh doanh, kinh tế, công nghệ thông tin, game, giới trẻ, văn hóa, giáo dục, thể thao. Video clip, hình ảnh tin độc quyền, tin nóng trên mạng xã hội được cập nhật mới và nhanh nhất trong ngày'
            />
         </Helmet>
         <h1 className='text-3xl font-bold pb-2 mb-6 border-b-2 border-b-primaryColor flex items-center justify-between'>
            Tiện Ích
         </h1>
         <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
         {activeTab === 'exchange-rate' && <ExchangeRates />}
         {activeTab === 'gold-price' && <GoldPrices />}
         {activeTab === 'lottery-results' && <LotteryResults />}
         {activeTab === 'stock-market' && <StockInfo />}
         {activeTab === 'tv-schedule' && <TvSchedule />}
         {activeTab === 'movie-schedule' && <MovieSchedule />}
         {activeTab === 'fuel-price' && <FuelPrice />}
         {activeTab === 'aqi' && <Aqi />}
      </>
   )
}
