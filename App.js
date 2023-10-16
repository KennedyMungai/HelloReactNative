import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Some text</Text>
      </View>
      <Text>Chickenwings</Text>
      <Button
        title="Some Button"
        style={styles.button}
        onPress={() => console.log("I have been pressed")}
      />
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
    borderRadius: 3,
    backgroundColor: "#ff8855",
    color: "#000",
  },
});
