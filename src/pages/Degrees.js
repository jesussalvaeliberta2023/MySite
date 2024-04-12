import { View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import styles from "../style/StyleSheet";
import Texto from "../components/TextComponent";
import Inputs from "../components/InputComponent";
import Botao from "../components/BtnComponent";

export default function Degrees() {
	const navegar = useNavigation();

  const [celsius, setCelsius] = useState("");
  const [resultado, setResultado] = useState("");
  const [vazio, setVazio] = useState("");
  
  const calculo = () => {
    if (celsius != "") {
      const fahrenheit = (parseFloat(celsius) * 9) / 5 + 32;
      setResultado("The value of " + celsius + "°C in Fahrenheit is " + fahrenheit + "°F");
      setVazio("");
      setCelsius("");
    } else {
      setVazio("Can't be null");
			setResultado("");
    }
  };

  return (

		<View style={styles.bodyContainer}>
			<Botao pressionar={() => navegar.navigate("Home")} chamando={require("../assets/images/Casa.png")} estilos={{padding: 10 }} estiloimg={{ width: 40, height: 40, }} />
			<View style={styles.container}>
        {/* <View style={{ terx}}> */}
				  <Texto texto="Convert your Celsius in Fahrenheit" estilos={styles.titulo} />
        {/* </View> */}
				<Texto texto="Put degrees in celsius:" estilos={{ fontWeight: "bold", marginRight: 95 }} />

				<Inputs estilos={styles.input} change={setCelsius} valor={celsius} tipo="numeric" />

				<Botao pressionar={calculo} estilos={styles.btn} estilobtn={{fontWeight: "bold"}} texto="Calculate" />

				<Texto texto={resultado} estilos={{ marginTop: 20 }} />
				<Texto texto={vazio} />
			</View>
		</View>
  );
}