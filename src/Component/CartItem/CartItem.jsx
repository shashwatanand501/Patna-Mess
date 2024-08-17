// src/Component/CartItem.js
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Button, Card } from 'react-native-paper';

const CartItem = ({ item }) => (
    <Card style={styles.card}>
        <Card.Cover source={{ uri: item.image }} style={styles.cardImage} />
        <Card.Content>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
            <Text style={styles.price}>${item.price} each</Text>
            <Text style={styles.total}>Total: ${item.price * item.quantity}</Text>
            <Button>Remove</Button>
        </Card.Content>
    </Card>
);

const styles = StyleSheet.create({
    card: {
        marginBottom: 10,
        borderRadius: 8,
        overflow: 'hidden',
    },
    cardImage: {
        height: 150,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    quantity: {
        fontSize: 16,
        marginVertical: 5,
    },
    price: {
        fontSize: 16,
        marginVertical: 5,
    },
    total: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CartItem;
