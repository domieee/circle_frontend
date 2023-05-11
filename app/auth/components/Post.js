import { View, Text, Image,StyleSheet } from 'react-native';
import React from 'react'

export default function Post() {
    const imgProfile =
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60';
    const imgPost = "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGFydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  return (
      <View>
          <View style={styles.container}>
              <Image style={styles.imageProfile} source={{ uri: imgProfile }} />
              <View>
                  <Text style={styles.text}>user_name</Text>
                  <Text style={styles.text}>Job title</Text>
              </View>
          </View>
          <View style={styles.postImgContainer}>

          <Image style={styles.imagePost} source={{ uri: imgPost }} />
          </View>
      </View>
  );


}

const styles = StyleSheet.create({
    imageProfile: {
        width:50,
        height:50,
        borderRadius:200,
        marginRight:20
    },
    postImgContainer:{
        padding:20
    },
    imagePost:{
        width:350,
        height:250,
    },
    container:{
        flex:1,
        flexDirection:"row",
        height:10,
        paddingLeft:10,
        paddingTop:10,
        alignItems:"center"
    },
    text:{
        height:20
    }
});