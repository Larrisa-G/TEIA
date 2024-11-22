import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import cores from '../../assets/cores.json';

const LabeledInputValues = ({ value, onChangeValue }) => {
  const [valor, setValor] = useState('');
  const [especificacao, setEspecificacao] = useState('');
  const [servicos, setServicos] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setServicos(value || []);
  }, [value]);

  const adicionarServico = () => {
    if (valor) {
      const novoServico = `${valor} ${especificacao ? ` -  ${especificacao}` : ''}`;
      const novosServicos = [...servicos, novoServico];
      setServicos(novosServicos);  // Atualiza a lista de serviços
      setValor('');  // Limpa a entrada de valor
      setEspecificacao('');  // Limpa a entrada de especificação
      onChangeValue && onChangeValue(novosServicos);  // Passa a lista de serviços para o componente pai
    } else {
      Alert.alert('Erro', 'Preencha o campo de valor.');
    }
  };

  const exibirForm = () => {
    setShowForm(!showForm);
  };

  return (
    <View style={{ margin: 8, marginBottom: 30 }}>
      <Text style={styles.titulo}>value</Text>
      <TouchableOpacity onPress={exibirForm} style={styles.formContainer}>
        <View>
          {servicos.map((servico, index) => (
            <Text key={index} style={styles.servicoItem}>
              {servico}
            </Text>
          ))}
        </View>
        <Icon
          name={showForm ? 'chevron-up' : 'chevron-down'}
          size={15}
          color={cores.f}
          style={styles.formIcon}
        />
      </TouchableOpacity>

      {showForm && (
        <View style={styles.container}>
          <Text style={styles.label}>Valor:</Text>
          <TextInput
            style={styles.input}
            placeholder="R$ 100,00"
            value={valor}
            onChangeText={aplicarMascaraValor}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Especificação (Opcional):</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Seg e Ter"
            value={especificacao}
            onChangeText={setEspecificacao}
          />

          <TouchableOpacity style={styles.button} onPress={adicionarServico}>
            <Text style={styles.buttonText}>Adicionar Serviço</Text>
          </TouchableOpacity>

          <View>
            {servicos.map((servico, index) => (
              <Text key={index} style={styles.servicoItem}>
                {servico}
              </Text>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

export default LabeledInputValues;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  titulo: {
    fontWeight: 'bold',
    marginBottom: 10,
    color: cores.f,
  },
  formContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: cores.e,
  },
  formIcon: {
    marginLeft: 10,
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    marginVertical: 8,
    borderRadius: 8,
  },
  button: {
    backgroundColor: cores.e,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 16,
  },
  buttonText: {
    color: cores.a,
    fontSize: 16,
  },
  servicoItem: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
});
