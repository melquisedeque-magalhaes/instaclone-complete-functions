import React from 'react';

//import AvatarStory from '../AvatarStory';

import {AvatarStory} from './styles';
interface StoryProps {
    avatar: string;
}

const Story: React.FC = ({avatar}: StoryProps) => {
    return <AvatarStory source={{uri: avatar}} />;
};

export default Story;
