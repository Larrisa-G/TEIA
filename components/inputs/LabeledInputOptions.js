import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import cores from '../../assets/cores.json';

export default LabeledInputOptions = props => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleValueChange = (itemValue) => {
    setSelectedValue(itemValue); // Atualiza o valor selecionado
    props.onChangeValue(itemValue); // Passa o valor para a função do componente pai
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.container, styles.label]}>{props.titulo}</Text>
      <View style={styles.input}>
        <Picker
          selectedValue={selectedValue} // O valor selecionado sempre será o estado atual
          style={styles.picker}
          onValueChange={handleValueChange} 
        >
          {props.lista_de_opcoes.map((option, index) => (
            <Picker.Item key={index} label={option} value={option} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: cores.a,
    margin:8,
    marginBottom:30,
    color:cores.f,
    fontSize:15,
  },
  label: {
    fontWeight: 'bold',
    marginBottom:15,
  },
  input: {
    paddingVertical:3,
    paddingHorizontal:14,
    borderRadius:20,
    borderWidth:3,
    borderColor:cores.e,
    margin:0,
  },
  picker: {
    backgroundColor:cores.a,
    fontSize:15,
    borderWidth:0,
    color:cores.f,
  },
});