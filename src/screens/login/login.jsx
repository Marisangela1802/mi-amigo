import { TextInput, View, Pressable, Text, Image } from "react-native"
import { useState } from "react"
import { IconButton } from "react-native-paper"

import estilos from "../css_geral"
import estiloLogin from "./login_css"

import logo from "./../../../assets/logo.png"

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    return (
        <View style={{height: 800, marginTop:  10}}>
            <IconButton
                icon="arrow-left"
                iconColor="#E06C2D"
                size={29}
                onPress={() => navigation.navigate("entrar")}
            />
            <View style={estiloLogin.paginaLogin}>

                <Image
                    source={logo}
                    style={{ marginBottom: 40 }}

                />
                <View style={estilos.containerInputs}>
                    <TextInput
                        style={estilos.input}
                        placeholder="E-mail"
                        defaultValue={email}
                        onChangeText={(textodigitado) => setEmail(textodigitado)}
                    />
                    <TextInput
                        style={estilos.input}
                        placeholder="Senha"
                        defaultValue={senha}
                        onChangeText={(textodigitado) => setSenha(textodigitado)}
                    />
                </View>
                <Pressable style={estilos.botao} onPress={() => navigation.navigate("App")}>
                    <Text style={estilos.textoBotao}>Login</Text>
                </Pressable>
                <Text style={estiloLogin.textoEsqueciSenha}>Esqueci minha senha</Text>
            </View>
        </View>
    )
}

export default Login