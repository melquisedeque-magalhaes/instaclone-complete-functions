import React from 'react';
import {TouchableHighlight, ImageSourcePropType} from 'react-native';

import {
    Container,
    Header,
    Title,
    Avatar,
    Descriptions,
    ImagePost,
    ContainerButton,
} from './styles';

import Icon from 'react-native-vector-icons/Feather';

import ImgAvatar from '../../assets/avatar.jpeg';

interface PostProps {
    avatar: string;
    title: string;
    description: string;
    image: string;
}

const Post: React.FC = ({avatar, title, description, image}: PostProps) => {
    return (
        <Container>
            <Header>
                <Avatar source={{uri: avatar}} />
                <Title>{title}</Title>
            </Header>
            <Descriptions>{description}</Descriptions>
            <ImagePost source={{uri: image}} />
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
