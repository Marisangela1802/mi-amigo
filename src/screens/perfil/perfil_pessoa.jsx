import { View, Text, TextInput, Pressable, ScrollView } from "react-native";

import { useState } from "react";

import { Picker } from "@react-native-picker/picker";

import estilos from "../css_geral";
import estiloperfil from "./perfil_css";

const PerfilPessoa = () => {
    const [nome, setNome] = useState("")
    const [dataNascimento, setDataNascimento] = useState("")
    const [numero, setNumero] = useState("")
    const [descricao, setDescricao] = useState("")


    return (
        <ScrollView>
            <View style={estiloperfil.pagina}>
                <View style={estilos.containerTexto}>
                    <Text style={estilos.titulo}>Dados Pessoais</Text>
                </View>
                <View>
                    <View>
                        <TextInput
                            style={estilos.input}
                            placeholder="Nome"
                            defaultValue={nome}
                            onChangeText={(textodigitado) => setNome(textodigitado)}
                        />
                        <TextInput
                            style={estilos.input}
                            placeholder="Data de Nascimento"
                            defaultValue={dataNascimento}
                            onChangeText={(textodigitado) => setDataNascimento(textodigitado)}
                        />
                        <TextInput
                            style={estilos.input}
                            placeholder="WhatsApp"
                            defaultValue={numero}
                            onChangeText={(textodigitado) => setNumero(textodigitado)}
                        />
                    </View>
                </View>
                <View style={[estilos.containerTexto, { marginBottom: 0 }]}>
                    <Text style={estilos.titulo}>Você é um protetor?</Text>
                </View>
                <View style={estilos.containerBotoes}>
                    <View>
                        <Pressable style={[estilos.botaoMenor, { marginRight: 20 }]}>
                            <Text style={estilos.textoAlternativoBotao}>Sim</Text>
                        </Pressable>
                    </View>
                    <View>
                        <Pressable style={[estilos.botaoMenor, { backgroundColor: "#E06C2D" }]}>
                            <Text style={estilos.textoBotao}>Não</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={estilos.containerTexto}>
                    <Text style={estilos.titulo}>Informações complementares</Text>
                </View>
                <View style={estilos.containerTexto}>
                    <Text style={estilos.textoExplicativo}>As informações a seguir não são obrigatórias, mas facilitam o seu processo de adoção.</Text>
                </View>
                <View style={estilos.containerTexto}>
                    <Text style={[estilos.titulo, { fontSize: 18 }]}>Qual sua ocupação?</Text>
                </View>
                <TextInput
                    style={estilos.input}
                    placeholder="Digite aqui"
                    defaultValue={nome}
                    onChangeText={(textodigitado) => setNome(textodigitado)}
                />
                <View style={estilos.containerTexto}>
                    <Text style={[estilos.titulo, { fontSize: 18 }]}>Número de pessoas morando com você:</Text>
                </View>
                <TextInput
                    style={estilos.input}
                    placeholder="Digite aqui"
                    defaultValue={nome}
                    onChangeText={(textodigitado) => setNome(textodigitado)}
                />
                <View style={estilos.containerTexto}>
                    <Text style={[estilos.titulo, { fontSize: 18 }]}>Há crianças em sua residência?</Text>
                </View>
                <View style={estilos.containerBotoes}>
                    <View>
                        <Pressable style={[estilos.botaoMenor, { marginRight: 20 }]}>
                            <Text style={estilos.textoAlternativoBotao}>Sim</Text>
                        </Pressable>
                    </View>
                    <View>
                        <Pressable style={estilos.botaoMenor}>
                            <Text style={estilos.textoAlternativoBotao}>Não</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={estilos.containerTexto}>
                    <Text style={[estilos.titulo, { fontSize: 18 }]}>Você mora em:</Text>
                </View>
                <View style={estilos.containerBotoes}>
                    <View>
                        <Pressable style={[estilos.botaoMenor, { marginRight: 20 }]}>
                            <Text style={estilos.textoAlternativoBotao}>Casa</Text>
                        </Pressable>
                    </View>
                    <View>
                        <Pressable style={estilos.botaoMenor}>
                            <Text style={estilos.textoAlternativoBotao}>Apto</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={estilos.containerTexto}>
                    <Text style={[estilos.titulo, { fontSize: 18 }]}>Espaço disponível na residência:</Text>
                </View>
                <Picker 
                    style={estilos.select}
                    // placeholder={{label:"Selecione uma opção"}}
                >
                    <Picker.Item label="Pequeno" value="pequeno"/>
                    <Picker.Item label="Médio" value="medio"/>
                    <Picker.Item label="Grande" value="grande"/>
                </Picker>
                <View style={estilos.containerTexto}>
                    <Text style={[estilos.titulo, { fontSize: 18 }]}>Você possui outros pets?</Text>
                </View>
                <Picker 
                    style={estilos.select}
                    // placeholder={{label:"Selecione uma opção"}}
                >
                    <Picker.Item label="Nenhum" value="nenhum"/>
                    <Picker.Item label="1" value="um"/>
                    <Picker.Item label="2" value="dois"/>
                    <Picker.Item label="3" value="tres"/>
                    <Picker.Item label="4" value="qatro"/>
                    <Picker.Item label="5" value="cinco"/>
                    <Picker.Item label="Mais que cinco" value="mais que cinco"/>
                </Picker>
                <View style={estilos.containerTexto}>
                    <Text style={[estilos.titulo, { fontSize: 18 }]}>Quantas horas por dia você passa em casa?</Text>
                </View>     
                <Picker 
                    style={estilos.select}
                    // placeholder={{label:"Selecione uma opção"}}
                >
                    <Picker.Item label="4 ou menos" value="quatro ou menos"/>
                    <Picker.Item label="4 a 8 horas" value="quatro a oito"/>
                    <Picker.Item label="8 a 12 horas" value="oito a doze"/>
                    <Picker.Item label="12 ou mais" value="doze ou mais"/>
                </Picker>
                <View style={estilos.containerTexto}>
                    <Text style={estilos.titulo}>Detalhes</Text>
                </View>
                <TextInput
                    style={[estilos.inputMaior, { marginBottom: 40 }]}
                    placeholder="Conte aqui um pouco sobre você"
                    multiline={true}
                    numberOfLines={4}
                    defaultValue={descricao}
                    onChangeText={(textodigitado) => setDescricao(textodigitado)}
                />
                <Pressable style={estilos.botao}>
                    <Text style={estilos.textoBotao}>Salvar</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default PerfilPessoa