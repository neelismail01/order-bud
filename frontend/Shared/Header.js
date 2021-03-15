import React from "react";
import { StyleSheet, SafeAreaView, View, TouchableOpacity, Text } from "react-native";

import { Icon } from 'react-native-elements';

const Header = () => {
    return(
        <SafeAreaView style={styles.header}>
            <View style={styles.pickUpDelivery}>
                <TouchableOpacity>
                    <View>
                        <Text style={styles.pickUpDeliveryText}>Deliver</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.pickUpDeliveryText}>Pick-Up</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.address}>
                <Text style={styles.addressText}>400B Albert Street</Text>
                <Icon name="angle-down" type="font-awesome-5" color="green" size={20} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        alignContent: "center",
        justifyContent: "center",
        marginTop: 60,
        marginBottom: 15
    },
    pickUpDelivery: {
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 10
    },
    pickUpDeliveryText: {
        fontWeight: "bold",
        fontSize: 22,
        marginHorizontal: 15
    },
    address: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    addressText: {
        color: "green",
        fontSize: 20,
        fontWeight: "bold",
        marginHorizontal: 10
    },
})

export default Header;