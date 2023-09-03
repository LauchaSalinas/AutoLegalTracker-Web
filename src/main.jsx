import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import './index.css'
import HomePage from './pages/HomePage.jsx'
import { BrowserRouter } from 'react-router-dom'
import RoutesConfig from './routes/RoutesConfig.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  //envolving the app with browser router 
  <BrowserRouter>       
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OAUTH2_CLIENT_ID}>
      <React.StrictMode>
        {/* <App /> */}
        <RoutesConfig/>
      </React.StrictMode>
    </GoogleOAuthProvider>
  </BrowserRouter>
)
