import React, { useState, useCallback } from "react";
import { View, StyleSheet, ActivityIndicator, ScrollView, SafeAreaView } from "react-native";
import { Container } from "native-base";
import { useFocusEffect } from '@react-navigation/native'
import axios from 'axios';

import { useSelector } from 'react-redux';
import { selectCartItems } from '../../../Redux/cartSlice';

import Header from "../../../Shared/Header";
import Banner from "../../../Shared/Banner";
import SearchBar from "../../../Shared/SearchBar";
import ViewCartButton from "../../../Shared/ViewCartButton";

import CategoryFilter from "./CategoryFilter";
import BusinessCard from "./BusinessCard";
import Cart from "../Cart/Cart";
import HomeFilter from "./HomeFilter";

import baseURL from "../../../assets/common/baseUrl";

const ProductContainer = (props) => {
  const [businesses, setBusinesses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true)
  const [showCart, setShowCart] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const cartItems = useSelector(selectCartItems);

  const showBottomSheet = () => {
    setShowCart(!showCart);
  }

  const handleFilter = () => {
    setShowFilter(!showFilter);
  }

  const goToCheckout = () => {
    showCart(!showCart);
    props.navigation.navigate('Checkout');
  }

  useFocusEffect(
    useCallback(() => {

        // Businesses
        axios.get(`${baseURL}businesses`)
        .then((res) => {
          setBusinesses(res.data);
          setLoading(false)
        })
        .catch((error) => {
          console.log('Api call error')
        })

        // Categories
        axios.get(`${baseURL}categories`)
        .then((res) => {
          setCategories(res.data)
        })
        .catch((error) => {
          console.log('Api call error')
        })

        return () => {
          setBusinesses([]);
          setCategories([]);
        };
      }, [])
  )

  const viewCartBtn = {
    position: "absolute",
    bottom: 15
  }

  return (
    <>
      {loading == false ? (
        <SafeAreaView>
          <ScrollView>
            <Header />
            <Banner />
            <CategoryFilter categories={categories} />
            <View style={styles.listContainer}>
              <SearchBar handleFilter={handleFilter} showFilterIcon={true} />
              {showFilter &&
                <HomeFilter showFilter={showFilter} handleFilter={handleFilter} />
              }
              {businesses.map(business => {
                return (
                  <BusinessCard key={business.name} business={business} navigation={props.navigation} />
                )
              })}
            </View>
            {
              showCart &&
              <Cart showBottomSheet={showBottomSheet} showCart={showCart} goToCheckout={goToCheckout}/>
            }
          </ScrollView>
          {
            cartItems.length > 0 &&
            <ViewCartButton parentStyle={viewCartBtn} showBottomSheet={showBottomSheet} />
          }
        </SafeAreaView>
      ) : (
          // Loading
          <Container style={[styles.center, { backgroundColor: "#f2f2f2" }]}>
            <ActivityIndicator size="large" color="green" />
          </Container>
        )}
    </>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 4,
    alignItems: "center",
    backgroundColor: "#ededed",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    elevation: 8,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ProductContainer;