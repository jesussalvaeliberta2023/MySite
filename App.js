import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Degrees from "./src/pages/Degrees";
import Home from "./src/pages/Home";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Home" component={Home} /> 
        <Stack.Screen options={{headerShown:false}} name="Degrees" component={Degrees} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}