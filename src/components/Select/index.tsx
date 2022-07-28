import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
    SelectInput,
    SelectInputText,
    Icon
} from './styles';

interface ISelectInput extends TouchableOpacityProps {
    label?: string | object
}

const Select: React.FC<ISelectInput> = ({ label, ...rest }) => {
    return (
        <SelectInput {...rest}>
            <SelectInputText>{label ?? 'Selecione'}</SelectInputText>
            <Icon
                name="caretdown"
            />
        </SelectInput>
    );
}

export default Select;