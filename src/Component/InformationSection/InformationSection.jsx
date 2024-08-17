import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export class InformationSection extends Component {
    render() {
        const { header, bodyText, imageUri, imagePosition } = this.props;

        return (
            <View style={styles.container}>
                {imagePosition === 'left' && (
                    <View style={styles.leftSection}>
                        <Image
                            source={{ uri: imageUri }}
                            style={styles.image}
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.header}>{header}</Text>
                            <Text style={styles.bodyText}>{bodyText}</Text>
                        </View>
                    </View>
                )}
                {imagePosition === 'right' && (
                    <View style={styles.leftSection}>
                        <View style={styles.textContainer}>
                            <Text style={styles.header}>{header}</Text>
                            <Text style={styles.bodyText}>{bodyText}</Text>
                        </View>
                        <Image
                            source={{ uri: imageUri }}
                            style={styles.image}
                        />
                    </View>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    leftSection: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    textContainer: {
        flex: 1,
        marginLeft: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    bodyText: {
        fontSize: 16,
        color: '#333',
    },
});

export default InformationSection;
