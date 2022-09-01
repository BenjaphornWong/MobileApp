import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import yelpApi from '../api/yelpApi';

const ShowResultScreen = ({ route }) => {
    const[result, setResult] = useState("");
    const item = route.params;
    const id = item.id;
    const [photo, setphoto] = useState([]);
    const [location, setlocation] = useState("");

    const getResult = async (id) => {
        const response = await yelpApi.get(`/${id}`);
        setResult(response.data);
        setphoto(response.data.photos);
        setlocation(response.data.location);
    }

    useEffect(() => {
        getResult(id);
    }, []);

    return (
        <View style={styles.bg}>
            
            <FlatList
                horizontal={true}
                data={photo}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Image source={{ uri: item }} style={styles.image} />
                        </View>
                    )
                }}
            />
            <Text style={styles.title}>{result.name}</Text>
            <Text style={styles.resultTitle}>⭐ Rating: {result.rating} Stars ({result.review_count} review)</Text>
            <Text style={styles.resultTitle}>💰 Price: {result.price}</Text>
            <Text style={styles.resultTitle}>☎ Phone: {result.display_phone}</Text>
            <Text style={styles.resultTitle}>📍 Location: {location.display_address}</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: "bold",
        alignSelf: "center",
        marginBottom: 10,
    },
    container: {
        marginBottom: 15,
    },
    resultContainer: {
        marginLeft: 15,
    },
    resultTitle: {
        fontSize: 16,
        alignSelf: "center",
        marginBottom: 20,
    },
    image: {
        width: 300,
        height: 200,
        borderRadius: 5,
        marginTop: 30,
        marginBottom: 20,
        marginLeft: 10,
        alignSelf: "center",
    },
    bg:{
        backgroundColor: "#FAF7D8",
    },
})

export default ShowResultScreen;