import React from 'react';
import { TextInputProps } from 'react-native';
import GlobalColor from '../../../global'

import { InputDefault } from './styles';

type Props = TextInputProps;

const Input: React.FC = ({ ...rest }: Props) => {
    return (
        <InputDefault {...rest}
            placeholderTextColor={GlobalColor.placeholder}
        />
    );
}

export default Input;