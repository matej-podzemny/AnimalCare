import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { Button } from './common';

class AnimalProfil extends Component {
  render () {
    return (
      <View style={styles.screenStyle}>

        <View style={styles.headerStyle}>
            <Image
              style={styles.imageStyle}
              resizeMode="contain"
              source={require('./img/catProfilImage2.png')}
            />

            <Text style={{ fontSize: 50, color: 'white' }}>
              Kely
            </Text>
          </View>

          <View style={{flex: 3, flexDirection: 'column'}}>
  <View style={{flex:1, backgroundColor: 'powderblue'}} />
  <View style={{flex:1, backgroundColor: 'skyblue', marginTop: 10}} />
  <View style={{flex:1, backgroundColor: 'steelblue', marginTop: 10}} />
</View>

<View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingTop: 40, marginLeft: 20, marginRight: 20}}>
  <View style={{height: 70, width: 70, borderRadius: 35, backgroundColor: 'powderblue'}} />
  <View style={{height: 70, width: 70, borderRadius: 35, backgroundColor: 'skyblue'}} />
  <View style={{height: 70, width: 70, borderRadius: 35, backgroundColor: 'steelblue'}} />
</View>

      </View>
    );
  }
}

const styles = {
  imageStyle: {
    //flex: 1,
    height: 120,
    width: 120,
    //marginTop: 100,
    //backgroundColor: 'white',
    //borderRadius: 10,
    //borderWidth: 1,
  },
  headerStyle: {
    flexDirection: 'row',
    //backgroundColor: 'yellow',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 40,
    marginLeft: 10
  },
  screenStyle: {
    flex: 1,
    paddingTop: 50,
    marginLeft: 30,
    marginRight: 30
  }
};
/*
const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};
export default connect(mapStateToProps, { employeeUpdate })(AnimalProfil);
*/

export default AnimalProfil;
