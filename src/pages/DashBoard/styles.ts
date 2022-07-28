import styled from 'styled-components/native';
import GlobalColor from '../../../global'

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-left:15px;
    padding-right:15px;
    background: ${GlobalColor.backgroundColor};
`;

export const Titulo = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: ${GlobalColor.white};
    margin-bottom: 24px;
`;