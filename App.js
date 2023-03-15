import {Text, View, SafeAreaView } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import HomeScreen from './screens/HomeScreen';
import TimerScreen from './screens/TimerScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name='Home'
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name='Timer'
            component={TimerScreen}
            options={{headerShown: false}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
}

