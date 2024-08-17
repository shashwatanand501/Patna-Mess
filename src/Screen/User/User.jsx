import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';

export class User extends Component {
    handleSignOut = () => {
        // Implement sign out logic here
        alert('Sign Out Button Pressed');
    };

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.profileContainer}>
                    {/* User Photo */}
                    <Avatar.Image
                        size={100}
                        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR75IBxhzh2Rw3Saoqocq0nvzn_GP3NH0CQCA&s' }} // Replace with actual user photo URL
                        style={styles.profileImage}
                    />
                </View>
                <Card style={styles.card}>
                    <Card.Content style={styles.infoContainer}>
                        {/* User Information */}
                        <Text style={styles.infoTitle}>Name:</Text>
                        <Text style={styles.infoText}>John Doe</Text>

                        <Text style={styles.infoTitle}>Register Date:</Text>
                        <Text style={styles.infoText}>January 1, 2023</Text>

                        <Text style={styles.infoTitle}>Subscription Start Date:</Text>
                        <Text style={styles.infoText}>February 1, 2023</Text>

                        <Text style={styles.infoTitle}>Subscription End Date:</Text>
                        <Text style={styles.infoText}>February 1, 2024</Text>

                        <Text style={styles.infoTitle}>Invested Date:</Text>
                        <Text style={styles.infoText}>March 1, 2023</Text>
                    </Card.Content>
                </Card>
                <View style={styles.footerContainer}>
                    {/* Sign Out Button */}
                    <Button mode='contained' onPress={this.handleSignOut} style={styles.signOutButton}>
                        Sign Out
                    </Button>
                    {/* App Version */}
                    <Text style={styles.versionText}>App Version: 10.0.0</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f5f5f5',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileContainer: {
        marginBottom: 20,
    },
    profileImage: {
        borderColor: '#ddd',
        borderWidth: 2,
    },
    card: {
        width: '100%',
        padding: 20,
        marginBottom: 20,
        backgroundColor: '#fff',
        elevation: 2,
    },
    infoContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    infoTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    infoText: {
        fontSize: 16,
        marginBottom: 15,
        color: '#333',
    },
    footerContainer: {
        alignItems: 'center',
    },
    signOutButton: {
        backgroundColor: 'rgba(33, 0, 93, 1)',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    versionText: {
        fontSize: 14,
        color: '#888',
    },
});

export default User;
