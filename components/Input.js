import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextInput, View, StyleSheet} from 'react-native';

const Input = props => {
  return (
    <View style={{...styles.inputContainer, ...props.style}}>
      <Icon name={props.nameIcon} size={24} color="#FFF" />
      <TextInput
        {...props}
        style={{...styles.input, ...props.style}}
        placeholder={props.textPlaceHolder}
        placeholderTextColor="rgba(255,255,255,0.5)"
        secureTextEntry={props.security}
        keyboardType={props.keyboard}
        maxLength={props.length}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    color: '#FFF',
    fontSize: 15,
  },
  inputContainer: {
    height: 40,
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
    borderBottomColor: '#FFF',
    borderBottomWidth: 1,
  },
});

export default Input;
