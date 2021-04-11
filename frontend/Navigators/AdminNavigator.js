import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import AdminHome from "../Screens/Admin/AdminHome";
import Admin from "../Screens/Admin/Admin"
import EditBusiness from "../Screens/Admin/EditBusiness"
import AddProduct from "../Screens/Admin/AddProduct"
import EditProduct from "../Screens/Admin/EditProduct"
import ManageProducts from "../Screens/Admin/ManageProducts"

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Admin"
                component={Admin}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="Edit Business"
                component={EditBusiness}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="Add Product"
                component={AddProduct}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="Edit Product"
                component={EditProduct}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="Manage Products"
                component={ManageProducts}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}
export default function AdminNavigator() {
    return <MyStack />
}