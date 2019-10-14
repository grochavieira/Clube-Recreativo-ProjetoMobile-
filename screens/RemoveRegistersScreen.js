import React, {Component} from 'react';
import {View, StyleSheet, Alert} from 'react-native';

import Colors from '../constants/colors';
import CustomButton from '../components/CustomButton';
import Header from '../components/Header';
class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {date: ''};
  }

  selectDate = date => {
    this.setState({date: date});
  };

  render() {
    return (
      <View style={styles.cor}>
        <View style={styles.principalContainer}>
          <Header
            textHeader="REMOVER ASSOCIADOS"
            statusBarColor={Colors.primaria}
          />
          <CustomButton
            textButton="REMOVER"
            confirm={() => Alert.alert('Cadastro realizado com sucesso!')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  principalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cor: {
    flex: 1,
    backgroundColor: Colors.primaria,
  },
  datePickerContainer: {
    width: '70%',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
  },
});

export default RegisterScreen;
