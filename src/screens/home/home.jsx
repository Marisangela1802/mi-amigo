import { View, Text } from "react-native"
import { TextInput, ScrollView, Pressable } from "react-native"
import { useState, useEffect } from "react"

// import {Card, Button} from "react-native-paper"

import estilos from "../css_geral"
import estiloHome from "./home_css"
import { FlatList } from "react-native"
import { Image } from "react-native"

import PetService from "../../crud/service/pet_service"
import { firestoreDb } from "../../crud/firebase/firebase_config"

const Home = ({ navigation }) => {


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
            <View style={estiloHome.paginaHome}>
                <View style={{ width: "90%", height: 140, backgroundColor: "#E06C2D", marginTop: 30, borderRadius: 8 }}>
                </View>
                <View>
                    <TextInput
                        style={[estilos.input, estiloHome.inputSearchBar, { borderRadius: 8 }]}
                        placeholder="Barra de pesquisa" />
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
                                        <Pressable style={estilos.botaoMenor} onPress={() => navigation.navigate("Detalhes", { uri: item.uri, nome: item.nome, especie: item.especie, raca: item.raca, sexo: item.sexo, idade: item.idade, castrado: item.castrado, vacinado: item.vacinado, vermifugado: item.vermifugado, cuidados: item.cuidados, porte: item.porte, descricao: item.descricao })}>
                                            <Text style={[estilos.textoAlternativoBotao, { fontSize: 15, fontWeight: "bold" }]}>Ver Detalhes</Text>
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

export default Home