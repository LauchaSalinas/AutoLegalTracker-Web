import React from 'react'
import './App.css'
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios';

function App() {
  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
        // send tokenResponse.code to your backend to get access token
        exchangeCode(tokenResponse.code);
    },
    onFailure: error => console.log(error),
    flow: 'auth-code',
  });

  const exchangeCode = async (oneTimeToken) => {
    console.log(oneTimeToken);
    const tokens = await axios.post(import.meta.env.dev 
        ? import.meta.env.VITE_TOKEN_EXCHANGE_SERVER_URL_DEV
        : import.meta.env.VITE_TOKEN_EXCHANGE_SERVER_URL, 
        {  
            oneTimeToken,
        });

    console.log(tokens);
  }
  return (
    <div id='divLogin'>
      <h2>Auto Legal Tracker Login</h2>
      <br />
      <button onClick={() => login()}>
        Sign in with Google 🚀{' '}
      </button>
    </div>
  )
}

export default App
