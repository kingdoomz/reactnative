import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // 6.2.2
import { TabNavigator, TabBarBottom } from 'react-navigation'; // 1.0.0-beta.27
import Account from './screens/Account'
import Home from './screens/home';
import Header from './screens/header';


class HomeScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.background}>
        <Home />
      </ScrollView>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.background}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.textfont}>Settings!</Text>
      </View>
      </ScrollView>
    );
  }
}

class AccountScreen extends React.Component {
  render() {
    return (
        <Account />
    );
  }
}

export default TabNavigator(
  {
    Home: { screen: HomeScreen },
    Settings: { screen: SettingsScreen },
    Account: { screen: AccountScreen },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        } else if (routeName === 'Account') {
          iconName = `ios-happy${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'brown',
    },
    animationEnabled: true,
    swipeEnabled: false,
  }
);

const styles = StyleSheet.create({
  textfont: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
  },
  background: {
    backgroundColor: '#fff656',
}
});