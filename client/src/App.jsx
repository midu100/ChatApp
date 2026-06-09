import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router'
import LayoutOne from './layout/LayoutOne'
import Chat from './pages/Chat'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

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

  return <RouterProvider router={myRoute} />
}

export default App
