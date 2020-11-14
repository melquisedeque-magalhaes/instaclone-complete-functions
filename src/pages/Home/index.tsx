import React from 'react';

import {Container} from './styles';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import User from '../User';
import HomePage from '../Home';
import Icon from 'react-native-vector-icons/Feather';

const Home = () => {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size}) => {
            let iconName = 'home';
            let colorIcon;

            if (route.name === 'Home') {
              iconName = 'home';
              colorIcon = focused ? '#000' : '#fff';
            } else if (route.name === 'User') {
              iconName = 'user';
              colorIcon = focused ? '#000' : '#fff';
            }

            return <Icon name={iconName} size={size} color={colorIcon} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="User" component={User} />
      </Tab.Navigator>
    </>
  );
};

export default Home;
