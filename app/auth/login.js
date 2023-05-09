import { View, TextInput, StyleSheet, Text, Button, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';

const Login = () => {

    const router = useRouter()

    const [process, setProcess] = React.useState('register');

    const [mail, onChangeText] = React.useState('johndoe@mail.com');
    const [password, onChangeNumber] = React.useState('somepassword123');

    const sendRegisterData = async () => {
        try {
            const response = await fetch('https://circle-backend-git-main-s-guettner.vercel.app/register', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    mail: "supercoasdaaaaaaaaaasddae@mail.com",
                    password: "Passwort1!"
                })
            })
            if (response.ok) {
                const userID = await response.json()
                await AsyncStorage.setItem('userID', userID);
                const value = await AsyncStorage.getItem('userID');
                router.push('/home/feed')
            } else {
                console.log('first')
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            {process === 'register' ?
                <View style={styles.loginForm}>
                    <Text>Register</Text>
                    <TextInput
                        style={styles.input}
                        editable
                        placeholder='johndoe@mail.com'
                        placeholderTextColor="#808080"
                    />

                    <TextInput
                        secureTextEntry={true}
                        style={styles.input}
                        editable
                        placeholder='Password'
                        placeholderTextColor="#808080"
                    />

                    <TextInput
                        secureTextEntry={true}
                        style={styles.input}
                        editable
                        placeholder='Confirm password'
                        placeholderTextColor="#808080"
                    />

                    <Button
                        onPress={() => sendRegisterData()}
                        title='Create Account' />

                    <Text>
                        Already registered?
                    </Text>

                    <TouchableOpacity onPress={() => {
                        setProcess('login')
                    }} style={styles.appButtonContainer}>
                        <Text style={styles.login}>Sign in</Text>
                    </TouchableOpacity>

                </View>
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