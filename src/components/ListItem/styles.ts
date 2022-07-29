import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import GlobalColor from '../../../global'

export const Container = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border-width: 0.3px;
  border-color: #8a8a8a;
  background: ${GlobalColor.backgroundDark};

  
`;
export const Label = styled.Text`
  color: ${GlobalColor.white};
`;
export const BtnTrash = styled(TouchableOpacity)`
`;
export const Icon = styled(Feather)`
  font-size: 25px;
  color: ${GlobalColor.red};
`;
