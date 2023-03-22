import {Text, View, SafeAreaView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font'
import { Icon } from 'react-native-elements';

import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

//import screen
import HomeScreen from './screens/HomeScreen';
import TimerScreen from './screens/TimerScreen';
import EntryScreen from './screens/EntryScreen';

const Tab = createBottomTabNavigator();

// This will set which screen we are in?
// const [screen, setScreen] = useState(null);

export default function App() {

    const [fontsLoaded] = useFonts({
      'Baskervville': require('./assets/fonts/Baskervville/Baskervville-Regular.ttf')
    })

    //If open app, go entry
    return (
      LoadMainScreen()
    )
    // then switch state of the screen to home screen
    //If home screen, it would have the navigator and everything so technically you display navigation container?
    //But how would EntryScreen navigate to HomeScreen
}

function LoadMainScreen(){
  return (
    <SafeAreaProvider>
        <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {
              backgroundColor: 'black', 
              height: 75
            },
            tabBarActiveTintColor: 'white',
          }}
        >
          <Tab.Screen
            name='Home'
            component={HomeScreen}
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <Icon 
                  name='home'
                  type='antdesign'
                  color='white'
                />
              )
            }}
          />
          <Tab.Screen
            name='Entry'
            component={EntryScreen}
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <Icon 
                  name='pluscircle'
                  type='antdesign'
                  color='white'
                />
              )
            }}
          />
          <Tab.Screen
            name='Timer'
            component={TimerScreen}
            options={{
              headerShown: false,
              tabBarIcon: () => (
                <Icon 
                  name='clock'
                  type='feather'
                  color='white'
                />
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

