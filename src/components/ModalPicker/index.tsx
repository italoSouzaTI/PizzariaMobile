import React from 'react';
import { CategoryProps } from '../../pages/Order'


import {
    Scroll,
    Container,
    ContainerItem,
    TextContainer,
    OptionItem,
    Title
} from './styles';

interface ModalPickerProps {
    options: CategoryProps[],
    handleCloseModal: () => void,
    selectdItem: (item: CategoryProps) => void,
    label: String
}

const ModalPicker: React.FC<ModalPickerProps> = ({ options,
    handleCloseModal,
    label,
    selectdItem }) => {

    const onPressItem = (item: CategoryProps) => {
        selectdItem(item)
        handleCloseModal();
    }

    const option = options.map((item, index) => (
        <OptionItem
            key={index}
            onPress={() => onPressItem(item)}
        >
            <TextContainer>{item?.name}</TextContainer>
        </OptionItem>
    ))
    return (
        <Container
            onPress={handleCloseModal}
        >
            <ContainerItem>
                <Title>{label}</Title>
                <Scroll
                    showsVerticalScroollIndicator={false}
                >


                    {option}

                </Scroll>
            </ContainerItem>

        </Container>
    );
}

export default ModalPicker;