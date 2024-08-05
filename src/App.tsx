import React, { useEffect } from "react";
import Navigation from "./navigation";
import { Provider } from "react-redux";
import { store } from "./store";
import { pingService } from "joegreen-service-library";
import { AuthProvider } from "./navigation/AuthContext";
import { LoadingContextProvider } from "./components/utils/loadingContext";
import { NotificationTriggerProvider } from "./components/utils/notificationTrigger";
import "react-notifications-component/dist/theme.css";

function App(): React.JSX.Element {
  useEffect(() => {
    pingService
      .ping()
      .then((response) => {
        console.log("Ping request", response);
      })
      .catch((error) => {
        console.error("ping error. Critical Error On the Server", error);
      });
  }, []);
  return (
    <main>
      <AuthProvider>
        <LoadingContextProvider>
          <NotificationTriggerProvider>
            <Provider store={store}>
              <Navigation />
            </Provider>
          </NotificationTriggerProvider>
        </LoadingContextProvider>
      </AuthProvider>
    </main>
  );
}

export default App;
