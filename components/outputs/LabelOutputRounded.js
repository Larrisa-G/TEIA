import {Text, View, StyleSheet} from 'react-native';
import cores from '../../assets/cores.json';

export default function LabelOutputRounded({labelColor,bgColor, textColor, content }) {
  
  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: labelColor }]}>Modalidade</Text>
      <View style={[styles.content, { backgroundColor: bgColor }]}>
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    fontSize:'medium',
    marginVertical:10,
    marginHorizontal:8,
  },
  label:{
    fontWeight:'bold',
    fontSize:14,
    color:cores.f,
    marginBottom:8,
  },
  content: {
    paddingHorizontal:18,
    paddingVertical:6,
    backgroundColor:cores.b,
    borderRadius:20,
    width:'60%',
  },
  text: {
    fontSize:14,
    color:cores.h,
  }
});