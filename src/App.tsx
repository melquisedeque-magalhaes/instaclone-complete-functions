// import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {StatusBar, View} from 'react-native';

import Routes from './routes';

const App = () => {
    return (
        <NavigationContainer>
            <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Routes />
            </View>
        </NavigationContainer>
    );
};

export default App;
