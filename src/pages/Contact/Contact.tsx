import { Helmet } from 'react-helmet'

export default function Contact() {
   return (
      <div>
         <Helmet>
            <title>Liên hệ | Báo Thanh Niên</title>
         </Helmet>
         <div className='bg-[#017cc2] text-white '>
            <div className='p-4 ml-10'>
               <div className='pt-4'>
                  <div>
                     <a href='#' title='Liên hệ' className='text-2xl font-bold'>
                        Liên hệ
                     </a>
                  </div>
                  <div className='flex space-x-4 mt-4'>
                     <a href='https://datbao.thanhnien.vn/' title='Đặt báo' target='_blank' rel='noopener noreferrer'>
                        Đặt báo
                     </a>
                     <a
                        href='https://banggia.thanhnien.vn/'
                        title='Quảng cáo'
                        target='_blank'
                        rel='noopener noreferrer'
                     >
                        Quảng cáo
                     </a>
                     <a href='tel:0906645777' title='Điện thoại'>
                        Điện thoại
                     </a>
                  </div>
               </div>
            </div>
            {/*rule*/}
            <div className='mt-4 ml-14 mr-16'>
               <div className='w-full border-t border-gray-300'></div>
            </div>

            <div className='p-4 '>
               <div className='flex justify-center relative'>
                  <div className='absolute left-0 top-0 ml-4 mt-4 w-1/4'>
                     <img
                        loading='lazy'
                        src='https://static.thanhnien.com.vn/thanhnien.vn/image/datbao.png'
                        alt='Đặt báo'
                        className='max-w-full'
                     />
                  </div>
                  <div className='container mx-auto p-4 flex justify-end'>
                     <div className='md:w-2/3'>
                        <p className='text-2xl font-bold text-center '>Nhật báo Thanh Niên</p>
                        <p className='text-sm text-center '>5.500đ/số</p>
                        <div className='mt-4 flex justify-around items-center text-white'>
                           <div className='text-center px-10 py-2'>
                              <p className='text-lg font-semibold bg-blue-700 py-2 px-4 rounded'>3 tháng</p>
                              <p className='text-sm mt-2'>81 số báo</p>
                              <p className='text-lg font-bold mt-0.5'>
                                 423.225đ
                                 <span className='text-xs'> (-5%)</span>
                              </p>
                           </div>
                           <div className='border-l-2 border-white h-16'></div>
                           <div className='text-center px-4'>
                              <p className='text-lg font-semibold bg-blue-700  py-2 px-4 rounded'>6 tháng</p>
                              <p className='text-sm mt-0.5'>172 số báo</p>
                              <p className='text-lg font-bold'>
                                 851.400đ
                                 <span className='text-xs'> (-10%)</span>
                              </p>
                           </div>
                           <div className='border-l-2 border-white h-16'></div>
                           <div className='text-center px-4'>
                              <p className='text-lg font-semibold bg-blue-700  py-2 px-4 rounded'>1 năm</p>
                              <p className='text-sm mt-0.5'>356 số báo</p>
                              <p className='text-lg font-bold'>
                                 1.566.400đ
                                 <span className='text-xs'> (-20%)</span>
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className='py-2 mt-20 '>
            <div className='container mx-auto p-4'>
               <div className='text-sm'>
                  <div className='flex items-center'>
                     <span className='flex items-center justify-center w-6 h-6 bg-primaryColor text-white rounded-full text-xs font-bold'>
                        1
                     </span>
                     <p className='ml-2 text-sm font-semibold'>
                        TP. HỒ CHÍ MINH <span className='font-normal'>(nhận giao tại 23 quận, huyện)</span>
                     </p>
                  </div>
                  <div className='p-4'>
                     <div className='flex'>
                        <div className='col'>
                           <p className='font-semibold'>Phòng Phát hành báo Thanh Niên</p>
                           <p className='text mt-1'>
                              Địa chỉ: 268-270 Nguyễn Đình Chiểu, Phường Võ Thị Sáu, Quận 3 TP.HCM
                           </p>
                           <div className='mt-2'>
                              <div className='col-sub'>
                                 <p className='label font-semibold'>Website</p>
                                 <p>
                                    <a
                                       className='text-primaryColor underline'
                                       href='https://thanhnien.vn'
                                       target='_blank'
                                       rel='noopener noreferrer'
                                    >
                                       thanhnien.vn
                                    </a>{' '}
                                    (Đặt báo)
                                 </p>
                              </div>
                              <div className='col-sub mt-2'>
                                 <p className='label font-semibold'>Email</p>
                                 <p className='value'>phathanh@thanhnien.vn</p>
                              </div>
                              <div className='col-sub mt-2'>
                                 <p className='label font-semibold'>Điện thoại</p>
                                 <p className='value'>028.39309243 – 0903.03.57.58</p>
                              </div>
                           </div>
                        </div>
                        <div className='border-l-2 border-gray-200  mx-4 ml-16'></div>
                        <div className='col'>
                           <p className='font-semibold'>Nhà in báo Thanh Niên</p>
                           <p className='text'>Địa chỉ: 732 Lê Đức Thọ P.15, Q.Gò Vấp TP.HCM</p>
                           <div className='mt-2'>
                              <div className='col-sub'>
                                 <p className='label font-semibold'>Điện thoại</p>
                                 <p className='value'>028.38604842</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='flex flex-wrap text-sm'>
                  {/* Đồng Nai Section */}
                  <div className='flex flex-col'>
                     <div className='flex items-center'>
                        <span className='flex items-center justify-center w-6 h-6 bg-primaryColor text-white rounded-full text-xs font-bold'>
                           2
                        </span>
                        <p className='ml-2 text-sm font-semibold'>Đồng Nai</p>
                     </div>
                     <div className='mt-2 ml-4'>
                        <p className='font-semibold'>Địa chỉ</p>
                        <p>15A Võ Thị Sáu, TP. Biên Hòa</p>
                        <div className='mt-2'>
                           <p className='font-semibold'>Điện thoại</p>
                           <p>(0251) 3940818 – 0918.710.737</p>
                           <p className='font-semibold mt-2'>Fax</p>
                           <p>(0251) 3940817</p>
                        </div>
                     </div>
                  </div>
                  <div className='border-l-2 border-gray-200  mx-4 ml-7 '></div>
                  {/* Cần Thơ Section */}
                  <div className='flex flex-col'>
                     <div className='flex items-center'>
                        <span className='flex items-center justify-center w-6 h-6 bg-primaryColor text-white rounded-full text-xs font-bold'>
                           3
                        </span>
                        <p className='ml-2 text-sm font-semibold'>Cần Thơ</p>
                     </div>
                     <div className='mt-2'>
                        <p className='font-semibold'>Địa chỉ</p>
                        <p>99 Trần Văn Hoài, TP. Cần Thơ</p>
                        <div className='mt-2'>
                           <p className='font-semibold'>Điện thoại</p>
                           <p>(0292) 3825244 – 0944.130.785</p>
                           <p className='font-semibold mt-2'>Fax</p>
                           <p>(0292) 3825245</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='flex flex-wrap text-sm mt-6'>
                  <div className='flex flex-col'>
                     <div className='flex items-center'>
                        <span className='flex items-center justify-center w-6 h-6 bg-primaryColor text-white rounded-full text-xs font-bold'>
                           4
                        </span>
                        <p className='ml-2 text-sm font-semibold'>Đà lạt</p>
                     </div>
                     <div className='mt-2 ml-4'>
                        <p className='font-semibold'>Địa chỉ</p>
                        <p>115 Lê Hồng Phong, P.4, TP.Đà Lạt.</p>
                        <div className='mt-2'>
                           <p className='font-semibold'>Điện thoại</p>
                           <p>(0263) 3827807 – 0916.704.389</p>
                           <p className='font-semibold mt-2'>Fax</p>
                           <p>(0263) 3812930</p>
                        </div>
                     </div>
                  </div>
                  <div className='border-l-2 border-gray-200  mx-4 ml-13 '></div>
                  <div className='flex flex-col'>
                     <div className='flex items-center'>
                        <span className='flex items-center justify-center w-6 h-6 bg-primaryColor text-white rounded-full text-xs font-bold'>
                           5
                        </span>
                        <p className='ml-2 text-sm font-semibold'>Nha Trang</p>
                     </div>
                     <div className='mt-2'>
                        <p className='font-semibold'>Địa chỉ</p>
                        <p>120 Thống Nhất, P.Vạn Thắng, TP. Nha Trang</p>
                        <div className='mt-2'>
                           <p className='font-semibold'>Điện thoại</p>
                           <p>(0258) 3819306 – 0979.375.588</p>
                           <p className='font-semibold mt-2'>Fax</p>
                           <p>(0258) 3819307</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='flex flex-wrap text-sm mt-6'>
                  <div className='flex flex-col'>
                     <div className='flex items-center'>
                        <span className='flex items-center justify-center w-6 h-6 bg-primaryColor text-white rounded-full text-xs font-bold'>
                           6
                        </span>
                        <p className='ml-2 text-sm font-semibold'>Hà Nội</p>
                     </div>
                     <div className='mt-2 ml-4'>
                        <p className='font-semibold'>Địa chỉ</p>
                        <p>218 Tây Sơn , Q.Đống Đa, Hà Nội</p>
                        <div className='mt-2'>
                           <p className='font-semibold'>Điện thoại</p>
                           <p>(024) 38.570.981 – 0904.266.866</p>
                           <p className='font-semibold mt-2'>Fax</p>
                           <p>(024) 38570948</p>
                        </div>
                     </div>
                  </div>
                  <div className='border-l-2 border-gray-200  mx-4 ml-15 '></div>
                  <div className='flex flex-col'>
                     <div className='flex items-center'>
                        <span className='flex items-center justify-center w-6 h-6 bg-primaryColor text-white rounded-full text-xs font-bold'>
                           7
                        </span>
                        <p className='ml-2 text-sm font-semibold'>Hải Phòng</p>
                     </div>
                     <div className='mt-2'>
                        <p className='font-semibold'>Địa chỉ</p>
                        <p>107 Máy Tơ - Q. Ngô Quyền - TP. Hải Phòng</p>
                        <div className='mt-2'>
                           <p className='font-semibold'>Điện thoại</p>
                           <p>(0225) 3822038</p>
                           <p className='font-semibold mt-2'>Fax</p>
                           <p>(0225) 3822038</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='flex flex-wrap text-sm mt-6'>
                  <div className='flex flex-col'>
                     <div className='flex items-center'>
                        <span className='flex items-center justify-center w-6 h-6 bg-primaryColor text-white rounded-full text-xs font-bold'>
                           8
                        </span>
                        <p className='ml-2 text-sm font-semibold'>Thanh Hóa</p>
                     </div>
                     <div className='mt-2 ml-4'>
                        <p className='font-semibold'>Địa chỉ</p>
                        <p>1 Nhà Thờ, TP. Thanh Hóa</p>
                        <div className='mt-2'>
                           <p className='font-semibold'>Điện thoại</p>
                           <p>(0237) 3855748</p>
                           <p className='font-semibold mt-2'>Fax</p>
                           <p>(0237) 3855748</p>
                        </div>
                     </div>
                  </div>
                  <div className='border-l-2 border-gray-200  mx-4 ml-17 '></div>
                  <div className='flex flex-col'>
                     <div className='flex items-center'>
                        <span className='flex items-center justify-center w-6 h-6 bg-primaryColor text-white rounded-full text-xs font-bold'>
                           9
                        </span>
                        <p className='ml-2 text-sm font-semibold'>Đà Nẵng</p>
                     </div>
                     <div className='mt-2'>
                        <p className='font-semibold'>Địa chỉ</p>
                        <p>144 Bạch Đằng, TP. Đà Nẵng</p>
                        <div className='mt-2'>
                           <p className='font-semibold'>Điện thoại</p>
                           <p>(0236) 3824231 – 0903.551.999</p>
                           <p className='font-semibold mt-2'>Fax</p>
                           <p>(0236) 3871345</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='flex flex-wrap text-sm mt-6'>
                  <div className='flex flex-col'>
                     <div className='flex items-center'>
                        <span className='flex items-center justify-center w-6 h-6 bg-primaryColor text-white rounded-full text-xs font-bold'>
                           10
                        </span>
                        <p className='ml-2 text-sm font-semibold'>Bình Định</p>
                     </div>
                     <div className='mt-2 ml-4'>
                        <p className='font-semibold'>Địa chỉ</p>
                        <p>133 Lê Lợi, TP.Quy Nhơn</p>
                        <div className='mt-2'>
                           <p className='font-semibold'>Điện thoại</p>
                           <p>(0256) 3824142 – 0905.459.589</p>
                           <p className='font-semibold mt-2'>Fax</p>
                           <p>(0256) 3815559</p>
                        </div>
                     </div>
                  </div>
                  <div className='border-l-2 border-gray-200  mx-4 ml-7 '></div>
                  <div className='flex flex-col'>
                     <div className='flex items-center'>
                        <span className='flex items-center justify-center w-6 h-6 bg-primaryColor text-white rounded-full text-xs font-bold'>
                           11
                        </span>
                        <p className='ml-2 text-sm font-semibold'>Đặt báo gửi đi nước ngoài: Công ty XUNHASABA</p>
                     </div>
                     <div className='mt-2'>
                        <p className='font-semibold'>Email</p>
                        <p>export@xunhasaba-hcmc.com.vn</p>
                        <div className='mt-2'>
                           <p className='font-semibold'>Điện thoại</p>
                           <p>(84.28) 38241320 - 38292900</p>
                           <p className='font-semibold mt-2'>Fax</p>
                           <p>(84.28) 38241321</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
