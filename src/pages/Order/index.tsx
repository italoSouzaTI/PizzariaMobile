import React, { useState, useEffect } from 'react';
import { Alert, ActivityIndicator, Modal, FlatList, View } from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native'
import Select from '../../components/Select';
import Input from '../../components/Input';
import ModalPicker from '../../components/ModalPicker';
import ListItem from '../../components/ListItem';
import { api } from '../../service/api';
import GlobalColor from '../../../global'

import {
    Container,
    ContainerOrder,
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

export type ItemProps = {
    id: string;
    product_id: string;
    name?: string;
    amount: string | number;
}

type OrderRouteProps = RouteProp<RouteDetailParams, 'Order'>;


const Order: React.FC = () => {
    const route = useRoute<OrderRouteProps>();
    const navigaton = useNavigation();
    const [loading, setLoading] = useState<boolean>(false);
    const [loadingAdd, setLoadingAdd] = useState<boolean>(false);

    const [category, setCategory] = useState<CategoryProps[] | []>([]);
    const [categorySelected, setCategorySelected] = useState<CategoryProps | undefined>();
    const [modalCategoryVisible, setModalCategoryVisible] = useState(false);
    const [amount, setAmount] = useState<string>('1');
    const [itemsList, setItemList] = useState<ItemProps[]>([]);

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
            const response = await api.delete(`/order?order_id=${route.params.order_id}`);
            if (response.data) {
                navigaton.goBack();
            }
        } catch (error) {
            console.log('handleCloserOrder falha', error);
            Alert.alert('Atenção', 'Não foi possível excluir a mesa');
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
    const handleAdd = async () => {
        if (productsSelected?.name === undefined || productsSelected?.name === "") {
            Alert.alert('Atenção', 'O campos produto tem que ser preenchidos');
            return
        }
        if (categorySelected?.name === undefined || categorySelected?.name === "") {
            Alert.alert('Atenção', 'O campos categoria tem que ser preenchidos');
            return
        }
        try {
            setLoadingAdd(true);

            const response = await api.post(`/order/add`, {
                order_id: route.params?.order_id,
                product_id: productsSelected?.id,
                amount: Number(amount)
            })

            let data: ItemProps = {
                id: response.data.id as string,
                product_id: productsSelected?.id as string,
                name: productsSelected?.name as string,
                amount: amount
            }
            console.log('handleAdd', data)
            setItemList([...itemsList, data]);
        } catch (error) {
            Alert.alert('Atenção', 'Não foi possivel adiconar a lista');
            console.log(error)
        } finally {
            setLoadingAdd(false);
        }
    }
    const handleDeleteItem = async (item_id: string) => {
        try {
            const response = await api.delete('/order/remove', {
                params: {
                    item_id: item_id
                }
            });
            const cloneLista = itemsList.slice();
            let newArray = cloneLista.filter(item => item.id != item_id);
            setItemList(newArray)

        } catch (error) {
            Alert.alert('Atenção', 'Não foi possivel deletar item da lista')
        } finally {

        }
    }

    return (
        <Container>
            <ContainerOrder>
                <Header>
                    <Title>Mesa {route.params.number}</Title>
                    {
                        itemsList.length === 0 && (
                            <ButtonIcon
                                disabled={loading}
                                onPress={handleCloserOrder}>
                                {loading ? (
                                    <ActivityIndicator
                                        size={25}
                                        color={GlobalColor.white}
                                        animating={loading}
                                    />
                                ) : (
                                    <Icon
                                        name="trash-2" />
                                )}

                            </ButtonIcon>
                        )
                    }
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
                    <ButtonAdd
                        style={{
                            opacity: loadingAdd ? 0.3 : 1
                        }}
                        disabled={loadingAdd}
                        onPress={() => { handleAdd() }}
                    >
                        {loadingAdd ? (
                            <ActivityIndicator
                                size={25}
                                color={GlobalColor.white}
                                animating={loadingAdd}
                            />
                        ) : (
                            <IconAdd
                                name="ios-add"
                            />
                        )}

                    </ButtonAdd>
                    <ButtonProgress
                        style={{
                            opacity: itemsList.length === 0 ? 0.3 : 1
                        }}
                        disabled={itemsList.length === 0}
                    >
                        <ButtonProgressText>
                            Avançar</ButtonProgressText>
                    </ButtonProgress>


                </ContainerAction>

                <View
                    style={{ flex: 1, marginTop: 15 }}
                >
                    {
                        itemsList.length > 0 && (

                            <FlatList
                                showsVerticalScrollIndicator={false}
                                keyExtractor={item => item.id}
                                data={itemsList}
                                ItemSeparatorComponent={() => (<View style={{ marginTop: 5, marginBottom: 5 }} />)}
                                extraData={itemsList}
                                renderItem={({ item }) => (
                                    < ListItem
                                        deleteItem={handleDeleteItem}
                                        data={item}
                                    />
                                )}

                            />
                        )
                    }
                </View>



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

                {/* Modal Produtos */}
                {products.length !== 0 && (
                    <>
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

            </ContainerOrder>
        </Container>
    );
}

export default Order;