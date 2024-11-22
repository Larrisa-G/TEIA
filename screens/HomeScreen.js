import { Text, SafeAreaView, StyleSheet, Dimensions, View, TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import cores from '../assets/cores.json';

const { width, height } = Dimensions.get('window');

const Abertura = ({navigation}) => {

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.rectangle}>
        <View style={styles.container}>
          <Text style={styles.teia}>T E I A</Text>
          <Text style={styles.texto}>Conecta pessoas neuro-divergentes a locais adaptados para prática de terapias,  esportes e artes</Text>
          <TouchableOpacity style={styles.butao} onPress={() => navigation.navigate('Search')}> 
            <Icon name="arrow-right" size={26} color={cores.d} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.branco}></View>
    </SafeAreaView>
  );
};

export default Abertura;

const styles = StyleSheet.create({
  safeAreaView:{
    justifyContent: 'center',
    flex: 1,
  },
  rectangle: {
    flex:1,
    paddingTop:50,
    backgroundColor: cores.d,
    borderBottomLeftRadius: width / 1,
    borderBottomRightRadius: width / 1,
    overflow: 'hidden',
  },
  branco:{
    height:height / 7,
    width: width + 10
  },
  container: {
    flex:1,
    marginTop:60,
    marginLeft:50,
  },
  teia: {
    fontSize:50,
    marginBottom:70,
    fontWeight:'bold',
    color:cores.e
  },
   texto: {
    fontSize:23,
    width:'82%',
    color:cores.f,
    rowGap:2,
  },
  butao:{
    paddingVertical:8,
    borderRadius:20,
    backgroundColor:cores.e,
    color:'white',
    marginTop:90,
    width:130,
  },
  icon: {
    alignSelf: 'flex-end',
    marginRight: 22,
  },
});