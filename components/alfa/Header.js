import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import cores from '../../assets/cores.json';
import {carregarUsuarioLogado} from '../../services/Storage';

export default function Header({ navigation}) {

  const [loading, setLoading] = useState(false);

  const handlecarregarUsuarioLogado = async () => {
    
    setLoading(true);

    try {
      const dadosUsuario = await carregarUsuarioLogado();
      if (dadosUsuario) {
        setLoading(false);
        navigation.navigate('Perfil', dadosUsuario);
      }else{
        setLoading(false);
        navigation.navigate('Opening');
      }
    } catch (erro) {
      console.error('Erro ao verificar se o usuário está logado:', erro);
      Alert.alert('Erro', 'Ocorreu um erro ao tentar carregar os dados do usuário.');      
    }
  };

  return (
    <View style={styles.header}>
      <Text style={styles.headerTitulo}>TEIA</Text>
      {loading ? (
        <ActivityIndicator size="large" color={cores.f} />
        ) : (
        <TouchableOpacity 
          style={styles.iconContainer} 
          onPress={handlecarregarUsuarioLogado} 
        > 
          <Icon name="user-circle" size={35} color={cores.f} />
        </TouchableOpacity>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:30,
    paddingTop:45,
    paddingBottom:15,
    backgroundColor: cores.a,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  headerTitulo:{
    color: cores.e,
    fontSize: 36,
    fontWeight: 'bold',
  },
  iconContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
  },
});