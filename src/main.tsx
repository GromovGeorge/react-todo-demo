import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { StoreProvider } from './app/providers/StoreProvider'
import { AppRouterProvider } from './app/providers/AppRouterProvider'
import './app/styles/index.scss'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StoreProvider>
    <RouterProvider router={AppRouterProvider} />
  </StoreProvider>
)
