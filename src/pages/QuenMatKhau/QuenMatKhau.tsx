import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react';

const ForgotPassword: React.FC = () => {
   const navigate = useNavigate();
   const [email, setEmail] = useState('');
   const sendResetPasswordEmail = async (email: string) => {
      const auth = getAuth();
      try {
         await sendPasswordResetEmail(auth, email);
         alert("Email đặt lại mật khẩu đã được gửi!");
         navigate('/');
      } catch (error) {
         console.error("Error sending password reset email:", error);
         alert("Đã xảy ra lỗi khi gửi email đặt lại mật khẩu.");
      }
   };


   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      sendResetPasswordEmail(email);
   };

   return (
      <div>
         <h2>Quên mật khẩu</h2>
         <form onSubmit={handleSubmit}>
            <label>
               Email:
               <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <button type="submit">Gửi email đặt lại mật khẩu</button>
         </form>
      </div>
   );
};

export default ForgotPassword;
