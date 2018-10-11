import React from 'react';
import {  Image,
  Platform,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from './header';

export default class Account extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            judul: 'Account',
            nama:'Guest',
        };
        this.klikme=this.klikme.bind(this);
      }

      klikme(){
          this.setState({
              nama:'Ridwan',
              alamat:'Cengkareng'
          });
      };

  render() {
    return (
        <View>
        <Header />
        <View style = {styles.container}>
        <Text>Selamat datang {this.state.nama}</Text>
        <Text>Posisi Anda di {this.state.alamat}</Text>
        <Button
        onPress={this.klikme}
        title="Update"
      />
      </View>
      </View>
    );
  }

}
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        paddingTop: 30,
        alignItems: 'center',
    },
  });
  