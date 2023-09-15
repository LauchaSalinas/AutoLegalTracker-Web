import React from 'react'
import { useEffect, useState } from 'react'
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
    try {
      console.log(oneTimeToken);
      const tokens = await axios.post(
        (host+"/User/login"), 
          {  
            oneTimeToken: oneTimeToken,
          },
          {
            withCredentials: true
          }
      )
      console.log(tokens);
      setIsPending(true);
      console.log(isPending)
    } catch (error) {
      console.log(error);
    }
  //#endregion
  }
  
  //#region logout
  const [userInfo, setUserInfo] = useState({
    name: '',
    imgUrl: '',
  })

  const [isPending, setIsPending] = useState(false); 

  // use the react hook to get the user info
  const getUserInfo = async () => {
    try {
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
    } catch (error) {
      console.log(error);
    }
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
    setUserInfo({
      name: '',
      imgUrl: '',
    })
    
    setIsPending(false);
  }

  //estado que define si se muestra o no el desplegable de sesión
  const [logoutVisible, setLogoutVisible] = useState(false);
  
  // metodo para cambiar el estado dependiendo del estado actual
  const toggleState = () => {
    setLogoutVisible((prevState) => !prevState);
  };

  useEffect(() => {
    console.log(isPending);
    if(isPending)
      getUserInfo();
  }, [isPending])

//#endregion
  return (
    <div className='p-5 h-10 flex items-center text-sm bg-red-600 text-black font-semibold border-[3px] border-white rounded hover:text-white duration-75 ' id='divLogin'>
    { userInfo.name == '' || userInfo.imgUrl == ''
    ?
      <button 
      className='p-1.5 text-sm'
      onClick={() => login()}
      >
        Sign in with Google 🚀{' '}
      </button>
    :
      <>
      <div className='w-full h-full cursor-pointer flex flex-col justify-star items-center '>
        {/* USER INFO */}
        <div className='w-full h-full flex justify-between items-center' onClick={toggleState}>
          <span className='text-xs font-normal'>{userInfo.name}</span>
          <img className='w-8 rounded-full' src={userInfo.imgUrl} />  
        </div>
        <div>
          {logoutVisible 
          ?
            <button 
              onClick={() => logout()}
              className='h-[80px] ml-5 text-xs font-normal'
            >
              Logout ❌{' '}
            </button>
          : null  
          }
          
        </div>
      </div>
      </>
    } 
    </div>
  )
  
}
export default Login
