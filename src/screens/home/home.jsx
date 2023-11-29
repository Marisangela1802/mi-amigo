import { View, Text } from "react-native"
import { TextInput, ScrollView, Pressable } from "react-native"

// import {Card, Button} from "react-native-paper"

import estilos from "../css_geral"
import estiloHome from "./home_css"


const Home = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={estiloHome.paginaHome}>
                <View style={{ width: "90%", height: 140, backgroundColor: "#E06C2D", marginTop: 30, borderRadius: 8 }}></View>
                <View>
                    <TextInput
                        style={[estilos.input, estiloHome.inputSearchBar, { borderRadius: 8 }]}
                        placeholder="Barra de pesquisa" />
                </View>
                <View style={estiloHome.contentCards}>
                    <View style={estiloHome.cards} >
                        <View style={estiloHome.componentImage}></View>
                        <View style={{ width: "90%", marginTop: 5, marginBottom: 5  }}>
                            <Text style={[estilos.textoGeral, { color: "white", fontSize: 15 }]}>Nome</Text>
                            <Text style={[estilos.textoGeral, { color: "white", fontSize: 15 }]}>Raça</Text>
                            <Text style={[estilos.textoGeral, { color: "white", fontSize: 15 }]}>Idade</Text>
                        </View>
                        <Pressable onPress={()=>navigation.navigate("Detalhes")}>
                            <Text style={[estilos.textoGeral,{fontSize: 15}]}>Ver Mais</Text>
                        </Pressable>
                    </View>
                    
                </View>
            </View>
        </ScrollView>
    )
}

export default Home