import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routes } from '@/pages/routes.tsx'

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={routes} />,
)
