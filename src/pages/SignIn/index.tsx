import React, { useState } from 'react';
import GlobalColor from '../../../global'
import InputDefault from '../../components/Input'
import Button from '../../components/Button'
import {
    Container,
    Logo,
    ContainerInput,
} from './styles';
import LogoEmpresa from '../../assets/logo.png';

const SignIn: React.FC = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function handleLogin () {
        if (email === '' || senha === '') {
            return;
        }
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
                    onChangetext={setEmail}
                />
                <InputDefault
                    placeholder="Sua senha"
                    secureTextEntry={true}
                    value={senha}
                    onChangetext={setSenha}
                />
                <Button
                    onPress={handleLogin}
                    label='Acessar'
                />
            </ContainerInput>
        </Container>
    );
}

export default SignIn;