import { View, Text, TextInput, Pressable, ScrollView } from "react-native"
import { useState } from "react"

import { Picker } from "@react-native-picker/picker";
import { Icon, IconButton } from "react-native-paper";

import estilos from "../css_geral"
import estiloCadastrarPet from "./cadastrarpet_css"


const CadastrarPet = ({navigation}) => {
    const [nome, setNome] = useState("")
    const [raca, setRaca] = useState("")
    const [descricao, setDescricao] = useState("")
    const [togle1, setTogle1] = useState("toggle-switch-off-outline")
    const [togle2, setTogle2] = useState("toggle-switch-off-outline")
    const [togle3, setTogle3] = useState("toggle-switch-off-outline")
    const [togle4, setTogle4] = useState("toggle-switch-off-outline")
    const [isPressedCachorro, setIsPressedCachorro] = useState(true)
    const [isPressedGato, setIsPressedGato] = useState(false)
    const [isPressedFemea, setIsPressedFemea] = useState(true)
    const [isPressedMacho, setIsPressedMacho] = useState(false)

    const handlePressCachorro = () => {
        setIsPressedCachorro(!isPressedCachorro)
    }
    const handlePressGato = () => {
        setIsPressedGato(!isPressedGato)
    }
    const handlePressFemea = () => {
        setIsPressedFemea(!isPressedFemea)
    }
    const handlePressMacho = () => {
        setIsPressedMacho(!isPressedMacho)
    }
    
    
   

    const botaoPressed1 = () => {
        setTogle1("toggle-switch-outline")
        if(togle1==="toggle-switch-outline"){
            setTogle1("toggle-switch-off-outline")
        }
    }
    const botaoPressed2 = () => {
        setTogle2("toggle-switch-outline")
        if(togle2==="toggle-switch-outline"){
            setTogle2("toggle-switch-off-outline")
        }
    }
    const botaoPressed3 = () => {
        setTogle3("toggle-switch-outline")
        if(togle3==="toggle-switch-outline"){
            setTogle3("toggle-switch-off-outline")
        }
    }
    const botaoPressed4 = () => {
        setTogle4("toggle-switch-outline")
        if(togle4==="toggle-switch-outline"){
            setTogle4("toggle-switch-off-outline")
        }
    }

    return (
        <ScrollView>
            <View style={estiloCadastrarPet.tela}>
            <View style={{width:"100%", flexDirection: "row", alignItems: "center"}}>
                <IconButton
                    icon="arrow-left"
                    iconColor="#E06C2D"
                    size={29}
                    onPress={() => navigation.navigate("Mi Amigo")}
                />
                <Text style={[estilos.titulo, {color: "#E06C2D"}]}>Cadastrar Pet</Text>
            </View>
                <View style={estiloCadastrarPet.containerImagem}></View>
                <View style={estiloCadastrarPet.containerTexto}>
                    <Text style={estilos.titulo}>Nome</Text>
                </View>
                <TextInput
                    style={[estilos.input, estiloCadastrarPet.inputs]}
                    placeholder="Nome"
                    defaultValue={nome}
                    onChangeText={(textodigitado) => setNome(textodigitado)}
                />
                <View style={estiloCadastrarPet.containerTexto}>
                    <Text style={estilos.titulo}>Espécie</Text>
                </View>
                <View style={estiloCadastrarPet.componentBotoesinhos}>
                    <Pressable style={[estilos.botaoMenor, estiloCadastrarPet.botaoMenor, { marginRight: 14, marginBottom: 0, backgroundColor: isPressedCachorro ? '#E06C2D' : '#E7E7E7' }]} onPress={handlePressCachorro}>
                        <Text style={[estilos.textoAlternativoBotao, {color: isPressedCachorro ? "#E7E7E7" : "#E06C2D" }]}>Cachorro</Text>
                    </Pressable>
                    <Pressable style={[estilos.botaoMenor, estiloCadastrarPet.botaoMenor, {backgroundColor: isPressedGato ? '#E06C2D' : '#E7E7E7' }]} onPress={handlePressGato}>
                        <Text style={[estilos.textoAlternativoBotao, {color: isPressedGato ? "#E7E7E7" : "#E06C2D" }]}>Gato</Text>
                    </Pressable>
                </View>
                <View style={estiloCadastrarPet.containerTexto}>
                    <Text style={estilos.titulo}>Raça</Text>
                </View>
                <TextInput
                    style={[estilos.input, estiloCadastrarPet.inputs]}
                    placeholder="Raca"
                    defaultValue={raca}
                    onChangeText={(textodigitado) => setRaca(textodigitado)}
                />
                <View style={estiloCadastrarPet.containerTexto}>
                    <Text style={estilos.titulo}>Sexo</Text>
                </View>
                <View style={estiloCadastrarPet.componentBotoesinhos}>
                    <Pressable style={[estilos.botaoMenor, estiloCadastrarPet.botaoMenor, { marginRight: 14, marginBottom: 0, backgroundColor: isPressedFemea ? '#E06C2D' : '#E7E7E7' }]} onPress={handlePressFemea}>
                        <Text style={[estilos.textoAlternativoBotao, {color: isPressedFemea ? "#E7E7E7" : "#E06C2D"}]}>Fêmea</Text>
                    </Pressable>
                    <Pressable style={[estilos.botaoMenor, estiloCadastrarPet.botaoMenor, {backgroundColor: isPressedMacho ? '#E06C2D' : '#E7E7E7'}]} onPress={handlePressMacho}>
                        <Text style={[estilos.textoAlternativoBotao, {color: isPressedMacho ? "#E7E7E7" : "#E06C2D"}]}>Macho</Text>
                    </Pressable>
                </View>
                <View style={estiloCadastrarPet.containerTexto}>
                    <Text style={estilos.titulo}>Idade Estimada</Text>
                </View>
                <Picker
                    style={[estilos.select, { width: 382, marginBottom: 30 }]}
                // placeholder={{label:"Selecione uma opção"}}
                >
                    <Picker.Item label="1 ano" value="um ano" />
                    <Picker.Item label="2 anos" value="dois anos" />
                    <Picker.Item label="3 anos" value="tres anos" />
                </Picker>
                <View style={estilos.botaoToggle}>
                    <Text style={[estilos.textoGeral, { color: "#5E5E5E" }]}>Castrado</Text>
                    <View style={{marginRight: 24}}>
                        <Pressable onPress={botaoPressed1}>
                            <Icon
                                source={togle1}
                                color="#E06C2D"
                                size={40}
                            />
                        </Pressable>
                    </View>
                </View>
                <View style={estilos.botaoToggle}>
                    <Text style={[estilos.textoGeral, { color: "#5E5E5E" }]}>Vacinado</Text>
                    <View style={{marginRight: 24}}>
                        <Pressable onPress={botaoPressed2}>
                            <Icon
                                source={togle2}
                                color="#E06C2D"
                                size={40}
                            />
                        </Pressable>
                    </View>
                </View>
                <View style={estilos.botaoToggle}>
                    <Text style={[estilos.textoGeral, { color: "#5E5E5E" }]}>Vermifugado</Text>
                    <View style={{marginRight: 24}}>
                        <Pressable onPress={botaoPressed3}>
                            <Icon
                                source={togle3}
                                color="#E06C2D"
                                size={40}
                            />
                        </Pressable>
                    </View>
                </View>
                <View style={estilos.botaoToggle}>
                    <Text style={[estilos.textoGeral, { color: "#5E5E5E" }]}>Cuidados especiais</Text>
                    <View style={{marginRight: 24}}>
                        <Pressable onPress={botaoPressed4}>
                            <Icon
                                source={togle4}
                                color="#E06C2D"
                                size={40}
                            />
                        </Pressable>
                    </View>
                </View>

                <View style={estiloCadastrarPet.containerTexto}>
                    <Text style={estilos.titulo}>Porte</Text>
                </View>
                <Picker
                    style={[estilos.select, { width: 382 }]}
                // placeholder={{label:"Selecione uma opção"}}
                >
                    <Picker.Item label="Mini" value="um ano" />
                    <Picker.Item label="Pequenos" value="dois anos" />
                    <Picker.Item label="Medio" value="tres anos" />
                    <Picker.Item label="Grande" value="tres anos" />
                    <Picker.Item label="Extra Grande" value="tres anos" />
                </Picker>
                <View style={estiloCadastrarPet.containerTexto}>
                    <Text style={estilos.titulo}>Descrição</Text>
                </View>
                <TextInput
                    style={[estilos.inputMaior, { width: 384, marginBottom: 40 }]}
                    placeholder="Conte um pouco mais sobre o pet"
                    multiline={true}
                    numberOfLines={4}
                    defaultValue={descricao}
                    onChangeText={(textodigitado) => setDescricao(textodigitado)}
                />
                <Pressable style={estilos.botao}>
                    <Text style={estilos.textoBotao}>Cadastrar</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default CadastrarPet