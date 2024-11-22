import { Text, TextInput, View, StyleSheet } from 'react-native';
import { formatarCPF, formatarData, formatarCEP, formatarTelefone } from '../../Utils/formatters';
import cores from '../../assets/cores.json';

export default function LabeledInput(props) {

  const formatarTexto = (texto) => {
    switch (props.mask) {
      case 'cpf':
        return formatarCPF(texto);
      case 'data':
        return formatarData(texto);
      case 'cep':
        return formatarCEP(texto);
      case 'telefone':
        return formatarTelefone(texto);
      default:
        return texto;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.container, styles.label]}>
        {props.titulo}
      </Text>
      <TextInput 
        style={styles.input} 
        placeholder={props.placeholder} 
        secureTextEntry={props.secureTextEntry || false}
        keyboardType={props.keyboardType || "default"}
        value={props.value} 
        onChangeText={(text) => {props.onChangeText(formatarTexto(text))}} 
      />
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
  