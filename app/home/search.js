import { ScrollView, View, TextField, TextInput, Text, Button, Image, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'

const Search = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchUserList = async () => {
            try {
                const userID = await AsyncStorage.getItem('userID');
                console.log(userID)
                const response = await fetch('https://circle-backend-2-s-guettner.vercel.app/api/v1/get-search-list', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userId: userID,
                    }),
                })
                if (response.ok) {
                    const json = response.json();
                    setUsers(json)
                } else {
                    console.log(`Error fetching data: ${response.status}`)
                }
            } catch (err) {
                console.log(err)
            }
        }
        fetchUserList()
    }, [])

    return (
        <>
            <TextInput
                placeholder='Search for users'
                placeholderTextColor="#808080"
                style={styles.input} />
            <ScrollView>
                <Image />
                <View style={styles.userContainer}>

                    <View>
                        <Text>asdasdasd</Text>
                        <Text>asdasdasdsd</Text>
                    </View>
                    <Button title='Button' />
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    userContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    input: {
        paddingLeft: 20,
        height: 30,
        backgroundColor: '#fff'
    }
})

export default Search