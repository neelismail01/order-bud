import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

import { useSelector } from 'react-redux';
import { selectCartItems } from '../../../Redux/cartSlice';

const ProceedToCheckoutButton = props => {

    const cartItems = useSelector(selectCartItems);

    return (
        <TouchableOpacity style={styles.checkoutBtn} onPress={props.goToCheckout}>
            <Text style={styles.viewCartText}>Proceed To Checkout</Text>
            <Text style={styles.viewCartText}>$90.00</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    checkoutBtn: {
        backgroundColor: "green",
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 15,
        paddingHorizontal: 25,
        width: "100%",
        marginTop: 20
    },
    viewCartText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        marginLeft: 10
    }
});

export default ProceedToCheckoutButton;