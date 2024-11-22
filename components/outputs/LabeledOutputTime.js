import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import cores from '../../assets/cores.json';

const LabeledOutputTime = ({ content, labelColor, bgColor }) => {
  // Verifica se o conteúdo é uma lista de horários
  const horarios = Array.isArray(content) ? content : ['Não informado'];

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: labelColor }]}>Horários de Atendimento:</Text>
      <View style={[styles.content, { backgroundColor: bgColor }]}>
        {horarios.length > 0 ? (
          horarios.map((horario, index) => (
            <Text key={index} style={styles.horarioText}>
              {horario}
            </Text>
          ))
        ) : (
          <Text style={styles.horarioText}>Não informado</Text>
        )}
      </View>
    </View>
  );
};

export default LabeledOutputTime;

const styles = StyleSheet.create({
  container: {
    marginVertical:12,
    flex:1,
    marginHorizontal:8,
  },
  content: {
    backgroundColor: cores.b,
    borderRadius: 8,
    paddingHorizontal:16,
    paddingVertical:8,
    
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: cores.f,
    marginBottom: 10,
  },
  horarioText: {
    fontSize:14,
    color:cores.h,
    lineHeight:25,
    marginBottom:4,
  },
});
