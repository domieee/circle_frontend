import { View, TextInput, StyleSheet, Text, Button, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import Register from './components/Register';

const Login = () => {

    const router = useRouter()

    const [process, setProcess] = React.useState('register');




    useEffect(() => {
        const deleteKey = async () => {
            try {
                await AsyncStorage.removeItem('userID');
            } catch (error) {
                console.log(error)
            }
        }
        deleteKey()
    }, [])



    return (
        <>
            {process === 'register' ?
                <Register process={process} setProcess={setProcess} />
                :
                <View style={styles.loginForm}>
                    <Text>Login</Text>
                    <TextInput
                        style={styles.input}
                        editable
                        placeholder='johndoe@mail.com'
                        placeholderTextColor="#808080" />

                    <TextInput
                        secureTextEntry={true}
                        style={styles.input}
                        editable
                        placeholder='Password'
                        placeholderTextColor="#808080"
                    />

                    <Button title='Login' />

                    <Text>
                        Not a member?
                    </Text>
                    <TouchableOpacity onPress={() => setProcess('register')} style={styles.appButtonContainer}>
                        <Text style={styles.login}>Create Account</Text>
                    </TouchableOpacity>
                </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    loginForm: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        width: 300,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    login: {
        fontSize: 10
    }
})

export default Login

