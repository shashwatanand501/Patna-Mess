import React, { useState, useRef } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OTPInput = ({ length, onOTPComplete }) => {
    const [otp, setOTP] = useState(new Array(length).fill(''));
    const inputRefs = useRef([]);
    const navigation = useNavigation();

    const handleChange = (value, index) => {
        const newOTP = [...otp];
        newOTP[index] = value;
        setOTP(newOTP);

        if (value && index < length - 1) {
            inputRefs.current[index + 1].focus();
        }

        if (newOTP.join('').length === length) {
            onOTPComplete(newOTP.join(''));
        }
    };

    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && index > 0 && !otp[index]) {
            inputRefs.current[index - 1].focus();
        }
    };



    return (
        <View style={styles.otpContainer}>
            {otp.map((_, index) => (
                <TextInput
                    key={index}
                    ref={ref => inputRefs.current[index] = ref}
                    style={styles.otpInput}
                    keyboardType="numeric"
                    maxLength={1}
                    onChangeText={value => handleChange(value, index)}
                    onKeyPress={e => handleKeyPress(e, index)}
                    value={otp[index]}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        gap: 5
    },
    otpInput: {
        width: 30,
        height: 40,
        borderWidth: 1,
        borderTopColor: 'white',
        borderRightColor: 'white',
        borderLeftColor: 'white',
        borderColor: '#ccc',
        textAlign: 'center',
        fontSize: 18,
    },
});

export default OTPInput;
