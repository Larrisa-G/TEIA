import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import cores from '../../assets/cores.json';
import Icon from 'react-native-vector-icons/FontAwesome';

const LabeledInputPhoto = ({ onChangeValue }) => {
  const [photoUri, setPhotoUri] = useState(null);

  // Função para solicitar permissão e selecionar uma imagem
  const selectPhoto = async () => {
    // Solicita permissão
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão necessária', 'Precisamos de permissão para acessar sua galeria de imagens!');
      return;
    }

    // Abre a galeria 
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaType: ImagePicker.MediaTypeOptions.Images, // selecionar apenas imagens
      quality: 0.5, // Qualidade da imagem selecionada
    });

    if (!result.canceled) {
      const selectedImage = result.assets[0].uri;
      setPhotoUri(selectedImage);
      onChangeValue && onChangeValue(selectedImage); // Passa a URI da imagem selecionada para o componente pai
    } else {
      Alert.alert('Nenhuma imagem selecionada', 'Você não selecionou nenhuma imagem.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Foto de Perfil</Text>
      <TouchableOpacity onPress={selectPhoto} style={styles.button}>
        <Text style={styles.buttonText}>Escolher Foto</Text>
        <Icon
          name='chevron-down'
          size={15}
          color={cores.f}
          style={styles.icon}
        />
      </TouchableOpacity>
      {photoUri ? (
        <View style={styles.imageContainer}>
          <Image source={{ uri: photoUri }} style={styles.image} />
        </View>
      ) : (
        <Text style={styles.placeholder}>Nenhuma foto selecionada</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 8,
    marginBottom: 30,
  },
  title: {
    color: cores.f,
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  imageContainer : {
    alignItems:'center',
    marginVertical: 14,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 20,
  },
  placeholder: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
    marginLeft: 12,
  },
  button: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: cores.e,
    marginBottom: 12,
  },
  buttonText: {
    color: cores.f,
    fontSize: 15,
  },
  icon: {
    marginLeft: 10,
  },
});

export default LabeledInputPhoto;
