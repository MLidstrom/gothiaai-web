import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './index.css'
import { Layout } from './components'
import { HomePage, DocuChatPage, TimeSlotPage, ReceptionistPage } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'portal/docuchat',
        element: <DocuChatPage />,
      },
      {
        path: 'portal/timeslot',
        element: <TimeSlotPage />,
      },
      {
        path: 'portal/receptionist',
        element: <ReceptionistPage />,
      },
      // Redirects from old paths
      {
        path: 'produkter/docuchat',
        element: <Navigate to="/portal/docuchat" replace />,
      },
      {
        path: 'produkter/timeslot',
        element: <Navigate to="/portal/timeslot" replace />,
      },
      {
        path: 'produkter/receptionist',
        element: <Navigate to="/portal/receptionist" replace />,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
