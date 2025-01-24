import { createBrowserRouter, RouterProvider } from 'react-router'

import './App.scss'
import { NotFound } from './components/NotFound'
import Layout from './layout/Layout'
import { HomePage } from './pages/HomePage/HomePage'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
        {
            index: true,
            element: <HomePage />
        }
    ]
}
])

function App() {

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
