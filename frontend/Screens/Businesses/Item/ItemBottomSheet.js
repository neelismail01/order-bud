import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Icon, BottomSheet } from 'react-native-elements';

const BusinessPage = (props) => {
    const [counter, setCounter] = useState(1);

    const handlePlusCounter = () => {
        setCounter(counter + 1);
    }

    const handleMinusCounter = () => {
        setCounter(counter - 1);
    }

    return (
        <BottomSheet
            isVisible={props.showItemPage}
            containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0)' }}
        >
            <View style={styles.bottomSheet}>
                <TouchableOpacity style={styles.cartBackBtn} onPress={props.handleShowItemPage}>
                    <Icon name="arrow-left" type="font-awesome-5" color="black" size={17.5} />
                </TouchableOpacity>
                <Text style={styles.itemName}>Blue Dream</Text>
                <Text style={styles.itemDescription}>This sativa leaning varietal from Canna Farms has a mid-high THC (17.5-20%) content with virtually no CBD. Blue Dream is descended from Blueberry Haze and offers a bouquet of pine and citrus.</Text>
                <View style={styles.itemDetailsContainer}>
                    <View style={styles.selectSize}>
                        <TouchableOpacity style={styles.leftSelectSize}>
                            <Text style={styles.selectSizeText}>1g</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.middleSelectSize}>
                            <Text style={styles.selectSizeText}>2g</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.middleSelectSize}>
                            <Text style={styles.selectSizeText}>1/8oz</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.rightSelectSize}>
                            <Text style={styles.selectSizeText}>1/4oz</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.selectQuantity}>
                        <TouchableOpacity onPress={handleMinusCounter} style={styles.leftSelectQuantity}>
                            <Icon name="minus" type="font-awesome-5" color="black" size={17.5} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.quantity}>
                            <Text style={styles.selectSizeText}>{counter}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handlePlusCounter} style={styles.rightSelectQuantity}>
                            <Icon name="plus" type="font-awesome-5" color="black" size={17.5} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.addToCart}>
                        <Text style={styles.addToCartText}>Add To Cart</Text>
                        <Text style={styles.addToCartText}>$35.00</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </BottomSheet>
    )
}

const styles = StyleSheet.create({
    addToCartBackBtn: {
        backgroundColor: "white",
        height: 50,
        width: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10
    },
    bottomSheet: {
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    separator: {
        backgroundColor: "grey",
        height: 1,
        marginVertical: 15
    },
    itemDetailsContainer: {
        alignItems: "center"
    },
    itemName: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 15
    },
    itemDescription: {
        fontSize: 17,
        color: "grey",
    },
    itemImage: {
        height: "30%",
        width: "50%",
        marginBottom: 10,
        justifyContent: "center"
    },
    addToCart: {
        backgroundColor: "green",
        width: "90%",
        borderRadius: 5,
        paddingVertical: 15,
        paddingHorizontal: 30,
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    addToCartText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 22
    },
    selectSize: {
        flexDirection: "row",
        marginTop: 20,
    },
    leftSelectSize: {
        backgroundColor: "#e6e6e6",
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        paddingVertical: 15,
        width: 80,
        alignItems: "center",
        borderRightWidth: 1,
        borderRightColor: "#b3b3b3"
    },
    rightSelectSize: {
        backgroundColor: "#e6e6e6",
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        paddingVertical: 15,
        width: 80,
        alignItems: "center"
    },
    middleSelectSize: {
        backgroundColor: "#e6e6e6",
        paddingVertical: 15,
        width: 80,
        alignItems: "center",
        borderRightWidth: 1,
        borderRightColor: "#b3b3b3"
    },
    selectSizeText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 16,
    },
    selectQuantity: {
        borderWidth: 1,
        borderRadius: 30,
        flexDirection: "row",
        marginTop: 25
    },
    quantity: {
        width: 80,
        alignItems: "center",
        justifyContent: "center",
    },
    rightSelectQuantity: {
        paddingVertical: 15,
        width: 80,
        alignItems: "center",
    },
    leftSelectQuantity: {
        paddingVertical: 15,
        width: 80,
        alignItems: "center",
    }
})

export default BusinessPage;