import React, { Component } from 'react';
import { View, Text, SectionList, StyleSheet, ListView } from 'react-native';
import { connect } from 'react-redux';
import { Button, ListViewDemo } from './common';

class AnimalList extends Component {

  constructor(props) {
  super(props);

  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  this.state = {
    dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3']),
  };
}

  render () {
    return (
      <View style={styles.screenStyle}>
      <ListView
  style={styles.container}
  dataSource={this.state.dataSource}
  renderRow={(data) => <View><Text>{data}</Text></View>}
/>
  <Button>
    ADD PET
  </Button>
</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //marginTop: 20,
  },
  screenStyle: {
    //flex: 1,
    paddingTop: 65
  }
});


export default AnimalList;
