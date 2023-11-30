import { View, Text, TextInput, Pressable, ScrollView, Image } from "react-native"
import { useState } from "react"

import { Picker } from "@react-native-picker/picker";
import { Icon, IconButton } from "react-native-paper";

import estilos from "../css_geral"
import estiloCadastrarPet from "./cadastrarpet_css"

import { firestoreDb } from "../../crud/firebase/firebase_config";
import PetService from "../../crud/service/pet_service";

const CadastrarPet = ({navigation}) => {
    const [nome, setNome] = useState("")
    const [raca, setRaca] = useState("")
    const [descricao, setDescricao] = useState("")
    const [castrado, setCastrado] = useState("toggle-switch-off-outline")
    const [vacinado, setVacinado] = useState("toggle-switch-off-outline")
    const [vermifugado, setVermifugado] = useState("toggle-switch-off-outline")
    const [cuidados, setCuidados] = useState("toggle-switch-off-outline")
    const [especie, setEspecie] = useState("")
    const [sexo, setSexo] = useState("")
    const [porte, setPorte] = useState("")
    const [idade, setIdade] = useState("")
    const [uri, setUri] = useState("")


    
    const cadastrarPet = () => {
        PetService.criar(
            firestoreDb,
            (id)=>{
                console.log(id)
            },
            {uri, nome, especie, raca, sexo, idade, castrado, vacinado, vermifugado, cuidados, porte, descricao},
            navigation.navigate("Mi Amigo")
        )
    }
   

    const botaoPressed1 = () => {
        setCastrado("toggle-switch-outline")
        if(castrado==="toggle-switch-outline"){
            setCastrado("toggle-switch-off-outline")
        }
    }
    const botaoPressed2 = () => {
        setVacinado("toggle-switch-outline")
        if(vacinado==="toggle-switch-outline"){
            setVacinado("toggle-switch-off-outline")
        }
    }
    const botaoPressed3 = () => {
        setVermifugado("toggle-switch-outline")
        if(vermifugado==="toggle-switch-outline"){
            setVermifugado("toggle-switch-off-outline")
        }
    }
    const botaoPressed4 = () => {
        setCuidados("toggle-switch-outline")
        if(cuidados==="toggle-switch-outline"){
            setCuidados("toggle-switch-off-outline")
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
                <View style={estiloCadastrarPet.containerImagem}>
                    
                </View>
                <View style={estiloCadastrarPet.containerTexto}>
                    <Text style={estilos.titulo}>Link da Imagem</Text>
                </View>
                <TextInput
                    style={[estilos.input, estiloCadastrarPet.inputs]}
                    placeholder="Link da Imagem"
                    value={uri}
                    onChangeText={(textodigitado) => setUri(textodigitado)}
                />
                <View style={estiloCadastrarPet.containerTexto}>
                    <Text style={estilos.titulo}>Nome</Text>
                </View>
                <TextInput
                    style={[estilos.input, estiloCadastrarPet.inputs]}
                    placeholder="Nome"
                    value={nome}
                    onChangeText={(textodigitado) => setNome(textodigitado)}
                />
                <View style={estiloCadastrarPet.containerTexto}>
                    <Text style={estilos.titulo}>Espécie</Text>
                </View>
                <TextInput
                    style={[estilos.input, estiloCadastrarPet.inputs]}
                    placeholder="Especie"
                    value={especie}
                    onChangeText={(textodigitado) => setEspecie(textodigitado)}
                />

                <View style={estiloCadastrarPet.containerTexto}>
                    <Text style={estilos.titulo}>Raça</Text>
                </View>
                <TextInput
                    style={[estilos.input, estiloCadastrarPet.inputs]}
                    placeholder="Cachorro ou Gato"
                    value={raca}
                    onChangeText={(textodigitado) => setRaca(textodigitado)}
                />
                <View style={estiloCadastrarPet.containerTexto}>
                    <Text style={estilos.titulo}>Sexo</Text>
                </View>

                <TextInput
                    style={[estilos.input, estiloCadastrarPet.inputs]}
                    placeholder="Sexo"
                    value={sexo}
                    onChangeText={(textodigitado) => setSexo(textodigitado)}
                />
                <View style={estiloCadastrarPet.containerTexto}>
                    <Text style={estilos.titulo}>Idade Estimada</Text>
                </View>
    
                <TextInput
                    style={[estilos.input, estiloCadastrarPet.inputs]}
                    placeholder="Idade"
                    value={idade}
                    onChangeText={(textodigitado) => setIdade(textodigitado)}
                />
                <View style={estilos.botaoToggle}>
                    <Text style={[estilos.textoGeral, { color: "#5E5E5E" }]}>Castrado</Text>
                    <View style={{marginRight: 24}}>
                        <Pressable onPress={botaoPressed1}>
                            <Icon
                                source={castrado}
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
                                source={vacinado}
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
                                source={vermifugado}
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
                                source={cuidados}
                                color="#E06C2D"
                                size={40}
                            />
                        </Pressable>
                    </View>
                </View>

                <View style={estiloCadastrarPet.containerTexto}>
                    <Text style={estilos.titulo}>Porte</Text>
                </View>
             
                <TextInput
                    style={[estilos.input, estiloCadastrarPet.inputs]}
                    placeholder="Porte"
                    value={porte}
                    onChangeText={(textodigitado) => setPorte(textodigitado)}
                />
                <View style={estiloCadastrarPet.containerTexto}>
                    <Text style={estilos.titulo}>Descrição</Text>
                </View>
                <TextInput
                    style={[estilos.inputMaior, { width: 384, marginBottom: 40 }]}
                    placeholder="Conte um pouco mais sobre o pet"
                    multiline={true}
                    numberOfLines={4}
                    value={descricao}
                    onChangeText={(textodigitado) => setDescricao(textodigitado)}
                />
                <Pressable style={estilos.botao} onPress={cadastrarPet}>
                    <Text style={estilos.textoBotao}>Cadastrar</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default CadastrarPet