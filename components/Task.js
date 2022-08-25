import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

function Task({text}) {
  return (
    <View style={styles.Item}>
        <View style={styles.ItemLeft}>
            <View style={styles.Square}></View>
            <Text style={styles.ItemText}>{text}</Text>
        </View>
        <View style={styles.Circular}></View>
    </View>
  );
}

const styles = StyleSheet.create({
    Item:{
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom:20,
    },

     ItemLeft:{
     flexDirection: 'row',
     alignItems: 'center',
     flexWrap: 'wrap',
    },

    Square:{
        width:24,
        height: 24,
        backgroundColor:'red',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    ItemText:{
        maxWidth: '80%',
    },
    Circular:{
        height: 12,
        width: 12,
        borderWidth: 2,
        borderRadius:5,
        borderColor:"red",

    },
});

export default Task;