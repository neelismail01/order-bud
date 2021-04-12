import React, {useState} from 'react'
import { View, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';

var { height, width } = Dimensions.get("window");

const ItemImage = (props) => {
    const [imageWidth, setImageWidth] = useState();
    const [aspectRatio, setAspectRatio] = useState();

    const { image } = props;

    Image.getSize(image, (width, height) => {
        setAspectRatio(parseInt((height / width).toFixed(2)));
    })


    return (
        <View>
            <TouchableOpacity style={styles.cartBackBtn} onPress={props.handleRemoveItemModal}>
                <Icon name="arrow-left" type="font-awesome-5" color="black" size={17.5} />
            </TouchableOpacity>
            <View style={styles.productImageContainer}>
                <Image
                    style={styles.image}
                    objectFit="contain"
                    source={{
                        uri: image
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cartBackBtn: {
        position: "absolute",
        zIndex: 100,
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 1,
        height: 50,
        width: 50,
        top: 10,
        left: 10,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
    },
    productImageContainer: {
        backgroundColor: "white",
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        marginBottom: 20
    },
    image: {
        width: width,
        height: 300
    }
});

export default ItemImage;