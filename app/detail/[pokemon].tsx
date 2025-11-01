import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function PokemonDetail() {
  const { pokemon } = useLocalSearchParams();
  const [data, setData] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    if (!pokemon) return;

    navigation.setOptions({ title: pokemon.toString().toUpperCase() });

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(console.error);
  }, [pokemon]);

  if (!data) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: data.sprites.front_default }}
        style={{ width: 150, height: 150 }}
      />
      <Text style={styles.name}>{data.name}</Text>
      <Text>Height: {data.height}</Text>
      <Text>Weight: {data.weight}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  name: { fontSize: 24, fontWeight: "bold", marginTop: 10 },
});
