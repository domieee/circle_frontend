import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Keychain from 'react-native-keychain';

const Onboarding = () => {
    const router = useRouter()

    useEffect(() => {
        const getToken = () => {
            setTimeout(async () => {
                if (AsyncStorage !== undefined) {
                    try {
                        const user = await AsyncStorage.getItem('user');
                        if (user !== null) {
                            console.log('User logged in')
                            router.push('/home/feed')
                        } else {
                            console.log('User isn`t logged in')
                            router.push('/auth/validation')
                        }
                    } catch (err) {
                        console.log('Error retrieving token: ', err)
                    }
                } else {
                    console.log('Undefined')
                }
            }, 5000)
        }
        getToken();
    }, [])

    return (
        <View>
            <Text>Onboarding</Text>
        </View>
    )
}

export default Onboarding