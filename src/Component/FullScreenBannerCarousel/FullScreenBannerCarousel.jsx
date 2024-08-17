import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Modal, TouchableOpacity, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { Button, IconButton } from 'react-native-paper';

const { width } = Dimensions.get('window');

export class FullScreenBannerCarousel extends Component {
    state = {
        modalVisible: false,
        selectedImage: null,
    };

    toggleModal = (image) => {
        this.setState({
            modalVisible: !this.state.modalVisible,
            selectedImage: image || null,
        });
    };

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.touchable} onPress={() => this.toggleModal(item)}>
                <Image source={{ uri: item.image }} style={styles.bannerImage} />
            </TouchableOpacity>
        );
    };

    render() {
        const { data } = this.props;
        const { modalVisible, selectedImage } = this.state;

        return (
            <View style={styles.container}>
                <Carousel
                    data={data}
                    width={width}
                    height={250} // Adjust the height as needed
                    renderItem={this.renderItem}
                    autoPlay={true}
                    loop={true}
                    autoplayInterval={8000} // Time in milliseconds between transitions
                    animationType="timing" // Using timing animation for smoother transition
                    scrollAnimationDuration={1500} // Duration of the transition animation
                />

                {selectedImage && (
                    <Modal
                        visible={modalVisible}
                        animationType="fade"
                        transparent={true}
                        onRequestClose={() => this.toggleModal(null)}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <IconButton
                                    icon="close"
                                    size={24}
                                    onPress={() => this.toggleModal(null)}
                                    style={styles.closeButton}
                                />
                                <Image source={{ uri: selectedImage.image }} style={styles.modalImage} />
                                <Text style={styles.modalLabel}>{selectedImage.label}</Text>
                                <Text style={styles.modalDescription}>{selectedImage.description}</Text>
                                <Button mode="contained" onPress={() => alert('Action on image')}>
                                    Action Button
                                </Button>
                            </View>
                        </View>
                    </Modal>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    touchable: {
        width: '100%',
    },
    bannerImage: {
        width: '100%',
        height: 250, // Adjust the height as needed
        resizeMode: 'cover',
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
        position: 'relative',
    },
    closeButton: {
        position: 'absolute',
        right: 10,
        top: 10,
        zIndex: 1,
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
});

export default FullScreenBannerCarousel;
