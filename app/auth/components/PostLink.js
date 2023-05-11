import { ScrollView, Text, StyleSheet,Image, StatusBar,View } from 'react-native'
import React, { useEffect, useState ,useRef} from 'react'




const PostLink = ({postImage,postId}) => {


   
    return (
        <>
            <Image style={styles.postImage} source={{ uri: postImage }} />

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