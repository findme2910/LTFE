import { Link } from 'react-router-dom';

export default function TopHeader ()  {
   return (
      <div className="bg-gray-100 border-b border-gray-300 py-2 px-4 flex justify-between items-center">
         <div className="flex space-x-2 text-sm text-gray-600">
            <span>Thứ Tư, 12/6/2024</span>
            <span>|</span>
            <span>Hồ Chí Minh</span>
            <span>|</span>
            <span>28°C</span>
            <span>|</span>
            <Link to="/ban-can-biet" className="hover:text-blue-600">Bạn cần biết</Link>
            <span>|</span>
            <Link to="/tien-ich" className="hover:text-blue-600">Tiện ích</Link>
            <span>|</span>
            <Link to="/lien-he" className="hover:text-blue-600">Liên hệ</Link>
         </div>
         <div className="flex space-x-3 text-gray-600">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
               <i className="fab fa-youtube"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
               <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
               <i className="fab fa-twitter"></i>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
               <i className="fab fa-tiktok"></i>
            </a>
         </div>
      </div>
   );
}
