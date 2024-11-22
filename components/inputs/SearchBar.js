import { View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper'
import cores from '../../assets/cores.json';
import { useState } from 'react';

export default function BarraPesquisa() {
  const [BuscaQuery, setBuscaQuery] = useState('');

  const onChangeSearch = query => setBuscaQuery(query);

  return (
    <View style={styles.searchbarContainer}>
      <Searchbar
        placeholder="Busca"
        onChangeText={onChangeSearch}
        value={BuscaQuery}
        style={styles.searchbar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchbarContainer: {
    justifyContent: 'center',
    borderWidth:2,
    borderRadius:30,
    borderColor:cores.c,
    marginTop:10,
  },
  searchbar: {
    backgroundColor:cores.b,
    borderRadius:30,
    color:cores.c,
  },
});