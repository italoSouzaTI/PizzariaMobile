import React, { useState, useEffect } from 'react';
import { Alert, ActivityIndicator, Modal } from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native'
import Select from '../../components/Select';
import Input from '../../components/Input';
import ModalPicker from '../../components/ModalPicker';
import { api } from '../../service/api';
import GlobalColor from '../../../global'

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
export type CategoryProps = {
    id: string,
    name: string
}
export type ProductsProps = {
    id: string,
    name: string
}

type OrderRouteProps = RouteProp<RouteDetailParams, 'Order'>;


const Order: React.FC = () => {
    const route = useRoute<OrderRouteProps>();
    const navigaton = useNavigation();
    const [loading, setLoading] = useState<boolean>(false);

    const [category, setCategory] = useState<CategoryProps[] | []>([]);
    const [categorySelected, setCategorySelected] = useState<CategoryProps | undefined>();
    const [modalCategoryVisible, setModalCategoryVisible] = useState(false);
    const [amount, setAmount] = useState<string>('1');


    //Product
    const [products, setProducts] = useState<ProductsProps[] | []>([]);
    const [productsSelected, setProductsSelected] = useState<ProductsProps | undefined>();
    const [modalProductsVisible, setModalProductsVisible] = useState(false);


    useEffect(() => {
        loadInfo();
    }, []);

    useEffect(() => {
        loadingProducts();
    }, [categorySelected]);

    const loadingProducts = async () => {
        try {
            const params = {
                category_id: categorySelected?.id
            }

            const response = await api.get(`/category/product`, { params });
            if (response.data.length > 0) {
                setProducts(response.data)
                setProductsSelected(response.data[0])
            } else {
                setProducts([]);
                setProductsSelected({
                    id: '',
                    name: ''
                });
                Alert.alert('Atenção', 'Nenhuma produto cadastrado');
                return;
            }

        } catch (error) {
            Alert.alert('Atenção', 'Não foi possivel recuperar nenhum produto');
        }
    }

    const loadInfo = async () => {
        try {
            const response = await api.get('/category');
            if (response.data.length > 0) {
                setCategory(response.data);
                setCategorySelected(response.data[0]);
            } else {
                Alert.alert('Atenção', 'Nenhuma categoria cadastrada');
                return;
            }

        } catch (error) {
            Alert.alert('Atenção', 'Não foi possivel carregar categoria');
        }
    }


    const handleCloserOrder = async () => {
        try {
            setLoading(true);
            const params = {
                order_id: route.params?.order_id
            }
            const response = await api.delete('/order', { params });
            navigaton.goBack()

        } catch (error) {
            Alert.alert('Atenção', 'Não foi possível excluir a mesa')
        } finally {
            setLoading(false);
        }
    }

    const handleChangeCategory = (item: CategoryProps) => {
        setCategorySelected(item)
    }
    const handleChangeProdutos = (item: ProductsProps) => {
        setProductsSelected(item)
    }

    return (
        <Container>
            <Header>
                <Title>Mesa {route.params.number}</Title>
                <ButtonIcon
                    disabled={loading}
                    onPress={handleCloserOrder}>
                    {loading ? (
                        <ActivityIndicator
                            size={25} color={GlobalColor.white}
                        />
                    ) : (
                        <Icon
                            name="trash-2" />
                    )}

                </ButtonIcon>
            </Header>
            {
                category.length !== 0 && (
                    <Select

                        onPress={() => { setModalCategoryVisible(true) }}
                        label={categorySelected?.name}
                    />
                )
            }
            {
                products.length !== 0 && (
                    <Select
                        onPress={() => { setModalProductsVisible(true) }}
                        label={productsSelected?.name}
                    />
                )
            }


            <ContainerQtd>
                <QtdTitle>Quantidade</QtdTitle>
                <Input
                    style={{
                        textAlign: 'center',
                        fontSize: 20,
                    }}
                    width="60"
                    value={amount}
                    onChangeText={setAmount}
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
            {/* Modal Categoria */}
            <Modal
                transparent={true}
                visible={modalCategoryVisible}
                animationType="fade"
            >
                <ModalPicker
                    label="Categoria"
                    handleCloseModal={() => setModalCategoryVisible(false)}
                    options={category}
                    selectdItem={handleChangeCategory}
                />
            </Modal>

            {products.length !== 0 && (
                <>
                    {/* Modal Produtos */}
                    <Modal
                        transparent={true}
                        visible={modalProductsVisible}
                        animationType="fade"
                    >
                        <ModalPicker
                            label="Produtos"
                            handleCloseModal={() => setModalProductsVisible(false)}
                            options={products}
                            selectdItem={handleChangeProdutos}
                        />
                    </Modal>
                </>
            )}

        </Container>
    );
}

export default Order;