import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Main from './src/components/main'
import { StackNavigator } from 'react-navigation'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Actors',
  };
  render() {
    return(
      <View style={styles.container}>
        <Main />
      </View>)
  }
}

const App = StackNavigator({
  Home: { screen: HomeScreen },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
