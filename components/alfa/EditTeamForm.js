import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Alert, TouchableOpacity, View, Text, ActivityIndicator } from 'react-native';
import {carregarUsuarioLogado, salvarUsuario } from '../../services/Storage';
import { camposObrigatoriosPreenchidos, confirmarIgualdade } from '../../Utils/formUtils';
import cores from '../../assets/cores.json';
import EditTopForm from './EditTopForm';

export default function EditForm ({navigation}) {
  
  const [loading, setLoading] = useState(false);  
  const [usuarioAtualizado, setUsuarioAtualizado] = useState({});

  const handlecarregarUsuarioLogado = async () => {
    
    setLoading(true);

    try {
      const dadosUsuario = await carregarUsuarioLogado();
      if (dadosUsuario) {
        setLoading(false)
        setUsuarioAtualizado(dadosUsuario);
      }else{
        setLoading(false)
        Alert.alert('Erro', 'Ocorreu um erro ao tentar carregar os dados do usuário.');
      }
    }catch (erro) {
      console.error('Erro ao verificar se o usuário está logado:', erro);
      Alert.alert('Erro', 'Ocorreu um erro ao tentar carregar os dados do usuário.');      
    }
  };

  useEffect(() => {
   handlecarregarUsuarioLogado();
  }, []);

  const handleChange = (campo, valor) => {
    setUsuarioAtualizado({ ...usuarioAtualizado, [campo]: valor });
  };

  const handleSalvarUsuario = async () => {

    if (!camposObrigatoriosPreenchidos(usuarioAtualizado)) {
      Alert.alert('Campos Obrigatórios','Apenas os campos convênios, código e complemento não são obrigatórios.\n\nPreencha todos os campos obrigatórios para realizar o cadastro. ');
      return;
    }

    if (!confirmarIgualdade(usuarioAtualizado.email, usuarioAtualizado.confirmarEmail)) {
      Alert.alert('Erro', 'Os e-mails não correspondem.');
      return;
    }

    if (!confirmarIgualdade(usuarioAtualizado.senha, usuarioAtualizado.confirmarSenha)) {
      Alert.alert('Erro', 'As senhas não correspondem.');
      return;
    }

    setLoading(true)
    const sucesso = await salvarUsuario(usuarioAtualizado);
    setLoading(false);
    if (sucesso) {
      Alert.alert('Sucesso', 'Os dados foram atualizados com sucesso.');
      navigation.navigate('Perfil', usuarioAtualizado);
    }else {
      Alert.alert('Erro', 'Não foi possível salvar os dados. Tente novamente.');
    }
  };

  return (
    <ScrollView style={styles.scrollView}>
      <EditTopForm usuario={usuarioAtualizado} onChange={handleChange} />
      <TouchableOpacity style={[styles.button, loading && { opacity: 0.6 }]}  disabled={loading} onPress={handleSalvarUsuario} >
      { loading ? 
        <ActivityIndicator size="small" color={cores.e} /> 
      : 
        <Text style={styles.buttonText}>Salvar</Text>
      }
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: cores.a,
    padding: 8,
    alignContent: 'center'
  },
  button: {
      backgroundColor: cores.e,
      paddingVertical: 9,
      paddingHorizontal: 22,
      borderRadius: 10,
      marginTop: 30,
      marginBottom: 70,
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center',
      width:140,
      alignSelf: 'center',
    },
    buttonText: {
      color: cores.a,
      fontSize: 20,
      fontWeight: 'bold',
    },
});