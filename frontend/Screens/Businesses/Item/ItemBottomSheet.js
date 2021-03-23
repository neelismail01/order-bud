import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { BottomSheet } from 'react-native-elements';

import ItemImage from './ItemImage';
import ItemDetails from './ItemDetails';
import QuantitySetter from './QuantitySetter';
import AddToCartButton from './AddToCartButton';

import { useDispatch } from 'react-redux';
import { addToCart } from '../../../Redux/cartSlice';

const ItemBottomSheet = (props) => {
    const [quantity, setQuantity] = useState(1);

    const { image, name, description, brand, price, business } = props.product;

    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart({
            id: Date.now(),
            name: name,
            price: price,
            quantity: quantity,
            business: business.name
        }))
        props.handleShowItemPage();
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
        <BottomSheet
            isVisible={props.showItemPage}
            containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0)' }}
        >
            <View style={styles.container}>
                <ItemImage image={image} handleShowItemPage={props.handleShowItemPage} />
                <ItemDetails name={name} brand={brand} description={description} />
                <QuantitySetter quantity={quantity} onPlus={handlePlusCounter} onMinus={handleMinusCounter} />
                <AddToCartButton handlePress={handleAddToCart} price={price} quantity={quantity} />
            </View>
        </BottomSheet>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        alignItems: "center"
    }
})

export default ItemBottomSheet;