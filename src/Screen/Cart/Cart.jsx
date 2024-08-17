import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import CartItem from '../../Component/CartItem/CartItem';
import { Button } from 'react-native-paper';

export class Cart extends Component {
    state = {
        items: [
            {
                id: '1',
                title: 'Item 1',
                description: 'This is item 1 description',
                image: 'https://townsquare.media/site/393/files/2024/03/attachment-My-name-is-what-11.jpg?w=780&q=75',
                quantity: 1,
                price: 20,
            },
            {
                id: '2',
                title: 'Item 2',
                description: 'This is item 2 description',
                image: 'https://assets.architecturaldigest.in/photos/60084f39f93542952b665f27/master/w_1600%2Cc_limit/Mumbai-restaurant-COVID-19-2.jpg',
                quantity: 2,
                price: 15,
            },
            {
                id: '3',
                title: 'Item 3',
                description: 'This is item 3 description',
                image: 'https://i0.wp.com/blog.petpooja.com/wp-content/uploads/2021/10/indian.jpg?resize=696%2C385&ssl=1',
                quantity: 3,
                price: 30,
            },
            {
                id: '4',
                title: 'Item 4',
                description: 'This is item 4 description',
                image: 'https://thumbs.dreamstime.com/b/chef-hotel-restaurant-kitchen-cooking-hands-prepared-beef-steak-vegetable-decoration-81415061.jpg',
                quantity: 1,
                price: 25,
            },
        ],
    };

    calculateTotalCost = () => {
        return this.state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {this.state.items.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </ScrollView>
                <View style={styles.totalContainer}>
                    <Text style={styles.totalText}>Total Cost: ${this.calculateTotalCost()}</Text>
                    <Button mode="contained" style={styles.payButton}>Pay Now</Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 90,
        marginTop: 10
    },
    totalContainer: {
        marginTop: 20,
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    payButton: {
        marginLeft: 10,
    },
});

export default Cart;
