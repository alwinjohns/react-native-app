import React from 'react'
import { StyleSheet, Text, View, Button, FlatList, TextInput, KeyboardAvoidingView } from 'react-native'
import { getActorRoles } from './../reducers/fakeRoles'

const ListItem = ({item, remove, actor}) =>
    <View>
      <Text
        style={styles.item}>Role : {item.key}
      </Text>
      <Text>{item.start} - {item.end}</Text>
      <Button
        style={styles.removeButton}
        title={'Remove'}
        onPress={() => {remove(item.key)}}
        color="#841584"
      />
    </View>

export default class Roles extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      roleList: [],
      text: '',
      start: '',
      end: '',
    }
    this.removeRole = this.removeRole.bind(this)
    this.addRole = this.addRole.bind(this)
  }

  static navigationOptions = ({ navigation }) => ({
    title: `Add roles for ${this.props.actor}`,
  })

  removeRole(name) {
    const data = {
                    "key": this.props.actor,
                    "role": name
                  }
    // console.log(data)
    fetch('http://104.198.76.143:8080/dictionary/deleteRole', {method: "DELETE", headers: { "secret-key": "mySecretKey", "Content-Type": "application/json" }, body: JSON.stringify(data)})
    .then(() => {
      const index = this.state.roleList.findIndex((e) => e.role === name)
      this.setState({roleList: [...this.state.roleList.slice(0, index), ...this.state.roleList.slice(index + 1)]})
    })

    .catch((e) => {
        console.log('could not delete', e)
    })
    .done()
  }
  addRole() {
    const data =  {
                    "key": this.props.actor,
                    "role": this.state.text,
                    "start": this.state.start,
                    "end": this.state.end
                  }
    // console.log(data);
    fetch('http://104.198.76.143:8080/dictionary/saveRole', {method: "POST", headers: { "secret-key": "mySecretKey", "Content-Type": "application/json" }, body: JSON.stringify(data)})
    .then(() => {
      this.state.text !== '' && this.setState({roleList: [...this.state.roleList, { role: this.state.text, start: this.state.start, end: this.state.end } ]})
      this.state.text = ''
      this.state.start = ''
      this.state.end = ''
    })

    .catch((e) => {
        console.log('could not add', e)
    })
    .done()
  }
  componentWillMount () {
    fetch('http://104.198.76.143:8080/dictionary/actorRoles', {method: "GET", headers: { "secret-key": "mySecretKey" }})
    .then((response) => response.json())
    .then((responseData) => {
        // console.log('hello', this.props.actor, ':: ', responseData[this.props.actor]);
        this.setState({roleList: responseData[this.props.actor].map((e) => { return { role: e.role, start: e.start, end: e.end }})})
        console.log('roles: ', this.state.roleList);
    })
    .catch(() => {
        this.setState({roleList: []})
        // console.log('error...');
    })
    .done()
  }

  render() {
    const { actor } = this.props
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.header}>{`Add roles for ${actor}`}</Text>
        <FlatList
          data={this.state.roleList.map((e) => {return {key: e.role, start: e.start, end: e.end} })}
          renderItem={({item}) => <ListItem item={item} remove={this.removeRole} actor={this.actor}/>}
        />
        <TextInput
          style={styles.inputText}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder={'Add new roles'}
        />
        <TextInput
          style={styles.inputText}
          onChangeText={(start) => this.setState({start})}
          value={this.state.start}
          placeholder={'Enter start date (mm/dd/yyyy)'}
        />
        <TextInput
          style={styles.inputText}
          onChangeText={(end) => this.setState({end})}
          value={this.state.end}
          placeholder={'Enter end date (mm/dd/yyyy)'}
        />
        <Button
          style={styles.addButton}
          title={'Add'}
          onPress={this.addRole}
        />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f4ef',
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
    height: 30,
    width: 250,
    margin: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  removeButton: {
    height: 40,
    width: 250,
    marginLeft: 330,
  },
  addButton: {
    height: 30,
    width: 250,
    padding: 30,
  },
})
