import {Text, Image, View, TouchableOpacity , StyleSheet} from 'react-native';
import cores from '../../assets/cores.json';

const Answer = ({usuario, navigation}) => {

  return(
    <TouchableOpacity  style={styles.container} onPress={() => {navigation.navigate('Profile', { usuario })}}>
      <ContentTop usuario={usuario} />
    </TouchableOpacity >
  );

};

const ContentTop = ({usuario}) => {
  return(
    <View style={styles.contentTop} >
      <View style={styles.imageContainer}>
        {usuario.fotoPerfil ? <Image source={{uri: usuario.fotoPerfil}} style={styles.image}/> : 
        <View style={[styles.image, {backgroundColor:cores.f}]}></View>}  
      </View>
      <View style={styles.textContainer1}>
        <Text style={styles.title1}>{usuario?.nome}</Text>
        <Text style={styles.text1}>{usuario?.profissao}</Text>
        <Text style={styles.text1}>{usuario?.estado} - {usuario?.cidade}</Text>
        <Text style={styles.text1}>{usuario?.modalidade}</Text>
      </View>
    </View>
  );

};

const ContentBottom = () => {
  return(
    <View style={styles.contentBottom}>
      <Text style={styles.text2}>Um breve resumo dos tipos de serviços fornecidos ou especialidades.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: cores.a,
    borderRadius: 20,
    padding: 8,
    marginVertical: 10,
  },
  contentTop: {
    width: "100%",
    minHeight:160,
    flexDirection:'row',
    //padding: 4,
  },
  contentBottom: {
    flex: 1,
    paddingLeft: 9,
    padding: 6,
  },
  imageContainer: {
    alignItems: 'center',
    width: 140,
    height: 140,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 20,
  },
  textContainer1: {
    flex: 1,
    marginHorizontal:18,
    rowGap: 3,
  },
  title1: {
    color: cores.f,
    fontWeight: 'bold',
    fontSize:16,
     flexWrap: "wrap", // Permite quebra de linha
  },
  text1: {
    color: cores.f,
    fontSize:16,
     flexWrap: "wrap",
  },
  text2: {
    color: cores.b,
    fontSize: 15,
    lineHeight: 22,
  },
})

export default Answer;