import React from 'react';
import {  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from './header';

export default class Newdata extends React.Component {

    render() {
        return (
          <View>
          <Header />
            <Text>TAMBAH DATA</Text>
            <Text>Nama Pengirim:</Text>
            <TextInput></TextInput>
            <Text>Nama Barang:</Text>
            <TextInput></TextInput>
            <Text>Berat:</Text>
            <TextInput></TextInput>
            <Text>Nama Penerima:</Text>
            <TextInput></TextInput>
            <Text>Tujuan:</Text>
            <TextInput></TextInput>
          </View>
        );
      }
    
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingTop: 24,
      },
    });
    