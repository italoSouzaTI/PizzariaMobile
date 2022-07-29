import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import GlobalColor from '../../../global'
import { Feather } from '@expo/vector-icons'

export const Container = styled(TouchableOpacity)`
    width:95%;
    height:40px;
    background:${GlobalColor.btn_background};
    border-radius:4px;
    justify-content:center;
    align-items:center;
    flex-direction: row;
`;

export const Btntext = styled.Text`
    font-size:18px;
    font-weight:bold;
    color:${GlobalColor.btn_text};
`;
export const Icon = styled(Feather)`
    font-size: 24px;
    color:${GlobalColor.backgroundColor};
`;