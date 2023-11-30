import { View, Text, TextInput, Pressable, ScrollView, Image } from "react-native";

import estilos from "../css_geral";
import estiloDetalhesPet from "./detalhespet_css";
import { useState } from "react";
import { IconButton, Icon } from "react-native-paper";


const DetalhesPet = ({ navigation, route }) => {
    const { uri, nome, especie, raca, sexo, idade, castrado, porte, vacinado, vermifugado, cuidados, descricao } = route.params
    // const [detalhes, setDetalhes] = useState("detalhes aqui")
    return (
        <ScrollView>
            <View style={estiloDetalhesPet.tela}>
                <View style={{ width: "100%", flexDirection: "row", alignItems: "center" }}>
                    <IconButton
                        icon="arrow-left"
                        iconColor="#E06C2D"
                        size={29}
                        onPress={() => navigation.navigate("Mi Amigo")}
                    />
                    <Text style={[estilos.titulo, { color: "#E06C2D" }]}>Detalhes</Text>
                </View>

                <View style={{ width: "100%", height: 252, marginBottom: 40, backgroundColor: "gray" }}>
                    <Image source={{ uri: uri }} style={{ width: "100%", height: "100%" }} />
                </View>
                <View style={{ width: 382 }}>
                    <View style={estilos.containerTexto}>
                        <Text style={[estilos.titulo, {fontSize: 25}]}>{nome}, {idade}</Text>
                    </View>
                    <View style={estilos.containerTexto}>
                            <Text style={estilos.titulo}>Detalhes</Text>
                        </View>
                    {/* <TextInput
                        style={[estilos.inputMaior, { width: 382, height: 100, color: "black" }]}
                        defaultValue={detalhes}
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={(textodigitado) => setDetalhes(textodigitado)}
                    /> */}
                    <Text style={[estilos.inputMaior, { width: 382, height: 100, color: "black" }]}>{descricao}</Text>
                    <View>
                        <View style={estilos.containerTexto}>
                            <Text style={estilos.titulo}>Informações do Pet</Text>
                        </View>
                        <Text style={[estilos.textoGeral, estiloDetalhesPet.texto]}>Espécie: {especie} </Text>
                        <Text style={[estilos.textoGeral, estiloDetalhesPet.texto]}>Raça: {raca} </Text>
                        <Text style={[estilos.textoGeral, estiloDetalhesPet.texto]}>Sexo: {sexo} </Text>
                        <Text style={[estilos.textoGeral, estiloDetalhesPet.texto]}>Porte estimado: {porte} </Text>
                        <View style={[estilos.botaoToggle,  {width: 382, padding: 0}]}>
                            <Text style={[estilos.textoGeral, estiloDetalhesPet.texto]}>Vacinado: </Text>
                            <Icon
                                source={vacinado}
                                color="#E06C2D"
                                size={40}
                            />
                        </View>
                        <View style={[estilos.botaoToggle, {width: 382, padding: 0}]}>
                            <Text style={[estilos.textoGeral, estiloDetalhesPet.texto]}>Vermificação:  </Text>
                            <Icon
                                source={vermifugado}
                                color="#E06C2D"
                                size={40}
                            />
                        </View>
                        <View style={[estilos.botaoToggle,{width: 382, padding: 0}]}>
                            <Text style={[estilos.textoGeral, estiloDetalhesPet.texto]}>Cuidados especiais:</Text>
                            <Icon
                                source={cuidados}
                                color="#E06C2D"
                                size={40}
                            />
                        </View>
                        <View style={[estilos.botaoToggle, {width: 382, padding: 0}]}>
                            <Text style={[estilos.textoGeral, estiloDetalhesPet.texto]}>Castrado:  </Text>
                            <Icon
                                source={castrado}
                                color="#E06C2D"
                                size={40}
                            />
                        </View>
                        <View style={estilos.containerTexto}>
                            <Text style={estilos.titulo}>Pet de:</Text>
                        </View>
                    </View>
                </View>
                <Pressable style={estilos.botao}>
                    <Text style={estilos.textoBotao}>Quero Adotar</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default DetalhesPet