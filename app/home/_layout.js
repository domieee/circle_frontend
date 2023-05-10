import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, Text, Image, StyleSheet, StatusBar } from 'react-native';
import { useState } from 'react';
import Feed from '../home/feed.js';
import Search from './search.js';
import Upload from './upload.js';
import Profile from './profile.js';

const Tab = createBottomTabNavigator();

const [hidden, setHidden] = useState(false);
const [statusBarStyle, setStatusBarStyle] = useState('default');
const [statusBarTransition, setStatusBarTransition] = useState('fade');

export default () => {
    return (
        <>

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
        </>
    );
}
const styles = StyleSheet.create({
    imageHeaderLeft: {
        marginLeft: 10,
        width: 32,
        height: 32
    }
})
