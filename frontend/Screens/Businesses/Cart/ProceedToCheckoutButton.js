import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const ProceedToCheckoutButton = props => {

    return (
        <TouchableOpacity style={styles.checkoutBtn} onPress={props.goToCheckout}>
            <Text style={styles.viewCartText}>Proceed To Checkout</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    checkoutBtn: {
        backgroundColor: "green",
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "center",
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