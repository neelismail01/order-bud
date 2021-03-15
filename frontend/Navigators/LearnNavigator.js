import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"

import ProductContainer from "../Screens/Businesses/ProductContainer";
import SingleProduct from "../Screens/Businesses/SingleProduct";
import Checkout from "../Screens/Businesses/Checkout";


const Stack = createStackNavigator()

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Home'
                component={ProductContainer}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name='Product Detail'
                component={SingleProduct}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name='Checkout'
                component={Checkout}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default function HomeNavigator() {
    return <MyStack />;
}