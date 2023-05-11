import {TouchableOpacity, Linking, View, Text ,StyleSheet,Image} from 'react-native'
import React, { useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {

    const [profileData,setProfileData] = useState([])
    const [profileId,setProfileId] = useState()

        const handlePress = () => {
        Linking.openURL(`${profileData?.website}`);
        };

       useEffect(() => {
        const getUserIdFromStorage = async () => {
            try {
                const userId = await AsyncStorage.getItem('userID');
                const response = await fetch('https://circle-backend-2-s-guettner.vercel.app/api/v1/get-profile', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        /******************************************* ändern zu userId variable !!!! ***********************************************************************************************/
                        userId: "645bfb6c5125087f1a3bdc5e",
                    }),
                });
                const userData = await response.json();
                
                setProfileData(userData);
                setProfileId(userID)
            } catch (error) {
                console.log(error);
            }
        };
        
        
        getUserIdFromStorage();
    }, [])
    
    console.log(profileId)
  /*   console.log((profileData?.posts).length) */
    console.log("profileData:", profileData);
    console.log("profileData?.posts:", profileData?.posts);
    console.log("profileData?.posts.length:", profileData?.followingList?.length);
    return (
        <View style={styles.pageContainer}>
            <View style={styles.profileContainer}>
                <Image style={styles.imageProfile} source={{ uri: profileData?.profileImage }} />
                <Text style={styles.userName}>{profileData?.fullName}</Text>
                <Text style={styles.jobTitle}>{profileData?.jobTitle}</Text>
                <Text style={styles.userDescription}>{profileData?.userDescription}</Text>
                    <TouchableOpacity onPress={handlePress}>
                        <Text style={styles.websiteLink}>{profileData?.website}</Text>
                    </TouchableOpacity>
            </View>

            <View style={styles.userStatsContainer}>
                <View style={styles.userStats}>
                    <Text style={styles.statsText}>{profileData?.posts?.length}</Text>
                    <Text style={styles.statsDescription}>Posts</Text>
                </View>
                <View style={styles.statsBorder}>
                    <Text style={styles.statsText}>{profileData?.followerList?.length}</Text>
                    <Text style={styles.statsDescription}>Followers</Text>
                </View>
                <View style={styles.userStats}>
                    <Text style={styles.statsText}>{profileData?.followingList?.length}</Text>
                    <Text style={styles.statsDescription}>Following</Text>
                </View>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    pageContainer:{
        paddingLeft:25,
        paddingRight:25
    },
    imageProfile: {
        width: 170,
        height: 170,
        borderRadius: 200,
        marginRight: "auto",
        marginLeft:"auto",
        marginTop:20,
        marginBottom:10

    },
    jobTitle:{
        marginBottom:15,
    },
    userDescription:{
        marginBottom:10
    },
    userName:{
        fontWeight:"bold",
        fontSize:25,
        marginBottom:10
    },
    profileContainer:{
        textAlign: 'center',
        paddingLeft:30,
        paddingRight:30
    },
    websiteLink:{
        color:"#799df9",
        fontWeight:"bold",
        fontSize:12,
        marginBottom:20
    },
    userStatsContainer:{
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
        paddingBottom:20,
        borderBottomWidth:1,

    },
    userStats:{
        textAlign:'center',
    },
    statsBorder:{
        borderLeftWidth:1,
        borderRightWidth:1,
        textAlign:'center',
        paddingLeft:40,
        paddingRight:40,
        marginLeft:40,
        marginRight:40
    },
    statsText:{
        fontSize:20,
        fontWeight:"bold"
    },
    statsDescription:{
        fontSize:15
    }

}); 