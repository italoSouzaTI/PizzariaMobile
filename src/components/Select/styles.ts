import styled from 'styled-components/native';
import GlobalColor from '../../../global'

export const SelectInput = styled.TouchableOpacity`
    width: 100%;
    height: 40px;
    border-radius: 4px;
    margin-bottom: 12px;
    padding-left: 8px;
    background: ${GlobalColor.backgroundDark};

    justify-content: center;
`;
export const SelectInputText = styled.Text`
    color:${GlobalColor.white};
`;
