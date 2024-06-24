import React, { useEffect, useState } from 'react';

interface LotteryResult {
   name: string;
   prize: string;
}

const LotteryResults: React.FC = () => {
   const [results, setResults] = useState<LotteryResult[]>([]);
   const [region, setRegion] = useState<string>('tp.hcm');
   const [date, setDate] = useState<string>('');

   const RSS_URLS: { [key: string]: string } = {
      'an-giang': 'https://api.allorigins.win/get?url=https://xosodaiphat.com/an-giang-ag.rss',
      'binh-duong': 'https://api.allorigins.win/get?url=https://xosodaiphat.com/binh-duong-bd.rss',
      'bac-lieu': 'https://api.allorigins.win/get?url=https://xosodaiphat.com/bac-lieu-bl.rss',
      'dong-nai': 'https://api.allorigins.win/get?url=https://xosodaiphat.com/dong-nai-dn.rss',
      'tp.hcm': 'https://api.allorigins.win/get?url=https://xosodaiphat.com/tp.hcm-hcm.rss',
      'ha-noi': 'https://api.allorigins.win/get?url=https://xosodaiphat.com/ha-noi-td.rss',
   };

   useEffect(() => {
      const fetchLotteryResults = async () => {
         try {
            const response = await fetch(RSS_URLS[region]);
            const data = await response.json();
            const text = data.contents;
            const parser = new DOMParser();
            const xml = parser.parseFromString(text, 'application/xml');
            const items = xml.querySelectorAll('item');
            if (items.length > 0) {
               const item = items[0];
               const description = item.querySelector('description')?.textContent || '';
               const pubDate = item.querySelector('pubdate')?.textContent || '';
               setDate(pubDate);
               const parsedResults = parseDescription(description);
               setResults(parsedResults);
            } else {
               console.error('No items found in the RSS feed.');
            }
         } catch (error) {
            console.error('Error fetching lottery results:', error);
         }
      };
      fetchLotteryResults();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [region]);

   const parseDescription = (description: string): LotteryResult[] => {
      const results: LotteryResult[] = [];
      const regex = /(DB|G\.\d):\s*([^GDB]*)/g;
      let match;

      while ((match = regex.exec(description)) !== null) {
         const name = match[1];
         const prize = match[2].trim().replace(/\s+/g, ' ');
         results.push({ name, prize });
      }

      return results;
   };

   const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setRegion(event.target.value);
   };

   return (
      <div id="lottery-results" className="my-8">
         <h2 className="text-2xl font-bold mb-4">Kết quả xổ số</h2>
         <div className="mb-4">
            <label htmlFor="region" className="mr-2">Chọn miền:</label>
            <select id="region" value={region} onChange={handleRegionChange} className="p-2 border">
               <option value="tp.hcm">T.P Hồ Chí Minh</option>
               <option value="ha-noi">Hà Nội</option>
               <option value="an-giang">An Giang</option>
               <option value="binh-duong">Bình Dương</option>
               <option value="dong-nai">Đồng Nai</option>
               <option value="bac-lieu">Bạc Liêu</option>
            </select>
         </div>
         <p className="mb-4">Kết quả xổ số {region === 'tp.hcm' ? 'TP Hồ Chí Minh' : region === 'ha-noi' ? 'Hà Nội'
            :region === 'an-giang' ? 'An Giang' : region === 'binh-duong' ? 'Bình Dương' : region === 'dong-nai' ? 'Đồng Nai' : 'Bạc Liêu'} ngày {date}</p>
         <table className="w-full text-left table-auto border-collapse">
            <thead>
            <tr>
               <th className="px-4 py-2 border font-bold">Tên giải</th>
               <th className="px-4 py-2 border font-bold">Số trúng thưởng</th>
            </tr>
            </thead>
            <tbody>
            {results.map((result) => (
               <tr key={result.name}>
                  <td className="px-4 py-2 border">{result.name}</td>
                  <td className="px-4 py-2 border">{result.prize}</td>
               </tr>
            ))}
            </tbody>
         </table>
      </div>
   );
};

export default LotteryResults;
