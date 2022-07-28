import React, { useState, Context, createContext, ReactNode, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { api } from '../service/api'
import { Alert } from 'react-native'

type AuthContentData = {
    user: UserProps,
    isAuthenticated: boolean,
    signIn: (credentials: SignInProps) => Promise<void>,
    loadingAuth: boolean,
    loading: boolean,
    signOut: () => Promise<void>,
}

type UserProps = {
    id: string,
    name: string,
    email: string,
    token: string,
}

type AuthProviderProps = {
    children: ReactNode,
}

type SignInProps = {
    email: string,
    password: string,
}

export const AuthContext = createContext({} as AuthContentData);

export function AuthProvider ({ children }: AuthProviderProps) {

    const [user, setUser] = useState<UserProps>({
        id: '',
        name: '',
        email: '',
        token: '',
    })
    const isAuthenticated = !!user.name;
    const [loadingAuth, setLoadingAuth] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        getuser();
    }, [])

    async function getuser () {
        const userInfo = await AsyncStorage.getItem('@sujeitoPizzaria');
        let hasUser: UserProps = JSON.parse(userInfo || '{}')

        if (Object.keys(hasUser).length > 0) {
            onToken(hasUser.token);
            setUser({
                id: hasUser.id,
                name: hasUser.name,
                email: hasUser.email,
                token: hasUser.token
            })
        }
        setLoading(false);
    }

    async function signIn ({ email, password }: SignInProps) {

        try {

            setLoadingAuth(true);
            const response = await api.post('/session', { email, password });

            const { id, name, token }: UserProps = response.data;
            const data = {
                ...response.data
            }

            await AsyncStorage.setItem('@sujeitoPizzaria', JSON.stringify(data));

            onToken(token);

            setUser({
                id,
                name,
                email,
                token
            })
        } catch (error) {
            Alert.alert('Atenção', 'Não foi possivel acessar a conta')
        } finally {
            setLoadingAuth(false);
        }
    }

    function onToken (token: string) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    async function signOut () {
        await AsyncStorage.clear().then(() => {
            setUser({
                id: '',
                name: '',
                email: '',
                token: '',
            })
        })
    }

    return (
        <AuthContext.Provider value={{
            signOut,
            loading,
            loadingAuth,
            user,
            isAuthenticated,
            signIn
        }}>
            {
                children
            }
        </AuthContext.Provider>
    )
}