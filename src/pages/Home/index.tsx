import React, {useEffect, useState, useCallback} from 'react';

import {FlatList, ScrollView} from 'react-native';
import {Container, ContainerStory, Loading} from './styles';

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
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [viewable, setViewable] = useState([]);

    async function loadPage(pageNumber = page, shouldRefresh = false) {
        if (total && pageNumber > total) {
            return;
        }

        setLoading(true);

        const responseFeed = await fetch(
            `http://localhost:3000/feed?_expand=author&_limit=5&_page=${pageNumber}`,
        );

        const data = await responseFeed.json();
        const totalItems = responseFeed.headers.get('X-TOTAL-Count');

        const calc =
            totalItems !== null ? Math.floor(parseFloat(totalItems) / 5) : 0;

        setTotal(calc);

        setPosts(shouldRefresh ? data : [...posts, ...data]);

        setPage(pageNumber + 1);

        const responseAuthors = await fetch('http://localhost:3000/authors');

        const dataAuthors = await responseAuthors.json();

        setAuthors(dataAuthors);

        setLoading(false);
    }

    useEffect(() => {
        loadPage();
    }, []);

    async function refreshList() {
        setRefreshing(true);

        await loadPage(1, true);

        setRefreshing(false);
    }

    const handleViewableChaged = useCallback(({changed}) => {
        setViewable(changed.map(({item}) => item.id));
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
                    onEndReached={() => loadPage()}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={loading && <Loading />}
                    onRefresh={refreshList}
                    refreshing={refreshing}
                    onViewableItemsChanged={handleViewableChaged}
                    viewabilityConfig={{viewAreaCoveragePercentThreshold: 20}}
                    renderItem={({item: post}) => (
                        <Post
                            title={post.author.name}
                            avatar={post.author.avatar}
                            description={post.description}
                            source={post.image}
                            aspectRadio={post.aspectRatio}
                            smallSource={post.small}
                            id={viewable.includes(post.id)}
                        />
                    )}
                />
                <TabBottomNavigation />
            </Container>
        </>
    );
};

export default Home;
