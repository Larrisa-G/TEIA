import { Text, View, StyleSheet } from 'react-native';
import cores from '../../assets/cores.json';

export default function LabeledOutputForm (props) {

  return (
    <View style={styles.container}>
      <Text style={[styles.container, styles.label]}>
        {props.titulo}
      </Text>
      <Text style={styles.input}> {props.content} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: cores.a,
      margin: 8,
      marginBottom: 30,
      color: cores.f,
      fontSize: 15,
    },
    label: {
      fontWeight: 'bold',
      marginBottom: 10,
    },
    input: {
      paddingHorizontal: 14,
      paddingTop: 6,
      paddingBottom: 7,
      borderRadius: 20,
      borderWidth: 3,
      borderColor: cores.e,
      fontSize: 15,
    },
  });
  