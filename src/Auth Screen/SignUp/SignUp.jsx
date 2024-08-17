import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, ImageBackground, Alert } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';
import { Button, TextInput } from 'react-native-paper';
import LoginIcon from '../../Assert/Logo1.png';
import { ScrollView } from 'react-native-gesture-handler';

const SignUp = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const firstNameY = useSharedValue(300);
    const lastNameY = useSharedValue(300);
    const emailY = useSharedValue(300);
    const phoneY = useSharedValue(300);
    const passwordY = useSharedValue(300);
    const confirmPasswordY = useSharedValue(300);
    const buttonY = useSharedValue(300);
    const googleButtonY = useSharedValue(300);

    useEffect(() => {
        firstNameY.value = withTiming(0, {
            duration: 500,
            easing: Easing.out(Easing.exp),
        });
        lastNameY.value = withTiming(0, {
            duration: 600,
            easing: Easing.out(Easing.exp),
        });
        emailY.value = withTiming(0, {
            duration: 700,
            easing: Easing.out(Easing.exp),
        });
        phoneY.value = withTiming(0, {
            duration: 800,
            easing: Easing.out(Easing.exp),
        });
        passwordY.value = withTiming(0, {
            duration: 900,
            easing: Easing.out(Easing.exp),
        });
        confirmPasswordY.value = withTiming(0, {
            duration: 1000,
            easing: Easing.out(Easing.exp),
        });
        buttonY.value = withTiming(0, {
            duration: 1100,
            easing: Easing.out(Easing.exp),
        });
        googleButtonY.value = withTiming(0, {
            duration: 1300,
            easing: Easing.out(Easing.exp),
        });
    }, []);

    const firstNameStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: firstNameY.value }],
    }));

    const lastNameStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: lastNameY.value }],
    }));

    const emailStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: emailY.value }],
    }));

    const phoneStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: phoneY.value }],
    }));

    const passwordStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: passwordY.value }],
    }));

    const confirmPasswordStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: confirmPasswordY.value }],
    }));

    const buttonStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: buttonY.value }],
    }));

    const googleButtonStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: googleButtonY.value }],
    }));

    const handleSignUp = () => {
        if (!email || !password || !confirmPassword || !phoneNumber || !firstName || !lastName) {
            Alert.alert('Error', 'All fields are required.');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match.');
            return;
        }

        setLoading(true);
        // Add your sign-up logic here
        setTimeout(() => {
            setLoading(false);
            // Navigate to another screen or show a success message
        }, 2000); // Simulating a network request
    };

    const handleGoogleSignUp = () => {
        // Add your Google sign-up logic here
    };

    return (
        <ImageBackground style={styles.backgroundImage}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.innerContainer}>
                    <Image style={styles.loginImage} source={LoginIcon} />
                    <View style={styles.formD1}>
                        <Animated.View style={[styles.inputContainer, firstNameStyle, { flex: 1, marginRight: 5 }]}>
                            <TextInput
                                label="First Name"
                                mode="flat"
                                value={firstName}
                                onChangeText={setFirstName}
                                style={styles.input}
                            />
                        </Animated.View>
                        <Animated.View style={[styles.inputContainer, lastNameStyle, { flex: 1, marginLeft: 5 }]}>
                            <TextInput
                                label="Last Name"
                                mode="flat"
                                value={lastName}
                                onChangeText={setLastName}
                                style={styles.input}
                            />
                        </Animated.View>
                    </View>

                    <Animated.View style={[styles.inputContainer, emailStyle]}>
                        <TextInput
                            label="Email"
                            mode="flat"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            style={styles.input}
                        />
                    </Animated.View>
                    <Animated.View style={[styles.inputContainer, phoneStyle]}>
                        <TextInput
                            label="Phone Number"
                            mode="flat"
                            value={phoneNumber}
                            onChangeText={setPhoneNumber}
                            keyboardType="phone-pad"
                            maxLength={10}
                            style={styles.input}
                        />
                    </Animated.View>
                    <Animated.View style={[styles.inputContainer, passwordStyle]}>
                        <TextInput
                            label="Password"
                            mode="flat"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                            style={styles.input}
                        />
                    </Animated.View>
                    <Animated.View style={[styles.inputContainer, confirmPasswordStyle]}>
                        <TextInput
                            label="Confirm Password"
                            mode="flat"
                            secureTextEntry
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            style={styles.input}
                        />
                    </Animated.View>
                    <Animated.View style={[styles.buttonContainer, buttonStyle]}>
                        <Button
                            mode="contained"
                            loading={loading}
                            onPress={handleSignUp}
                            style={styles.primaryButton}
                            labelStyle={styles.buttonText}
                        >
                            Sign Up
                        </Button>
                    </Animated.View>
                    <Animated.View style={[styles.buttonContainer, buttonStyle]}>
                        <Button
                            mode='outlined'
                            onPress={() => navigation.navigate('Login')}
                            style={styles.secondaryButton}
                            labelStyle={styles.buttonText}
                        >
                            Already have an account?
                        </Button>
                    </Animated.View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // Optional: adjusts the size of the image to cover the screen
    },
    formD1: {
        justifyContent: 'center',
        alignContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginBottom: 20, // Adjusted margin for better spacing
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    innerContainer: {
        alignItems: 'center',
        width: '100%',
        minWidth: '30%'
    },
    loginImage: {
        width: 400,
        height: 200,
        marginBottom: 30,
        resizeMode: 'contain',
    },
    inputContainer: {
        width: '100%',
        marginVertical: 10,
    },
    input: {
        backgroundColor: '#fff',
    },
    buttonContainer: {
        marginTop: 20,
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden',
    },
    primaryButton: {
        backgroundColor: 'rgba(33, 0, 93, 1)',
    },
    secondaryButton: {
        borderColor: 'rgba(33, 0, 93, 1)',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    googleButton: {
        marginTop: 20,
    },
});

export default SignUp;
