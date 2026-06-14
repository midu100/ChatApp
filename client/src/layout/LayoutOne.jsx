import { Outlet, useNavigate } from 'react-router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useGetProfileQuery } from '../lib/api'
import { useEffect } from 'react'
import SidebarNav from '../components/SidebarNav'

const LayoutOne = () => {
  const { data, error, isLoading } = useGetProfileQuery()
  const navigate = useNavigate()
  console.log('profile from layout:',data)

  useEffect(() => {
    if (!isLoading && error) {
      return navigate('/login')
    }
  }, [isLoading, error, navigate])

  if (isLoading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-surface-dark text-white">
        <div className="animate-spin rounded-full h-8 w-8 border-4 border-primary border-t-transparent" />
      </div>
    )
  }

  return (
    <div className="h-screen w-screen overflow-hidden bg-surface-dark flex">
      {/* SideNav (Icon bar + Conversation list) */}
      <SidebarNav profileData={data} />

      {/* Child pages layout */}
      <Outlet />

      
    </div>
  )
}

export default LayoutOne