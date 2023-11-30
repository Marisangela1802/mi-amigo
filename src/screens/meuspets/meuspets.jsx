import { View, Text, Pressable, FlatList, Image } from "react-native"

import estilos from "../css_geral"
import estiloMeusPets from "./meuspets_css"
import { ScrollView } from "react-native"
import { Icon } from "react-native-paper"
import { useState, useEffect } from "react"
import estiloHome from "../home/home_css"

import PetService from "../../crud/service/pet_service"
import { firestoreDb } from "../../crud/firebase/firebase_config"

const MeusPets = ({ navigation }) => {

    useEffect(
        () => {
            PetService.listar(
                firestoreDb,
                (pets) => {
                    setPets(pets)
                }
            )
        },
        []
    )

    const [pets, setPets] = useState([
        // { id: 1, uri: "https://images.pexels.com/photos/15804375/pexels-photo-15804375/free-photo-of-animal-bicho-canino-cachorro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", nome: "auau", especie: "cachorro", raca: "viralata", sexo: "femea", idade: "1 ano", castrato: true, vacinado: true, vermifugado: false, cuidadados: false, porte: "p", descricao: "uma fofa" }
    ])

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
                        <Text style={[estilos.textoBotao, { marginLeft: 5 }]}>Cadastrar pet para adoção</Text>
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
                <View style={estiloHome.contentCards}>
                    <FlatList
                        data={pets}
                        renderItem={
                            ({ item }) => {
                                return (
                                    <View style={estiloHome.cards}>
                                        <View style={estiloHome.componentImage}>
                                            <Image source={item.uri} style={{
                                                width: "100%",
                                                height: 210,
                                            }} />
                                        </View>
                                        <View style={{ width: "90%", marginTop: 2, marginBottom: 5 }}>
                                            <Text style={[estilos.textoGeral, { color: "white", fontSize: 15 }]}>Nome: {item.nome}</Text>
                                        </View>
                                        <View style={{ width: "90%", marginTop: 2, marginBottom: 5 }}>
                                            <Text style={[estilos.textoGeral, { color: "white", fontSize: 15 }]}>Raca: {item.raca}</Text>
                                        </View>
                                        <View style={{ width: "90%", marginTop: 2, marginBottom: 5 }}>
                                            <Text style={[estilos.textoGeral, { color: "white", fontSize: 15 }]}>Idade: {item.idade}</Text>
                                        </View>
                                        <Pressable style={estilos.botaoMenor} onPress={() => navigation.navigate("Detalhes Meu Pet", { id: item.id, uri: item.uri, nome: item.nome, especie: item.especie, raca: item.raca, sexo: item.sexo, idade: item.idade, castrado: item.castrado, vacinado: item.vacinado, vermifugado: item.vermifugado, cuidados: item.cuidados, porte: item.porte, descricao: item.descricao })}>
                                            <Text style={[estilos.textoAlternativoBotao, { fontSize: 18, fontWeight: "bold" }]}>Editar</Text>
                                        </Pressable>
                                    </View>
                                )
                            }
                        }
                        keyExtractor={item => item.id}
                    >
                    </FlatList>
                </View>
            </View>
        </ScrollView>
    )
}

export default MeusPets