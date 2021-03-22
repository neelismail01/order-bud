import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, ScrollView, Dimensions } from 'react-native';

import MenuCard from './MenuCard'

var { height } = Dimensions.get('window')


const BusinessPage = (props) => {

    return (
        <ScrollView>
            <View style={styles.listContainer}>
                {props.categories.map(category => {
                    return (
                        <View>
                            <View style={styles.categoryHeader}>
                                <Text style={styles.categoryHeaderText}>{category.name}</Text>
                            </View>
                            {props.products.map(product => {
                                return (
                                    <View>
                                        {
                                            product.category.name === category.name &&
                                            <MenuCard product={product} />
                                        }
                                    </View>
                                );
                            })}
                        </View>
                    )
                })}
            </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        elevation: 8,
    },
    categoryHeader: {
        marginBottom: -1,
        marginTop: 9,
        width: "100%",
        backgroundColor: "white",
        paddingVertical: 10,
        borderRadius: 5,
    },
    categoryHeaderText: {
        fontSize: 30,
        fontWeight: "bold",
        marginLeft: 25,
        marginTop: 10
    },
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
        height: height
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
    }
})

export default BusinessPage;