import React, { useEffect, useState } from 'react'
import axios from 'axios'
import LoadingDetail from '@/components/LoadingDetail'

interface CityAqi {
   city: string
   aqi: string
   aqiClass: string
}

interface AqiData {
   date: string
   cities: CityAqi[]
}
const getAqiClass = (aqi: number) => {
   if (aqi <= 50) return 'bg-emerald-400 text-white'
   if (aqi <= 100) return 'bg-amber-300 text-white'
   if (aqi <= 150) return 'bg-orange-300 text-white'
   if (aqi <= 200) return 'bg-red-600 text-white'
   if (aqi <= 300) return 'bg-purple-400 text-white'
   return 'bg-purple-200 text-white'
}
const Aqi: React.FC = () => {
   const [aqiData, setAqiData] = useState<AqiData | null>(null)

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get('http://localhost:5000/api/aqi')
            setAqiData(response.data)
         } catch (error) {
            console.error('Error fetching AQI data:', error)
         }
      }

      fetchData()
   }, [])

   if (!aqiData) {
      return <LoadingDetail />
   }

   return (
      <div className='container mx-auto my-8'>
         <div className='flex justify-between'>
            <div>
               Cập nhật ngày <span className='blue'>{aqiData.date}</span>
            </div>
         </div>
         <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 lg:grid-cols-6 gap-4 mt-4 text-white '>
            <div className='bg-emerald-400 text-center p-2 flex-col flex  justify-center '>
               <p className='font-bold'>Tốt</p>
               <p className='font-bold'>0-50</p>
            </div>
            <div className='bg-amber-300 text-center p-2 flex-col flex  justify-center'>
               <p className='font-bold'>Trung bình</p>
               <p className='font-bold'>51-100</p>
            </div>
            <div className='bg-orange-300 text-center p-2  flex-col flex  justify-center'>
               <p className='font-bold'>Ảnh hưởng với nhóm nhạy cảm</p>
               <p className='font-bold'>101-150</p>
            </div>
            <div className='bg-red-600 text-center p-2  flex-col flex  justify-center'>
               <p className='font-bold'>Không lành mạnh</p>
               <p className='font-bold'>151-200</p>
            </div>
            <div className='bg-purple-400 text-center p-2  flex-col flex  justify-center'>
               <p className='font-bold'>Rất không lành mạnh</p>
               <p className='font-bold'>201-300</p>
            </div>
            <div className='bg-purple-200 text-center p-2  flex-col flex  justify-center'>
               <p className='font-bold'>Nguy hiểm</p>
               <p className='font-bold'>301+</p>
            </div>
         </div>
         <div className='mt-4'>
            <table className='border rounded-lg w-full'>
               <thead className=' font-bold'>
                  <tr>
                     <th className='p-2 border-b text-left font-bold'>Thành phố</th>
                     <th className='p-2 border-b text-left font-bold'>Chỉ số AQI</th>
                  </tr>
               </thead>
               <tbody>
                  {aqiData.cities.map((cityAqi, index) => (
                     <tr key={index} className='text-left'>
                        <td className='p-2 border-b  font-bold'>{cityAqi.city}</td>
                        <td className='p-2 border-b '>
                           <span className={`inline-block px-2 py-1 rounded ${getAqiClass(Number(cityAqi.aqi))}`}>
                              {cityAqi.aqi}
                           </span>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   )
}

export default Aqi
