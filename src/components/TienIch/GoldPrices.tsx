import React, { useEffect, useState } from 'react';

interface GoldPrice {
   date: string;
   price: number;
}

const GoldPrices: React.FC = () => {
   const [goldPrices, setGoldPrices] = useState<GoldPrice[]>([]);
   const API_KEY = 'eFsXzfAZcssapWMohQYh';
   const API_URL = `https://www.quandl.com/api/v3/datasets/LBMA/GOLD/data.json?api_key=${API_KEY}`;

   useEffect(() => {
      const fetchGoldPrices = async () => {
         try {
            const response = await fetch(API_URL);
            const data = await response.json();
            if (data && data.dataset_data && data.dataset_data.data) {
               const prices: GoldPrice[] = data.dataset_data.data.slice(0, 10).map((item: never) => ({
                  date: item[0],
                  price: item[1]
               }));
               setGoldPrices(prices);
            } else {
               console.error('Error fetching gold prices:', data);
            }
         } catch (error) {
            console.error('Error fetching gold prices:', error);
         }
      };

      fetchGoldPrices();
   }, []);

   return (
      <div id="gold-price" className="my-8">
         <h2 className="text-2xl font-bold mb-4">Giá vàng cập nhật</h2>
         <table className="w-full text-left table-auto border-collapse">
            <thead>
            <tr>
               <th className="px-4 py-2 border">Ngày</th>
               <th className="px-4 py-2 border">Tỷ giá (USD/Ounce)</th>
            </tr>
            </thead>
            <tbody>
            {goldPrices.map((price) => (
               <tr key={price.date}>
                  <td className="px-4 py-2 border">{price.date}</td>
                  <td className="px-4 py-2 border">{price.price}</td>
               </tr>
            ))}
            </tbody>
         </table>
      </div>
   );
};

export default GoldPrices;
