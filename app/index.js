import { Link } from "expo-router";
import { Image, Text, View, StyleSheet, Pressable } from "react-native";

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
          <Link href={"/login"} asChild>
            <Pressable style={styles.buttonOptions}>
              <Text  style={styles.buttonText}>Login</Text>
            </Pressable>
          </Link>
          <Link href={"/cadastro"} asChild>
            <Pressable style={styles.buttonOptions}>
              <Text  style={styles.buttonText}>Cadastro</Text>
            </Pressable>
          </Link>
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
    marginBottom: 30,
    fontSize: 18
  },
  button: {
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#192841',
    padding: 10,
    width: '35%',
  },
  buttonOptions: {
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#192841',
    padding: 10,
    width: '35%',
    margin: 16,
    alignSelf: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  }
})