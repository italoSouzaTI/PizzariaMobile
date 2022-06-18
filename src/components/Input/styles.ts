import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import GlobalColor from '../../../global'

export const InputDefault = styled(TextInput)`
    width:95%;
    height:40px;
    margin-bottom:12px;
    border-radius:4px;
    padding:0 8px;
    background:${GlobalColor.backgroundDark};
    color:${GlobalColor.white}
`;