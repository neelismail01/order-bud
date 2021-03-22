import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native';

import Menu from './Menu';
import BusinessInfo from './BusinessInfo';
import BusinessCategories from './BusinessCategories';

const BusinessPage = (props) => {
    
    const { coverImage, name, address, rating, categories, products } = props.route.params;
    const businessDetails = { coverImage, name, address, rating };

    return (
        <ScrollView>
            <BusinessInfo businessDetails={businessDetails} />
            <View style={styles.categoriesContainer}>
                <BusinessCategories categories={categories} />
            </View>
            <Menu categories={categories} products={products} />
        </ScrollView>
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