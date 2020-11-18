import React from 'react';

import {Image, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {createStackNavigator} from '@react-navigation/stack';

import LogoInstagran from '../assets/instagram.png';

import Home from '../pages/Home';
//import User from '../pages/User';

export default function HeaderNavigation() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                component={Home}
                name="Home"
                options={{
                    cardStyle: {backgroundColor: '#f5f5f5'},
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
    );
}
