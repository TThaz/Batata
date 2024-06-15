import { React, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Button } from "react-native";
import Title from "../src/components/title";

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
        setUsuarioNovo(data)
        console.log(usuarioNovo)
    }

    async function cadastrarUsuario() {
        if(!!usuarioNovo) {
            try {
                fetch("https://reqres.in/api/users", {
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
            <Title/>
                <View>
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
                {errors.userName && <Text style={styles.labelError}>{errors.userName?.message} </Text>}
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
                {errors.email && <Text style={styles.labelError}>{errors.email?.message} </Text>}
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
                {errors.password && <Text style={styles.labelError}>{errors.password?.message} </Text>}
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
                {errors.cpf && <Text style={styles.labelError}>{errors.cpf?.message} </Text>}
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
                {errors.phoneNumber && <Text style={styles.labelError}>{errors.phoneNumber?.message} </Text>}
                <Button
                    style={styles.buttonOptions}
                    onPress={handleSubmit(teste)}
                    title="Cadastrar"
                />

                <Button
                    style={styles.buttonOptions}
                    onPress={() => cadastrarUsuario()}
                    title="FETCH"
                />
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
export default Cadastro;