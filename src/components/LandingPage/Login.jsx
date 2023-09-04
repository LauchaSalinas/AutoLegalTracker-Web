import React from 'react'
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios';
const host = import.meta.env.VITE_TOKEN_EXCHANGE_SERVER_URL;

function Login() {
//#region Google Login
  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
        // send tokenResponse.code to your backend to get access token
        exchangeCode(tokenResponse.code);
    },
    onFailure: error => console.log(error),
    // indicate google to use the auth-code flow for server side exchange
    flow: 'auth-code',
    // the scopes you want to access
    scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/calendar'
  });

  const exchangeCode = async (oneTimeToken) => {
    console.log(oneTimeToken);
    const tokens = await axios.post(
      (host+"/User/login"), 
        {  
            oneTimeToken,
        },
        {
          withCredentials: true
        }
    );

    console.log(tokens);
  }
  //#endregion

//#region logout
const [userInfo, setUserInfo] = React.useState({
  name: '',
  imgUrl: '',
})

// use the react hook to get the user info


const getUserInfo = async () => {
  const response = await axios.get(
    (host+"/User/Info"),
    {
      withCredentials: true
    }
  );
  setUserInfo(x => ({
    name: response.data.name,
    imgUrl: response.data.imageUrl
  }));
  console.log(response);
}
//#endregion

//#region logout
  const logout = async () => {
    const response = await axios.post(
      (host+"/User/logout"),
      {},
      {
        withCredentials: true
      }
    );
    console.log(response);
  }
//#endregion



  return (
    <div id='divLogin'>
      <h2>Auto Legal Tracker Login</h2>
      <br />
      <button onClick={() => login()}>
        Sign in with Google 🚀{' '}
      </button>
      <button onClick={() => getUserInfo()}>
        Get User info{' '}
      </button>
      <h2>{userInfo.name}</h2>
      <img style={{margin: '15px'}} src={userInfo.imgUrl} />
      <button onClick={() => logout()}>
        Logout ❌{' '}
      </button>
    </div>
  )
}

export default Login
