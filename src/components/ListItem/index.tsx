import React from 'react';
import { Alert } from 'react-native';
import { ItemProps } from '../../pages/Order'


import {
    Container,
    Label,
    Icon,
    BtnTrash
} from './styles';

interface IListemProps {
    data: ItemProps,
    deleteItem: (item_id: string) => void,
}

const ListItem: React.FC<IListemProps> = ({ data, deleteItem }) => {

    const handleDeleteItem = () => {
        deleteItem(data.id)
    }
    return (
        <>
            {data && (
                <Container>
                    <Label>{data?.amount} - {data?.name}</Label>
                    <BtnTrash
                        onPress={handleDeleteItem}
                    >
                        <Icon
                            name="trash-2" />
                    </BtnTrash>
                </Container>
            )}
        </>

    );
}

export default ListItem;