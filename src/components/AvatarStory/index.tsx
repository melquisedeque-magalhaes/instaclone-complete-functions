import React from 'react';

import {Avatar, Container} from './styles';

import {ImageSourcePropType} from 'react-native';

interface AvatarProps {
    image: ImageSourcePropType;
}

export default function AvatarStory({image}: AvatarProps) {
    return (
        <Container>
            <Avatar source={image} />
        </Container>
    );
}
