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

import Icon from 'react-native-vector-icons/Feather';

import ImgAvatar from '../../assets/avatar.jpeg';

const Post: React.FC = () => {
    return (
        <Container>
            <Header>
                <Avatar source={ImgAvatar} />
                <Title>Kassia</Title>
            </Header>
            <Descriptions>
                A mulher mais linda desse mundo, te amo minha princesa.
            </Descriptions>
            <ImagePost source={ImgAvatar} />
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
