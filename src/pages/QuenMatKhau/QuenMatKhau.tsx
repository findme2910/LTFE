import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const ForgotPassword: React.FC = () => {
   const navigate = useNavigate()
   const [email, setEmail] = useState('')
   const sendResetPasswordEmail = async (email: string) => {
      const auth = getAuth()
      try {
         await sendPasswordResetEmail(auth, email)
         alert('Email đặt lại mật khẩu đã được gửi!')
         navigate('/')
      } catch (error) {
         console.error('Error sending password reset email:', error)
         alert('Đã xảy ra lỗi khi gửi email đặt lại mật khẩu.')
      }
   }

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      sendResetPasswordEmail(email)
   }

   return (
      <div className='max-w-sm mx-auto'>
         <h1 className='text-2xl font-bold text-center mb-4'>Quên mật khẩu</h1>
         <form onSubmit={handleSubmit}>
            <label>
               Email:
               <Input
                  type='email'
                  placeholder='Nhập email của bạn'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
               />
            </label>
            <Button type='submit' className='w-full mt-4'>
               Gửi email đặt lại mật khẩu
            </Button>
         </form>
      </div>
   )
}

export default ForgotPassword
