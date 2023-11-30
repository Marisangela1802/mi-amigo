import { View, TextInput, Pressable, Text, Image } from "react-native";
import { useState } from "react";
// import RNPickerSelect from "react-native-picker-select"

import estilos from "../css_geral";
import estiloCadastro from "./cadastro_css";
import logo from "./../../../assets/logo.png"
import { Picker } from "@react-native-picker/picker";
import { IconButton } from "react-native-paper";

import UsuarioService from "../../crud/service/usuario_service";
import { auth } from "../../crud/firebase/firebase_config";

const Cadastro = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const acaoBotao = () => {
        UsuarioService.signUp(
            auth,
            email,
            senha,
            (userCredential) => {
                console.log(userCredential)
            }
        )
        navigation.navigate("Login")
    }

    return (
        <View style={{height: 800, marginTop:  10}}>
            <IconButton
                icon="arrow-left"
                iconColor="#E06C2D"
                size={29}
                onPress={() => navigation.navigate("entrar")}
            />
            <View style={estiloCadastro.telaCadastro}>
                <Image
                    source={logo}
                    style={{ marginBottom: 40 }}

                />
                <View style={estilos.containerInputs}>
                    <TextInput
                        style={estilos.input}
                        placeholder="E-mail"
                        onChangeText={(email) => setEmail(email)}
                        value={email}
                    />
                    <TextInput
                        style={estilos.input}
                        placeholder="Senha"
                        secureTextEntry={true}
                        onChangeText={(password) => setSenha(password)}
                        value={senha}
                    />
                    <Picker
                        style={estilos.select}
                    // placeholder={{label:"Selecione uma opção"}}
                    >
                        <Picker.Item label="ONG" value="ong" />
                        <Picker.Item label="Protetor" value="protetor" />
                    </Picker>

                </View>
                <Pressable style={estilos.botao} onPress={acaoBotao}>
                    <Text style={estilos.textoBotao}>Criar Conta</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Cadastro