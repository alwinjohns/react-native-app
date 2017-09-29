import React from 'react'
import { StyleSheet, Text, View, Button, FlatList, TextInput } from 'react-native'
import { MyWebView } from './webView'
// import { getActorLinks } from './../reducers/fakeWikiLinks'

const ListItem = ({item}) =>
    <View>
      <Text
        style={styles.item}>{item.key}
      </Text>
    </View>

export default class Wiki extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      wiki: ''
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: `URLs for ${this.props.actor}`,
  })
  componentWillMount() {
    const actor = this.props.actor
    fetch('http://104.198.76.143:8080/dictionary/wikiForActors', {method: "GET", headers: { "secret-key": "mySecretKey" }})
    .then((response) => response.json())
    .then((responseData) => {
      console.log('wiki found:', responseData[actor][actor]);
      this.setState({wiki: responseData[actor][actor]})
    })
    .catch(() => {
      console.log('no wiki found');
      this.setState({ wiki: '' })
    })
    .done()
  }
  render() {
    const { actor } = this.props

    {
      /*
      <View style={styles.container}>
        <Text style={styles.header}>{`Links related to ${actor}`}</Text>

        <FlatList
          data={getActorLinks(actor)}
          renderItem={({item}) => <ListItem item={item} />}
        />
      </View>
      */
    }
    return (
      <MyWebView uri={this.state.wiki}/>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe9d8',
    alignItems: 'center',
    justifyContent: 'center',
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
