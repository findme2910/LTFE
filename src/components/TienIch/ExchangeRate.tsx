import React, { useEffect, useState } from 'react';

interface ExchangeRate {
   currency: string;
   cashBuying: string;
   transferBuying: string;
   selling: string;
}

const ExchangeRates: React.FC = () => {
   const [exchangeRates, setExchangeRates] = useState<ExchangeRate[]>([]);

   useEffect(() => {
      // Đây là dữ liệu mẫu cho đến ngày 22/6. Chưa biết chỗ lấy API
      const sampleData: ExchangeRate[] = [
         { currency: 'USD', cashBuying: '25,251', transferBuying: '25,251', selling: '25,468' },
         { currency: 'AUD', cashBuying: '16,752', transferBuying: '16,652', selling: '17,183' },
         { currency: 'CAD', cashBuying: '18,417', transferBuying: '18,307', selling: '18,879' },
         { currency: 'JPY', cashBuying: '157', transferBuying: '156', selling: '164' },
         { currency: 'DKK', cashBuying: '3,583', transferBuying: '--', selling: '3,687' },
         { currency: 'CHF', cashBuying: '28,139', transferBuying: '27,971', selling: '28,967' },
         { currency: 'SGD', cashBuying: '18,345', transferBuying: '18,205', selling: '18,998' },
         // Thêm dữ liệu mẫu khác nếu cần
      ];
      setExchangeRates(sampleData);
   }, []);

   return (
      <div id="exchange-rate" className="my-8">
         <h2 className="text-2xl font-bold mb-4">Tỷ giá ngoại tệ cập nhật ngày 22/6/2024 17:39</h2>
         <table className="w-full text-left table-auto border-collapse">
            <thead>
            <tr>
               <th className="px-4 py-2 border">Mã NT</th>
               <th className="px-4 py-2 border">Mua tiền mặt</th>
               <th className="px-4 py-2 border">Mua chuyển khoản</th>
               <th className="px-4 py-2 border">Bán</th>
            </tr>
            </thead>
            <tbody>
            {exchangeRates.map((rate) => (
               <tr key={rate.currency}>
                  <td className="px-4 py-2 border">{rate.currency}</td>
                  <td className="px-4 py-2 border">{rate.cashBuying}</td>
                  <td className="px-4 py-2 border">{rate.transferBuying}</td>
                  <td className="px-4 py-2 border">{rate.selling}</td>
               </tr>
            ))}
            </tbody>
         </table>
      </div>
   );
};

export default ExchangeRates;
