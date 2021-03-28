import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";

import { useSelector } from 'react-redux';
import { selectCartItems } from '../../../Redux/cartSlice';

const CheckoutHeader = props => {

    const business = useSelector(selectCartItems)[0].business;

    return (
        <SafeAreaView style={styles.businessNameContainer}>
            <Text style={styles.businessNameText}>{business}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    businessNameContainer: {
        paddingHorizontal: 15,
        alignItems: "center",
        backgroundColor: "white"
    },
    businessNameText: {
        fontWeight: "bold",
        fontSize: 34,
        marginTop: 15
    }
})

export default CheckoutHeader;