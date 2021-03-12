import React from "react";
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Animated, SafeAreaView, ScrollView, ShadowPropTypesIOS } from "react-native";
import Swipeable from 'react-native-gesture-handler/Swipeable';

const Checkout = props => {
    return (
        <SafeAreaView style={styles.checkoutContainer}>
            <View style={styles.checkoutHeaderContainer}>
                <Text style={styles.checkoutHeader}>Checkout</Text>
            </View>
            <Text style={styles.yourOrder}>Your Order From</Text>
            <FlatList
                data={[{ id: 1, name: "Blue Dream", price: 55.00 }, { id: 2, name: "Jack Herer Pre-Rolls (3-pack)", price: 35.00 }]}
                renderItem={({ item }) => (
                    <Swipeable
                        keyExtractor={(item) => item.id}
                        renderRightActions={() => (
                            <TouchableOpacity onPress={() => alert("Deleted")}>
                                <View style={styles.rightAction}>
                                    <Animated.Text style={[styles.actionText]}>Delete</Animated.Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    >
                        <View style={styles.itemContainer}>
                            <Text style={styles.cartItemText}>{item.name}</Text>
                            <Text style={styles.cartItemText}>${item.price}</Text>
                        </View>
                    </Swipeable>
                )}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    checkoutContainer: {
        backgroundColor: "white"
    },
    checkoutHeaderContainer: {
        alignItems: "center"
    },
    checkoutHeader: {
        fontSize: 32,
        fontWeight: "bold",
        marginTop: 20
    },
    itemContainer: {
        flexDirection: "row",
        marginVertical: 10,
        width: "95%",
        backgroundColor: "#ededed",
        justifyContent: "space-between",
        paddingVertical: 15,
        paddingHorizontal: 20
      },
      yourOrder: {
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 25,
        marginBottom: 15,
        marginLeft: 15
      },
      cartItemText: {
        fontSize: 16
      },
      rightAction: {
        backgroundColor: "red",
        marginVertical: 10,
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
})

export default Checkout;