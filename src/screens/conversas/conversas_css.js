import { StyleSheet } from "react-native";

const estiloConversas = StyleSheet.create({
    tela: {
        width: "100%",
        flex: 1
    },
    containerConversas:{
        height: 84,
        width: "100%",
        borderBottomWidth: 2,
        borderColor: "#9B9B9B",
        alignItems: "center",
        padding: 12,
        flexDirection: "row"
    },
    imagem:{
        width: 50,
        height: 50,
        // borderRadius: "50%",
        backgroundColor: "gray",
        marginRight: 22
    },
    numero:{
        width: 30,
        height: 30,
        // borderRadius: "50%",
        backgroundColor: "#E06C2D",
    }
})

export default estiloConversas