import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { listaProfissoes, listaModalidades, listaEstados,
    listaMusica, listaArtes, listaEsportes, listaTerapias, listaDanca
    } from '../../assets/startFilters';
import cores from '../../assets/cores.json';
import GoBack from '../inputs/GoBack';
import Filter from '../inputs/Filter';

export default function SearchForm ({filtro, handleChange, onSearch, navigation}) {
  const [showFilters, setShowFilters] = useState(false);

  const exibirFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
      <View style={styles.body}>
        <GoBack navigation={ navigation } />
        <TouchableOpacity onPress={exibirFilters} style={styles.FiltersContainer}>
          <Text style={styles.filters}>Filtros</Text>
          <Icon
            name={showFilters ? 'chevron-up' : 'chevron-down'}
            size={20}
            color={cores.a}
            style={styles.filtersIcon}
          />
        </TouchableOpacity>
        {showFilters ? (
          <ScrollView style={styles.scrollView}>
            <Filter
              titulo="Profissionais"
              lista_de_opcoes={listaProfissoes}
              value={filtro.profissionais}
              onChangeValue={(value) => handleChange('profissionais', value)}
            />
            <Filter
              titulo="Modalidade"
              lista_de_opcoes={listaModalidades}
              value={filtro.modalidade}
              onChangeValue={(value) => handleChange('modalidade', value)}
            />
            <Filter
              titulo="Estado"
              lista_de_opcoes={listaEstados}
              value={filtro.estado}
              onChangeValue={(value) => handleChange('estado', value)}
            />
            <Filter
              titulo="Terapias"
              lista_de_opcoes={listaTerapias}
              value={filtro.terapias}
              onChangeValue={(value) => handleChange('terapias', value)}
            />
            <Filter
              titulo="Música"
              lista_de_opcoes={listaMusica}
              value={filtro.musica}
              onChangeValue={(value) => handleChange('musica', value)}
            />
            <Filter
              titulo="Esportes"
              lista_de_opcoes={listaEsportes}
              value={filtro.esportes}
              onChangeValue={(value) => handleChange('esportes', value)}
            />
            <Filter
              titulo="Dança"
              lista_de_opcoes={listaDanca}
              value={filtro.dancas}
              onChangeValue={(value) => handleChange('dancas', value)}
            />
            <Filter
              titulo="Artes"
              lista_de_opcoes={listaArtes}
              value={filtro.artes}
              onChangeValue={(value) => handleChange('artes', value)}
            />
          </ScrollView>
        ) : (
          <TouchableOpacity style={styles.butaoContainer} onPress= {onSearch}>
            <Text style={styles.butao}>Buscar</Text>
          </TouchableOpacity>
        )}
      </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 18,
  },
  scrollView: {
    paddingVertical: 30,
  },
  FiltersContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingRight:40,
    paddingLeft:24,
    color: cores.a,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: cores.e,
    backgroundColor: cores.e,
    height: 60,
  },
  filters: {
    textAlignVertical: 'center',
    color: cores.a,
    fontSize: 18,
  },
  filtersIcon: {
    marginLeft: 10,
  },
  butaoContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 3,
    borderColor: cores.e,
    backgroundColor: cores.d,
    height: 60,
  },
  butao: {
    color:cores.f,
    fontSize:16,
    fontWeight:'bold',
  },
});
