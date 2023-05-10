import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Post from '.././auth/components/Post.js'

const Feed = () => {

    const [user, setUser] = useState()

    useEffect(() => {
        const getUserIdFromStorage = async () => {
            try {
                const value = await AsyncStorage.getItem('userID');
                setUser(value)
            } catch (error) {
                console.log(error)
            }
        }
        getUserIdFromStorage()
    }, [])

    return (
        <View style={styles.login}>
            <Post />
            <Text>{user}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    login: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Feed