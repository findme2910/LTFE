export default function Home() {
   return (
      <div>
         <div className='flex items-end gap-x-2'>
            <h2 className='text-primaryColor font-bold text-2xl whitespace-nowrap'>Thời sự</h2>
            <div className='w-full h-[1px] -translate-y-1 bg-primaryColor'></div>
         </div>
         <div className='mt-4 flex items-start gap-x-4'>
            <div className='w-1/2'>
               <img src='https://source.unsplash.com/random' className='w-full aspect-video object-cover' alt='' />
               <h2 className='font-bold text-xl'>
                  Thời tiết hôm nay 17/5: Cả nước ngày nắng, chiều tối và đêm mưa rào đến mưa to
               </h2>
               <span className='text-xs'>2 giờ trước</span>
               <p>
                  GD&TĐ - Dự báo thời tiết hôm nay (17/5), Bắc Bộ, Bắc Trung Bộ ngày nắng, chiều tối và đêm mưa; Nam Bộ
                  ngày nắng, có nơi nắng nóng, chiều tối mưa rào đến mưa to.
               </p>
            </div>
            <div className='w-1/2 grid grid-cols-2 gap-4'>
               {Array(4)
                  .fill(0)
                  .map((_, index) => (
                     <div key={index} className='flex flex-col gap-y-1'>
                        <img
                           src='https://source.unsplash.com/random'
                           className='w-full aspect-video object-cover'
                           alt=''
                        />
                        <h3 className='font-semibold'>
                           Giá vàng hôm nay 17/5 giảm nhẹ về quanh mức 90 triệu đồng/lượng
                        </h3>
                     </div>
                  ))}
            </div>
         </div>
      </div>
   )
}
