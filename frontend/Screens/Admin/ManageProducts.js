import React, { useState, useCallback } from "react"
import { SafeAreaView, StyleSheet, Dimensions, Text, View, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native'

import axios from 'axios';

import baseURL from "../../assets/common/baseUrl";

const { width, height } = Dimensions.get("window")

const ManageProducts = (props) => {
    const { business } = props.route.params;

    const [topProducts, setTopProducts] = useState([]);
    const [currentProducts, setCurrentProducts] = useState();
    const [loading, setLoading] = useState(true);

    useFocusEffect(
        useCallback(() => {
            axios.get(`${baseURL}products/topProducts/${business.id}`)
                .then(res => {
                    setTopProducts(res.data);
                    console.log(res.data);
                })
                .then(() => {
                    axios.get(`${baseURL}products/${business.id}`)
                        .then(res => {
                            setCurrentProducts(res.data);
                            setLoading(false);
                        })
                        .catch(err => {
                            console.log(err);
                        })
                })
                .catch(err => {
                    console.log(err);
                })
        }, [])
    )

    return (
        <>
            {
                loading === false ?
                    <View style={styles.container}>
                        <SafeAreaView>
                            <ScrollView>
                                {
                                    topProducts.length > 0 &&
                                    <View style={styles.sectionContainer}>
                                        <Text style={styles.topSellingHeader}>Your Top Selling Products</Text>
                                        <ScrollView
                                            horizontal={true}
                                        >
                                            {
                                                topProducts.map(topProduct => {
                                                    return (
                                                        <View style={{ backgroundColor: "orange", height: 100, width: 200, marginRight: 5 }}>
                                                            <Text style={{ color: "white", fontWeight: "bold" }}>{topProduct.product.name}</Text>
                                                            <Text style={{ color: "white", fontWeight: "bold" }}>{topProduct.product.brand}</Text>
                                                            <Text style={{ color: "white", fontWeight: "bold" }}>{topProduct.product.price}</Text>
                                                            <Text style={{ color: "white", fontWeight: "bold" }}>{topProduct.count}</Text>
                                                        </View>
                                                    )
                                                })
                                            }
                                        </ScrollView>
                                    </View>
                                }
                                <View style={styles.sectionContainer}>
                                    <Text style={styles.topSellingHeader}>Current Inventory</Text>
                                    {
                                        currentProducts.map(product => {
                                            return (
                                                <View style={{ backgroundColor: "orange", height: 100, width: 200, marginTop: 5 }}>
                                                    <Text style={{ color: "white", fontWeight: "bold" }}>{product.name}</Text>
                                                    <Text style={{ color: "white", fontWeight: "bold" }}>{product.brand}</Text>
                                                    <Text style={{ color: "white", fontWeight: "bold" }}>{product.countInStock}</Text>
                                                    <TouchableOpacity
                                                        style={{ backgroundColor: "black" }}
                                                        onPress={() => props.navigation.navigate('Edit Product', { business, product })}
                                                    >
                                                        <Text style={{ color: "white" }}>Edit</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                            </ScrollView>
                        </SafeAreaView>
                    </View> :
                    <View style={{ backgroundColor: "#f2f2f2", justifyContent: "center", alignItems: "center" }}>
                        <ActivityIndicator size="large" color="green" />
                    </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        height: height,
        padding: 20
    },
    sectionContainer: {
        marginVertical: 20
    },
    topSellingHeader: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10
    }
})

export default ManageProducts;