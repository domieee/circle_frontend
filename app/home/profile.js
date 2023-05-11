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
        <View>
            <View style={styles.profileContainer}>
                <Image style={styles.imageProfile} source={{ uri: profileData?.profileImage }} />
                <Text>{profileData?.fullName}</Text>
                <Text>{profileData?.userDescription}</Text>
                    <TouchableOpacity onPress={handlePress}>
                        <Text>{profileData?.website}</Text>
                    </TouchableOpacity>
            </View>

            <View style={styles.userStatsContainer}>
                <View style={styles.userStats}>
                    <Text>{profileData?.posts?.length}</Text>
                    <Text>Posts</Text>
                </View>
                <View style={styles.userStats}>
                    <Text>{profileData?.followerList?.length}</Text>
                    <Text>Followers</Text>
                </View>
                <View style={styles.userStats}>
                    <Text>{profileData?.followingList?.length}</Text>
                    <Text>Following</Text>
                </View>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    imageProfile: {
        width: 50,
        height: 50,
        borderRadius: 200,
        marginRight: "auto",
        marginLeft:"auto"

    },
    profileContainer:{
        textAlign: 'center',
        paddingLeft:30,
        paddingRight:30
    },
    userStatsContainer:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-evenly"
    },
    userStats:{
        textAlign:'center'
    }

}); 