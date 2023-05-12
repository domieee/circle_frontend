import { ScrollView, Text, StyleSheet, StatusBar, View } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Post from '.././auth/components/Post.js'


const Feed = () => {


    const scrollViewRef = useRef(null)
    const [user, setUser] = useState()
    const [feed, setFeed] = useState([])

    const [scrollPosition, setScrollPosition] = useState(0);

    const [reload, setReload] = useState(false)


    console.log(scrollPosition)


    const handleScroll = (nativeEvent) => {
        const { contentOffset } = nativeEvent;
        console.log(contentOffset)
        setScrollPosition(contentOffset.y);
        if (scrollPosition < 18) {
            setReload(true)
            console.log(reload)
            scrollViewRef.current.scrollTo({ y: 20, animated: true })
        } else {
            setReload(false)
        }
    };

    useEffect(() => {
        const getUserIdFromStorage = async () => {
            console.log("rerender")
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
                setUser(userID)
            } catch (error) {
                console.log(error);
            }
        };
        getUserIdFromStorage();
    }, [reload]);

    return (
        <>
            {
                <ScrollView
                    ref={scrollViewRef}
                    contentOffset={{ y: 20 }}
                    scrollEventThrottle={16}
                    onScroll={nativeEvent => handleScroll}
                    overScrollMode="always" style={styles.scrollView}>
                    {feed.map((post) => {
                        return (
                            <View style={styles.postContainer} key={post._id}>
                                <Post
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
    scrollView: {
        flex: 1,
        marginTop: 20,
        paddingTop: 20


    },
    postContainer: {
        paddingTop: 20
    },
    placeHolder: {
        height: 50,
    }
})

export default Feed