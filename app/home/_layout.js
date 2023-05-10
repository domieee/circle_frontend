import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from 'react-native';
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
                    title: 'Moin',
                    headerRight: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Info"
                            color="#fff" />
                    )
                }}
                name="Feed" component={Feed} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Upload" component={Upload} />
            <Tab.Screen name="Profile" component={Profile} />

        </Tab.Navigator>
    );
}
