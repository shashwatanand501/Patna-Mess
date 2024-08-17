import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Footer = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>
                Live <Text style={styles.highlight}>it</Text> up!
            </Text>
            <View style={styles.locationContainer}>
                <Text style={styles.captionText}>Crafted with </Text>
                <FontAwesome name="heart" size={16} color="red" />
                <Text style={styles.captionText}> in Patna, India</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        paddingBottom: 90,
        paddingTop: 20
    },
    mainText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: 'rgba(33, 0, 93, 1)',  // Updated color
        textAlign: 'center',
    },
    highlight: {
        color: '#999',
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    captionText: {
        fontSize: 16,
        color: '#666',
        marginHorizontal: 2,
    },
});

export default Footer;
