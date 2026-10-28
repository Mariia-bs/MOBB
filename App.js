import { Text, Image, View, Button, StyleSheet } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import MiComponente from "./components/Tag.js"

export default function App() {
  const nombre = 'Vaca Manchas';
  const condicion = true;
  let componente;
  const boton = () => {console.log("LIKE")}
  if (condicion == true) {
    componente = <Button title="LIKE" onPress={boton}/>;
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style = {styles.tarjeta}>
          <Image
            source={{
              uri: 'https://tse4.mm.bing.net/th/id/OIP.WlPCjYxsZbPgwEGt1eX02wAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
            }}
            style={{ width: 200, height: 100 }}
          />
          <View style={styles.fila}>
            <Text style={styles.titleText}> {nombre}</Text>
            <View style={styles.botonContainer}>
            {componente}
            </View>
          </View>
          <Text> Soy una vaca con ganas de explorar el mundo vaquero, si quieres conocerme dale al botón de like</Text>
          <View style={styles.fila}>
            <MiComponente hobbie = "caminar"/>
            <MiComponente hobbie = "cantar"/>
            <MiComponente hobbie = "saltar"/>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", 
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'pink',
    fontWeight: 'bold',
    textAlign: "center", 
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: "center",
  },
  fila: {
    flexDirection: "row",
    gap: 10,
  },
  tarjeta:{
    width: "100%",
    elevation: 4,
    backgroundColor: 'white',
    borderRadius: 4,
    maxWidth: 200,
  },
  tag: {
    borderWidth: 1,        
    borderColor: 'black',   
    borderRadius: 20,
  }
});
