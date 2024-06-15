import { React, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, View, Text, TextInput, Pressable, KeyboardAvoidingView, Platform } from "react-native";

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
    userName: yup.string().required('Informe seu nome completo'),
    email: yup.string().email('Informe um email válido').required('Informe seu email'),
    password: yup.string().required('Informe sua senha').min(6, 'A senha deve ter pelo menos 6 digítos'),
    phoneNumber: yup.string().required('Informe um numero de telefone').min(11, 'Informe seu telefone com DDD'),
    cpf: yup.string().required('Informe seu CPF').min(11, 'Informe um CPF válido')
})

function Cadastro() {

    const urlCorreta = 'localhost:3000/register'

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const [usuarioNovo, setUsuarioNovo] = useState()

    function teste(data) {
        setUsuarioNovo({
            gender: 'Male'
        })
        setUsuarioNovo([...usuarioNovo, data])

        console.log(usuarioNovo)
    }

    async function cadastrarUsuario() {
        if (!!usuarioNovo) {
            try {
                fetch(urlCorreta, {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },

                    body: JSON.stringify(usuarioNovo)
                })
                    .then((response) => response.json())
                    .then((data) => console.log(data))
            }
            catch (error) {
                console.log(error)
            }
        }
        else {
            console.log("Confira os dados do usuario")
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Text style={styles.textHeader}>Página Cadastro</Text>
            </View>
            <View style={styles.inputContainer}>
                    <Text style={styles.inputContainerTitle}>Nome de usuário:</Text>
                    <Controller
                        control={control}
                        name="userName"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.inputStyle}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                placeholder="Insira seu nome completo"
                            />
                        )}
                    />
                    {errors.userName && <Text style={styles.labelErrorText}>{errors.userName?.message} </Text>}
                    <Text style={styles.inputContainerTitle}>E-mail:</Text>
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
                    <Text style={styles.inputContainerTitle}>CPF:</Text>
                    <Controller
                        control={control}
                        name="cpf"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.inputStyle}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                placeholder="Insira seu CPF"
                                maxLength={11}
                                keyboardType="numeric"
                            />
                        )}
                    />
                    {errors.cpf && <Text style={styles.labelErrorText}>{errors.cpf?.message} </Text>}
                    <Text style={styles.inputContainerTitle}>Número de telefone:</Text>
                    <Controller
                        control={control}
                        name="phoneNumber"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.inputStyle}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                maxLength={11}
                                placeholder="Insira seu numero de telefone"
                                keyboardType="numeric"
                            />
                        )}
                    />
                    {errors.phoneNumber && <Text style={styles.labelErrorText}>{errors.phoneNumber?.message} </Text>}
                    <Pressable
                        style={styles.buttonOptions}
                        onPress={handleSubmit(teste)}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </Pressable>
            </View>
        </View>
    );
}


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

    inputContainer: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },

    inputContainerTitle: {
        fontSize: 16,
        marginTop: 28,
        color: '#192841'
    },

    inputStyle: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 12
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

export default Cadastro;