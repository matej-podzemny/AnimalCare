import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    //paddingBottom: 10
  },
  buttonStyle: {
    height: 40,
    //backgroundColor: '#fff',
    backgroundColor: '#46bde4',
    //borderWidth: 2,
    borderRadius: 25,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  }
};

export { Button };
