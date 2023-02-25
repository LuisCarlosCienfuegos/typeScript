import { StyleSheet, Text, View } from "react-native";
import Login from "./components/Login";
import Person from "./components/Person";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Persons</Text>
      <Person
        name="Luis"
        age={24}
        driverLisense={{ valid: true, expirationDate: 2027 }}
        education={[
          { name: "Curso React Native SDP 2023-1", complete: false },
          { name: "Curso React SDP 2022-3", complete: true },
        ]}
      />
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>------</Text>
      <Person
        name={"Carlos"}
        driverLisense={undefined}
        education={[{ name: "", complete: true }]}
      />

      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Login</Text>
      <Login
        ususario={"luis100Fuegos"}
        password={"1234"}
        tiempoToken={{ valid: true, expirationDate: 2023 }}
        token={[{ name: "sgfdagd151551", complete: true }]}
      />
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>------</Text>
      <Login
        ususario={"usuarioGenerico"}
        password={"1234Admin"}
        tiempoToken={undefined}
        token={[{ name: "", complete: false }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
