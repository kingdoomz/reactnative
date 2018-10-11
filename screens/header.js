import React from 'react';
import {  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  View,
} from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
        <View style = {styles.container}>
        <View style = {styles.header}>
        <Text style={styles.textfont}>Header</Text>
        </View>
        </View>
        );
        }
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: '#0336FF',
        justifyContent: 'center',
        borderBottomColor: '#ddd',
        paddingTop: 30,
    },

     textfont: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },

    statusbar: {
        backgroundColor: '#002663',
        justifyContent: 'center',
        borderBottomColor: '#ddd',
        paddingTop: 7,
    },
  
});
