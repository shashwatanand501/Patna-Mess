import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Modal, Text, Pressable } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

const { width } = Dimensions.get('window');

export class SubscribeInfo extends Component {
    state = {
        modalVisible: false,
        selectedDiet: null,
    };

    setModalVisible = (visible, diet = null) => {
        this.setState({ modalVisible: visible, selectedDiet: diet });
    };

    renderButton = (iconName, color, label) => {
        return (
            <Pressable
                key={label}
                style={[styles.button, { backgroundColor: color }]}
                onPress={() => this.setModalVisible(true, { iconName, color, label })}
            >
                <View style={styles.buttonContent}>
                    <Icon name={iconName} size={24} color="#fff" />
                    <Text style={styles.label}>{label}</Text>
                </View>
            </Pressable>
        );
    };

    handleAddToCart = () => {
        alert(`${this.state.selectedDiet.label} added to cart!`);
        this.setModalVisible(false);
    };

    render() {
        const { modalVisible, selectedDiet } = this.state;
        const buttonData = [
            { icon: 'leaf', color: '#8BC34A', label: 'Vegan' },
            { icon: 'apple-alt', color: '#FF6347', label: 'Vegetarian' },
            { icon: 'drumstick-bite', color: '#FFA500', label: 'Keto' },
            { icon: 'fish', color: '#4682B4', label: 'Pescatarian' },
            { icon: 'seedling', color: '#32CD32', label: 'Plant-Based' },
            { icon: 'bread-slice', color: '#FFD700', label: 'Gluten-Free' },
            { icon: 'hamburger', color: '#8A2BE2', label: 'Paleo' },
            { icon: 'carrot', color: '#FF4500', label: 'Raw' },
            { icon: 'egg', color: '#DC143C', label: 'Low-Carb' },
            { icon: 'cheese', color: '#20B2AA', label: 'Mediterranean' },
            { icon: 'seedling', color: '#FF69B4', label: 'Whole30' },
            { icon: 'cookie', color: '#008080', label: 'Low-Fat' },
            { icon: 'blender', color: '#DAA520', label: 'Smoothie' },
            { icon: 'bacon', color: '#6A5ACD', label: 'Carnivore' },
            { icon: 'pepper-hot', color: '#FF8C00', label: 'Spicy' },
            { icon: 'utensils', color: '#7B68EE', label: 'Balanced' },
        ];

        return (
            <View style={styles.container}>
                {buttonData.map(({ icon, color, label }) =>
                    this.renderButton(icon, color, label)
                )}

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.modalView}>
                        <Pressable
                            style={styles.closeIconContainer}
                            onPress={() => this.setModalVisible(!modalVisible)}>
                            <Icon name="times" size={24} color="#000" />
                        </Pressable>
                        <Text style={styles.modalText}>{selectedDiet?.label}</Text>
                        <Icon name={selectedDiet?.iconName} size={80} color={selectedDiet?.color} />
                        <View style={styles.modalButtonContainer}>
                            <Pressable
                                style={[styles.button, styles.addToCartButton]}
                                onPress={this.handleAddToCart}>
                                <Text style={styles.textStyle}>Add to Cart</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: 10,
    },
    button: {
        width: width / 4.5,
        height: width / 4.5,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        overflow: 'hidden',
    },
    buttonContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 12,
        marginTop: 5,
        textAlign: 'center',
        color: '#fff',
        width: '100%',
        lineHeight: 14,
    },
    modalView: {
        marginTop: 'auto',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        position: 'relative',
    },
    closeIconContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 10,
    },
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
    },
    addToCartButton: {
        backgroundColor: '#4CAF50',
        flex: 1,
        marginRight: 10,
        padding: 10,
        borderRadius: 10,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 20,
    },
});

export default SubscribeInfo;
