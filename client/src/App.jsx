import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router'
import LayoutOne from './layout/LayoutOne'
import Chat from './pages/Chat'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { ToastContainer } from 'react-toastify'

function App() {
   const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LayoutOne />}>
          <Route index element={<Chat />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </>
    )
  )

  return (
  <div>
    <RouterProvider router={myRoute} />
    <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
      />
  </div>
  )
}

export default App
