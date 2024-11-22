import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const LabeledOutputPhoto = ({ photoUri, bgColor }) => {
  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
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

export default LabeledOutputPhoto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    width: 270,
    height: 270,
    borderRadius: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 14,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 20,
  },
  placeholder: {
    fontSize: 16,
    color: '#888',
    marginVertical: 20,
  },
});
