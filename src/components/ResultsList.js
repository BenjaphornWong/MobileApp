import React from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const ResultsList = ({ title, results }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
                horizontal
                data={results}
                keyExtractor={(results) => results.id}
                renderItem = {({ item }) => {
                    return (
                        <TouchableOpacity 
                        onPress={() => navigation.navigate("ShowResult", { id: item.id})} >
                        <View style={styles.resultContainer}>
                            <Text style={styles.resultTitle}>{item.name}</Text>
                            <Image source={{ uri: item.image_url }} style={styles.image} />
                            <Text>
                                {item.rating} Stars, {item.review_count} Review
                            </Text>
                        </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 150,
        borderRadius: 5,
        marginBottom: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
    },
    container: {
        marginBottom: 15,
    },
    resultContainer: {
        marginLeft: 15,
    },
    resultTitle: {
        fontSize: 16,
        marginBottom: 5,
    },
})

export default ResultsList;