import { Text, View, SafeAreaView, StyleSheet} from 'react-native';
import cores from '../assets/cores.json';
import TeamForm from '../components/alfa/TeamForm';

export default function TeamRegisterScreen({navigation}) {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tela_pequena_container}>
        <View style={styles.header}>
          <Text style={styles.titulo}>Cadastro</Text>
          <Text style={styles.subtitulo}>Proficional</Text>          
        </View>
        <TeamForm navigation={navigation} />
      </View> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tela_pequena_container: {
    flex: 1,
  },
  header: {
    backgroundColor: cores.a,
    paddingLeft: 20,
    paddingTop: 70,
  },
  titulo: {
    color: cores.e,
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitulo: {
    color: cores.f,
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 25,
  },
});