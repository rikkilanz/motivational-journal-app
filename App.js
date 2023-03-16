import {Text, View, SafeAreaView } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import HomeScreen from './screens/HomeScreen';
import TimerScreen from './screens/TimerScreen';
import { useState } from 'react';

const Tab = createBottomTabNavigator();

// This will set which screen we are in?
// const [screen, setScreen] = useState(null);

export default function App() {

    //If open app, go entry
    LoadMainScreen();
    // then switch state of the screen to home screen
    //If home screen, it would have the navigator and everything so technically you display navigation container?
    //But how would EntryScreen navigate to HomeScreen
}

function LoadMainScreen(){
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

