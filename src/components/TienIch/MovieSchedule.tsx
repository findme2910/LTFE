import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios';

interface Movie {
   name: string;
   times: string[];
   type: string;
}

interface Theater {
   theaterName: string;
   cinemaDate: string;  // Thêm trường cinemaDate
   movies: Movie[];
}

interface Cinema {
   value: string;
   label: string;
}

const cities = [
   { value: "9", label: "Hà Nội" }, { value: "1", label: "Tp. Hồ Chí Minh" },
   { value: "7", label: "Đà Nẵng" }, { value: "3", label: "Đồng Nai" },
   { value: "4", label: "Bình Dương" }, { value: "15", label: "Bà Rịa - Vũng Tàu" }
];

const cinemas: Record<string, Cinema[]> = {
   "9": [
      { value: "126654", label: "Beta Thanh Xuân" },
      { value: "126661", label: "Beta Mỹ Đình" },
      { value: "126782", label: "Beta Giải Phóng" },
      { value: "16779", label: "CGV Vincom Bà Triệu" },
      { value: "115264", label: "CGV Hồ Gươm Plaza" },
      { value: "121799", label: "CGV IPH Hà Nội" },
      { value: "124316", label: "CGV Aeon Long Biên" },
      { value: "124432", label: "CGV Vincom Nguyễn Chí Thanh" },
      { value: "126652", label: "CGV Rice City" },
      { value: "126658", label: "CGV Tràng Tiền Plaza" },
      { value: "126677", label: "CGV Hà Nội Center Point" },
      { value: "126685", label: "CGV Trương Định Plaza" },
      { value: "126690", label: "CGV Times City" }
   ],
   "1": [
      { value: "118366", label: "Cinestar Quốc Thanh" },
      { value: "126681", label: "Cinestar Hai Bà Trưng" },
      { value: "123414", label: "Mega GS Cao Thắng" },
      { value: "126815", label: "Mega GS Lý Chính Thắng" },
      { value: "126763", label: "DCINE Bến Thành" },
      { value: "126807", label: "Beta Quang Trung" },
      { value: "126824", label: "Beta Trần Quang Khải" },
      { value: "126828", label: "Beta Ung Văn Khiêm" },
      { value: "4", label: "Galaxy Nguyễn Du" },
      { value: "6", label: "Galaxy Tân Bình" },
      { value: "19055", label: "Galaxy Kinh Dương Vương" },
      { value: "123269", label: "BHD Star Quang Trung" },
      { value: "116693", label: "CGV Vincom Thủ Đức" },
      { value: "126752", label: "CGV Giga Mall Thủ Đức" }
   ],
   "7": [
      { value: "126635", label: "Starlight Đà Nẵng" },
      { value: "126820", label: "Rio Đà Nẵng" },
      { value: "16782", label: "CGV Vĩnh Trung Plaza" },
      { value: "121767", label: "CGV Vincom Đà Nẵng" },
      { value: "18318", label: "Lotte Đà Nẵng" },
      { value: "126653", label: "Galaxy Đà Nẵng" },
      { value: "126706", label: "Metiz Cinema" }
   ],
   "3": [
      { value: "113299", label: "Beta Biên Hòa" },
      { value: "126759", label: "Beta Long Khánh" },
      { value: "17648", label: "CGV Coopmart Biên Hòa" },
      { value: "115671", label: "CGV BigC Đồng Nai" },
      { value: "18319", label: "Lotte Đồng Nai" },
      { value: "125482", label: "Lotte Biên Hòa" },
      { value: "126821", label: "BHD Star Long Khánh" }
   ],
   "4": [
      { value: "126756", label: "Cinestar Sinh Viên" },
      { value: "126819", label: "Beta Tân Uyên" },
      { value: "113240", label: "Lotte Bình Dương" },
      { value: "126776", label: "Lotte Dĩ An" },
      { value: "114507", label: "CGV Bình Dương Square" },
      { value: "115263", label: "CGV Aeon Canary" }
   ],
   "15": [
      { value: "114087", label: "CGV Lam Sơn Square" },
      { value: "126739", label: "CGV Lapen Center Vũng Tàu" },
      { value: "115401", label: "Lotte Vũng Tàu" },
      { value: "126761", label: "Bà Rịa Cinema" },
      { value: "126764", label: "Việt Phú Cinema" }
   ]
};

const MovieSchedule: React.FC = () => {
   const [schedule, setSchedule] = useState<Theater | null>(null);
   const [selectedCity, setSelectedCity] = useState<string>(cities[0].value);
   const [selectedCinema, setSelectedCinema] = useState<string>(cinemas[selectedCity][0].value);
   const [loading, setLoading] = useState<boolean>(true);

   const fetchData = useCallback(async (city: string, cinema: string) => {
      try {
         setLoading(true);
         const response = await axios.get(`http://localhost:5000/api/movie-schedule?city=${city}&cinema=${cinema}`);
         setSchedule(response.data);
      } catch (error) {
         console.error('Error fetching movie schedule:', error);
      } finally {
         setLoading(false);
      }
   }, []);

   useEffect(() => {
      fetchData(selectedCity, selectedCinema);
   }, [selectedCity, selectedCinema, fetchData]);

   const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const city = event.target.value;
      setSelectedCity(city);
      const defaultCinema = cinemas[city][0].value;
      setSelectedCinema(defaultCinema); // Reset selected cinema when city changes
   };

   const handleCinemaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedCinema(event.target.value);
   };

   const getCinemas = (city: string) => {
      return cinemas[city] || [];
   };

   return (
      <div className="container mx-auto my-8">
         <h1 className="text-2xl font-bold mb-4">Lịch Chiếu Phim</h1>
         <div className="mb-4">
            <select value={selectedCity} onChange={handleCityChange} className="border p-2 mr-2">
               {cities.map((city, index) => (
                  <option key={index} value={city.value}>{city.label}</option>
               ))}
            </select>
            <select value={selectedCinema} onChange={handleCinemaChange} className="border p-2">
               {getCinemas(selectedCity).map((cinema, index) => (
                  <option key={index} value={cinema.value}>{cinema.label}</option>
               ))}
            </select>
         </div>
         {loading ? (
            <p>Loading...</p>
         ) : schedule ? (
            <div className="mb-8">
               <p className="mb-2">{schedule.cinemaDate}</p>
               <h2 className="text-xl font-semibold mt-8">{schedule.theaterName}</h2>
               <table className="min-w-full bg-white border border-gray-200 mt-6">
                  <thead>
                  <tr>
                     <th className="py-2 px-4 bg-gray-200 border-b">Tên phim</th>
                     <th className="py-2 px-4 bg-gray-200 border-b">Giờ chiếu</th>
                     <th className="py-2 px-4 bg-gray-200 border-b">Thể loại</th>
                  </tr>
                  </thead>
                  <tbody>
                  {schedule.movies.map((movie, idx) => (
                     <tr key={idx}>
                        <td className="py-2 px-4 border-b">{movie.name}</td>
                        <td className="py-2 px-4 border-b">{movie.times.join(' ')}</td>
                        <td className="py-2 px-4 border-b">{movie.type}</td>
                     </tr>
                  ))}
                  </tbody>
               </table>
            </div>
         ) : (
            <p>Không có dữ liệu lịch chiếu phim.</p>
         )}
      </div>
   );
};

export default MovieSchedule;
