import React, { useState } from 'react';
import {Modal, StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Alert, TouchableWithoutFeedback, } from 'react-native'; 
// TouchableWithoutFeedback detecta cliques fora do modal.
import Icon from 'react-native-vector-icons/FontAwesome';
import cores from '../../assets/cores.json';

export default function LabeledInputMultAddOptions(props) {
  // Estados para controlar as opções selecionadas, a nova opção adicionada pelo uauário e a visibilidade do modal e da estrutura para o usuário adicionar nova opção.
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  // Funções

  // Alterna a seleção de uma opção. Se for 'Outra', mostra a estrutura para o usuário adicionar nova opção.
  // Caso contrário, adiciona ou remove a opção da lista de selecionadas.
  const alternarOpcao = (option) => {
    if (option === 'Outra') {
      setShowInput(true);
      return;
    }

    // Adiciona ou remove a opção selecionada
    if (selectedOptions.includes(option)) {
      const newList = selectedOptions.filter((item) => item !== option);
       // '.filter' Percorre a lista e retorna apenas os itens diferentes da opção clicada.
      setSelectedOptions(newList);
    } else {
      setSelectedOptions([...selectedOptions, option]);
      // [...  ] Operador 'spread' para criar uma nova lista combinando os itens existentes e o novo item
    }
  };

  // Confirma as opções selecionadas, atualiza o estado no componente pai, fecha o modal e reseta o campo de input.
  const confirmarEFecharModal = () => {
    props.onChangeValue(selectedOptions);
    setModalVisible(false);
    setShowInput(false);
    setNewOption('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.titulo}</Text>
      <TouchableOpacity
        style={styles.input}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.inputText}>
          {selectedOptions.length > 0 ? selectedOptions.join(', ') : ''}
            </Text>
            <Icon name="caret-down" size={16} color={cores.f} />
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              {props.lista_de_opcoes && props.lista_de_opcoes.length > 0 ? (
                <ScrollView style={{ maxHeight: 300 }}>
                  {props.lista_de_opcoes.map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.optionButton}
                      onPress={() => alternarOpcao(item)}
                    >
                      <Text style={styles.optionText}>{item}</Text>
                      {selectedOptions.includes(item) && (
                        <Icon name="check" size={16} color={cores.e} />
                      )}
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              ) : (
                <TouchableOpacity style={styles.optionButton}>
                  <Text style={styles.optionText}>Escolha a área primeiro</Text>
                </TouchableOpacity>
              )}

              <TouchableOpacity
                style={styles.optionButton}
                onPress={confirmarEFecharModal}
              >
                <Text
                  style={[styles.optionText, { color: cores.f, fontWeight: 'bold' }]}
                >
                  Confirmar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

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
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 15,
    color: cores.f,
    fontSize: 15,
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 18,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: cores.e,
  },
  inputText: {
    color: cores.f,
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: cores.a,
    borderRadius: 5,
    padding: 20,
    elevation: 5,
  },
  optionButton: {
    paddingVertical: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionText: {
    fontSize: 16,
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
  addButton: {
    backgroundColor: cores.e,
    height: 40,
    justifyContent: 'center',
    borderRadius: 8,
  },
  addButtonText: {
    color: cores.a,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
