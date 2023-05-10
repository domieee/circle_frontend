import { View, TextInput, StyleSheet, Text, Button, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import Register from './components/Register';
import Login from './components/Login'

const validation = () => {

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
                <Login process={process} setProcess={setProcess}/>
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

export default validation

