import { View, Text, TextInput, Pressable, ScrollView, Image } from "react-native";

import estilos from "../css_geral";
import estiloDetalhesPet from "./detalhespet_css";
import { useState, useEffect } from "react";
import { IconButton, Icon } from "react-native-paper";

import PetService from "../../crud/service/pet_service";
import { firestoreDb } from "../../crud/firebase/firebase_config";
import estiloCadastrarPet from "../cadastrarpet/cadastrarpet_css";

const DetalhesMeuPet = ({ navigation, route }) => {
    const { id, uri, nome, especie, raca, sexo, idade, castrado, porte, vacinado, vermifugado, cuidados, descricao } = route.params
    
    const [uriNovo, setUriNovo] = useState(uri)
    const [nomeNovo, setNomeNovo] = useState(nome)
    const [especieNovo, setEspecieNovo] = useState(especie)
    const [racaNovo, setRacaNovo] = useState(raca)
    const [sexoNovo, setSexoNovo] = useState(sexo)
    const [idadeNovo, setIdadeNovo] = useState(idade)
    const [castradoNovo, setCastradoNovo] = useState(castrado)
    const [porteNovo, setPorteNovo] = useState(porte)
    const [vacinadoNovo, setVacinadoNovo] = useState(vacinado)
    const [vermifugadoNovo, setVermifugadoNovo] = useState(vermifugado)
    const [cuidadosNovo, setCuidadosNovo] = useState(cuidados)
    const [descricaoNovo, setDescricaoNovo] = useState(descricao)

    const botaoPressed1 = () => {
        setCastradoNovo("toggle-switch-outline")
        if (castradoNovo === "toggle-switch-outline") {
            setCastradoNovo("toggle-switch-off-outline")
        }
    }
    const botaoPressed2 = () => {
        setVacinadoNovo("toggle-switch-outline")
        if (vacinadoNovo === "toggle-switch-outline") {
            setVacinadoNovo("toggle-switch-off-outline")
        }
    }
    const botaoPressed3 = () => {
        setVermifugadoNovo("toggle-switch-outline")
        if (vermifugadoNovo === "toggle-switch-outline") {
            setVermifugadoNovo("toggle-switch-off-outline")
        }
    }
    const botaoPressed4 = () => {
        setCuidadosNovo("toggle-switch-outline")
        if (cuidadosNovo === "toggle-switch-outline") {
            setCuidadosNovo("toggle-switch-off-outline")
        }
    }


    const atualizarPet = () => {
        let novosDadosDoPet = {
            uri: uriNovo,
            nome: nomeNovo,
            especie: especieNovo,
            raca: racaNovo,
            sexo: sexoNovo,
            idade: idadeNovo,
            castrado: castradoNovo,
            porte: porteNovo,
            vacinado: vacinadoNovo,
            vermifugado: vermifugadoNovo,
            cuidados: cuidadosNovo,
            descricao: descricaoNovo
        };
        PetService.atualizar(
            firestoreDb,
            id,
            novosDadosDoPet,
            (sucesso) => {
                if (sucesso) {
                    console.log('Pet atualizado com sucesso!');
                    navigation.navigate("Mi Amigo")
                } else {
                    console.log('Ocorreu um erro ao atualizar o pet.');
                }
            }
        )
    }

    const deletarPet = () => {
        PetService.deletar(
            firestoreDb, 
            id, 
            (sucesso) => {
            if (sucesso) {
                console.log('Pet deletado com sucesso!');
            } else {
                console.log('Ocorreu um erro ao deletar o pet.');
            }
        });
    }


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
                    {/* <View style={estilos.containerTexto}>
                        <Text style={[estilos.titulo, { fontSize: 25 }]}>{nome}, {idade}</Text>
                    </View> */}
                    <TextInput
                        style={[estilos.input, estiloCadastrarPet.inputs]}
                        placeholder="Link da Imagem"
                        value={uriNovo}
                        onChangeText={(textodigitado) => setUriNovo(textodigitado)}
                    />
                    <View style={estilos.containerTexto}>
                        <Text style={estilos.titulo}>Descricao</Text>
                    </View>
                    <TextInput
                        style={[estilos.inputMaior, { width: 382, height: 100, color: "black" }]}
                        defaultValue={descricaoNovo}
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={(textodigitado) => setDescricaoNovo(textodigitado)}
                    />
                    <View style={estiloCadastrarPet.containerTexto}>
                        <Text style={estilos.titulo}>Nome</Text>
                    </View>
                    <TextInput
                        style={[estilos.input, estiloCadastrarPet.inputs]}
                        placeholder="Nome"
                        value={nomeNovo}
                        onChangeText={(textodigitado) => setNomeNovo(textodigitado)}
                    />
                  
                    <View>
                        <View style={estiloCadastrarPet.containerTexto}>
                            <Text style={estilos.titulo}>Espécie</Text>
                        </View>
                        <TextInput
                            style={[estilos.input, estiloCadastrarPet.inputs]}
                            placeholder="Especie"
                            value={especieNovo}
                            onChangeText={(textodigitado) => setEspecieNovo(textodigitado)}
                        />
                        {/* <Text style={[estilos.textoGeral, estiloDetalhesPet.texto]}>Espécie: {especie} </Text> */}
                        <View style={estiloCadastrarPet.containerTexto}>
                            <Text style={estilos.titulo}>Raca</Text>
                        </View>
                        <TextInput
                            style={[estilos.input, estiloCadastrarPet.inputs]}
                            placeholder="Cachorro ou Gato"
                            value={racaNovo}
                            onChangeText={(textodigitado) => setRacaNovo(textodigitado)}
                        />
                       
                        <View style={estiloCadastrarPet.containerTexto}>
                            <Text style={estilos.titulo}>Sexo</Text>
                        </View>
                        <TextInput
                            style={[estilos.input, estiloCadastrarPet.inputs]}
                            placeholder="Sexo"
                            value={sexoNovo}
                            onChangeText={(textodigitado) => setSexoNovo(textodigitado)}
                        />
                      
                        <View style={estiloCadastrarPet.containerTexto}>
                            <Text style={estilos.titulo}>Idade</Text>
                        </View>
                        <TextInput
                            style={[estilos.input, estiloCadastrarPet.inputs]}
                            placeholder="Idade"
                            value={idadeNovo}
                            onChangeText={(textodigitado) => setIdadeNovo(textodigitado)}
                        />
                        <View style={estiloCadastrarPet.containerTexto}>
                            <Text style={estilos.titulo}>Porte</Text>
                        </View>
                        <TextInput
                            style={[estilos.input, estiloCadastrarPet.inputs, {marginBottom: 30}]}
                            placeholder="Porte"
                            value={porteNovo}
                            onChangeText={(textodigitado) => setPorteNovo(textodigitado)}
                        />
                        
                        <View style={estilos.botaoToggle}>
                            <Text style={[estilos.textoGeral, estiloDetalhesPet.texto]}>Castrado:  </Text>
                            <Pressable onPress={botaoPressed1}>
                                <Icon
                                    source={castradoNovo}
                                    color="#E06C2D"
                                    size={40}
                                />
                            </Pressable>
                        </View>
                        <View style={estilos.botaoToggle}>
                            <Text style={[estilos.textoGeral, estiloDetalhesPet.texto]}>Vacinado: </Text>
                            <Pressable onPress={botaoPressed2}>
                                <Icon
                                    source={vacinadoNovo}
                                    color="#E06C2D"
                                    size={40}
                                />
                            </Pressable>
                        </View>
                        <View style={estilos.botaoToggle}>
                            <Text style={[estilos.textoGeral, estiloDetalhesPet.texto]}>Vermificação:  </Text>
                            <Pressable onPress={botaoPressed3}>
                                <Icon
                                    source={vermifugadoNovo}
                                    color="#E06C2D"
                                    size={40}
                                />
                            </Pressable>
                        </View>
                        <View style={estilos.botaoToggle}>
                            <Text style={[estilos.textoGeral, estiloDetalhesPet.texto]}>Cuidados especiais:</Text>
                            <Pressable onPress={botaoPressed4}>
                                <Icon
                                    source={cuidadosNovo}
                                    color="#E06C2D"
                                    size={40}
                                />
                            </Pressable>
                        </View>
                        <View style={estilos.containerTexto}>
                            <Text style={estilos.titulo}>Pet de:</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection: "row", width: 385, justifyContent:"space-between", padding: 5}}>
                    <Pressable style={[estilos.botaoMenor, {backgroundColor: "#E06C2D"}]} onPress={atualizarPet}>
                        <Text style={[estilos.textoBotao]}>Salvar</Text>
                    </Pressable>
                    <Pressable style={[estilos.botaoMenor, {backgroundColor: "red"}]} onPress={deletarPet}>
                        <Text style={[estilos.textoBotao]}>Deletar</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    )
}

export default DetalhesMeuPet