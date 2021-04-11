import React from "react"
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get("window")

const AdminHome = (props) => {

    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.header}>Manage Your Business</Text>
            <View style={styles.actionsContainer}>
                <TouchableOpacity style={styles.actionBox} onPress={() => props.navigation.navigate('Edit Business', { business: props.business })}>
                    <Text style={styles.actionText}>Edit Business</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionBox} onPress={() => props.navigation.navigate('Add Product', { business: props.business })}>
                    <Text style={styles.actionText}>Add Product</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionBox} onPress={() => props.navigation.navigate('Manage Products', { business: props.business })}>
                    <Text style={styles.actionText}>View Products</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: height,
        flex: 1
    },
    businessCoverPhoto: {
        backgroundColor: "grey",
        width: width,
        height: height * 0.225,
    },
    businessCoverPhotoPlaceholder: {
        backgroundColor: "grey",
        width: width,
        height: height * 0.225,
    },
    sectionContainer: {
        marginBottom: 40
    },
    header: {
        fontSize: 28,
        fontWeight: "bold",
        marginLeft: 5
    },
    metricsContainer: {
        flexDirection: "row",
        width: "100%",
        marginTop: 10
    },
    metrics: {
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        width: "50%"
    },
    salesVolume: {
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderTopWidth: 1.25,
        borderBottomWidth: 1.25,
        borderLeftWidth: 1.25,
        borderColor: "rgba(11, 156, 49, 1)"
    },
    orderVolume: {
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderTopWidth: 1.25,
        borderBottomWidth: 1.25,
        borderRightWidth: 1.25,
        borderColor: "rgba(11, 156, 49, 1)"
    },
    metricsIntroText: {
        color: "grey",
        fontSize: 16
    },
    metricsMainText: {
        color: "green",
        fontWeight: "bold",
        fontSize: 24
    },
    actionsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    actionBox: {
        backgroundColor: "green",
        width: width * 0.3,
        height: width * 0.2,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        borderRadius: 5
    },
    actionText: {
        color: "white",
        textAlign: "center",
        fontSize: 17,
        fontWeight: "bold"
    }
})

export default AdminHome;