import React from 'react'
import { View, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

import { useSelector } from 'react-redux';
import { selectCartItems } from '../../../Redux/cartSlice';

import Menu from './Menu';
import BusinessInfo from './BusinessInfo';
import BusinessCategories from './BusinessCategories';
import ViewCartButton from "../../../Shared/ViewCartButton";


const BusinessPage = (props) => {

    const { coverImage, name, address, rating, categories, products } = props.route.params;
    const businessDetails = { coverImage, name, address, rating };

    const cart = useSelector(selectCartItems);

    return (
        <SafeAreaView>
            <ScrollView>
                <BusinessInfo businessDetails={businessDetails} />
                <View style={styles.categoriesContainer}>
                    <BusinessCategories categories={categories} />
                </View>
                <Menu categories={categories} products={products} />
            </ScrollView>
            {
                cart.length > 0 &&
                <ViewCartButton navigation={props.navigation} />
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    categoriesContainer: {
        alignItems: "center",
        backgroundColor: "white",
        paddingLeft: 15
    }
})

export default BusinessPage;