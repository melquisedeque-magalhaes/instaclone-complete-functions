import React, {useEffect, useState} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import IconFondation from 'react-native-vector-icons/Foundation';
import {Image, FlatList, ScrollView, SafeAreaView} from 'react-native';
import {Container, ContainerStory} from './styles';

import Story from '../../components/Story';

import Avatar from '../../assets/avatar.jpeg';

import User from '../User';
import Seach from '../Seach';
import AddPost from '../AddPosts';
import Notification from '../Notification';

import Post from '../../components/Post';

interface AuthorProps {
    id: number;
    name: string;
    avatar: string;
}
interface PostPros {
    id: number;
    image: string;
    small: string;
    aspectRatio: number;
    description: string;
    authorId: number;
    author: AuthorProps;
}

const Home: React.FC = () => {
    const Tab = createBottomTabNavigator();

    const [posts, setPosts] = useState<PostPros[]>([]);
    const [authors, setAuthors] = useState<AuthorProps[]>([]);

    useEffect(() => {
        fetch(
            'http://localhost:3000/feed?_expand=author&_limit=5&_page=1',
        ).then((response) =>
            response.json().then((responseJson) => setPosts(responseJson)),
        );

        fetch('http://localhost:3000/authors').then((res) =>
            res.json().then((resJson) => setAuthors(resJson)),
        );
    }, []);

    return (
        <Container>
            <ContainerStory>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {authors.map((author) => (
                        <Story avatar={author.avatar} key={author.id} />
                    ))}
                </ScrollView>
            </ContainerStory>

            <FlatList
                data={posts}
                keyExtractor={(post) => String(post.id)}
                renderItem={({item: post}) => (
                    <Post
                        title={post.author.name}
                        avatar={post.author.avatar}
                        description={post.description}
                        image={post.image}
                    />
                )}
            />

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
