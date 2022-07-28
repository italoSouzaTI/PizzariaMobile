import styled from 'styled-components/native';
import { Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import GlobalColor from '../../../global'

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

export const Scroll = styled(ScrollView)`
   flex: 1;
`;

export const Container = styled(TouchableOpacity)`
   flex: 1;
   justify-content: center;
   align-items: center;
`;

export const ContainerItem = styled.View`
    width: 100%;
    height: 50%;
    background: ${GlobalColor.white};
    border-width: 1px;
    border-color: #8a8a8a;
    border-radius: 4px;
    bottom:0px;
    position: absolute;
`;
export const OptionItem = styled(TouchableOpacity)`
    align-items:flex-start ;
    border-top-width:0.8px;
    border-top-color: #8a8a8a;
`;
export const TextContainer = styled.Text`
    margin: 18px;
    font-size: 14px;
    font-weight: bold;
    color: ${GlobalColor.backgroundDark};
`;
export const Title = styled.Text`
    margin: 18px;
    font-size: 22px;
    font-weight: bold;
    color: ${GlobalColor.backgroundDark};
`;
