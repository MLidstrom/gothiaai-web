import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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
        path: 'produkter/docuchat',
        element: <DocuChatPage />,
      },
      {
        path: 'produkter/timeslot',
        element: <TimeSlotPage />,
      },
      {
        path: 'produkter/receptionist',
        element: <ReceptionistPage />,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
