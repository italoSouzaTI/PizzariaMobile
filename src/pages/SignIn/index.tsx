import React, { useState, useContext } from 'react';
import { Alert } from 'react-native';
import GlobalColor from '../../../global'
import InputDefault from '../../components/Input'
import Button from '../../components/Button'
import { AuthContext } from '../../contexts/AuthContext'
import {
    Container,
    Logo,
    ContainerInput,
} from './styles';
import LogoEmpresa from '../../assets/logo.png';

const SignIn: React.FC = () => {
    const { signIn, loadingAuth } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin () {
        if (email === '' || password === '') {
            return;
        }

        await signIn({ email, password })
    }

    return (
        <Container>
            <Logo
                source={LogoEmpresa}
            />
            <ContainerInput>
                <InputDefault
                    placeholder="Digite seu email"
                    value={email}
                    onChangeText={setEmail}
                />
                <InputDefault
                    placeholder="Sua senha"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
                <Button
                    loading={loadingAuth}
                    onPress={handleLogin}
                    label='Acessar'
                />
            </ContainerInput>
        </Container>
    );
}

export default SignIn;