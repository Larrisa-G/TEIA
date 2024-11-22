import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Alert, } from 'react-native';
import {carregarUsuarios, salvarUsuario } from '../../services/Storage';
import { camposObrigatoriosPreenchidos, confirmarIgualdade } from '../../Utils/formUtils';
import cores from '../../assets/cores.json';
import TeamTopForm from './TeamTopForm';
import RegisterBottom from './RegisterBottom';

export default function TeamForm({navigation}) {
  
  // Estados
  const [usuarios, setUsuarios] = useState([]);
  const [novoUsuario, setnovoUsuario] = useState({
    nome: '', dataNascimento: '', genero: '', cpf: '', profissao: '', telefone: '', fotoPerfil: null,
    cep: '', estado: '', cidade: '', bairro: '', logradouro: '', numero: '', complemento: '',
    servico: '', modalidade: '', duracao: '', nicho:' ', especialidades: [], valores: '', horarios: [],
    codigo: '', convenios: '',
    email: '', confirmarEmail: '', senha: '', confirmarSenha: '',
  });
  
  const handleChange = (campo, valor) => {
    setnovoUsuario({ ...novoUsuario, [campo]: valor });
  };

  const handleSalvarUsuario = async () => {

    if (!camposObrigatoriosPreenchidos(novoUsuario)) {
      Alert.alert('Campos Obrigatórios','Apenas os campos convênios, código e complemento não são obrigatórios.\n\nPreencha todos os campos obrigatórios para realizar o cadastro. ');
      console.log(novoUsuario);
      return;
    }

    if (!confirmarIgualdade(novoUsuario.email, novoUsuario.confirmarEmail)) {
      Alert.alert('Erro', 'Os e-mails não correspondem.');
      return;
    }

    if (!confirmarIgualdade(novoUsuario.senha, novoUsuario.confirmarSenha)) {
      Alert.alert('Erro', 'As senhas não correspondem.');
      return;
    }

    const sucesso = await salvarUsuario(novoUsuario);
    if (sucesso) {
      navigation.navigate('Search');
    }
  };

  const carregarDados = async () => {
    const dadosUsuarios = await carregarUsuarios();
    setUsuarios(dadosUsuarios);
  };

  useEffect(() => {
    carregarDados();
  }, []);

  return (
    <ScrollView style={styles.scrollView}>
      <TeamTopForm usuario={novoUsuario} onChange={handleChange} />
      <RegisterBottom handleSalvarUsuario = {handleSalvarUsuario} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: cores.a,
    padding: 8,
  },
});