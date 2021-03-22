import React from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';

const BusinessCategories = (props) => {

    return (
        <ScrollView
            horizontal={true}
            bounces={true}
            style={{ marginTop: 25 }}
        >
            {props.categories.map(category => {
                return (
                    <TouchableOpacity key={category.name} style={styles.menuFilterTextContainer}>
                        <Text style={styles.menuFilterText}>{category.name}</Text>
                    </TouchableOpacity>
                )
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    menuFilterTextContainer: {
        marginHorizontal: 5,
        paddingHorizontal: 20,
        paddingVertical: 7.5,
        borderRadius: 5,
        backgroundColor: 'rgba(0, 128, 0, 0.75)',
    },
    menuFilterText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16
    },
})

export default BusinessCategories;