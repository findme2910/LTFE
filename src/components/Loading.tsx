export default function Loading() {
   return (
      <div className='grid grid-cols-2 gap-5'>
         {Array(4)
            .fill(0)
            .map((_, index) => (
               <div key={index} className='flex flex-col gap-y-3'>
                  <div className='w-full aspect-video bg-gray-300 animate-pulse rounded'></div>
                  <div className='bg-gray-300 animate-pulse rounded h-8'></div>
                  <div className='bg-gray-300 animate-pulse rounded h-8'></div>
               </div>
            ))}
      </div>
   )
}
