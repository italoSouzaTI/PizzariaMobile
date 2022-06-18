import React from 'react';
import { TextInputProps } from 'react-native';
import GlobalColor from '../../../global'

import { InputDefault } from './styles';

type Props = TextInputProps;

interface IInput {

}

const Input: React.FC<IInput> = ({ ...rest }: Props) => {
    return (
        <InputDefault {...rest}
            placeholderTextColor={GlobalColor.placeholder}
        />
    );
}

export default Input;