import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View>
      <View>
        <TextInput placeholder="Your Course Goal" />
        <Button title="Add Goal" />
      </View>
      <View></View>
      <StatusBar style="auto" />
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
