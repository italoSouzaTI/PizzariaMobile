import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Btntext } from './styles';

interface IButton {
    label: string
}
type Props = TouchableOpacityProps
const Button: React.FC<IButton> = ({ label }, ...rest: Props) => {
    return (
        <Container {...rest}>
            <Btntext>
                {label}
            </Btntext>
        </Container>
    );
}

export default Button;