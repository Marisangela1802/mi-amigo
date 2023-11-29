import { StyleSheet } from "react-native";

const estiloCadastrarPet = StyleSheet.create({
    tela: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        marginTop: 20
    },
    containerImagem: {
        width: "100%",
        height: 380,
        backgroundColor: "gray",
        marginBottom: 60
    },
    inputs: {
        width: 382,
        height: 40
    },
    containerTexto: {
        width: 382,
        marginBottom: 20
    },
    botao:{
        width: 382,
        height: 40,
        borderRadius: 100,
        marginTop: 30,
        marginBottom: 30
    },
    botaoMenor:{
        width: 184,
        height: 40,
        borderRadius: 8
    },
    componentBotoesinhos:{
        flexDirection: "row",
        width: 382,
        marginBotto: 20
    }
})

export default estiloCadastrarPet