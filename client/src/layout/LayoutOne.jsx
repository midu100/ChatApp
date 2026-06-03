import { Outlet } from 'react-router'

/**
 * LayoutOne - Main layout wrapper for the application
 * Following the same layout pattern as the Ghorer_Bazar_Clone repo
 */
const LayoutOne = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-surface-dark">
      <Outlet />
    </div>
  )
}

export default LayoutOne
