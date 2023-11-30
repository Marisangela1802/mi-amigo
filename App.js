import "react-native-gesture-handler"
import { PaperProvider } from "react-native-paper"
import { NavigationContainer } from "@react-navigation/native";
import LoginRoutes from './src/screens/rotas/login.routes';

export default function App() {
  return (
    // <Main/>
    <PaperProvider>
      <NavigationContainer>
        <LoginRoutes/>
      </NavigationContainer>
    </PaperProvider>
  )
}
