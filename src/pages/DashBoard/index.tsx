import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Titulo } from './styles';
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamsList } from '../../routes/app.routes'



const DashBoard: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();
    const [number, setNumber] = useState<string>('');

    const openOrder = () => {
        if (number === '') {
            return;
        }

        navigation.navigate('Order', {
            number, order_id: 'dasdasdsa'
        })
    }
    return (
        <Container>
            <Titulo>Novo pedido</Titulo>
            <Input
                style={{
                    textAlign: 'center',
                    fontSize: 22,
                }}
                value={number}
                onChangeText={setNumber}
                keyboardType="numeric"
                placeholder="Numero da mesa"
            />
            <Button
                onPress={openOrder}
                label='Abrir mesa'
            />
        </Container>
    );
}

export default DashBoard;