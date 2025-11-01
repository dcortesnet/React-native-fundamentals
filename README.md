# React native fundamentals

Fundamentals of the React Native framework. Repository with examples and basic exercises about core components such as **View**, **Text**, **Image**, **ScrollView**, and **FlatList**, as well as essential concepts like **state**, **props**, **styles**, and **hooks**. This repository is part of a self-taught supplemental course designed to help students build practical mobile development skills.

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## Run devices

   ```bash
- npm run android
- npm run ios
- npm run web

   ```

## Fundamentals

**Basic elements**

```tsx
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Basic() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Example</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                  // ocupa todo el espacio disponible
    backgroundColor: "#fff",  // fondo blanco
    alignItems: "center",     // centra el contenido horizontalmente
    justifyContent: "center", // centra el contenido verticalmente
  },
});
```

Explain

- StatusBar: viene de Expo y controla la barra de estado (la parte superior del teléfono donde ves la hora, batería, señal, etc.).
- StyleSheet: sirve para crear estilos, similar al CSS pero en formato de objeto JavaScript.
- Text: componente para mostrar texto.
- View: contenedor, equivalente a un <div> en la web.

**images**

```tsx
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
```

**buttons**

```tsx
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
```

**fetch list**

```tsx
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

export default function FetchList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((response) => response.json())
      .then((data) => setPokemons(data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Pokemon List</Text>
      <FlatList
        data={pokemons}
        keyExtractor={(item: any) => item.name}
        renderItem={({ item, index }) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Image
              source={{
                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  index + 1
                }.png`,
              }}
              style={{ width: 50, height: 50, marginRight: 10 }}
            />
            <Text style={{ fontSize: 18 }}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  item: {
    fontSize: 18,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});
```
