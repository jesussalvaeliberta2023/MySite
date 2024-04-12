import { Pressable, Text, Image } from "react-native";

export default function Botao({ estilos, estilobtn, estiloimg, pressionar, texto, chamando }) {
  return (
    <Pressable onPress={pressionar} style={estilos}>
      <Text style={estilobtn}>{texto}</Text>
      <Image source={chamando} style={estiloimg}/>
    </Pressable>
  );
}
