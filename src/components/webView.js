import React, { Component } from 'react'
import { WebView } from 'react-native'

export class MyWebView extends Component {
  render() {
    return (
      <WebView
        source={{uri: this.props.uri}}
        style={{marginTop: 20}}
      />
    )
  }
}
