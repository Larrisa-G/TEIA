import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, View } from 'react-native';

import cores from '../../assets/cores.json';

export default LabeledpickerContainerOptions = props => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleValueChange = (itemValue) => {
    setSelectedValue(itemValue); // Atualiza o valor selecionado
    props.onChangeValue(itemValue); // Passa o valor para a função do componente pai
  };

  return (
    <View style={styles.pickerContainer}>
      <Picker
        selectedValue={selectedValue} // O valor selecionado sempre será o estado atual
        style={styles.picker}
        onValueChange={handleValueChange} 
      >
        <Picker.Item label={props.titulo} value="" />
        {props.lista_de_opcoes.map((option, index) => (
          <Picker.Item key={index} label={option} value={option} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    flex: 1,
    paddingVertical:1,
    paddingHorizontal:14,
    borderRadius:22,
    borderWidth:3,
    borderColor:cores.e,
    marginBottom:20,
  },
  picker: {
    backgroundColor:cores.c,
    fontSize:15,
    borderWidth:0,
    color:cores.f,
  },
});