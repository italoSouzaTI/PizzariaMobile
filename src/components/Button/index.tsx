import React from 'react';
import { TouchableOpacityProps, ActivityIndicator } from 'react-native';
import GlobalColor from '../../../global'
import { Container, Btntext, Icon } from './styles';

interface IButton {
    label: string;
    loading?: boolean;
    icon?: string
}
type Props = TouchableOpacityProps
const Button: React.FC<IButton> = ({ icon, label, loading = false, ...rest }: Props) => {
    return (
        <Container {...rest}>
            <Btntext>
                {loading ? (
                    <>
                        <ActivityIndicator
                            size={25}
                            color={GlobalColor.white}
                            animating={loading}
                        />
                    </>
                ) : (
                    <>
                        {label}

                    </>
                )}

            </Btntext>
            {icon && (

                <Icon
                    name="shopping-cart"
                />
            )}
        </Container >
    );
}

export default Button;