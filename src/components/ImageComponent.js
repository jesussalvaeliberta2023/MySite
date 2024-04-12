import { Image } from "react-native";

export default function Imagem({ chamando, estilos }) {
  return <Image source={chamando} style={estilos} />;
}
