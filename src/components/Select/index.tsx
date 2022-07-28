import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
    SelectInput,
    SelectInputText
} from './styles';

interface ISelectInput extends TouchableOpacityProps {
    label: string
}

const Select: React.FC<ISelectInput> = ({ label, ...rest }) => {
    return (
        <SelectInput {...rest}>
            <SelectInputText>{label}</SelectInputText>
        </SelectInput>
    );
}

export default Select;