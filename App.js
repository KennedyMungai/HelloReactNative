import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View>
      <View></View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#ff8855",
    color: "#000",
  },
  firstInnerView: {
    margin: 16,
    borderWidth: 2,
    borderColor: "orange",
    padding: 16,
    borderRadius: 10,
  },
});
