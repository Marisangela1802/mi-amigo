import { StyleSheet } from "react-native";

const estiloHome = StyleSheet.create({
    paginaHome:{
        flex: 1,
        height: "100%",
        // justifyContent: "space-between",
        alignItems: "center",
        width: "100%",

    },
    componenteBotoes:{
        marginBottom: 30
    },
    inputSearchBar:{
        width: 250,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    contentCards:{
        width:"90%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    cards:{
        width: "100%",
        height: 335,
        borderRadius: 8,
        backgroundColor: "#E06C2D",
        alignItems: "center",
        paddingTop: 5,
        marginBottom: 10,
    },
    componentImage: {
        width: "90%",
        height: 210,
        backgroundColor: "gray"
    }
})

export default estiloHome