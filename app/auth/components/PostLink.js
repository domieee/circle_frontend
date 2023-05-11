import { ScrollView, Text, StyleSheet,Image, StatusBar,View } from 'react-native'
import React, { useEffect, useState ,useRef} from 'react'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';



const PostLink = ({postImage,postId}) => {

    const navigation = useNavigation()
   
    return (
        <>
            <TouchableOpacity onPress={() => navigation.navigate('postDetails')}>
            <Image 
            style={styles.postImage} 
            source={{ uri: postImage }} />
            </TouchableOpacity>

        </>
    )
    

}

const styles = StyleSheet.create({
    postImage: {
        height:110,
        width:110,
        borderRadius:10
        
        
    },
    postContainer:{
        paddingTop:20
    },
    placeHolder:{
        height:50,
    }
})

export default PostLink