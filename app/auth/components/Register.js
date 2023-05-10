import { View, TextInput, StyleSheet, Text, Button, TouchableOpacity } from 'react-native'
import { useState } from 'react'
const Register = () => {

    const [errorMsg, setErrorMsg] = useState('')
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmationPassword, setConfirmationPassword] = useState('');

    const sendRegisterData = async ({ process, setProcess }) => {
        try {
            const response = await fetch('https://circle-backend-2-s-guettner.vercel.app/api/v1/register', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    mail: mail,
                    password: password,
                    confirmPassword: confirmationPassword
                })
            })
            console.log(await response.json())
            if (response.ok) {
                const userID = await response.json()
                await AsyncStorage.setItem('userID', userID);
                router.push('/home/feed')
            } else if (response.statusCode === 400) {
                const error = await response.json()
                setErrorMsg(error.msg)
            }
        } catch (err) {
            console.log(err, '55')
        }
    }

    return (
        <View style={styles.loginForm}>
            <Text>Register</Text>
            <TextInput
                onChangeText={e => {
                    setMail(e)
                }}
                style={styles.input}
                editable
                placeholder='johndoe@mail.com'
                placeholderTextColor="#808080"
            />

            <TextInput
                onChangeText={e => {
                    setPassword(e)
                }}
                secureTextEntry={true}
                style={styles.input}
                editable
                placeholder='Password'
                placeholderTextColor="#808080"
            />

            <TextInput
                onChangeText={e => {
                    setConfirmationPassword(e)
                }}
                secureTextEntry={true}
                style={styles.input}
                editable
                placeholder='Confirm password'
                placeholderTextColor="#808080"
            />

            <Button
                onPress={() => sendRegisterData()}
                title='Create Account' />

            {errorMsg}

            <Text>
                Already registered?
            </Text>

            <TouchableOpacity onPress={() => {
                setProcess('login')
            }} style={styles.appButtonContainer}>
                <Text style={styles.login}>Sign in</Text>
            </TouchableOpacity>

        </View>
    );
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

export default Register;