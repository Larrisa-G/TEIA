import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, FlatList } from 'react-native';
import Header from '../components/alfa/Header';
import cores from '../assets/cores.json';
import Answer from '../components/outputs/Answer';
import { buscarUsuarios } from '../services/Storage';
import GoBack from '../components/inputs/GoBack';

export default function AnswersScreen({ route, navigation }) {
  const { filtro } = route.params; // Recebe o filtro de SearchScreen
  const [resultadoDaBusca, setResultadoDaBusca] = useState([]);

  const handleBuscarUsuarios = async () => {
    try {
      if (!filtro) {
        console.error('Nenhum filtro foi recebido.');
        return;
      } else {
        const resultados = await buscarUsuarios(filtro);
        setResultadoDaBusca(resultados);
      }
    } catch (error) {
      console.error('Erro ao realizar a pesquisa:', error);
    }
  };

  useEffect(() => {
    handleBuscarUsuarios();
  }, []);

  const renderItem = ({ item }) => (
    <Answer usuario={item} navigation={navigation} />
  );

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header navigation={navigation} />
      <View style={styles.body}>
        <View style={styles.goBackContainer}>
          <GoBack navigation={navigation} />
        </View>
        {resultadoDaBusca.length === 0 ? (
          <Text style={styles.text}>Sem resultados para a busca</Text>
        ) : (
          <FlatList
            data={resultadoDaBusca}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.listContainer}
            ListFooterComponent={<View style={styles.bordaInferior} />}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: cores.c,
  },
  body: {
    flex: 1,
  },
  goBackContainer: {
    margin: 20,
  },
  listContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    alignItems: 'center', 
  },
  text: {
    marginTop: 20,
    color: cores.f,
    fontSize: 22,
    textAlign: 'center',
  },
  bordaInferior: {
    height: 14,
  },
});
