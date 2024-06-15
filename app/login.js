import { React } from "react"
import { Link } from 'expo-router'
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native"
import { useForm, Controller } from 'react-hook-form'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
    email: yup.string().email('Informe um email válido').required('Informe um email válido'),
    password: yup.string().required('Informe uma senha válida'),
})

function Login() {

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    async function logarUsuario(data) {

        try {
            const login = fetch('localhost:3000/login', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(data)
            })
                .then((response) => alert(response.json()))


            await AsyncStorage.setItem('userConfig', JSON.stringify(login))

            router.replace(`../user/${login.id}`)

        }

        catch (error) {
            alert(error)
        }

    }

    return (
        <View style={styles.container}>

            <View style={styles.containerHeader}>
                <Text style={styles.textHeader}>Página Login</Text>
            </View>

            <View style={styles.loginContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputContainerTitle}>Nome de usuário:</Text>
                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.inputStyle}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                placeholder="Insira seu email"
                                keyboardType="email-address"
                            />
                        )}
                    />
                    {errors.email && <Text style={styles.labelErrorText}>{errors.email?.message} </Text>}
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputContainerTitle}>Senha:</Text>
                    <Controller
                        control={control}
                        name="password"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.inputStyle}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                placeholder="Insira uma senha"
                                secureTextEntry={true}
                            />
                        )}
                    />
                    {errors.password && <Text style={styles.labelErrorText}>{errors.password?.message} </Text>}

                        <Pressable
                            style={styles.buttonOptions}
                            onPress={handleSubmit(logarUsuario)}>
                            <Text style={styles.buttonText}>Logar</Text>
                        </Pressable>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text>Não tem uma conta? </Text>
                    <Link href={"/cadastro"} style={{ color: '#0369a1' }}>Cadastre-se</Link>
                </View>
            </View>
        </View>
    )
}

export default Login;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#192841',
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    textHeader: {
        fontSize: 28,
        color: '#fff',
        fontWeight: 'bold'
    },

    loginContainer: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },

    inputContainerTitle: {
        fontSize: 20,
        marginTop: 28,
        color: '#192841'
    },

    inputStyle: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    labelErrorText: {
        marginBottom: 4,
        color: '#ef4444'
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
});