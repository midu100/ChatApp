import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayoutOne from './layout/LayoutOne'
import Chat from './pages/Chat'

/**
 * App Component - Root application with routing configuration
 * Following the same routing pattern as the Ghorer_Bazar_Clone repo
 */
function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LayoutOne />}>
        <Route index element={<Chat />} />
      </Route>
    )
  )

  return <RouterProvider router={myRoute} />
}

export default App
