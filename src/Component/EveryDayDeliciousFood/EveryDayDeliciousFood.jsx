// src/components/EveryDayDeliciousFood.js
import React, { useEffect } from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';
import AnimationData from '../../Assert/cooking.json'; // Import your Lottie JSON file
import BackgroundImage from '../../Assert/Background.jpg'; // Import your background image

const EveryDayDeliciousFood = () => {
    const lottieOpacity = useSharedValue(0);
    const lottieTranslateY = useSharedValue(50); // From below

    const titleOpacity = useSharedValue(0);
    const titleTranslateY = useSharedValue(50); // From below

    const subtitleOpacity = useSharedValue(0);
    const subtitleTranslateY = useSharedValue(50); // From below

    useEffect(() => {
        lottieOpacity.value = withTiming(1, { duration: 600, easing: Easing.out(Easing.exp) });
        lottieTranslateY.value = withTiming(0, { duration: 600, easing: Easing.out(Easing.exp) });

        setTimeout(() => {
            titleOpacity.value = withTiming(1, { duration: 600, easing: Easing.out(Easing.exp) });
            titleTranslateY.value = withTiming(0, { duration: 600, easing: Easing.out(Easing.exp) });
        }, 300); // Delay for title

        setTimeout(() => {
            subtitleOpacity.value = withTiming(1, { duration: 600, easing: Easing.out(Easing.exp) });
            subtitleTranslateY.value = withTiming(0, { duration: 600, easing: Easing.out(Easing.exp) });
        }, 600); // Delay for subtitle
    }, []);

    const lottieStyle = useAnimatedStyle(() => ({
        opacity: lottieOpacity.value,
        transform: [{ translateY: lottieTranslateY.value }],
    }));

    const titleStyle = useAnimatedStyle(() => ({
        opacity: titleOpacity.value,
        transform: [{ translateY: titleTranslateY.value }],
    }));

    const subtitleStyle = useAnimatedStyle(() => ({
        opacity: subtitleOpacity.value,
        transform: [{ translateY: subtitleTranslateY.value }],
    }));

    return (
        <ImageBackground source={BackgroundImage} style={styles.messageContainer}>
            <View style={styles.overlay} />
            <View style={styles.textContainer}>
                <Animated.View style={lottieStyle}>
                    <LottieView source={AnimationData} autoPlay loop style={styles.lottieImage} />
                </Animated.View>
                <Animated.Text style={[styles.title, titleStyle]}>
                    Want Everyday Delicious Food?
                </Animated.Text>
                <Animated.Text style={[styles.subtitle, subtitleStyle]}>
                    Try Our Services
                </Animated.Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
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
});

export default EveryDayDeliciousFood;
