import styled from 'styled-components/native';
import GlobalColor from '../../../global'

export const Container = styled.View`
  flex:1;
  justify-content:center;
  align-items:center;
  background: ${GlobalColor.backgroundColor}
`;
export const Logo = styled.Image`
    margin-bottom:18px;

`;
export const ContainerInput = styled.View`
    width:95%;
    justify-content:center;
    align-items:center;
    padding:34px 14px;
`;

