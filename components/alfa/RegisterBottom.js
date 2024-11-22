import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import ButtonSwitch from '../inputs/ButtonSwitch';
import cores from '../../assets/cores.json';

export default function TeamFormActions({ handleSalvarUsuario }) {

  return (
    <View style={{ alignItems: 'center' }}>
      <View style={styles.switchContainer}>
        <ButtonSwitch style={styles.butao} />
        <Text style={styles.switchText}>Declaro que li e concordo com as Políticas de privacidade</Text>
    </View>
      <View style={styles.switchContainer}>
        <ButtonSwitch style={styles.butao} />
        <Text style={styles.switchText}>Declaro que li e concordo com os Termos de serviço</Text>
      </View>
      <TouchableOpacity style={styles.butao} onPress={handleSalvarUsuario}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 18,
    marginHorizontal: 4,
    width:'82%',
  },
  switchText: {
    marginLeft: 20,
    color: cores.f,
  },
  butao: {
    fontSize: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: cores.f,
    color: 'white',
    marginTop: 50,
    marginBottom:100,
    width: 150,
    textAlign: 'center',
  },
};
