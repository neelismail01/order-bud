import React from "react";
import { View, SafeAreaView, TextInput, StyleSheet, Dimensions, Text, TouchableOpacity, Touchable } from "react-native";

var { height, width } = Dimensions.get("window");

const Login = (props) => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safeContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>OrderBud</Text>
                </View>
                <View style={styles.bodyContainer}>
                <Text style={styles.welcomeText}>Welcome Back</Text>
                    <View style={styles.mainContainer}>
                        <View style={styles.inputContainer}>
                            <TextInput style={styles.input} placeholder="Email" />
                            <TextInput style={styles.input} placeholder="Password" />
                        </View>
                        <TouchableOpacity style={styles.loginButton}>
                            <Text style={styles.loginText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.registerContainer}>
                        <TouchableOpacity style={styles.registerLinkContainer} onPress={() => props.navigation.navigate('Register')}>
                            <Text style={styles.registerLinkText}>Register</Text>
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
        height: "25%",
        justifyContent: "center",
        alignItems: "center"
    },
    headerText: {
        fontSize: 56,
        fontWeight: "bold",
        color: "white",
    },
    bodyContainer: {
        justifyContent: "flex-start",
        backgroundColor: "white",
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        width: width,
        height: "75%",
        padding: 20,
    },
    mainContainer: {
        height: "70%",
        width: "100%",
        alignItems: "center",
    },
    welcomeText: {
        fontSize: 32,
        fontWeight: "bold"
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
        borderRadius: 5,
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
    registerContainer: {
        height: "30%",
        width: "100%",
        alignItems: "center",
    },
    registerLinkContainer: {
        width: "100%",
        borderRadius: 5,
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: "green",
        justifyContent: "center",
        alignItems: "center",
    },
    registerLinkText: {
        fontSize: 22,
        color: "green",
        fontWeight: "bold"
    }
})

export default Login;