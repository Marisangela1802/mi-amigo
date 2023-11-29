import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../home/home";
import Conversas from "../conversas/conversas"
import MeusPets from "../meuspets/meuspets"
import { NavigationContainer } from "@react-navigation/native";
import { IconButton } from "react-native-paper";
const Tab = createBottomTabNavigator()

const RotasNavbar = () => {
        return (
                <Tab.Navigator
                        screenOptions={{ tabBarStyle: { backgroundColor: "#E06C2D", borderColor: "transparent" }, tabBarInactiveTintColor: "#E2E0E0", tabBarActiveTintColor: "white", headerShown: false }} initialRouteName="Home"
                >
                        <Tab.Screen name="Conversas" component={Conversas} options={{
                                tabBarIcon: () => <IconButton icon="chat-processing"
                                        iconColor="white"
                                        size={29} />
                        }} />
                        <Tab.Screen name="Home" component={Home} options={{
                                tabBarIcon: () => <IconButton icon="home"
                                        iconColor="white"
                                        size={29} />
                        }} />
                        <Tab.Screen name="Meus Pets" component={MeusPets} options={{
                                tabBarIcon: () => <IconButton icon="heart"
                                        iconColor="white"
                                        size={29} />
                        }} />

                </Tab.Navigator>

        )
}

export default RotasNavbar