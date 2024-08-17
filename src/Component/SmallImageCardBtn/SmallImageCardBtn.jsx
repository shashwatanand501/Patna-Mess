import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const SmallImageCardBtn = ({ data }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleCardPress = (item) => {
        setSelectedItem(item);
        setModalVisible(true);
    };

    const renderCard = ({ item }) => (
        <TouchableOpacity style={styles.card} onPress={() => handleCardPress(item)}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.label}>{item.label}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Carousel
                loop
                width={160} // Width of the carousel container
                height={160}
                autoPlay
                data={data}
                renderItem={renderCard}
                scrollAnimationDuration={10000} // Duration for one complete scroll cycle
                style={styles.carousel}
                itemWidth={100} // Width of each card
                pagingEnabled={false} // Ensure seamless scrolling
                scrollEnabled={true} // Enable scrolling
            />

            <Modal visible={modalVisible} transparent={true} animationType="slide" onRequestClose={() => setModalVisible(false)}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                            <Text style={styles.closeText}>x</Text>
                        </TouchableOpacity>
                        {selectedItem && (
                            <>
                                <Image source={{ uri: selectedItem.image }} style={styles.modalImage} />
                                <Text style={styles.modalLabel}>{selectedItem.label}</Text>
                                <Text style={styles.modalDescription}>{selectedItem.description}</Text>
                            </>
                        )}
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    carousel: {
        width: '100%',
    },
    card: {
        width: 150, // Adjust according to your design needs
        alignItems: 'center',
    },
    image: {
        width: 150, // Ensure the image fills the card width
        height: 120,
        borderRadius: 8,
    },
    label: {
        fontSize: 14,
        textAlign: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
    },
    closeButton: {
        alignSelf: 'flex-end',
    },
    closeText: {
        fontSize: 16,
        color: 'red',
    },
    modalImage: {
        width: 200,
        height: 200,
        borderRadius: 8,
        marginBottom: 16,
    },
    modalLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    modalDescription: {
        fontSize: 14,
        textAlign: 'center',
    },
});

export default SmallImageCardBtn;
