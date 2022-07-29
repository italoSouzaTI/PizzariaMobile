import styled from 'styled-components/native';

import GlobalColor from '../../../global'

type ITitle = {
    size?: string
}

export const Container = styled.View`
    flex:1;
    padding:10px;
    justify-content: center;
    align-items: center;
    background:${GlobalColor.backgroundColor};
`;
export const Title = styled.Text<ITitle>`
    font-size:${({ size }) => size ?? 20}px;
    color:${GlobalColor.white};
    font-weight: bold;
    margin-bottom: 12px;
`;



