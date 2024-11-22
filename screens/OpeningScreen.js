import { Text, SafeAreaView, StyleSheet, Dimensions, View, TouchableOpacity } from 'react-native';

import cores from '../assets/cores.json';

const { width, height } = Dimensions.get('window');

export default function Home ({navigation}) {

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.rectangle}>
        <View style={styles.container}>
          <Text style={styles.teia}>T E I A</Text>
          <Text style={styles.texto}>Faça parte dessa teia de profissionais em prol da inclusão!</Text>
          <TouchableOpacity style={styles.butao} onPress={() => navigation.navigate('Login')}> 
            <Text style={styles.butaoTexto}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.butao} onPress={() => navigation.navigate('TeamRegister')}> 
            <Text style={styles.butaoTexto}>Cadastrar perfil profissional</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.branco}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView:{
    justifyContent: 'center',
    flex: 1,
  },
  rectangle: {
    flex:1,
    backgroundColor: cores.d,
    borderBottomLeftRadius: width / 1,
    borderBottomRightRadius: width / 1,
    overflow: 'hidden',
    justifyContent:'center',  
    },
  branco:{
    height:height / 7,
    width: width + 10
  },
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    height:'100%',
  },
  teia: {
    fontSize:45,
    marginBottom:60,
    fontWeight:'bold',
    color:cores.f,
  },
  texto: {
    textAlign:'center',
    fontSize:22,
    color:cores.f,
    marginBottom:60,
    paddingHorizontal:10,
  },
  butao:{
    color:'white',
    textAlign:'center',
    paddingVertical:9,
    paddingHorizontal:10,
    borderRadius:20,
    backgroundColor:cores.e,
    width:180,
    marginVertical:16,
  },
  butaoTexto:{
    color: 'white', 
    textAlign:'center', 
    fontSize:15, 
  },
});
