import React, { useState } from "react";
import { Text, View, TouchableOpacity, Animated, StyleSheet, Modal } from "react-native";
import Swipeable from 'react-native-gesture-handler/Swipeable';

import ItemBottomSheet from '../Item/ItemBottomSheet';


import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../Redux/cartSlice';

const CartItem = props => {

    const [showItemModal, setShowItemModal] = useState(false);

    const { item } = props;

    const dispatch = useDispatch();

    const handleDeleteCartItem = (itemName) => {
        dispatch(removeFromCart(itemName))
    }

    const handleShowItemModal = (product) => {
        setShowItemModal(true);
    }

    const handleRemoveItemModal = () => {
        setShowItemModal(false);
    }

    return (
        <View>
            <Swipeable
                keyExtractor={(item) => item.name}
                renderRightActions={() => (
                    <TouchableOpacity onPress={() => handleDeleteCartItem(item.id)}>
                        <View style={styles.rightAction}>
                            <Animated.Text style={[styles.actionText]}>Delete</Animated.Text>
                        </View>
                    </TouchableOpacity>
                )}
            >
                <TouchableOpacity style={styles.itemContainer} onPress={handleShowItemModal}>
                    <View style={styles.quantityContainer}>
                        <View style={styles.quantity}>
                            <Text style={styles.quantityText}>{item.quantity}</Text>
                        </View>
                    </View>
                    <View style={styles.itemNameContainer}>
                        <Text style={styles.cartItemText}>{item.name}</Text>
                    </View>
                    <View style={styles.priceContainer}>
                        <Text style={styles.cartItemText}>${item.price * item.quantity}</Text>
                    </View>
                    
                </TouchableOpacity>
            </Swipeable>
            <Modal
                visible={showItemModal}
                animationType='none'
                transparent={true}
            >
                <ItemBottomSheet
                    product={item}
                    quantity={item.quantity}
                    handleRemoveItemModal={handleRemoveItemModal}
                    cartType="Update"
                />
            </Modal>
        </View>
    )
}


const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: "row",
        marginVertical: 5,
        width: "100%",
        backgroundColor: "white",
        justifyContent: "space-between",
    },
    rightAction: {
        backgroundColor: "red",
        marginVertical: 2.5,
        justifyContent: "center",
        alignItems: "flex-end",
        paddingVertical: 15,
        paddingHorizontal: 20
    },
    actionText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16
    },
    quantityContainer: {
        width: "10%",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingVertical: 10
    },
    quantity: {
        backgroundColor: "black",
        height: 28,
        width: 28,
        borderRadius: 2.5,
        alignItems: "center",
        justifyContent: "center",
        padding: 5
    },
    quantityText: {
        fontSize: 16,
        color: "white",
        fontWeight: "bold"
    },
    itemNameContainer: {
        width: "70%",
        justifyContent: "center",
        paddingVertical: 10
    },
    priceContainer: {
        width: "10%",
        justifyContent: "center",
        alignItems: "flex-end",
        paddingVertical: 10
    },
    cartItemText: {
        fontSize: 18
    }
});

export default CartItem;