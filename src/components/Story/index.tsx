import React from 'react';

import {Container} from './styles';

import AvatarStory from '../AvatarStory';

import AmorAvatar from '../../assets/avatar.jpeg';

export default function Story() {
    return (
        <Container>
            <AvatarStory image={AmorAvatar} />
            <AvatarStory image={AmorAvatar} />
            <AvatarStory image={AmorAvatar} />
            <AvatarStory image={AmorAvatar} />
        </Container>
    );
}
