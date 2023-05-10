import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from '../home/feed.js';
import Search from '../home/search.js';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Search" component={Search} />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator