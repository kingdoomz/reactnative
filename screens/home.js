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
import Header from './header';
import Listdata from './listdata';
import Newdata from './newdata';

export default class Home extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            konten:'1',
            isLoggedIn:true
        };
        this.listdata=this.listdata.bind(this);
        this.tambahdata=this.tambahdata.bind(this);
      }

      listdata(){
          this.setState({
            konten:'1',
          });
      };

      tambahdata(){
        this.setState({
          konten:'0',
        });
    }  

  render() {
    return (
      <View>
        {this.state.konten=='0' ? <Newdata /> : <Listdata />}
        <Button
        onPress={this.listdata}
        title="List Data"
      />
      
        <Button
        onPress={this.tambahdata}
        title="Tambah Baru"
      />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
  },
  myhome: {
    flex: 1, 
    color: '#fff',
    justifyContent: 'center', 
    alignItems: 'center',
  },
  });
