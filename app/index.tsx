import { useState } from "react";
import { Text, View, Button } from "react-native";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#e1e0faff",
  },
  title: {
    fontSize: 26,
    color: "#585bfcff",
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    color: "#585bfcff",
  },
  input: {
    width: "80%",
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff"
  }
});

export default function Index() {

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [nomeCompleto, setNomeCompleto] = useState("");

  const juntarNome = () => {
    setNomeCompleto(nome + " " + sobrenome);
  }

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.title}>App Nome Completo</Text>
      <TextInput
        placeholder="Digite primeiro nome"
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        placeholder="Digite sobrenome"
        style={styles.input}
        value={sobrenome}
        onChangeText={setSobrenome}
      />
      <Button
        title="Juntar nome"
        onPress={juntarNome}
      />
      <Text style={styles.text}>Nome Completo: {nomeCompleto}</Text>
    </View>
  );
}