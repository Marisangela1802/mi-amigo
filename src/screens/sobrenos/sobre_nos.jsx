import { View, Text } from "react-native";
import estilosobrenos from "./sobrenos";
import estilos from "../css_geral";

const SobreNos = () => {
    return (
        <View style={estilosobrenos.tela}>
            <View style={{ width: "90%" }}>
                <Text style={estilos.textoGeral}>Falar um pouco sobre a equipe</Text>
                
            </View>
        </View>
    )
}

export default SobreNos