import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';

import Menu from './Menu';
import MenuCard from './MenuCard';
import SearchBar from "../../../Shared/SearchBar";
import BusinessInfo from './BusinessInfo';
import BusinessCategories from './BusinessCategories';
import ItemBottomSheet from '../Item/ItemBottomSheet';

var { width, height } = Dimensions.get('window')


const BusinessPage = (props) => {
    
    const { coverImage, name, address, categories, products } = props.route.params;
    const businessDetails = { coverImage, name, address};

    return (
        <ScrollView>
            <BusinessInfo businessDetails={businessDetails} />
            <View style={{alignItems: "center"}}>
                <BusinessCategories categories={categories} />
                <SearchBar showFilterIcon={false} />
            </View>
            <Menu categories={categories} products={products} />
        </ScrollView>
    )
}

export default BusinessPage;