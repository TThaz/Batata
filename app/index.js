import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function Index() {

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image
          source={require('../assets/favicon.png')}
          style={{ width: '100%' }}
          resizeMode='contain'
        />
      </View>

      <View style={styles.containerForm}>
        <Text style={styles.title}>Bem vindo ao App da Oficina GarciaAzevedo!</Text>
        <Text style={styles.text}>O que deseja fazer?</Text>

        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button}>
            <Link href={"/login"} style={styles.buttonText}>Login</Link>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Link href={"/cadastro"} style={styles.buttonText}>Cadastro</Link>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#192841',
  },
  containerLogo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },

  containerForm: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12
  },
  text: {
    color: '#a1a1a1',
    marginBottom: 50,
    fontSize: 18
  },
  button: {
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#192841',
    padding: 10,
    width: '35%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  }
})