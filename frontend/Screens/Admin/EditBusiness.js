import React from "react"
import { View, StyleSheet, Dimensions, Text, SafeAreaView, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get("window")

const EditBusiness = (props) => {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <Text>Edit Business</Text>
                <Text>cover image</Text>
                <Text>name</Text>
                <Text>address</Text>
                <Text>pickup</Text>
                <Text>delivery</Text>
                <Text>categories</Text>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default EditBusiness;