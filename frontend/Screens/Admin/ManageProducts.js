import React, { useState, useCallback } from "react"
import { SafeAreaView, StyleSheet, Dimensions, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native'

import axios from 'axios';

import baseURL from "../../assets/common/baseUrl";

const { width, height } = Dimensions.get("window")

const ManageProducts = (props) => {

    useFocusEffect(
        useCallback(() => {
            axios.get(`${baseURL}`)
            .then(res => {

            })
            .catch(err => {
                console.log(err);
            })
        }, [])
    )

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.topSellingContainer}>
                    <Text style={styles.topSellingHeader}>Your Top Selling Products</Text>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 20
    },
    topSellingContainer: {
        marginTop: 20
    },
    topSellingHeader: {
        fontSize: 24,
        fontWeight: "bold"
    }
})

export default ManageProducts;