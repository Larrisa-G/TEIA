import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import cores from '../assets/cores.json';
import Header from '../components/alfa/Header';
import SearchForm from '../components/alfa/SearchForm';

export default function SearchScreen ({navigation}) {

  const [filtro, setFiltro] = useState({ profissionais: [], servico: '',  convenios: [], modalidade: '', estado: '', cidades: [], terapias: [], musica: [], esportes: [], dancas: [], artes: []});
  
  const handleChange = (campo, valor) => {
    setFiltro({ ...filtro, [campo]: valor });
  };

 const handleBuscar = async () => {
  navigation.navigate('Answers', { filtro });
};

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header navigation={navigation} />
      <SearchForm filtro={filtro} handleChange={handleChange} onSearch={handleBuscar} navigation={navigation}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: cores.c,
  },
});
