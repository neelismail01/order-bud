import React from "react";
import { View, SafeAreaView, TextInput, StyleSheet, Dimensions, Text, TouchableOpacity, Touchable } from "react-native";

var { height, width } = Dimensions.get("window");

const Register = (props) => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safeContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Welcome To</Text>
                    <Text style={styles.headerText}>OrderBud.</Text>
                </View>
                <View style={styles.bodyContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput style={styles.input} placeholder="Name" />
                        <TextInput style={styles.input} placeholder="Email" />
                        <TextInput style={styles.input} placeholder="Password" />
                    </View>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginText}>Register</Text>
                    </TouchableOpacity>
                    <View style={styles.registerLinkContainer}>
                        <Text style={styles.registerLinkText}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                            <Text style={styles.registerLinkText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "green",
    },
    safeContainer: {
        height: height,
    },
    headerContainer: {
        height: "33%",
        justifyContent: "center"
    },
    headerText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white",
        marginLeft: 20
    },
    bodyContainer: {
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "white",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        width: width,
        height: "66%",
        padding: 20,
    },
    inputContainer: {
        marginVertical: 25,
        width: "100%"
    },
    input: {
        width: '100%',
        backgroundColor: "#ededed",
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 20,
        fontSize: 18,
        marginVertical: 15,
    },
    loginButton: {
        width: "100%",
        borderRadius: 50,
        paddingVertical: 20,
        paddingHorizontal: 15,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
    },
    loginText: {
        fontSize: 22,
        color: "white",
        fontWeight: "bold"
    },
    registerLinkContainer: {
        flexDirection: "row",
        marginTop: 20
    },
    registerLinkText: {
        fontSize: 18,
        marginHorizontal: 2
    }
})

export default Register;