import { View, TextInput, Pressable, Text, Image } from "react-native";
import { useState } from "react";
// import RNPickerSelect from "react-native-picker-select"

import estilos from "../css_geral";
import estiloCadastro from "./cadastro_css";
import logo from "./../../../assets/logo.png"
import { Picker } from "@react-native-picker/picker";

// const imagem = {
//     uri: logo,
//     width: 200
// } 

const Cadastro = ({navigation}) => {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    return (
        <View style={estiloCadastro.telaCadastro}>
            <Image
                source={logo}
                style={{marginBottom: 40}}

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
                <Picker 
                    style={estilos.select}
                    // placeholder={{label:"Selecione uma opção"}}
                >
                    <Picker.Item label="ONG" value="ong"/>
                    <Picker.Item label="Protetor" value="protetor"/>
                </Picker>
                {/* <select name="selecione um" style={estilos.select}>
                    <option value="valor1">Valor 1</option>
                    <option value="valor2">Valor 2</option>
                </select> */}
            </View>
            <Pressable style={estilos.botao} onPress={()=>navigation.navigate("Login")}>
                <Text style={estilos.textoBotao}>Criar Conta</Text>
            </Pressable>
        </View>
    )
}

export default Cadastro