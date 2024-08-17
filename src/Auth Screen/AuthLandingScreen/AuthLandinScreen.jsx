import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';
import AnimationData from '../../Assert/cooking.json'; // Import your Lottie JSON file
import BackgroundImage from '../../Assert/Background.jpg'; // Import your background image
import LoginIcon from '../../Assert/Logo1.png'; // Import your login icon
import EveryDayDeliciousFood from '../../Component/EveryDayDeliciousFood/EveryDayDeliciousFood';

const AuthLandingScreen = ({ navigation }) => {
    const [showAuthScreen, setShowAuthScreen] = useState(false);
    const transitionY = useSharedValue(300);
    const opacity = useSharedValue(0);

    useEffect(() => {
        transitionY.value = withTiming(0, {
            duration: 600,
            easing: Easing.out(Easing.exp),
        });

        setTimeout(() => {
            setShowAuthScreen(true);
            opacity.value = withTiming(1, {
                duration: 600,
                easing: Easing.out(Easing.exp),
            });
        }, 2000); // 2 seconds delay
    }, []);

    const transitionStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: transitionY.value }],
    }));

    const opacityStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
    }));

    return (
        <View style={styles.container}>
            {!showAuthScreen ? (
                <Animated.View style={[styles.transitionContainer, transitionStyle]}>
                    <EveryDayDeliciousFood />
                </Animated.View>
            ) : (
                <Animated.View style={[styles.transitionContainer, transitionStyle, opacityStyle]}>
                    <Image style={styles.loginImage} source={LoginIcon} />
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate('SignUp')}>
                        <Text style={styles.signupText}>Create New</Text>
                    </TouchableOpacity>
                </Animated.View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    transitionContainer: {
        width: '100%',
        alignItems: 'center',
        flex: 1,
    },
    messageContainer: {
        alignItems: 'center',
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        paddingVertical: 20,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: 'auto',
        zIndex: 1, // Ensure text is above the images
        paddingVertical: 20, // Add some padding to avoid text touching edges
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background for better readability
        borderRadius: 10,
        paddingHorizontal: 50
    },
    lottieImage: {
        width: 250, // Adjust size as needed
        height: 250, // Adjust size as needed
    },
    title: {
        fontSize: 32, // Increased font size
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: '#fff', // White color for better contrast
    },
    subtitle: {
        fontSize: 20, // Increased font size
        textAlign: 'center',
        color: '#fff', // White color for better contrast
    },
    loginImage: {
        marginBottom: 30,
        resizeMode: 'contain',
    },
    button: {
        backgroundColor: 'rgba(33, 0, 93, 1)',
        padding: 15,
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 10,
        width: '80%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    secondaryButton: {
        backgroundColor: 'transparent',
        padding: 15,
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 10,
        width: '80%',
        borderColor: 'rgba(33, 0, 93, 1)',
        borderWidth: 1, // Added border width of 1px
    },
    signupText: {
        color: 'rgba(33, 0, 93, 1)',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default AuthLandingScreen;
