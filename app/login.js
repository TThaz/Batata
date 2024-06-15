import { React, useState } from "react"
import { Link } from 'expo-router'
import { View, Button, StyleSheet, Text, TextInput } from "react-native"
import { useForm, Controller } from 'react-hook-form'

function Login() {

    const { control, handleSubmit, formState: { errors } } = useForm()

    function logarUsuario() {
        alert('Hello World')
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
                        name="userName"
                        render={({ field: onChange, value }) => (
                            <TextInput
                                style={styles.inputStyle}
                                onChangeText={onChange}
                                value={value}
                                placeholder="Nome de usuário"
                            />
                        )}
                    />
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
            </View>
                <Button
                    style={styles.buttonOptions}
                    onPress={handleSubmit(logarUsuario)}
                    title="Logar"
                />
                <View style={{ flexDirection: 'row' }}>
                    <Text>Não tem uma conta? </Text>
                    <Link href={"/cadastro"}>Cadastre-se</Link>
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
        color:'#fff',
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
});