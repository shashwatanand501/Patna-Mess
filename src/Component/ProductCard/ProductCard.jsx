// src/Component/ProductCard/ProductCard.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';

const ProductCard = ({ image, rating, description, deliveryTime, originalPrice, discountedPrice, discount }) => {
    const openWhatsApp = () => {
        const phoneNumber = '9810314220';
        const message = encodeURIComponent('Hello, I am interested in your product.');
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        Linking.openURL(url);
    };

    return (
        <View style={styles.card}>
            <View style={styles.cardImage}>
                <Image source={{ uri: image }} style={styles.image} />
                {discount && <Text style={styles.discountTag}>{discount}% OFF</Text>}
            </View>
            <View style={styles.cardDetails}>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.deliveryTime}>⚡ {deliveryTime}</Text>
                <View style={styles.price}>
                    <View>
                        <Text style={styles.originalPrice}>₹ {originalPrice}</Text>
                        <Text style={styles.discountedPrice}>₹ {discountedPrice}</Text>
                    </View>
                    <TouchableOpacity style={styles.shopNowButton} onPress={openWhatsApp}>
                        <Text style={styles.shopNowButtonText}>SHOP NOW</Text>
                    </TouchableOpacity>
                </View>
                {discount && <Text style={styles.discountText}>{discount}% off</Text>}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        overflow: 'hidden',
        width: 300,
        margin: 20,

    },
    cardImage: {
        position: 'relative',
    },
    image: {
        width: '100%',
        height: 200,
    },
    discountTag: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#00c853',
        color: 'white',
        padding: 5,
        borderRadius: 5,
        fontSize: 12,
        fontWeight: 'bold',
    },
    cardDetails: {
        padding: 20,
    },
    description: {
        fontSize: 18,
        marginBottom: 10,
        color: '#000',
    },
    deliveryTime: {
        fontSize: 14,
        color: '#757575',
    },
    price: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    originalPrice: {
        textDecorationLine: 'line-through',
        color: '#009846',
        fontSize: 12,
    },
    discountedPrice: {
        fontSize: 16,
        color: '#000',
    },
    shopNowButton: {
        backgroundColor: '#B5291C',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    shopNowButtonText: {
        color: 'white',
        fontSize: 16,
    },
    discountText: {
        fontSize: 14,
        color: '#000',
        textAlign: 'left',
        marginTop: 5,
    },
});

export default ProductCard;
