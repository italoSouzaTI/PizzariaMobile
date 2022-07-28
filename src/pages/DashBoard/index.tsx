import React, { useState, useContext } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Titulo } from './styles';
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamsList } from '../../routes/app.routes'

import { api } from '../../service/api';
import { AuthContext } from '../../contexts/AuthContext'
import { Alert } from 'react-native';


const DashBoard: React.FC = () => {
    const { user } = useContext(AuthContext);
    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();
    const [number, setNumber] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    type table = {
        order_id: string;
        table: string | number
        status?: boolean;
        draft?: boolean;
        name?: string;
    }

    const openOrder = async () => {
        if (number === '') {
            return;
        }
        try {
            setLoading(true);
            const params = {
                table: Number(number),
                name: user.name
            }
            const response = await api.post('/order', params);
            navigation.navigate('Order', { number: response.data.table, order_id: response.data.id });
            setNumber('');
        } catch (error) {
            Alert.alert('Atenção', 'Não foi possivel regista abertura da mesa');
        } finally {
            setLoading(false)
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