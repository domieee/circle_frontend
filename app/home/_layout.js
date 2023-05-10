import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, Text, Image, StyleSheet } from 'react-native';
import Feed from '../home/feed.js';
import Search from './search.js';
import Upload from './upload.js';
import Profile from './profile.js';

const Tab = createBottomTabNavigator();

export default () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                options={{
                    headerBackTitleVisible: false,
                    headerLeft: () => (
                        <Image
                            style={styles.imageHeaderLeft}
                            source={require('../assets/img/circle_logo.png')}
                        />
                    )
                }}
                name="Feed" component={Feed} />
            <Tab.Screen name="Suche" component={Search} />
            <Tab.Screen name="Upload" component={Upload} />
            <Tab.Screen name="Profile" component={Profile} />

        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
    imageHeaderLeft: {
        paddingLeft: 3,
        width: 32,
        height: 32
    }
})
