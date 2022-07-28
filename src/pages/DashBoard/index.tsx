import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../../contexts/AuthContext'

// import { Container } from './styles';

const DashBoard: React.FC = () => {
    const { signOut } = useContext(AuthContext);
    return (
        <View>
            <Text>DashBoard</Text>
            <Button
                onPress={signOut}
                title='Sair do app'
            />
        </View>
    );
}

export default DashBoard;