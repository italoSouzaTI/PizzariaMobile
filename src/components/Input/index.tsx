import React from 'react';
import { TextInputProps } from 'react-native';
import GlobalColor from '../../../global'

import { InputDefault } from './styles';

interface IPropsInput extends TextInputProps {
    width: string
}

const Input: React.FC<IPropsInput> = ({ width, ...rest }) => {
    return (
        <InputDefault {...rest}
            width={width}
            placeholderTextColor={GlobalColor.placeholder}
        />
    );
}

export default Input;