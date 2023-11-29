import { View, Text, Pressable } from "react-native"

import estilos from "../css_geral"
import estiloMeusPets from "./meuspets_css"
import { ScrollView } from "react-native"
import { Icon } from "react-native-paper"

const MeusPets = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={estiloMeusPets.tela}>
                <View>
                    <Pressable style={[estilos.botao, estiloMeusPets.botao]} onPress={() => navigation.navigate("Cadastrar Pet")}>
                        <Icon
                            source="plus"
                            color="white"
                            size={30}
                        />
                        <Text style={[estilos.textoBotao,{marginLeft: 5}]}>Cadastrar pet para adoção</Text>
                    </Pressable>
                </View>
                <View style={estiloMeusPets.componentBotoesinhos}>
                    <Pressable style={[estilos.botaoMenor, estiloMeusPets.botaoMenor, { marginRight: 14 }]}>
                        <Text style={estilos.textoAlternativoBotao}>Disponiveis</Text>
                    </Pressable>
                    <Pressable style={[estilos.botaoMenor, estiloMeusPets.botaoMenor]} >
                        <Text style={estilos.textoAlternativoBotao}>Adotados</Text>
                    </Pressable>
                </View>
                <View>

                </View>
            </View>
        </ScrollView>
    )
}

export default MeusPets