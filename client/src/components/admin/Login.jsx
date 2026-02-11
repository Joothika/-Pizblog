import React from 'react'
import { login_logo } from '../../assets/asset'
import { UseAuthContext } from '../../context/AuthDataContext'
import { loginText } from '../../assets/constant'
import { adminLoginService } from '../../service/authService'
import { useNavigate } from 'react-router'

const Login = () => {
  const navigate = useNavigate()
  const {email,setEmail,password,setPassword } = UseAuthContext()

  return (
    <section className='grid justify-self-center shadow-xl shadow-primary/50 rounded-md p-6 md:px-10 max-sm:mt-8 max-sm:mb-15 md:my-14'>
        <img src={login_logo} alt="login_logo" className='justify-self-center md:w-30 w-25' />
        <form className='grid grid-rows-[40px_40px] md:grid-rows-[50px_50px] md:gap-y-8 gap-y-4 md:my-10 my-4'>
          <input type="email" placeholder='Email' className='border-b indent-2 w-70 md:w-100 border-ternary outline-none'  value={email} onChange={e => setEmail(e.target.value)}  />
          <input type="password" placeholder='password' className='border-b indent-2 md:w-100 border-ternary outline-none' value={password} onChange={e => setPassword(e.target.value)} />
          <button onClick={e => adminLoginService(e, email, password,navigate)} className='bg-linear-to-b from-primary to-secondary text-white px-7 py-2.5 text-xs mt-4 md:text-lg md:px-12 md:py-2.5 md:mt-6 rounded-lg cursor-pointer'>{loginText}</button>
        </form>
    </section>
  )
}

export default Login