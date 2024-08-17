import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';
import { Button, Portal, Dialog } from 'react-native-paper';
import { SocialIcon } from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import OTPInput from '../../Component/OTPInput/OTPInput';

// Ensure the path to the GIF is correct
import LoginIcon from '../../Assert/password.gif';

const Login = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isDialogVisible, setDialogVisible] = useState(false);
    const [otp, setOtp] = useState('');

    const phoneY = useSharedValue(300);
    const buttonY = useSharedValue(300);
    const googleButtonY = useSharedValue(300);

    useEffect(() => {
        phoneY.value = withTiming(0, {
            duration: 500,
            easing: Easing.out(Easing.exp),
        });
        buttonY.value = withTiming(0, {
            duration: 700,
            easing: Easing.out(Easing.exp),
        });
        googleButtonY.value = withTiming(0, {
            duration: 900,
            easing: Easing.out(Easing.exp),
        });
    }, []);

    const phoneStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: phoneY.value }],
    }));

    const buttonStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: buttonY.value }],
    }));

    const googleButtonStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: googleButtonY.value }],
    }));

    const handlePhoneNumberChange = (otp) => {
        setPhoneNumber(otp);
        if (otp.length === 10) {
            setDialogVisible(true); // Show the OTP dialog when 10 digits are entered
        }
    };
    const handleLocation = () => {
        navigation.navigate('LocationForm');
    };
    const handleLogin = () => {
        if (phoneNumber.length === 10) {
            setLoading(true);
            // Simulate a network request
            setTimeout(() => {
                setLoading(false);
                // Navigate to OTP screen if phone number is valid
                // Removed as dialog is used instead
            }, 2000);
        } else {
            Alert.alert("Error", "Please enter a valid 10-digit phone number.");
        }
    };

    const handleGoogleLogin = () => {
        // Add your Google login logic here
    };

    const handleOTPComplete = (otp) => {
        setOtp(otp);
        // Add your OTP verification logic here
        setTimeout(() => {
            setLoading(false);
            // Navigate to OTP screen if phone number is valid
            // Removed as dialog is used instead
        }, 2000);
        console.log('OTP entered:', otp);
    };

    const handleVerify = () => {
        if (otp.length === 6) {
            // Simulate a successful OTP verification
            setDialogVisible(false); // Close the dialog
            navigation.navigate('LocationForm'); // Navigate to the home screen
        } else {
            Alert.alert('Error', 'Please enter a valid 6-digit OTP.');
        }
    };

    return (
        <View style={styles.container}>
            <FastImage
                style={styles.loginImage}
                source={LoginIcon}
                resizeMode={FastImage.resizeMode.contain}
            />
            <Animated.View style={[styles.inputContainer, phoneStyle]}>
                <OTPInput length={10} onOTPComplete={handlePhoneNumberChange} />
            </Animated.View>
            <Animated.View style={[styles.buttonContainer, buttonStyle]}>
                <Button
                    mode="contained"
                    loading={loading}
                    onPress={handleLogin}
                    style={styles.primaryButton}
                    labelStyle={styles.buttonText}
                >
                    Login
                </Button>
            </Animated.View>
            <Animated.View style={[styles.buttonContainer, buttonStyle]}>
                <Button
                    mode="outlined"
                    onPress={() => navigation.navigate('SignUp')}
                    style={styles.secondaryButton}
                    labelStyle={styles.buttonText}
                >
                    Want to create a new account?
                </Button>
            </Animated.View>
            <Animated.View style={[styles.buttonContainer, googleButtonStyle]}>
                <SocialIcon
                    title='Sign In With Google'
                    button
                    type='google'
                    loading={loading}
                    onPress={handleGoogleLogin}
                />
            </Animated.View>

            {/* OTP Dialog */}
            <Portal>
                <Dialog visible={isDialogVisible} onDismiss={() => setDialogVisible(false)}>
                    <Dialog.Title>Enter OTP</Dialog.Title>
                    <Dialog.Content>
                        <OTPInput length={6} onOTPComplete={handleOTPComplete} />
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={handleVerify} mode='outlined'
                            style={styles.secondaryButton}
                            labelStyle={styles.buttonText}
                            loading={loading}
                        >
                            Verify
                        </Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
    },
    loginImage: {
        width: 200,
        height: 200,
        marginBottom: 30,
    },
    inputContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
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
    verifyButton: {
        backgroundColor: 'rgba(33, 0, 93, 1)',
    },
});

export default Login;
