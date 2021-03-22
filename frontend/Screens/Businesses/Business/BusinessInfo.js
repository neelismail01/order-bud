import React from 'react'
import { Image, View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';

var { width, height } = Dimensions.get('window')

const BusinessInfo = (props) => {

    const { coverImage, name, address } = props.businessDetails

    return (
        <View style={styles.profileContainer}>
            <Image
                style={styles.coverPhoto}
                source={{ uri: coverImage }}
            />
            <View style={styles.profileTextContainer}>
                <View style={styles.businessNameContainer}>
                    <Text style={styles.businessName}>{name}</Text>
                </View>
                <View style={styles.businessNameUnderline} />
                <TouchableOpacity style={{ flexDirection: "row", marginBottom: 6 }}>
                    <Text style={styles.businessDetails}>{address}</Text>
                    <Text style={styles.businessDetails}> • </Text>
                    <Text style={styles.businessDetails}>Open Now</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.businessDetails}>2.99 Delivery Fee</Text>
                    <Text style={styles.businessDetails}> • </Text>
                    <Text style={styles.businessDetails}>30-40 min</Text>
                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    coverPhoto: {
        width: width,
        height: height * 0.225,
    },
    profileContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    profileTextContainer: {
        flexDirection: "column",
        alignItems: "center",
        marginTop: -60,
        backgroundColor: 'white',
        width: "70%",
        borderRadius: 5,
        padding: 20
    },
    businessNameContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    businessName: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center"
    },
    businessNameUnderline: {
        height: 2,
        width: 0.4 * width,
        backgroundColor: "green",
        marginTop: -2.5,
        marginBottom: 10
    },
    businessDetails: {
        fontSize: 16,
        color: "grey"
    }
})

export default BusinessInfo;