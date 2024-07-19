import './login.css'
import React, { useState } from 'react'

import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase.ts';
export default function Login() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [action, setAction] = useState('SignUp');
   const [error,setError]= useState('');
   const handleActionChange = (newAction: string) => {
      setAction(newAction);
      setError('');
   };
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setError('');
      if (action === 'SignUp') {
         if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
         }
         try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert('User registered successfully');
         } catch (error:unknown) {
            const firebaseError = error as { message: string };
            setError(firebaseError.message);
         }
      } else {
         try {
            await signInWithEmailAndPassword(auth, email, password);
            alert('User signed in successfully');
         } catch (error: unknown) {
            const firebaseError = error as { message: string };
            setError(firebaseError.message);
         }
      }
   };


   return (
      <div className='main'>
         <div className='login'>
            <div className='container'>
               <form onSubmit={handleSubmit} className='form-login ng-scope ng-pristine ng-valid'>
                  <ul className='tabs-login'>
                     <li className='tabs-login-item'>
                        <a
                           href='#'
                           className={action === 'SignUp' ? 'submit gray' : 'submit'}
                           onClick={() => {
                              handleActionChange('Login')
                              setAction('Login')
                           }}
                           data-ng-click="message = ''"
                        >
                           Đăng nhập
                        </a>
                     </li>
                     <li className='tabs-login-item'>
                        <a
                           href='#'
                           className={action === 'Login' ? 'submit gray' : 'submit'}
                           onClick={() => {
                              handleActionChange('SignUp')
                              setAction('SignUp')
                           }}
                           data-ng-click="message = ''"
                        >
                           Đăng ký
                        </a>
                     </li>
                  </ul>
                  <div className='login-network'>
                     <div className='login-by-account'>
                        <p className='login-by-subtext'>Bằng tài khoản mạng xã hội</p>
                     </div>
                     <div className='login-social-network'>
                        <a href='#' className='link-network' data-ng-click="authExternalProvider('Google')">
                           <svg
                              className='icon-network'
                              width='25'
                              height='24'
                              viewBox='0 0 25 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                           >
                              <path
                                 d='M20.6664 12.1956C20.6664 11.6445 20.613 11.0756 20.5241 10.5422H12.8262V13.689H17.2352C17.0574 14.7023 16.4707 15.5912 15.5996 16.1601L18.2307 18.2046C19.7775 16.7646 20.6664 14.6668 20.6664 12.1956Z'
                                 fill='#4280EF'
                              ></path>
                              <path
                                 d='M12.8262 20.1603C15.0307 20.1603 16.8796 19.4314 18.2308 18.1869L15.5996 16.1602C14.8707 16.658 13.9284 16.9424 12.8262 16.9424C10.6928 16.9424 8.89719 15.5024 8.2394 13.5823L5.53711 15.6624C6.92381 18.418 9.73277 20.1603 12.8262 20.1603Z'
                                 fill='#34A353'
                              ></path>
                              <path
                                 d='M8.23939 13.5646C7.9016 12.5512 7.9016 11.449 8.23939 10.4356L5.5371 8.33777C4.38151 10.6489 4.38151 13.369 5.5371 15.6624L8.23939 13.5646Z'
                                 fill='#F6B704'
                              ></path>
                              <path
                                 d='M12.8262 7.07548C13.9818 7.0577 15.1196 7.50216 15.9551 8.30218L18.2841 5.95546C16.8085 4.56876 14.8529 3.82207 12.8262 3.83985C9.73277 3.83985 6.92381 5.58211 5.53711 8.33774L8.2394 10.4356C8.89719 8.49774 10.6928 7.07548 12.8262 7.07548Z'
                                 fill='#E54335'
                              ></path>
                           </svg>
                           Google
                        </a>
                        <a href='#' className='link-network' data-ng-click="authExternalProvider('Facebook')">
                           <svg
                              className='icon-network'
                              width='25'
                              height='24'
                              viewBox='0 0 25 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                           >
                              <rect x='0.5' width='24' height='24' rx='12' fill='#1877F2'></rect>
                              <path
                                 d='M17.1711 15.4688L17.7031 12H14.375V9.74906C14.375 8.80008 14.84 7.875 16.3306 7.875H17.8438V4.92188C17.8438 4.92188 16.4705 4.6875 15.1576 4.6875C12.4166 4.6875 10.625 6.34875 10.625 9.35625V12H7.57812V15.4688H10.625V23.8542C11.236 23.9501 11.862 24 12.5 24C13.138 24 13.764 23.9501 14.375 23.8542V15.4688H17.1711Z'
                                 fill='white'
                              ></path>
                           </svg>
                           Facebook
                        </a>
                        <a href='#' className='link-network' data-ng-click="authExternalProvider('Zalo')">
                           <img
                              loading='lazy'
                              src='https://my.thanhnien.vn/image/icon_zalo_full%20color.png'
                              alt=''
                              className='icon-network'
                           />
                           Zalo
                        </a>
                     </div>
                     <div className='login-or'>
                        <p className='test-or'>Hoặc</p>
                     </div>
                  </div>
                  {error && <div className="error-message text-red-700 font-bold">{error}</div>}
                  <div className='login-cnt'>
                     {action === 'Login' ? (
                        <div id='menu_1' className='login-form-1'>
                           <div className='login-email'>
                              <label htmlFor='' className='email-name'>
                                 Email
                              </label>
                              <input
                                 type='text'
                                 className='input-email ng-pristine ng-valid'
                                 value={email}
                                 onChange={(e) => setEmail(e.target.value)}
                                 placeholder='Nhập email'
                              />
                           </div>
                           <div className='login-password'>
                              <label htmlFor='' className='email-name'>
                                 Mật khẩu
                              </label>
                              <input
                                 type='password'
                                 className='input-password ng-pristine ng-valid'
                                 value={password}
                                 onChange={(e) => setPassword(e.target.value)}
                                 placeholder='Nhập mật khẩu'
                              />
                              <a href='#' tabIndex={-1} className='view'>
                                 <svg className='icon-view eye-show'>
                                    <use xlinkHref='#eye-show'></use>
                                 </svg>
                              </a>
                           </div>
                           <a href='/quen-mat-khau' className='forget-password' target='_blank'>
                              Quên mật khẩu?
                           </a>
                           <div className='btn-login'>
                              <button type='submit' className='link-btn'>
                                 Đăng nhập
                              </button>
                           </div>
                        </div>
                     ) : (
                        <div></div>
                     )}
                     {action === 'SignUp' ? (
                        <div id='menu_2' className='login-form-2'>
                           <div className='login-email'>
                              <label htmlFor='' className='email-name'>
                                 Email
                              </label>
                              <input
                                 type='text'
                                 className='input-email ng-pristine ng-valid'
                                 value={email}
                                 onChange={(e) => setEmail(e.target.value)}
                                 placeholder='Nhập email'
                              />
                           </div>
                           <div className='login-password'>
                              <label htmlFor='' className='email-name'>
                                 Mật khẩu
                              </label>
                              <input
                                 type='password'
                                 className='input-password ng-pristine ng-valid'
                                 value={password}
                                 onChange={(e) => setPassword(e.target.value)}
                                 placeholder='Nhập mật khẩu'
                              />
                              <a href='#' tabIndex={-1} className='view'>
                                 <svg className='icon-view eye-show'>
                                    <use xlinkHref='#eye-show'></use>
                                 </svg>
                              </a>
                           </div>
                           <div className='login-password'>
                              <label htmlFor='' className='email-name'>
                                 Xác nhận mật khẩu
                              </label>
                              <input
                                 type='password'
                                 className='input-password ng-pristine ng-valid'
                                 value={confirmPassword}
                                 onChange={(e) => setConfirmPassword(e.target.value)}
                                 placeholder='Nhập lại mật khẩu'
                              />
                              <a href='#' className='view'>
                                 <svg className='icon-view eye-show'>
                                    {/*<use xlink:href="#eye-show" tabIndex="-1"></use>*/}
                                 </svg>
                              </a>
                           </div>
                           <p className='regula'>
                              Khi bấm đăng ký tài khoản bạn đã đồng ý với
                              <a
                                 href='https://thanhnien.vn/stories/chinh-sach-bao-mat'
                                 target='_blank'
                                 className='forget-password'
                              >
                                 quy định
                              </a>
                              của tòa soạn
                           </p>
                           <div className='btn-login'>
                              <button type='submit' className='link-btn'>
                                 Đăng ký tài khoản
                              </button>
                           </div>
                        </div>
                     ) : (
                        <div></div>
                     )}
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}
