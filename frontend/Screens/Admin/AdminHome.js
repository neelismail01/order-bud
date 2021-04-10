import React from "react"
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get("window")

const AdminHome = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.businessCoverPhoto} />
            <View style={{ padding: 15 }}>
                <View style={styles.sectionContainer}>
                    <Text style={[styles.header]}>Performance</Text>
                    <View style={styles.metricsContainer}>
                        <View style={[styles.salesVolume, styles.metrics]}>
                            <Text style={styles.metricsIntroText}>Sales Volume</Text>
                            <Text style={styles.metricsMainText}>$1500</Text>
                        </View>
                        <View style={[styles.orderVolume, styles.metrics]}>
                        <Text style={styles.metricsIntroText}>Order Volume</Text>
                            <Text style={styles.metricsMainText}>45 Orders</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.sectionContainer}>
                    <Text style={[styles.header]}>Manage Your Business</Text>
                    <View style={styles.actionsContainer}>
                        <TouchableOpacity style={styles.actionBox} onPress={() => props.navigation.navigate('Edit Business')}>
                            <Text style={styles.actionText}>Edit Business</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionBox} onPress={() => props.navigation.navigate('Add Product')}>
                            <Text style={styles.actionText}>Add Product</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionBox} onPress={() => props.navigation.navigate('Manage Products')}>
                            <Text style={styles.actionText}>Manage Products</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: height
    },
    businessCoverPhoto: {
        backgroundColor: "grey",
        width: width,
        height: height * 0.225,
    },
    sectionContainer: {
        marginVertical: 15
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
        backgroundColor: "green",
        width: "50%"
    },
    salesVolume: {
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderRightWidth: 1.25,
        borderRightColor: "rgba(11, 156, 49, 1)"
    },
    orderVolume: {
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5
    },
    metricsIntroText: {
        color: "white",
        fontSize: 16
    },
    metricsMainText: {
        color: "white",
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
        height: width * 0.2    ,
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