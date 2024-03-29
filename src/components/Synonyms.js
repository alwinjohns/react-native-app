import React from 'react'
import { StyleSheet, Text, View, Button, FlatList, TextInput, KeyboardAvoidingView } from 'react-native'
import { getActorSynonyms } from './../reducers/fakeSynonyms'

const ListItem = ({item, remove}) =>
    <View>
      <Text
        style={styles.item}>{item.key}
      </Text>
      <Button
        style={styles.removeButton}
        title={'Remove'}
        onPress={() => {remove(item.key)}}
        color="#841584"
      />
    </View>

export default class Synonyms extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      synonymList: [],
      text: '',
    }
    this.removeSynonym = this.removeSynonym.bind(this)
    this.addSynonym = this.addSynonym.bind(this)
  }
  componentWillMount () {
    fetch('http://104.198.76.143:8080/dictionary/synonyms', {method: "GET", headers: { "secret-key": "mySecretKey" }})
    .then((response) => response.json())
    .then((responseData) => {
      const resp = responseData[this.props.actor] || []
      console.log('synonyms: ', resp);

        this.setState({synonymList: resp})
    })
    .catch(() => {
        this.setState({synonymList: []})
    })
    .done()
  }
  static navigationOptions = ({ navigation }) => ({
    title: `Add synonyms for ${this.props.actor}`,
  })

  removeSynonym(name) {
    const data = {
                    "name": this.props.actor,
                    "synonym": name
                  }
    console.log(data);
    fetch('http://104.198.76.143:8080/dictionary/deleteSynonym', {method: "DELETE", headers: { "secret-key": "mySecretKey", "Content-Type": "application/json" }, body: JSON.stringify(data)})
    .then(() => {
      const index = this.state.synonymList.findIndex((e) => e === name)
      this.setState({ synonymList: [ ...this.state.synonymList.slice(0, index), ...this.state.synonymList.slice(index + 1) ] })
    })

    .catch((e) => {
        console.log('could not delete', e)
    })
    .done()
  }
  addSynonym() {
    const data = {
                    "name": this.props.actor,
                    "synonym": this.state.text
                  }
    console.log(data);
    fetch('http://104.198.76.143:8080/dictionary/saveSynonym', {method: "POST", headers: { "secret-key": "mySecretKey", "Content-Type": "application/json" }, body: JSON.stringify(data)})
    .then(() => {
      this.state.text !== '' && this.setState({synonymList: [...this.state.synonymList, this.state.text]})
      this.state.text = ''
    })

    .catch((e) => {
        console.log('could not add', e)
    })
    .done()
  }
  render() {
    const { actor } = this.props
    // console.log('inside render: ', this.state.synonymList);
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.header}>{`Add synonyms for ${actor}`}</Text>
        <FlatList
          data={this.state.synonymList.map(e => ({key: e}))}
          renderItem={({item}) => <ListItem item={item} remove={this.removeSynonym}/>}
        />
        <TextInput
          style={styles.inputText}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder={'Add new synonyms'}
        />
        <Button
          style={styles.addButton}
          title={'Add'}
          onPress={this.addSynonym}
        />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0dbd9',
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
  inputText: {
    height: 40,
    width: 250,
    margin: 30,
    borderColor: 'gray',
    borderWidth: 1,
  },
  removeButton: {
    height: 40,
    width: 250,
    marginLeft: 330,
  },
  addButton: {
    height: 40,
    width: 250,
    marginBottom: 130,
  },
})
