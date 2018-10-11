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

export default class Listdata extends React.Component {

  render() {
    return (
      <View>
       <Header />
       <Text>LIST DATA</Text>
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
