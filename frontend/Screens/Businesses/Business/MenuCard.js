import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Image, Text, TouchableOpacity } from 'react-native';

import ItemBottomSheet from '../Item/ItemBottomSheet';

var { width } = Dimensions.get("window");

const MenuCard = (props) => {
    const [showAddToCart, setShowAddToCart] = useState(false);

    const { name, image, brand } = props.product;

    const showBottomSheet = () => {
        setShowAddToCart(!showAddToCart);
    }

    return (
        <View>
            <TouchableOpacity style={styles.productContainer} onPress={showBottomSheet}>
                <View style={styles.productDetails}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={styles.title}>{name}</Text>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={styles.subText}>{brand}</Text>
                    </View>
                    <Text style={styles.friendOrders}>Greg and James have ordered this before</Text>
                </View>
                <Image
                    style={styles.image}
                    resizeMode="contain"
                    source={{
                        uri: image ? image : null
                    }}
                />
            </TouchableOpacity>
            {
                showAddToCart &&
                <ItemBottomSheet />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    productContainer: {
        width: '100%',
        marginVertical: 1,
        paddingVertical: 25,
        flexDirection: "row",
        borderRadius: 5,
        alignItems: 'center',
        elevation: 8,
        backgroundColor: 'white',
    },
    productDetails: {
        flexGrow: 1,
        flex: 1,
        marginLeft: 25,
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
    },
    subText: {
        color: "grey",
        fontWeight: "bold"
    },
    image: {
        width: "33%",
        height: width * 0.225,
    },
    friendOrders: {
        fontSize: 14,
        color: 'green',
        fontWeight: 'bold',
    }
})

export default MenuCard;