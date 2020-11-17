import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native';

export const Container = styled.View`
    flex: 1;
    background-color: #7159c1;
`;

export const ContainerStory = styled(SafeAreaView)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    height: 100px;
    width: 100%;
    background-color: #f5f5f5;
    border-width: 1px;
    border-color: #ccc;
`;
