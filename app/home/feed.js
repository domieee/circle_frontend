import { ScrollView, Text, StyleSheet, StatusBar,View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Post from '.././auth/components/Post.js'
import { v4 as uuidv4 } from 'uuid';

const Feed = () => {

    const [user, setUser] = useState()
    const [feed, setFeed] = useState([])

    const handleReq = (json, userID) => {
        setFeed(json);
        setUser(userID);
    };

    useEffect(() => {
        const getUserIdFromStorage = async () => {
            try {
                const userID = await AsyncStorage.getItem('userID');
                const response = await fetch('https://circle-backend-2-s-guettner.vercel.app/api/v1/get-feed', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userId: userID,
                    }),
                });
                const json = await response.json();
                
                setFeed(json);
                setUser(userID); // Move setUser outside the asynchronous function
            } catch (error) {
                console.log(error);
            }
        };
        

        getUserIdFromStorage();
    }, []);

    return (
        <>

            {
                <ScrollView style={styles.login}>
                    {feed.map((post) => {
                        console.log(post);
                        return (
                        <View>
                            <Post 
                            key={uuidv4()}
                            profileImage={post.profileImage} 
                            postImage={post.postImage}
                            userName={post.userName} 
                            jobTitle={post.jobTitle}
                            likes={post.likes}
                            comments={(post.comments.length).toString()}
                            />
                        </View>
                        );
                    })}
                </ScrollView>
            }
        </>
    );
}

const styles = StyleSheet.create({
    login: {
        flex: 1,
        
    }
})

export default Feed