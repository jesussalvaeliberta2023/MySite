import { View, ImageBackground, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../style/StyleSheet";

export default function Home() {
  const navegar = useNavigation();

  return (
    <View style={styles.home}>
      <Button onPress={() => navegar.navigate("Degrees")} title="Degrees" />
    </View>
  );
}