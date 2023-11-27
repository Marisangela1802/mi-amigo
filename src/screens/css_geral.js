import { StyleSheet } from "react-native";

// Botões
const estilos = StyleSheet.create({
    botao: {
        marginBottom: 20,
        width: 300,
        height: 60,
        borderRadius: 20,
        backgroundColor: "#E06C2D",
        justifyContent: "center"
    },
    botaoMenor: {
        marginBottom: 20,
        width: 140,
        height: 40,
        borderRadius: 8,
        backgroundColor: "#E7E7E7",
        justifyContent: "center"
    },
    textoBotao: {
        fontSize: 20,
        fontFamily: "Arial",
        fontWeight: "bold",
        textAlign: "center",
        color: "#fff"
    },
    textoAlternativoBotao: {
        fontSize: 20,
        fontFamily: "Arial",
        fontWeight: "bold",
        textAlign: "center",
        color: "#E06C2D"
    },
    containerInputs: {
        marginBottom: 20
    },
    input: {
        fontSize: 20,
        fontFamily: "Arial",
        fontWeight: "500",
        color: "#9B9B9B",
        width: 300,
        height: 60,
        borderWidth: 1,
        borderColor: "#9B9B9B",
        // backgroundColor: "gray", 
        padding: 10,
        borderRadius: 10,
        marginBottom: 20
    },
    inputMaior: {
        fontSize: 20,
        fontFamily: "Arial",
        fontWeight: "500",
        color: "#9B9B9B",
        width: 300,
        height: 230,
        borderWidth: 1,
        borderColor: "#9B9B9B",
        // backgroundColor: "gray", 
        padding: 10,
        borderRadius: 10,
        marginBottom: 20
    },
    select: {
        width: 300,
        fontSize: 20,
        height: 60,
        color: "#9B9B9B",
        padding: 10,
        borderWidth: 2,
        borderColor: "#9B9B9B",
        borderRadius: 10,
        marginBottom: 20
    },
    textoGeral: {
        fontSize: 20,
        fontFamily: "Arial"
    },
    titulo: {
        fontSize: 20,
        fontFamily: "Arial",
        fontWeight: "bold"
    },
    textoExplicativo: {
        fontSize: 16,
        fontFamily: "Arial",
        color: "#9B9B9B"
    },  
    containerTexto:{
        width: 300,
        marginBottom: 20
    },
    containerBotoes:{
        flex: 1,
        width: 300,
        height: 40,
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "space-between",
        marginTop: 9,
        marginBottom: 20,
    },
    botaoToggle: {
        width: 382,
        height: 40,
        backgroundColor: "#E7E7E7",
        marginBottom: 12,
        justifyContent: "center",
        paddingLeft: 24
    }
})

export default estilos