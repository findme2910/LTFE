import React, { useEffect, useState } from 'react'
import axios from 'axios'
import LoadingDetail from '@/components/LoadingDetail'

interface FuelPrice {
   type: string
   unit: string
   price1: string
   price2: string
}

interface FuelPriceData {
   date: string
   source: string
   prices: FuelPrice[]
}

const FuelPrice: React.FC = () => {
   const [fuelPriceData, setFuelPriceData] = useState<FuelPriceData | null>(null)

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get('http://localhost:5000/api/fuel-prices')
            setFuelPriceData(response.data)
         } catch (error) {
            console.error('Error fetching fuel prices:', error)
         }
      }

      fetchData()
   }, [])

   if (!fuelPriceData) {
      return <LoadingDetail />
   }

   return (
      <div className='container mx-auto my-8'>
         <div className='uti__section-top flex justify-between'>
            <div className='top-left'>
               Giá xăng, dầu cập nhật ngày <span className='blue'>{fuelPriceData.date}</span>
            </div>
            <div className='top-right'>Nguồn: {fuelPriceData.source}</div>
         </div>
         <div className='uti__section-middle mt-4'>
            <table className='table-uti-xangdau border rounded-lg w-full'>
               <thead className=' font-bold'>
                  <tr>
                     <th className='p-2 border-b  text-left font-bold'>Loại xăng dầu</th>
                     <th className='p-2 border-b  text-left font-bold'>Đơn vị</th>
                     <th className='p-2 border-b  text-left font-bold'>Giá vùng 1</th>
                     <th className='p-2 border-b  text-left font-bold'>Giá vùng 2</th>
                  </tr>
               </thead>
               <tbody>
                  {fuelPriceData.prices.map((price, index) => (
                     <tr key={index} className='text-left'>
                        <td className='p-2 border-b font-bold'>{price.type}</td>
                        <td className='p-2 border-b'>{price.unit}</td>
                        <td className='p-2 border-b'>{price.price1}</td>
                        <td className='p-2 border-b'>{price.price2}</td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   )
}

export default FuelPrice
