import styled from 'styled-components/native';
import { Feather, Ionicons } from '@expo/vector-icons';
import GlobalColor from '../../../global'

export const Container = styled.SafeAreaView`
    flex: 1;
    background:${GlobalColor.backgroundColor};
`;
export const ContainerOrder = styled.View`
    flex: 1;
    padding: 15px;
    justify-content: center;
    justify-items: center;
`;

export const Header = styled.View`
    flex-direction: row;
    margin-bottom: 12px;
    margin-top: 12px;
    align-items: center;
`;
export const Title = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color:${GlobalColor.white};
    margin-right: 14px;
`;
export const ButtonIcon = styled.TouchableOpacity`

`;
export const Icon = styled(Feather)`
    font-size: 28px;
    color:${GlobalColor.red};
`;

export const ContainerQtd = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
export const QtdTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color:${GlobalColor.white};
`;

export const ContainerAction = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
export const ButtonAdd = styled.TouchableOpacity`
    width:20%;
    background: ${GlobalColor.blue};
    border-radius: 4px;
    height: 40px;
    justify-content: center;
    align-items: center;
`;
export const IconAdd = styled(Ionicons)`
    font-size: 28px;
    font-weight: bold;
    color:${GlobalColor.backgroundDark};
`;
export const ButtonProgress = styled.TouchableOpacity`
    width:75%;
    border-radius: 4px;
    height: 40px;
    justify-content: center;
    align-items: center;
    background:${GlobalColor.btn_background};
`;
export const ButtonProgressText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color:${GlobalColor.backgroundDark};
`;

