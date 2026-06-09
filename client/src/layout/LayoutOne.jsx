import { Outlet, useNavigate } from 'react-router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useGetProfileQuery } from '../lib/api'
import { useEffect } from 'react'
import SidebarNav from '../components/SidebarNav'

const LayoutOne = () => {

  return (
    <div className="h-screen w-screen overflow-hidden bg-surface-dark">
      <Outlet />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
      />
    </div>
  )
}

export default LayoutOne