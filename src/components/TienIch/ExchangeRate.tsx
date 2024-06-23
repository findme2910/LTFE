import React, { useEffect, useState } from 'react';

interface ExchangeRate {
   currency: string;
   rate: string;
}

const ExchangeRates: React.FC = () => {
   const [exchangeRates, setExchangeRates] = useState<ExchangeRate[]>([]);
   const API_KEY = '7f90edcfe1bad5ad7536b0d7';
   const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

   useEffect(() => {
      const fetchExchangeRates = async () => {
         try {
            const response = await fetch(API_URL);
            const data = await response.json();
            if (data && data.conversion_rates) {
               const rates = data.conversion_rates;
               const formattedRates: ExchangeRate[] = Object.keys(rates).map((currency) => ({
                  currency,
                  rate: rates[currency].toString()
               }));
               setExchangeRates(formattedRates);
            } else {
               console.error('Error fetching exchange rates:', data);
            }
         } catch (error) {
            console.error('Error fetching exchange rates:', error);
         }
      };

      fetchExchangeRates();
   }, [API_URL]);

   return (
      <div id="exchange-rate" className="my-8">
         <h2 className="text-2xl font-bold mb-4">Tỷ giá ngoại tệ cập nhật</h2>
         <table className="w-full text-left table-auto border-collapse">
            <thead>
            <tr>
               <th className="px-4 py-2 border">Mã NT</th>
               <th className="px-4 py-2 border">Tỷ giá (USD)</th>
            </tr>
            </thead>
            <tbody>
            {exchangeRates.map((rate) => (
               <tr key={rate.currency}>
                  <td className="px-4 py-2 border">{rate.currency}</td>
                  <td className="px-4 py-2 border">{rate.rate}</td>
               </tr>
            ))}
            </tbody>
         </table>
      </div>
   );
};

export default ExchangeRates;
