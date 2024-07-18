import React, { useEffect, useState } from 'react'
import axios from 'axios'
import LoadingDetail from '@/components/LoadingDetail'

interface Program {
   time: string
   title: string
}

interface Channel {
   channelName: string
   date: string
   programs: Program[]
}

const channels = [
   { value: '210', label: 'VTV1 HD' },
   { value: '377', label: 'VTV2 HD' },
   { value: '211', label: 'VTV3 HD' },
   { value: '378', label: 'VTV4 HD' },
   { value: '379', label: 'VTV5 HD' },
   { value: '212', label: 'VTV Cần Thơ' },
   { value: '223', label: 'Truyền hình Quốc Hội' },
   { value: '459', label: 'VTV7 HD' },
   { value: '7', label: 'HTV4' },
   { value: '9', label: 'HTV4' },
   { value: '18', label: 'HTV Thể thao' },
   { value: '22', label: 'VTC2' },
   { value: '22', label: 'VTC6' },
   { value: '421', label: 'Vĩnh Long 1 HD' },
   { value: '30', label: 'VTC11 - KidsTV' },
   { value: '18', label: 'Vĩnh Long 3 HD' },
   { value: '19', label: 'ANTV' },
   { value: '20', label: 'ON Sports (HD)' },
   { value: '21', label: 'ON Football (HD)' }
]

const TvSchedule: React.FC = () => {
   const [schedule, setSchedule] = useState<Channel | null>(null)
   const [selectedChannel, setSelectedChannel] = useState<string>(channels[0].value)

   const fetchData = async (channel: string) => {
      try {
         const response = await axios.get(`http://localhost:5000/api/tv-schedule?channel=${channel}`)
         setSchedule(response.data)
      } catch (error) {
         console.error('Error fetching TV schedule:', error)
      }
   }

   useEffect(() => {
      fetchData(selectedChannel)
   }, [selectedChannel])

   const handleChannelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedChannel(event.target.value)
   }
   if(!schedule)return <LoadingDetail/>
   return (
      <div className='container mx-auto my-8'>
         <h1 className='text-2xl font-bold mb-4'>Lịch Truyền Hình</h1>
         <div className='mb-4'>
            <select
               value={selectedChannel}
               onChange={handleChannelChange}
               className='p-2 bg-transparent border rounded outline-none'
            >
               {channels.map((channel, index) => (
                  <option className='bg-primary-foreground' key={index} value={channel.value}>
                     {channel.label}
                  </option>
               ))}
            </select>
         </div>
         {schedule ? (
            <div className='mb-8'>
               <h2 className='text-xl font-semibold'>
                  Kênh {schedule.channelName} - Ngày {schedule.date}
               </h2>
               <table className='min-w-full border  mt-8'>
                  <thead>
                     <tr>
                        <th className='py-2 px-4 border-b '>Thời gian</th>
                        <th className='py-2 px-4 border-b'>Chương trình</th>
                     </tr>
                  </thead>
                  <tbody>
                     {schedule.programs.map((program, idx) => (
                        <tr key={idx}>
                           <td className='py-2 px-4 border-b text-center border-r'>{program.time}</td>
                           <td className='py-2 px-4 border-b '>{program.title}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         ) : (
            <LoadingDetail />
         )}
      </div>
   )
}

export default TvSchedule
