import React from 'react';
import { StyleSheet, View, Dimensions, Image, Text, TouchableOpacity } from 'react-native';

var { width } = Dimensions.get("window");

const OrderCard = (props) => {
    const { businesses, order, ordersCount } = props;

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const date = order.dateOrdered.toString().substring(0, order.dateOrdered.toString().indexOf('T'));
    let dateParts = date.split('-');
    dateParts = dateParts.map(datePart => {
        return parseInt(datePart);
    })
    const formattedDate = `${monthNames[dateParts[1]]} ${dateParts[2]}, ${dateParts[0]}`;

    const menu = businesses.filter(dispense => dispense.name === order.business.name);

    return (
        <View>
            <TouchableOpacity style={styles.productContainer} onPress={() => props.navigation.navigate('Receipt', { order: order, ordersCount: ordersCount })}>
                <Image
                    style={styles.coverImage}
                    source={{ uri: order.business.coverImage }}
                />
                <View style={styles.productDetails}>
                    <Text style={styles.title}>{order.business.name}</Text>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={[styles.subText, { marginBottom: 5 }]}>${order.totalPrice} • {order.totalQuantity} {order.totalQuantity === 1 ? 'Item' : 'Items'}</Text>
                        <Text style={[styles.subText, { marginTop: 2 }]}>{formattedDate}</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.viewMenu} onPress={() => props.navigation.navigate('Business Page', menu[0])}>
                        <Text>View Menu</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    coverImage: {
        marginLeft: 17,
        height: "100%",
        width: "25%"
    },
    productContainer: {
        width: '100%',
        marginVertical: 1,
        paddingVertical: 25,
        flexDirection: "row",
        borderRadius: 5,
        alignItems: 'center',
        elevation: 8,
        backgroundColor: 'white',
        borderBottomWidth: 0.4,
        borderBottomColor: "grey"
    },
    productDetails: {
        marginLeft: 25,
    },
    title: {
        fontWeight: "bold",
        fontSize: 17,
    },
    subText: {
        color: "grey",
        fontWeight: "bold"
    },
    viewMenu: {
        backgroundColor: "#E8E8E8",
        padding: 10,
        borderRadius: 10,
        marginRight: 18
    }
})

export default OrderCard;