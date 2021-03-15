import React from 'react'
import { StyleSheet, View, Dimensions, Image, Text} from 'react-native'

var { width } = Dimensions.get("window");

const BusinessCard = (props) => {
    const { coverImage, name, address } = props.business;

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require(coverImage)}
            />
            <View style={styles.productDetails}>
                <Text style={styles.title}>{name}</Text>
                <Text styles={{marginBottom: "50"}}>{address}</Text>
                <Text style={styles.friendOrders}>Greg and 3 others have ordered from here</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: width * 0.35,
        borderRadius: 15,
        alignItems: 'center',
        elevation: 8,
        backgroundColor: 'white',
    },
    image: {
        width: "100%",
        height: 200
    },
    productDetails: {
        marginVertical: 20,
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        width: "100%",
        marginBottom: 5
    },
    friendOrders: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 10
    }
})

export default BusinessCard;