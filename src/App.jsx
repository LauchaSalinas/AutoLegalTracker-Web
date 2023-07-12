import React from 'react'
import './App.css'
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios';
const host = import.meta.env.VITE_TOKEN_EXCHANGE_SERVER_URL;

function App() {
  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
        // send tokenResponse.code to your backend to get access token
        exchangeCode(tokenResponse.code);
    },
    onFailure: error => console.log(error),
    // indicate google to use the auth-code flow for server side exchange
    flow: 'auth-code',
  });

  const exchangeCode = async (oneTimeToken) => {
    console.log(oneTimeToken);
    const tokens = await axios.post(
      (host+"/User/login"), 
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
