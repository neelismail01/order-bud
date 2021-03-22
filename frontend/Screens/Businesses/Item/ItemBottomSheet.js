import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Icon, BottomSheet } from 'react-native-elements';

var { height, width } = Dimensions.get("window");

const BusinessPage = (props) => {
    const [counter, setCounter] = useState(1);

    const { image, name, description } = props.product;

    const handlePlusCounter = () => {
        setCounter(counter + 1);
    }

    const handleMinusCounter = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    return (
        <BottomSheet
            isVisible={props.showItemPage}
            containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0)' }}
        >
            <TouchableOpacity style={styles.cartBackBtn} onPress={props.handleShowItemPage}>
                <Icon name="times" type="font-awesome-5" color="black" size={17.5} />
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
                <View style={{justifyContent: "center"}}>
                    <Text style={styles.itemName}>{name}</Text>
                </View>
                <Text style={styles.itemDescription}>{description}</Text>
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
        backgroundColor: "white"
    },
    image: {
        width: width,
        height: 0.3 * height,
        marginTop: 50
    },
    bottomSheet: {
        backgroundColor: "white",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        padding: 20
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
        fontSize: 18
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