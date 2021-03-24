import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native';

import ItemImage from './ItemImage';
import ItemDetails from './ItemDetails';
import QuantitySetter from './QuantitySetter';
import AddToCartButton from './AddToCartButton';

import { useDispatch } from 'react-redux';
import { addToCart } from '../../../Redux/cartSlice';

const ItemBottomSheet = (props) => {
    const [quantity, setQuantity] = useState(props.quantity ? props.quantity : 1);

    const { image, name, description, brand, price, business } = props.product;

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({
            id: Date.now(),
            image: image,
            name: name,
            brand: brand,
            description,
            price: price,
            quantity: quantity,
            business: business.name
        }))
        props.handleRemoveItemModal();
    }

    const handlePlusCounter = () => {
        setQuantity(quantity + 1);
    }

    const handleMinusCounter = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <View style={styles.container}>
            <ItemImage image={image} handleRemoveItemModal={props.handleRemoveItemModal} />
            <ItemDetails name={name} brand={brand} description={description} />
            <QuantitySetter quantity={quantity} onPlus={handlePlusCounter} onMinus={handleMinusCounter} />
            <AddToCartButton handlePress={handleAddToCart} price={price} quantity={quantity} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        position: "absolute",
        bottom: 2,
        width: "100%",
        alignItems: "center",
        paddingBottom: 40
    }
});

export default ItemBottomSheet;