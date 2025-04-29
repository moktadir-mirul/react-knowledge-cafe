import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, Link, RouterProvider } from 'react-router';
import SignUp from './SignUp/SignUp.jsx';
import LogIn from './LogIn/LogIn.jsx';

const router = createBrowserRouter([
  {path:"/", Component: App},
  {path:"/signup", Component:SignUp},
  {path:"/login", Component: LogIn},
  {path: "*", element: <div className='flex flex-col gap-5 justify-center items-center'>
    <h1 className='text-red-700 font-bold text-3xl py-20 w-96 mx-auto text-center'>Page Not Found: <br /> Error 404</h1>
    <Link to={"/"}><button className='btn btn-lg btn-secondary'>Go Back</button></Link>
  </div>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
