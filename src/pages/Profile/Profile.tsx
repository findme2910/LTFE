import React, { useState, useEffect } from 'react';
import { useUser } from '@/context/UserContext';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase.ts';
import axios from 'axios';

const Profile: React.FC = () => {
   const { user, setUser } = useUser();
   const [displayName, setDisplayName] = useState(user?.displayName || '');
   const [gender, setGender] = useState(user?.gender || '');
   const [birthDate, setBirthDate] = useState(user?.birthDate || '');
   const [address, setAddress] = useState(user?.address || '');
   const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber || '');
   const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
   const [uploading, setUploading] = useState(false);
   const [file, setFile] = useState<File | null>(null);
   const [previewURL, setPreviewURL] = useState<string | null>(null);
   const [success, setSuccess] = useState(false);
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

   return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
         <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
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
         </div>
      </div>
   );
};

export default Profile;
