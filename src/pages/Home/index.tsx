import React, {useEffect, useState} from 'react';

import {FlatList, ScrollView} from 'react-native';
import {Container, ContainerStory} from './styles';

import Story from '../../components/Story';

import Post from '../../components/Post';

import TabBottomNavigation from '../../routes/TabBotom';
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
        <>
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
                <TabBottomNavigation />
            </Container>
        </>
    );
};

export default Home;
