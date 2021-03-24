import React, { useState } from "react";
import { Text, View, TouchableOpacity, Animated, StyleSheet, Modal, Dimensions } from "react-native";
import Swipeable from 'react-native-gesture-handler/Swipeable';

import ItemBottomSheet from '../Item/ItemBottomSheet';


import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../Redux/cartSlice';

var { height, width } = Dimensions.get("window");

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
                    <Text style={styles.cartItemText}>{item.name}</Text>
                    <Text style={styles.cartItemText}>${item.price}</Text>
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
        marginVertical: 2.5,
        width: "100%",
        backgroundColor: "#f2f2f2",
        justifyContent: "space-between",
        paddingVertical: 15,
        paddingHorizontal: 20
    },
    cartItemText: {
        fontSize: 16
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
    }
});

export default CartItem;