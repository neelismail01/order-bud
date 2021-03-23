import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { BottomSheet } from 'react-native-elements';

import CartHeader from './CartHeader';
import CartItem from './CartItem';
import ProceedToCheckoutButton from './ProceedToCheckoutButton';

import { useSelector } from 'react-redux';
import { selectCartItems } from '../../../Redux/cartSlice';

const Cart = props => {

    const cartItems = useSelector(selectCartItems);

    return (
        <BottomSheet
            isVisible={props.showCart}
            containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0)' }}
        >
            <View style={styles.bottomSheet}>
                <CartHeader showBottomSheet={props.showBottomSheet} />
                <FlatList
                    data={cartItems}
                    renderItem={({ item }) => (
                        <CartItem item={item} />
                    )}
                />
                <View style={{ alignItems: "center" }}>
                    <ProceedToCheckoutButton goToCheckout={props.goToCheckout} />
                </View>
            </View>
        </BottomSheet>
    )
}


const styles = StyleSheet.create({
    bottomSheet: {
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    }
});

export default Cart;