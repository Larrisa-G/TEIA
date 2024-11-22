import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import cores from '../../assets/cores.json';

export default function LabeledInputAddOption(props) {
  const [showInput, setShowInput] = useState(false);
  const [newOption, setNewOption] = useState('');
  const [selectedValue, setSelectedValue] = useState(''); 

  const handleValueChange = (itemValue) => {
    try{
      setSelectedValue(itemValue); // Atualiza o valor selecionado
      props.onChangeValue(itemValue); // Passa o valor para a função do pai
      if (itemValue === 'Outra') {
        setShowInput(true);
      } else {
        setShowInput(false);
      }
    }catch(error){
      console.error('Erro : ', error);
    }
  };

  const adicionarNovaOpcao = () => {
    if (newOption !== '') {
      try{
        const newList = [...props.lista_de_opcoes, newOption];
        setSelectedValue(newOption); // Atualiza o valor selecionado para a nova opção
        props.onChangeValue(newOption);  // Passa o valor para a função do pai
        props.updateOptions(newList); // Chama a função para atualizar a lista de opções no pai
        setNewOption('');
        setShowInput(false);
        Alert.alert('Opção Adicionada', `${newOption} foi adicionada à lista.`);
      }catch(error){
        Alert.alert('Erro', `Não foi possível adicionar ${newOption} à lista.`);
        console.error('Erro ao adicionar nova opção: ', error)
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.container, styles.label]}>{props.titulo}</Text>
      <View style={styles.input}>
        <Picker
          selectedValue={selectedValue} // O valor selecionado sempre será o estado atual
          style={styles.picker}
          onValueChange={handleValueChange} // Atualiza o valor selecionado
        >
          {props.lista_de_opcoes.map((option, index) => (
            <Picker.Item key={index} label={option} value={option} />
          ))}
          <Picker.Item label="Outra" value="Outra" />
        </Picker>
      </View>
      {showInput && (
        <View style={styles.newOptionContainer}>
          <TextInput
            style={styles.newOptionInput}
            placeholder={props.placeholder}
            value={newOption}
            onChangeText={setNewOption}
          />
          <TouchableOpacity style={styles.butao} onPress={adicionarNovaOpcao} > 
            <Text style={{ color: 'white', textAlign:'center' }}>Adicionar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: cores.a,
    margin: 8,
    marginBottom: 30,
    color: cores.f,
    fontSize: 15,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    paddingVertical: 3,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: cores.e,
    margin: 0,
  },
  picker: {
    backgroundColor: cores.a,
    fontSize: 15,
    borderWidth: 0,
    color: cores.f,
  },
  newOptionContainer: {
    marginTop: 10,
  },
  newOptionInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: cores.a,
  },
  butao:{
    backgroundColor:cores.e,
    height: 40,
    justifyContent:'center',
  },
});