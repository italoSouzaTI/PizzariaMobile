import React from 'react';
import Button from '../../components/Button';
import { Alert } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Iparam, StackParamsList } from '../../routes/app.routes';
import { api } from '../../service/api';
import { Container, Title } from './styles';


type RouteDetailParams = {
    FinishOrder: Iparam
}

type FinishOrderRouteProp = RouteProp<RouteDetailParams, 'FinishOrder'>

const FinishOrder: React.FC = () => {
    const route = useRoute<FinishOrderRouteProp>();
    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();

    const handleFinish = async () => {
        try {
            const response = api.put('/order/send', {
                order_id: route.params?.order_id,
            })
            navigation.popToTop();
        } catch (error) {
            Alert.alert('Atenção', 'Não foi possivel finalizar pedido')
        }
    }
    return (
        <Container>
            <Title>Você deseja finalizar esse pedido? </Title>
            <Title
                size={30}
            >Mesa {route.params?.number}</Title>
            <Button
                onPress={handleFinish}
                label='Finalizar pedido'
                icon="shopping-cart"
            >
            </Button>
        </Container>
    );
}

export default FinishOrder;