import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    backgroundColor: "#E6E6FA",
  },

  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 250,
  },

  home: {
    flex: 1,
    backgroundColor: "#E6E6FA",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    width: 250,
    height: 35,
    backgroundColor: "#B0C4DE",
    padding: 10,
    borderRadius: 5,
  },

  titulo: {
    fontSize: 25,
    fontStyle: "italic",
    marginBottom: 20,
    textAlign: "center",
  },

  btn: {
    width: 175,
    height: 35,
    borderRadius: 5,
    backgroundColor: "#B0C4DE",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    fontWeight: "bold",
  },

  casa: {
    marginBottom: 300,
  },
});

export default styles;
