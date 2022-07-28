import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Titulo } from './styles';
import { Alert } from 'react-native';

const DashBoard: React.FC = () => {
    const [number, setNumber] = useState<string>('')

    const openOrder = () => {
        if (number === '') {
            return;
        }
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