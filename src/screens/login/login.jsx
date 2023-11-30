import { TextInput, View, Pressable, Text, Image } from "react-native"
import { useState } from "react"
import { IconButton } from "react-native-paper"

import estilos from "../css_geral"
import estiloLogin from "./login_css"

import logo from "./../../../assets/logo.png"
import UsuarioService from "../../crud/service/usuario_service"
import { auth } from "../../crud/firebase/firebase_config"

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const acaoBotao = () => {
        UsuarioService.sigIn(
            auth,
            email,
            senha,
            (userCredential)=>{
                console.log(userCredential)
                navigation.navigate("App")
            }
        )
    }

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
                        onChangeText={(email) => setEmail(email)}
                    />
                    <TextInput
                        style={estilos.input}
                        placeholder="Senha"
                        secureTextEntry={true}
                        defaultValue={senha}
                        onChangeText={(senha) => setSenha(senha)}
                    />
                </View>
                <Pressable style={estilos.botao} onPress={acaoBotao}>
                    <Text style={estilos.textoBotao}>Login</Text>
                </Pressable>
                <Text style={estiloLogin.textoEsqueciSenha}>Esqueci minha senha</Text>
            </View>
        </View>
    )
}

export default Login