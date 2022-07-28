import styled from 'styled-components/native';
import GlobalColor from '../../../global'
import { AntDesign } from '@expo/vector-icons';

export const SelectInput = styled.TouchableOpacity`
    width: 100%;
    height: 40px;
    border-radius: 4px;
    margin-bottom: 12px;
    padding-left: 8px;
    background: ${GlobalColor.backgroundDark};

    justify-content: center;
    position: relative;
`;
export const SelectInputText = styled.Text`
    color:${GlobalColor.white};
`;
export const Icon = styled(AntDesign)`
    font-size: 18px;
    color:rgba(255,255,255,0.55);
    position: absolute;
    right: 10px;
`;

