import { FC, ReactNode } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { persistor, store } from '../config/store'
import { PersistGate } from 'redux-persist/integration/react'

interface StoreProviderProps {
  children: ReactNode
}

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  return (
    <>
      <ReduxProvider store={store}>
        <PersistGate persistor={persistor} loading={`loading...`}>
          {children}
        </PersistGate>
      </ReduxProvider>
    </>
  )
}
