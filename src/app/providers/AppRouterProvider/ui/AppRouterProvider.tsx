import { createBrowserRouter } from 'react-router-dom'
import App from '../../../App'
import { RootLayout } from '../../../../shared/layout'

export const AppRouterProvider = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
    ],
  },
])
