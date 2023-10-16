import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.firstInnerView}>
        <Text>Some text</Text>
      </View>
      <Text>Chickenwings</Text>
      <Button
        title="Some Button"
        style={styles.button}
        onPress={() => console.log("I have been pressed")}
      />
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
