import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { Button, IconButton } from 'react-native-paper';

class MealFoodCard extends React.Component {
    state = {
        modalVisible: false,
    };

    toggleModal = () => {
        this.setState({ modalVisible: !this.state.modalVisible });
    };

    render() {
        const { image, label, description, price } = this.props;
        const { modalVisible } = this.state;

        return (
            <View style={styles.cardContainer}>
                <TouchableOpacity onPress={this.toggleModal}>
                    <Image source={{ uri: image }} style={styles.image} />
                    <Text style={styles.label}>{label}</Text>
                </TouchableOpacity>

                <Modal
                    visible={modalVisible}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={this.toggleModal}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            {/* Close Button */}
                            <IconButton
                                icon="close"
                                size={24}
                                onPress={this.toggleModal}
                                style={styles.closeButton}
                            />
                            <Image source={{ uri: image }} style={styles.modalImage} />
                            <Text style={styles.modalLabel}>{label}</Text>
                            <Text style={styles.modalDescription}>{description}</Text>
                            <Text style={styles.modalPrice}>Price: ${price}</Text>
                            <Button mode="contained" onPress={() => alert('Added to cart')}>
                                Add to Cart
                            </Button>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        width: 150,
        height: 150,
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    image: {
        width: '100%',
        height: '80%',
    },
    label: {
        padding: 5,
        textAlign: 'center',
        backgroundColor: '#fff',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        position: 'relative', // Ensure relative positioning to correctly place the close button
    },
    closeButton: {
        position: 'absolute',
        right: 10,
        top: 10,
        zIndex: 1, // Ensure the button is above other elements
    },
    modalImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 15,
    },
    modalLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    modalDescription: {
        fontSize: 16,
        marginBottom: 10,
    },
    modalPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default MealFoodCard;
