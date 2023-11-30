import { createDrawerNavigator } from "@react-navigation/drawer";
import { IconButton } from "react-native-paper";
import RotasNavbar from "./tab.routes";
// import Main from "./stack.routes";
import Conversas from "../conversas/conversas";
import LoginRoutes from "./login.routes";
import SobreNos from "../sobrenos/sobre_nos";
import PerfilPessoa from "../perfil/perfil_pessoa";

const Drawer = createDrawerNavigator()

const DrawerRoutes = () => {
    return (
        <Drawer.Navigator screenOptions={{ headerStyle: { backgroundColor: "#E06C2D", borderColor: "transparent" }, headerTintColor: "white" }}>
            <Drawer.Screen name="Mi Amigo" component={RotasNavbar} options={{
                drawerIcon: () => <IconButton icon="home"
                    iconColor="#E06C2D"
                    size={28} />, tabBarLabel: "Inicio"
            }} />
            <Drawer.Screen name="Perfil Pessoa" component={PerfilPessoa} options={{
                drawerIcon: () => <IconButton icon="account-circle"
                    iconColor="#E06C2D"
                    size={28} />
            }} />
            <Drawer.Screen name="Chat" component={Conversas} options={{
                drawerIcon: () => <IconButton icon="chat-processing"
                    iconColor="#E06C2D"
                    size={28} />
            }} />
            <Drawer.Screen name="Sobre Nós" component={SobreNos} options={{
                drawerIcon: () => <IconButton icon="information"
                    iconColor="#E06C2D"
                    size={28} />
            }} />
            {/* <Drawer.Screen name="Logout" component={LoginRoutes} options={{
                drawerIcon: () => <IconButton icon="logout"
                    iconColor="#E06C2D"
                    size={28} />
            }} /> */}
        </Drawer.Navigator>
    )
}

export default DrawerRoutes