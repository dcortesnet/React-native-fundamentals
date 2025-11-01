import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, View } from "react-native";

const imgIcon = require("../../assets/images/react-logo.png");

export default function Images() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={imgIcon}
        style={{ width: 100, height: 100 }}
        resizeMode={"contain"}
      ></Image>
      <Image
      source={{uri: "https://avatars.githubusercontent.com/u/20870950?v=4"}}
      style={{width: 100, height: 100}}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
