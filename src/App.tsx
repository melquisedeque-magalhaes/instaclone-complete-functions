import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Image, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import LogoInstagran from './assets/instagram.png';

import {StatusBar} from 'react-native';
import Home from './pages/Home';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: '#f5f5f5',
            },
            headerTitle: () => <Image source={LogoInstagran} />,
            headerTitleAlign: 'center',
            headerRight: () => (
              <TouchableHighlight style={{marginRight: 16}}>
                <Icon name="send" color="#000" size={24} />
              </TouchableHighlight>
            ),
            headerLeft: () => (
              <TouchableHighlight style={{marginLeft: 16}}>
                <Icon name="camera" color="#000" size={24} />
              </TouchableHighlight>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
