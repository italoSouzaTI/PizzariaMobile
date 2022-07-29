import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashBoard from '../pages/DashBoard';
import Order from '../pages/Order';
import FinishOrder from '../pages/FinishOrder/';
import GlobalColor from '../../global'

export type StackParamsList = {
    DashBoard: undefined,
    Order: Iparam,
    FinishOrder: Iparam
}
export type Iparam = {
    number: number | string,
    order_id: string,
}
const Stack = createNativeStackNavigator<StackParamsList>();

function AppRoutes () {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="DashBoard"
                component={DashBoard}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Order"
                component={Order}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="FinishOrder"
                component={FinishOrder}
                options={{
                    title: 'Finalizando',
                    headerStyle: {
                        backgroundColor: `${GlobalColor.backgroundDark}`,
                    },
                    headerTintColor: '#fff',
                }}
            // options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default AppRoutes;