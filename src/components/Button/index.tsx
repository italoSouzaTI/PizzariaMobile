import React from 'react';
import { TouchableOpacityProps, ActivityIndicator } from 'react-native';
import { Container, Btntext } from './styles';
import GlobalColor from '../../../global'

interface IButton {
    label: string;
    loading?: boolean;
}
type Props = TouchableOpacityProps
const Button: React.FC<IButton> = ({ label, loading = false, ...rest }: Props) => {
    return (
        <Container {...rest}>
            <Btntext>
                {loading ? (
                    <>
                        <ActivityIndicator size={25} color={GlobalColor.white} />
                    </>
                ) : (
                    <>
                        {label}
                    </>
                )}

            </Btntext>
        </Container >
    );
}

export default Button;