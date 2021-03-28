import React, { useState } from "react";
import { View, SafeAreaView, TextInput, StyleSheet, Dimensions, Text, TouchableOpacity, Touchable } from "react-native";

const { height } = Dimensions.get("window");

const Login = (props) => {
    const [page, setPage] = useState('Register');
    const [emailFocus, setEmailFocus] = useState(false);
    const [nameFocus, setNameFocus] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);
    const [confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);

    return (
        <View
            style={styles.container}
        >
            <SafeAreaView style={styles.safeContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>Welcome To OrderBud</Text>
                    <Text style={styles.subHeader}>Order weed from top dispensaries near you.</Text>
                </View>
                <View style={styles.bodyContainer}>
                    <View style={styles.buttonGroupContainer}>
                        <TouchableOpacity
                            style={[styles.button, page === 'Register' && styles.highlightedContainer]}
                            onPress={() => setPage('Register')}
                        >
                            <Text style={[styles.buttonGroupText, page === 'Register' && styles.highlightedText]}>Register</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, page === 'Login' && styles.highlightedContainer]}
                            onPress={() => setPage('Login')}
                        >
                            <Text style={[styles.buttonGroupText, page === 'Login' && styles.highlightedText]}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={[styles.textInput, emailFocus && styles.focusInputStyle]}
                            placeholder="Email"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                        />
                        {
                            page === 'Register' &&
                            <TextInput
                                style={[styles.textInput, nameFocus && styles.focusInputStyle]}
                                placeholder="Name"
                                onFocus={() => setNameFocus(true)}
                                onBlur={() => setNameFocus(false)}
                            />
                        }
                        <TextInput
                            style={[styles.textInput, passwordFocus && styles.focusInputStyle]}
                            placeholder="Password"
                            onFocus={() => setPasswordFocus(true)}
                            onBlur={() => setPasswordFocus(false)}
                        />
                        {
                            page === 'Register' &&
                            <TextInput
                                style={[styles.textInput, confirmPasswordFocus && styles.focusInputStyle]}
                                placeholder="Confirm Password"
                                onFocus={() => setConfirmPasswordFocus(true)}
                                onBlur={() => setConfirmPasswordFocus(false)}
                            />
                        }
                    </View>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>{page === 'Login' ? 'Login' : 'Create Account'}</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        height: height,
        backgroundColor: "white"
    },
    safeContainer: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
    },
    headerContainer: {
        marginBottom: 20,
        paddingHorizontal: 20
    },
    header: {
        fontSize: 36,
        fontWeight: "bold",
        color: "green",
    },
    subHeader: {
        color: "grey",
        fontSize: 22,
        fontWeight: "bold",
        marginTop: 10
    },
    bodyContainer: {
        width: "95%",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        borderRadius: 5,
    },
    buttonGroupContainer: {
        flexDirection: "row",
        borderColor: "green",
        borderWidth: 2,
        borderRadius: 5,
        width: "100%"
    },
    button: {
        width: "50%",
        padding: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonGroupText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    highlightedContainer: {
        backgroundColor: "green",
    },
    highlightedText: {
        color: "white"
    },
    inputContainer: {
        width: "100%",
        marginVertical: 30
    },
    textInput: {
        marginVertical: 10,
        height: 50,
        borderRadius: 5,
        borderColor: "#e6e6e6",
        borderWidth: 2,
        width: "100%",
        paddingHorizontal: 20,
        fontSize: 18
    },
    focusInputStyle: {
        borderColor: "green",
        borderWidth: 2
    },
    buttonContainer: {
        backgroundColor: "green",
        padding: 20,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
    buttonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    }
})

export default Login;