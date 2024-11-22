import {Text, View, StyleSheet} from 'react-native';

export default LabeledOutput = props => {
  
  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: props.labelColor }]}>{props.label}</Text>
      <View style={[styles.content, { backgroundColor: props.bgColor }]}>
        <Text style={[styles.text, { color: props.textColor }]}> {props.content} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical:12,
    flex:1,
    marginHorizontal:8,
  },
  label:{
    fontSize:14,
    fontWeight:'bold',
    marginBottom:10,
  },
  content: {
    paddingHorizontal:16,
    paddingTop:8,
    paddingBottom:12,
  },
  text: {
    fontSize:14,
    lineHeight:25,
  }
});