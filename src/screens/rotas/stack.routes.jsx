import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PerfilPessoa from "../perfil/perfil_pessoa";

const Stack = createNativeStackNavigator()

const Main = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Group>
                <Stack.Screen name="Meu Perfil" component={PerfilPessoa} />
                {/* <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Cadastre-se" component={Cadastro} /> */}
            </Stack.Group>
            {/* <Stack.Group>
                <Stack.Screen name="Home" component={Home} />

            </Stack.Group> */}
        </Stack.Navigator>
    )
}

export default Main