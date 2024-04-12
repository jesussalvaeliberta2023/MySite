import { TextInput } from "react-native";

export default function Inputs({ estilos, change, valor, tipo }) {
  return <TextInput style={estilos} onChangeText={change} value={valor} keyboardType={tipo}/>;
}
