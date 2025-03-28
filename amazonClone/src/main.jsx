import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserLoginRegister from './pages/login/UserLoginRegister'

const routerConfig = createBrowserRouter([
  {
    path:'/',
    element: <App />
  },
  {
    path: '/signin',
    element: <UserLoginRegister />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routerConfig}/>
  </StrictMode>,
)
