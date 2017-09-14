import React from 'react'
import { Alert, StyleSheet, Text, View, FlatList, Button } from 'react-native'
// import { actors } from './../reducers/fakeActorsList'
import { getMoviesFromApiAsync } from './../reducers/actors'

const ListItem = ({item, navigate}) => <Text style={styles.item} onPress={() => navigate('Chat', { actor: item.key })}>{item.key}</Text>

export default class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = { actors: [] } ;
    }
    componentWillMount () {

      fetch('http://104.198.76.143:8080/dictionary/actors', {method: "GET"})
      .then((response) => response.json())
      .then((responseData) => {
          this.setState({ actors: responseData });
      })
      .done()
    }
    render() {
      const { navigate } = this.props
      const { actors } = this.state

      return (
        <View style={styles.container}>
            <FlatList
              data={actors.map(e => ({key: e}))}
              renderItem={({item}) => <ListItem item={item} navigate={navigate}/>}
            />
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: 22
  },
  header: {
      paddingTop: 20,
      paddingBottom: 20,
      fontSize: 25,
  },
  item: {
      padding: 10,
      fontSize: 18,
      height: 44,
  },
})
