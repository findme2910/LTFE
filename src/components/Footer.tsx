export default function Footer() {
   return (
      <footer className='bg-primary-foreground'>
         <div className='container mx-auto px-4 py-8'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
               <div>
                  <img src='https://static.thanhnien.com.vn/thanhnien.vn/image/logo.svg' loading='lazy' alt='logo' />
                  <ul className='mt-4'>
                     <li>Hotline</li>
                     <li className='text-primaryColor'>0906 645 777</li>
                     <li>Liên hệ quảng cáo</li>
                     <li className='text-primaryColor'>0908 780 404</li>
                  </ul>
               </div>
               <div>
                  <h3 className=' text-lg font-semibold mb-4'>Biên tập</h3>
                  <ul>
                     <li>Tổng biên tập: Nguyễn Ngọc Toàn</li>
                     <li>Phó tổng biên tập: Hải Thành</li>
                     <li>Phó tổng biên tập: Lâm Hiếu Dũng</li>
                     <li>Phó tổng biên tập: Trần Việt Hưng</li>
                     <li>Tổng thư ký tòa soạn: Đức Trung</li>
                  </ul>
               </div>
               <div>
                  <h3 className=' text-lg font-semibold mb-4'>Theo Dõi Chúng Tôi</h3>
                  <ul className='flex space-x-4'>
                     <li>
                        <svg className='w-6 h-6 fill-current' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                           <path d='M24 4.56c-.89.39-1.84.65-2.83.77 1.02-.61 1.8-1.57 2.17-2.71-.95.56-2.01.97-3.13 1.19-.89-.95-2.16-1.54-3.57-1.54-2.7 0-4.88 2.18-4.88 4.88 0 .38.04.75.13 1.11C7.69 8.1 4.07 6.13 1.64 3.16c-.42.72-.66 1.56-.66 2.45 0 1.69.86 3.18 2.17 4.05-.8-.02-1.55-.25-2.21-.61v.06c0 2.36 1.68 4.33 3.92 4.77-.41.11-.85.17-1.3.17-.32 0-.63-.03-.93-.08.63 1.96 2.45 3.39 4.61 3.43-1.69 1.33-3.8 2.12-6.1 2.12-.4 0-.79-.02-1.17-.07 2.17 1.39 4.75 2.2 7.52 2.2 9.02 0 13.95-7.47 13.95-13.95 0-.21 0-.42-.01-.63.96-.7 1.8-1.56 2.46-2.55z' />
                        </svg>
                     </li>
                     <li>
                        <svg className='w-6 h-6 fill-current' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                           <path d='M22.23 0H1.77C.8 0 0 .8 0 1.77v20.46C0 23.2.8 24 1.77 24h20.46c.97 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0zM7.09 20.48H3.56V9.02h3.53v11.46zm-1.77-13.07c-1.12 0-2.03-.91-2.03-2.03 0-1.12.91-2.03 2.03-2.03 1.12 0 2.03.91 2.03 2.03 0 1.12-.91 2.03-2.03 2.03zm15.18 13.07h-3.53v-5.87c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.1v5.97H10.9V9.02h3.38v1.56h.05c.47-.88 1.61-1.8 3.32-1.8 3.55 0 4.21 2.34 4.21 5.37v6.33z' />
                        </svg>
                     </li>
                     <li>
                        <svg className='w-6 h-6 fill-current' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                           <path d='M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.4 3.59 8.05 8.21 9.84v-6.95H8.28v-2.89h2.98v-2.21c0-2.95 1.79-4.56 4.42-4.56 1.26 0 2.35.09 2.66.14v3.09h-1.82c-1.43 0-1.7.68-1.7 1.67v2.18h3.39l-.44 2.89h-2.95v6.95c4.63-1.79 8.22-5.44 8.22-9.84 0-5.5-4.46-9.96-9.96-9.96z' />
                        </svg>
                     </li>
                  </ul>
               </div>
            </div>
            <div className='mt-8 text-center text-sm'>© 2024 Báo Thanh Niên. All rights reserved.</div>
         </div>
      </footer>
   )
}
