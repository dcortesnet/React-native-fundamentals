import { StatusBar } from "expo-status-bar";
import {
    Button,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from "react-native";

export default function Basic() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button
        title="Pulsa aquí"
        color={"red"}
        onPress={() => alert("Hola")}
      ></Button>
      <TouchableHighlight
        underlayColor={"blue"}
        style={{
          backgroundColor: "black",
          borderRadius: 100,
          width: 200,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => alert("hello")}
      >
        <Text style={{ color: "white" }}>Example</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
