import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator()

import PaginaInicial from "../pagina_inicial/pagina_inicial";
import Login from "../login/login";
import Cadastro from "../cadastro/cadastro";
import DrawerRoutes from "./drawe.routes";
import SobreNos from "../sobrenos/sobre_nos";
import DetalhesPet from "../detalhespet/detalhespet"
import CadastrarPet from "../cadastrarpet/cadastrarpet";

const LoginRoutes = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="entrar" component={PaginaInicial} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Cadastre-se" component={Cadastro} />
                <Stack.Screen name="App" component={DrawerRoutes}/>
                <Stack.Screen name="Sobre Nós" component={SobreNos}/>
                <Stack.Screen name="Detalhes" component={DetalhesPet}/>
                <Stack.Screen name="Cadastrar Pet" component={CadastrarPet}/>
           
        </Stack.Navigator>
    )
}

export default LoginRoutes