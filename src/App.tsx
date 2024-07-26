import React,{ useState } from 'react'
import Navigation from './navigation'
import { Provider } from 'react-redux'
import { store } from './store'
import { AuthProvider } from './navigation/AuthContext'
import { LoadingContextProvider } from './components/utils/loadingContext'
import { NotificationTriggerProvider } from './components/utils/notificationTrigger'
import { SocketProvider } from './navigation/SocketContext'
import 'react-notifications-component/dist/theme.css'

function App(): React.JSX.Element {
  return (
    <main>
      <AuthProvider>
        <LoadingContextProvider>
          <NotificationTriggerProvider>
            <Provider store={store}>
              <SocketProvider>
                <Navigation />
              </SocketProvider>
            </Provider>
          </NotificationTriggerProvider>
        </LoadingContextProvider>
      </AuthProvider>
    </main>
  )
}

export default App
