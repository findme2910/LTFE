import React, { useEffect, useState } from 'react';

interface StockData {
   index: string;
   open: string;
   high: string;
   low: string;
   close: string;
   volume: string;
   date: string;
}

const StockInfo: React.FC = () => {
   const [stockData, setStockData] = useState<StockData | null>(null);
   const [selectedIndex, setSelectedIndex] = useState<string>('MSFT');
   const API_KEY = 'K43GD3JUGQX8RYT6';

   useEffect(() => {
      const fetchStockData = async () => {
         const API_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${selectedIndex}&apikey=${API_KEY}`;
         try {
            const response = await fetch(API_URL);
            const data = await response.json();

            if (data['Error Message']) {
               console.error('Error fetching stock data:', data['Error Message']);
               return;
            }

            const lastRefreshed = data['Meta Data']['3. Last Refreshed'].split(' ')[0]; // Lấy ngày cuối cùng được làm mới
            const stockInfo = data['Time Series (Daily)'][lastRefreshed];

            const stockData: StockData = {
               index: selectedIndex,
               open: stockInfo['1. open'],
               high: stockInfo['2. high'],
               low: stockInfo['3. low'],
               close: stockInfo['4. close'],
               volume: stockInfo['5. volume'],
               date: lastRefreshed,
            };

            setStockData(stockData);
         } catch (error) {
            console.error('Error fetching stock data:', error);
         }
      };

      fetchStockData();
   }, [selectedIndex]);

   const handleIndexChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedIndex(event.target.value);
   };

   return (
      <div id="stock-info" className="my-8">
         <div className="mb-4">
            <label htmlFor="index" className="mr-2">Chọn chỉ số:</label>
            <select id="index" value={selectedIndex} onChange={handleIndexChange} className="p-2 border">
               <option value="MSFT">Microsoft (MSFT)</option>
               <option value="AAPL">Apple (AAPL)</option>
               <option value="GOOGL">Google (GOOGL)</option>
               <option value="IBM">IBM</option>
            </select>
         </div>
         {stockData && (
            <div className="border p-4 ">
               <h2 className="text-xl font-bold bg-blue-100 text-white">Thông tin chứng khoán {stockData.index} ngày {stockData.date}</h2>
               <div className="grid grid-cols-2 gap-4">
                  <div>Chỉ số: {stockData.index}</div>
                  <div>Mở cửa: {stockData.open}</div>
                  <div>Cao nhất: {stockData.high}</div>
                  <div>Thấp nhất: {stockData.low}</div>
                  <div>Đóng cửa: {stockData.close}</div>
                  <div>Khối lượng: {stockData.volume}</div>
               </div>
            </div>
         )}
      </div>
   );
};

export default StockInfo;