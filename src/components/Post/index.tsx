import React from 'react';
import {TouchableHighlight} from 'react-native';

import {
    Container,
    Header,
    Title,
    Avatar,
    Descriptions,
    ImagePost,
    ContainerButton,
} from './styles';

import LazyImage from '../LazyImage';

import Icon from 'react-native-vector-icons/Feather';

interface PostProps {
    avatar: string;
    title: string;
    description: string;
    source: string;
    aspectRadio: number;
    smallSource: string;
    id: number;
}

const Post: React.FC = ({
    avatar,
    title,
    description,
    source,
    aspectRadio,
    smallSource,
    id,
}: PostProps) => {
    return (
        <Container>
            <Header>
                <Avatar source={{uri: avatar}} />
                <Title>{title}</Title>
            </Header>
            <Descriptions>{description}</Descriptions>
            <LazyImage
                source={source}
                aspectRadio={aspectRadio}
                smallSource={smallSource}
                shouldLoad={id}
            />
            <ContainerButton>
                <TouchableHighlight style={{marginRight: 16}}>
                    <Icon name="heart" color="#000" size={24} />
                </TouchableHighlight>
                <TouchableHighlight style={{marginRight: 16}}>
                    <Icon name="message-circle" color="#000" size={24} />
                </TouchableHighlight>
                <TouchableHighlight style={{marginRight: 16}}>
                    <Icon name="send" color="#000" size={24} />
                </TouchableHighlight>
            </ContainerButton>
        </Container>
    );
};

export default Post;
