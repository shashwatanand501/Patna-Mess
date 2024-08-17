import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Modal, ScrollView, Platform } from 'react-native';
import { Appbar, TextInput, Button, Card, Title, Paragraph, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps'; // Ensure you have react-native-maps installed
import Geolocation from '@react-native-community/geolocation'; // For getting the current location

const Header = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [mapRegion, setMapRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    });
    const [savedAddresses, setSavedAddresses] = useState([
        {
            pincode: '123456',
            address: '742 Evergreen Terrace, Springfield',
            addressLabel: 'Home',
            name: 'Homer Simpson',
            phoneNumber: '555-555-5555'
        },
        {
            pincode: '654321',
            address: '12 Grimmauld Place, London',
            addressLabel: 'Work',
            name: 'Sirius Black',
            phoneNumber: '555-123-4567'
        }
    ]);
    const [formData, setFormData] = useState({
        pincode: '',
        address: '',
        addressLabel: '',
        name: '',
        phoneNumber: ''
    });
    const navigation = useNavigation();

    useEffect(() => {
        const getLocation = async () => {
            if (Platform.OS === 'android') {
                await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        title: 'Location Permission',
                        message: 'We need your location to show it on the map',
                        buttonNeutral: 'Ask Me Later',
                        buttonNegative: 'Cancel',
                        buttonPositive: 'OK',
                    }
                );
            }
            Geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    setMapRegion({
                        ...mapRegion,
                        latitude,
                        longitude,
                    });
                },
                error => console.log(error),
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
            );
        };

        getLocation();
    }, []);

    const handlePress = () => {
        setModalVisible(true);
    };

    const handleSaveAddress = () => {
        setSavedAddresses([...savedAddresses, formData]);
        setFormData({
            pincode: '',
            address: '',
            addressLabel: '',
            name: '',
            phoneNumber: ''
        });
    };

    const handleSelectAddress = (address) => {
        setFormData(address);
    };

    return (
        <View style={styles.headerContainer}>
            <Appbar.Header>
                <Appbar.Action icon="account" onPress={() => navigation.openDrawer()} />
                <Appbar.Content title="Shashwat Anand" />
                <Appbar.Action icon="map-marker" onPress={handlePress} />
            </Appbar.Header>

            {/* Modal for Location Details */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <IconButton
                            icon="close"
                            size={24}
                            onPress={() => setModalVisible(false)}
                            style={styles.closeButton}
                        />
                        <Title>Select Location</Title>
                        <ScrollView style={styles.scrollView}>
                            {/* <MapView
                                style={styles.map}
                                region={mapRegion}
                                onRegionChangeComplete={(region) => setMapRegion(region)}
                                showsUserLocation={true}
                                showsMyLocationButton={true}
                            >
                                <Marker coordinate={mapRegion} />
                            </MapView> */}
                            <TextInput
                                label="Pincode"
                                value={formData.pincode}
                                onChangeText={(text) => setFormData({ ...formData, pincode: text })}
                                style={styles.input}
                            />
                            <TextInput
                                label="Address"
                                value={formData.address}
                                onChangeText={(text) => setFormData({ ...formData, address: text })}
                                style={styles.input}
                            />
                            <TextInput
                                label="Address Label"
                                value={formData.addressLabel}
                                onChangeText={(text) => setFormData({ ...formData, addressLabel: text })}
                                style={styles.input}
                            />
                            <TextInput
                                label="Name"
                                value={formData.name}
                                onChangeText={(text) => setFormData({ ...formData, name: text })}
                                style={styles.input}
                            />
                            <TextInput
                                label="Phone Number"
                                value={formData.phoneNumber}
                                onChangeText={(text) => setFormData({ ...formData, phoneNumber: text })}
                                style={styles.input}
                            />
                            <Button mode='contained' onPress={handleSaveAddress} style={styles.saveButton}>
                                Add Location
                            </Button>
                            <Title>Saved Addresses</Title>
                            {savedAddresses.map((item, index) => (
                                <Card key={index} style={styles.addressCard}>
                                    <Card.Content>
                                        <Title>{item.address}</Title>
                                        <Paragraph>{item.addressLabel} - {item.name} - {item.phoneNumber}</Paragraph>
                                    </Card.Content>
                                    <Card.Actions>
                                        <Button onPress={() => handleSelectAddress(item)}>Select</Button>
                                    </Card.Actions>
                                </Card>
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        backgroundColor: 'white',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: '90%',
        height: '80%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    closeButton: {
        alignSelf: 'flex-end',
    },
    scrollView: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: 300,
        marginBottom: 10,
    },
    input: {
        marginBottom: 10,
    },
    saveButton: {
        marginBottom: 10,
    },
    addressCard: {
        marginBottom: 10,
    },
});

export default Header;
