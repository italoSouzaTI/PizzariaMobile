import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import GlobalColor from '../../global'

const routes: React.FC = () => {

    const isAuthenticated = false;
    const loading = false;

    if (loading) {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: `${GlobalColor.backgroundColor}`,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <ActivityIndicator size={60} color={GlobalColor.white_element} />
            </View>
        )
    }
    return (
        isAuthenticated ? <AppRoutes /> : <AuthRoutes />
    )
}

export default routes;