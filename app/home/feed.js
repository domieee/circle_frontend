import { ScrollView, Text, StyleSheet, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Post from '.././auth/components/Post.js'

const Feed = () => {

    const [user, setUser] = useState()
    const [feed, setFeed] = useState([])

    useEffect(() => {
        const getUserIdFromStorage = async () => {
            try {
                const userID = await AsyncStorage.getItem('userID');
                const response = await fetch('https://circle-backend-2-s-guettner.vercel.app/api/v1/get-feed', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        userId: userID
                    })
                })
                const json = await response.json()
                setFeed(json)
                setUser(userID)
            } catch (error) {
                console.log(error)
            }
        }
        getUserIdFromStorage()
    }, [])

    return (
        <>
            
            <ScrollView style={styles.login}>
                {feed.map(post => {
                    console.log(post)
                    return (
                        <>
                            <Text>{post.userName}</Text>
                            <Text>{post.jobTitle}</Text>
                            <Text>{post.comments.length}</Text>
                            <Text>{post.likes}</Text>
                        </>
                    )
                })}
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    login: {
        flex: 1,

    }
})

export default Feed