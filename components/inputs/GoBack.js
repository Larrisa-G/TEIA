import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import cores from '../../assets/cores.json';

export default function GoBack({ navigation }) {
  const handlePress = () => {
    navigation.goBack(); // Volta para a tela anterior
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={styles.seta}>
        <Icon name="arrow-left" size={24} color={cores.f} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    marginBottom: 5,
  },
  seta: {
    alignItems: 'center',
  },
});
