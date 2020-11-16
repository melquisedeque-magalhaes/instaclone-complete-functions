import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #f5f5f5;
`;

export const Header = styled.View`
    display: flex;
    align-items: center;
    flex-direction: row;
`;

export const Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin: 10px;
`;

export const Avatar = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    margin: 10px;
`;

export const Descriptions = styled.Text`
    margin: 10px;
    font-size: 16px;
`;

export const ImagePost = styled.Image`
    height: 400px;
    width: 100%;
`;

export const ContainerButton = styled.View`
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 10px;
    margin-left: 20px;
`;
