import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Icon, BottomSheet } from 'react-native-elements';

var { height, width } = Dimensions.get("window");

const BusinessPage = (props) => {
    const [quantity, setQuantity] = useState(1);

    const { image, name, description, brand, price } = props.product;

    const handlePlusCounter = () => {
        setQuantity(quantity + 1);
    }

    const handleMinusCounter = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    /*
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
    */

    return (
        <BottomSheet
            isVisible={props.showItemPage}
            containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0)' }}
        >
            <TouchableOpacity style={styles.cartBackBtn} onPress={props.handleShowItemPage}>
                <Icon name="arrow-left" type="font-awesome-5" color="black" size={17.5} />
            </TouchableOpacity>
            <View style={styles.productImageContainer}>
                <Image
                    style={styles.image}
                    resizeMode="contain"
                    source={{
                        uri: image
                    }}
                />
            </View>
            <View style={styles.bottomSheet}>
                <View style={styles.itemNameContainer}>
                    <Text style={styles.itemName}>{name}</Text>
                </View>
                <View style={styles.subItemDetailsContainer}>
                    <Text style={styles.subItemDetailsText}>{brand}</Text>
                    <Text style={styles.subItemDetailsText}>·</Text>
                    <Text style={styles.subItemDetailsText}>15% THC</Text>
                    <Text style={styles.subItemDetailsText}>·</Text>
                    <Text style={styles.subItemDetailsText}>0.2% CBD</Text>
                </View>
                <Text style={styles.itemDescription}>{description}</Text>
                <View style={styles.itemDetailsContainer}>
                    <View style={styles.selectQuantity}>
                        <TouchableOpacity onPress={handleMinusCounter} style={styles.leftSelectQuantity}>
                            <Icon name="minus" type="font-awesome-5" color="green" size={17.5} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.quantity}>
                            <Text style={styles.selectSizeText}>{quantity}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handlePlusCounter} style={styles.rightSelectQuantity}>
                            <Icon name="plus" type="font-awesome-5" color="green" size={17.5} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.addToCart}>
                        <Text style={styles.addToCartText}>Add To Cart</Text>
                        <View style={styles.cartPrice}>
                            <Text style={styles.addToCartText}>{price ? `$${price * quantity}.00` : `$8.99`}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </BottomSheet>
    )
}

const styles = StyleSheet.create({
    cartBackBtn: {
        position: "absolute",
        zIndex: 100,
        bottom: 15,
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 1,
        height: 50,
        width: 50,
        top: 20,
        left: 20,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
    },
    productImageContainer: {
        width: width,
        backgroundColor: "white",
        borderTopWidth: 0.5,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15
    },
    image: {
        width: width,
        height: 0.2 * height,
        marginTop: 50
    },
    bottomSheet: {
        backgroundColor: "white",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        padding: 20
    },
    itemDetailsContainer: {
        alignItems: "center",
        marginTop: 25
    },
    itemNameContainer: {
        alignItems: "center",
    },
    itemName: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 2.5
    },
    subItemDetailsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 2.5
    },
    subItemDetailsText: {
        color: "grey",
        fontSize: 18,
        fontWeight: "bold",
        padding: 5
    },
    itemDescription: {
        fontSize: 17,
        color: "grey",
        marginVertical: 10
    },
    selectSize: {
        flexDirection: "row",
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
    },
    addToCart: {
        backgroundColor: "green",
        width: "90%",
        borderRadius: 5,
        paddingVertical: 15,
        paddingHorizontal: 30,
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 25
    },
    addToCartText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18
    },
    cartPrice: {
        right: 25,
        position: "absolute",
        paddingVertical: 15,
    }
})

export default BusinessPage;