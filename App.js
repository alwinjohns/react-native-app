import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Main from './src/components/main'
import Synonyms from './src/components/Synonyms'
import { StackNavigator } from 'react-navigation'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Actors',
  };
  render() {
    const { navigate } = this.props.navigation
    return(
      <View style={styles.container}>
        <Main navigate={navigate}/>
      </View>)
  }
}

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: Synonyms },
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
