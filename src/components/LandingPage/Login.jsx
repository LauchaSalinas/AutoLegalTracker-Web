import React from 'react'
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios';
const host = import.meta.env.VITE_TOKEN_EXCHANGE_SERVER_URL;

function Login() {
  const login = useGoogleLogin({
    // onSuccess: is when user gives authorization to your app in the google popup
    onSuccess: authorizationCode => {
        // send tokenResponse.code to your backend to get access token
        exchangeCode(authorizationCode.code);
    },
    onFailure: error => console.log(error),
    // indicate google to use the auth-code flow for server side exchange
    flow: 'auth-code',
  });

  const exchangeCode = async (authorizationCode) => {
    console.log(authorizationCode);
    const tokens = await axios.post(
      (host+"/User/login"), 
        {  
          authorizationCode,
        });

    console.log(tokens);
  }
  return (
    <div className='flex justify-center items-center flex-col bg-textColor' id='divLogin'>

      <h2 className='text-white'>Auto Legal Tracker Login</h2>

      <button 
        className='my-[25px] font-bold text-white '
        onClick={() => login()}
      >Sign in with Google 🚀{' '}</button>
    </div>
  )
}

export default Login
