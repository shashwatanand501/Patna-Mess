// src/screens/SearchResultsScreen.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';

const SearchResultsScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);

    const dummyData = [
        'Smoothie Bowl', 'Breakfast Special', 'Gourmet Dinner', 'Low Carb Diet',
        'Healthy Meals', 'Delicious Desserts', 'Vegan Options', 'Gluten-Free Meals'
    ];

    const handleSearch = (term) => {
        setSearchTerm(term);
        const filteredResults = dummyData.filter((item) =>
            item.toLowerCase().includes(term.toLowerCase())
        );
        setResults(filteredResults);
    };

    const renderResult = ({ item }) => (
        <View style={styles.resultItem}>
            <Text style={styles.resultText}>{item}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Search..."
                value={searchTerm}
                onChangeText={handleSearch}
            />
            <FlatList
                data={results}
                keyExtractor={(item) => item}
                renderItem={renderResult}
                ListEmptyComponent={<Text style={styles.emptyText}>No results found</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    searchInput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 16,
    },
    resultItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    resultText: {
        fontSize: 18,
    },
    emptyText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#888',
    },
});

export default SearchResultsScreen;
