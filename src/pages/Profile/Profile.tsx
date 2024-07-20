import React, { useState, useEffect } from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import { useUser } from '@/context/UserContext';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase.ts';
import axios from 'axios';
import { FaUser, FaLock, FaBookmark, FaEye, FaSignOutAlt } from 'react-icons/fa'; // Import react-icons
import { updatePassword, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';
import { auth } from '@/firebase.ts';
import { FirebaseError } from 'firebase/app';
import { useNavigate } from 'react-router-dom'
const Profile: React.FC = () => {
   const { user, setUser } = useUser();
   const { logout } = useUser();
   const navigate = useNavigate()
   const [displayName, setDisplayName] = useState(user?.displayName || '');
   const [gender, setGender] = useState(user?.gender || '');
   const [birthDate, setBirthDate] = useState(user?.birthDate || '');
   const [address, setAddress] = useState(user?.address || '');
   const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || '');
   const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
   const [uploading, setUploading] = useState(false);
   const [file, setFile] = useState<File | null>(null);
   const [previewURL, setPreviewURL] = useState<string | null>(null);
   //thông báo thay đổi thành công hay không
   const [success, setSuccess] = useState(false);
   const [currentTab, setCurrentTab] = useState('profile');
// các biến state dùng để đổi mk
   const [currentPassword, setCurrentPassword] = useState('');
   const [newPassword, setNewPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [passwordError, setPasswordError] = useState('');
   const [passwordSuccess, setPasswordSuccess] = useState('');
// hiển thị password
   const [showCurrentPassword, setShowCurrentPassword] = useState(false);
   const [showNewPassword, setShowNewPassword] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
   const handleLogout = async () => {
      try {
         await auth.signOut();
         logout();
         navigate('/');
      } catch (error) {
         console.error('Error logging out: ', error);
      }
   };
   useEffect(() => {
      // Cleanup the preview URL when component unmounts
      return () => {
         if (previewURL) {
            URL.revokeObjectURL(previewURL);
         }
      };
   }, [previewURL]);

   if (!user) {
      return <div>Bạn đang đăng nhập tài khoản bằng anonymous</div>;
   }

   const handleSave = async () => {
      if (user) {
         const userDocRef = doc(db, 'users', user.id);
         const updatedUser = {
            displayName,
            gender,
            birthDate,
            address,
            phoneNumber,
            photoURL
         };
         if (file) {
            setUploading(true);
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'profile_pictures');
            try {
               const response = await axios.post(
                  'https://api.cloudinary.com/v1_1/dvxnipyk4/image/upload',
                  formData
               );
               const downloadURL = response.data.secure_url;
               updatedUser.photoURL = downloadURL;
               setPhotoURL(downloadURL);
               await updateDoc(userDocRef, updatedUser);
               setUser({
                  ...user,
                  ...updatedUser
               });
               setSuccess(true);
            } catch (error) {
               console.error('Upload failed:', error);
            } finally {
               setUploading(false);
            }
         } else {
            await updateDoc(userDocRef, updatedUser);
            setUser({
               ...user,
               ...updatedUser
            });
            setSuccess(true);
         }
      }
   };

   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
         const selectedFile = e.target.files[0];
         setFile(selectedFile);
         const previewURL = URL.createObjectURL(selectedFile);
         setPreviewURL(previewURL);
      }
   };

   //đổi mật khẩu controllers
   const handleChangePassword = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setPasswordError('');
      setPasswordSuccess('');
      if (newPassword !== confirmPassword) {
         setPasswordError('Mật khẩu mới không khớp.');
         return;
      }

      try {
         const user = auth.currentUser;
         if (user && user.email) {
            const credential = EmailAuthProvider.credential(user.email, currentPassword);
            await reauthenticateWithCredential(user, credential);
            await updatePassword(user, newPassword);
            setPasswordSuccess('Mật khẩu đã được thay đổi thành công.');
         }
      } catch (error) {
         if (error instanceof FirebaseError) {
            setPasswordError(error.message);
         } else {
            setPasswordError('Đã xảy ra lỗi. Vui lòng thử lại.');
         }
      }
   };

   return (
      <div className="min-h-screen bg-gray-100 flex p-5">
         <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg w-1/4">
            <div className="flex items-center mb-6">
               <div className="relative flex-shrink-0 w-24 h-24 rounded-full bg-blue-500 text-white flex items-center justify-center text-4xl">
                  {previewURL ? (
                     <img src={previewURL} alt="Avatar" className="w-full h-full rounded-full object-cover" />
                  ) : (
                     photoURL ? (
                        <img src={photoURL} alt="Avatar" className="w-full h-full rounded-full object-cover" />
                     ) : (
                        displayName.charAt(0)
                     )
                  )}
                  <input
                     type="file"
                     className="absolute inset-0 opacity-0 cursor-pointer"
                     onChange={handleFileChange}
                     accept="image/*"
                  />
               </div>
               <div className="ml-4">
                  <h1 className="text-2xl font-bold">{displayName || 'User'}</h1>
               </div>
            </div>
            <nav className="space-y-2 bg-blue-500 p-4 rounded-md text-white">
               <button
                  onClick={() => setCurrentTab('profile')}
                  className={`flex items-center gap-x-2 p-2 rounded transition-all min-w-52 ${currentTab === 'profile' ? 'bg-blue-600' : 'hover:bg-blue-400'}`}
               >
                  <FaUser className="w-5 h-5" />
                  <span>Thông tin tài khoản</span>
               </button>
               <button
                  onClick={() => setCurrentTab('change-password')}
                  className={`flex items-center gap-x-2 p-2 rounded transition-all min-w-52 ${currentTab === 'change-password' ? 'bg-blue-600' : 'hover:bg-blue-400'}`}
               >
                  <FaLock className="w-5 h-5" />
                  <span>Đổi mật khẩu</span>
               </button>
               <button
                  onClick={() => setCurrentTab('saved')}
                  className={`flex items-center gap-x-2 p-2 rounded transition-all min-w-52 ${currentTab === 'saved' ? 'bg-blue-600' : 'hover:bg-blue-400'}`}
               >
                  <FaBookmark className="w-5 h-5" />
                  <span>Tin đã lưu</span>
               </button>
               <button
                  onClick={() => setCurrentTab('viewed')}
                  className={`flex items-center gap-x-2 p-2 rounded transition-all min-w-52 ${currentTab === 'viewed' ? 'bg-blue-600' : 'hover:bg-blue-400'}`}
               >
                  <FaEye className="w-5 h-5" />
                  <span>Tin đã xem</span>
               </button>

               <button onClick={handleLogout} className="flex items-center gap-x-2 p-2 rounded transition-all min-w-52 hover:bg-blue-400">
                  <FaSignOutAlt className="w-5 h-5" />
                  <span>Đăng xuất</span>
               </button>
            </nav>
         </div>
         {/*thông tin tài khoản*/}
         {currentTab === 'profile' && (
            <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 ml-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                  <label className="block text-gray-700">Tên hiển thị</label>
                  <input
                     type="text"
                     className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                     value={displayName}
                     onChange={(e) => setDisplayName(e.target.value)}
                  />
               </div>
               <div>
                  <label className="block text-gray-700">Giới tính</label>
                  <div className="mt-1 flex items-center space-x-4">
                     <label className="inline-flex items-center">
                        <input
                           type="radio"
                           className="form-radio"
                           name="gender"
                           value="male"
                           checked={gender === 'male'}
                           onChange={(e) => setGender(e.target.value)}
                        />
                        <span className="ml-2">Nam</span>
                     </label>
                     <label className="inline-flex items-center">
                        <input
                           type="radio"
                           className="form-radio"
                           name="gender"
                           value="female"
                           checked={gender === 'female'}
                           onChange={(e) => setGender(e.target.value)}
                        />
                        <span className="ml-2">Nữ</span>
                     </label>
                     <label className="inline-flex items-center">
                        <input
                           type="radio"
                           className="form-radio"
                           name="gender"
                           value="other"
                           checked={gender === 'other'}
                           onChange={(e) => setGender(e.target.value)}
                        />
                        <span className="ml-2">Khác</span>
                     </label>
                  </div>
               </div>
               <div>
                  <label className="block text-gray-700">Ngày sinh</label>
                  <input
                     type="date"
                     className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                     value={birthDate}
                     onChange={(e) => setBirthDate(e.target.value)}
                  />
               </div>
               <div>
                  <label className="block text-gray-700">Email</label>
                  <input
                     type="email"
                     className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                     defaultValue={user.email}
                     readOnly
                  />
               </div>
               <div>
                  <label className="block text-gray-700">Điện thoại</label>
                  <input
                     type="text"
                     className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                     value={phoneNumber}
                     onChange={(e) => setPhoneNumber(e.target.value)}
                  />
               </div>
               <div>
                  <label className="block text-gray-700">Địa chỉ</label>
                  <input
                     type="text"
                     className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                     value={address}
                     onChange={(e) => setAddress(e.target.value)}
                  />
               </div>
            </div>
            <div className="mt-6">
               <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition"
                  onClick={handleSave}
                  disabled={uploading}
               >
                  {uploading ? 'Đang tải lên...' : 'Lưu thay đổi'}
               </button>
               {success && <div className="text-green-500 mt-4">Lưu thành công!</div>}
            </div>
         </div>)}
         {currentTab === 'change-password' && (
            <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 ml-5">
               <form onSubmit={handleChangePassword}>
                  <div className="mb-4 relative">
                     <label className="block text-gray-700">Mật khẩu hiện tại</label>
                     <input
                        type={showCurrentPassword ? "text" : "password"}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                     />
                     <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center mt-6"
                        onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                     >
                        {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
                     </button>
                  </div>
                  <div className="mb-4 relative">
                     <label className="block text-gray-700">Mật khẩu mới</label>
                     <input
                        type={showNewPassword ? "text" : "password"}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                     />
                     <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center mt-6"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                     >
                        {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                     </button>
                  </div>
                  <div className="mb-4 relative">
                     <label className="block text-gray-700">Xác nhận mật khẩu mới</label>
                     <input
                        type={showConfirmPassword ? "text" : "password"}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                     />
                     <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center mt-6"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                     >
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                     </button>
                  </div>
                  {passwordError && <div className="text-red-500 mb-4">{passwordError}</div>}
                  {passwordSuccess && <div className="text-green-500 mb-4">{passwordSuccess}</div>}
                  <button
                     type="submit"
                     className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition"
                  >
                     Đổi mật khẩu
                  </button>
               </form>
            </div>
         )}

      </div>
   );
};

export default Profile;