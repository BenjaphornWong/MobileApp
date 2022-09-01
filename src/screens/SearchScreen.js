import React, {useState, useEffect } from "react"
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native"
import { Ionicons } from '@expo/vector-icons';
// import yelpApi from "../api/yelpApi";
import ResultsList from "../components/ResultsList";
import searchApi from "../api/searchApi";

const SearchScreen = () => {
    const [term, setTerm] = useState("");
    const [searchFunc, results, errMessage] = searchApi();

    const filterResults = (price) => {
        return results.filter((results) => {
            return results.price === price;
        });
    };

    return (
        <View style={styles.bg}>
            <View style={styles.inputVeiw}>
                <Ionicons 
                    name="search" 
                    size={24} 
                    color="black" 
                    style={styles.iconStyle}
                />
                <TextInput 
                    style={styles.inputStyle} 
                    placeholder="Search by name" 
                    value={term} 
                    onChangeText={(term) =>setTerm(term)}
                    onEndEditing={() => searchFunc(term)}
                />
            </View>
                {errMessage ? <Text style={styles.errMsg}>{errMessage}</Text> : null }

            <ScrollView>
                <ResultsList title="Cost Effective" results={filterResults("$")} />
                <ResultsList title="Big Pricer" results={filterResults("$$")} />
                <ResultsList title="Big Spender" results={filterResults("$$$")} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    inputVeiw:{
        height: 50,
        margin: 10,
        marginHorizontal: 15,
        backgroundColor:"#84E4D1",
        flexDirection: "row",
        borderRadius: 5,
    },
    inputStyle: {
        flex: 1,
        fontSize: 20,
        padding: 5,
        
    },
    iconStyle: {
        fontSize: 35,
        marginHorizontal: 15,
        alignSelf: "center",
    },
    errMsg: {
        marginLeft: 15,
    },
    bg:{
        backgroundColor: "#FAF7D8",
    },
});

export default SearchScreen;