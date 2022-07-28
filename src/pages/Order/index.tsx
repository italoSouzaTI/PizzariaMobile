import React from 'react';
import { useRoute, RouteProp } from '@react-navigation/native'
import Select from '../../components/Select';
import Input from '../../components/Input';
import {
    Container,
    Header,
    Title,
    ButtonIcon,
    Icon,
    IconAdd,
    ContainerQtd,
    QtdTitle,
    ContainerAction,
    ButtonAdd,
    ButtonProgress,
    ButtonProgressText
} from './styles';

type RouteDetailParams = {
    Order: {
        number: string | number;
        order_id: string;
    }
}

type OrderRouteProps = RouteProp<RouteDetailParams, 'Order'>;

const Order: React.FC = () => {
    const route = useRoute<OrderRouteProps>()
    return (
        <Container>
            <Header>
                <Title>Mesa {route.params.number}</Title>
                <ButtonIcon>
                    <Icon
                        name="trash-2" />
                </ButtonIcon>
            </Header>
            <Select
                onPress={() => { }}
                label="Pizza"
            />
            <Select
                onPress={() => { }}
                label="Pizza de calabresa"
            />

            <ContainerQtd>
                <QtdTitle>Quantidade</QtdTitle>
                <Input
                    style={{
                        textAlign: 'center',
                        fontSize: 20,
                    }}
                    width="60"
                    value="1"
                    keyboardType="numeric"
                />
            </ContainerQtd>

            <ContainerAction>
                <ButtonAdd>
                    <IconAdd
                        name="ios-add"
                    />
                </ButtonAdd>
                <ButtonProgress>
                    <ButtonProgressText>Avançar</ButtonProgressText>
                </ButtonProgress>

            </ContainerAction>

        </Container>
    );
}

export default Order;