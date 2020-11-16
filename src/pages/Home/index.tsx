import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import IconFondation from 'react-native-vector-icons/Foundation';
import {Image} from 'react-native';
import {Container} from './styles';

import Avatar from '../../assets/avatar.jpeg';

import User from '../User';
import Seach from '../Seach';
import AddPost from '../AddPosts';
import Notification from '../Notification';

const Home = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Container>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, size}) => {
                        let iconName = 'home';
                        let colorIcon;

                        if (route.name === 'Home') {
                            iconName = 'home';
                            colorIcon = '#000';
                            return (
                                <IconFondation
                                    name={iconName}
                                    size={size}
                                    color={colorIcon}
                                />
                            );
                        }
                        if (route.name === 'User') {
                            return (
                                <Image
                                    source={Avatar}
                                    width={10}
                                    height={10}
                                    style={{
                                        width: 35,
                                        height: 35,
                                        borderRadius: 50,
                                    }}
                                />
                            );
                        }
                        if (route.name === 'Seach') {
                            iconName = 'search';
                            colorIcon = focused ? '#000' : '#666';
                        } else if (route.name === 'AddPost') {
                            iconName = 'plus-square';
                            colorIcon = focused ? '#000' : '#666';
                        } else if (route.name === 'Notification') {
                            iconName = 'heart';
                            colorIcon = focused ? '#000' : '#666';
                        }
                        return (
                            <Icon
                                name={iconName}
                                size={size}
                                color={colorIcon}
                            />
                        );
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#000',
                    inactiveTintColor: '#666',
                    showLabel: false,
                }}>
                <Tab.Screen name="Home" component={Seach} />
                <Tab.Screen name="Seach" component={Seach} />
                <Tab.Screen name="AddPost" component={AddPost} />
                <Tab.Screen name="Notification" component={Notification} />
                <Tab.Screen name="User" component={User} />
            </Tab.Navigator>
        </Container>
    );
};

export default Home;
