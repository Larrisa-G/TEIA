import { Text, SafeAreaView, StyleSheet, ScrollView, View, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import GoBack from '../components/inputs/GoBack';
import Header from '../components/alfa/Header';
import LabeledOutput from '../components/outputs/LabeledOutput';
import LabeledOutputRounded from '../components/outputs/LabelOutputRounded';
import LabeledOutputTime from '../components/outputs/LabeledOutputTime';
import LabeledOutputPhoto from '../components/outputs/LabeledOutputPhoto';
import { formatarEndereco, formatarEspecialidades, formatarValores } from '../Utils/formatters';
import cores from '../assets/cores.json';


export default function Profile({ route, navigation }) {
  const usuarioSelecionado = route.params; // Recebe o filtro de SearchScreen


  useEffect(() => {
    if (!usuarioSelecionado) {
      Alert.alert('Erro', 'Não foi possível carregar esse perfil');
    }
  }, [usuarioSelecionado, navigation]);

  const ProfileItens = () => {

    const labelColor = cores.f;
    const bgColor = cores.d;
    const textColor = cores.h;

    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.photoBox}>
          <LabeledOutputPhoto 
            photoUri={usuarioSelecionado?.usuario.fotoPerfil || null} 
            bgColor = {bgColor}
            />
        </View>
        <LabeledOutputRounded
          content={usuarioSelecionado?.usuario.modalidade}
          labelColor={labelColor}
          bgColor={bgColor}
          textColor={textColor} 
        />
        <LabeledOutput
          label="Especialidades"
          content={formatarEspecialidades(usuarioSelecionado?.usuario.especialidades )}
          labelColor={labelColor}
          bgColor={bgColor}
          textColor={textColor}
        />
        <LabeledOutput
          label="Convênios"
          content={usuarioSelecionado?.usuario.convenios || 'Não informado'}
          labelColor={labelColor}
          bgColor={bgColor}
          textColor={textColor}
        />
        <LabeledOutput
          label={usuarioSelecionado?.usuario.servico}
          content={formatarValores(usuarioSelecionado?.usuario.valores)}
          labelColor={labelColor}
          bgColor={bgColor}
          textColor={textColor}
        />
        <LabeledOutputTime 
          content={usuarioSelecionado?.usuario.horarios || 'Não informado'} 
          labelColor={labelColor}
          bgColor={bgColor}
          textColor={textColor}
          />
        <LabeledOutput
          label="Endereço"
          content={formatarEndereco(usuarioSelecionado?.usuario)}
          labelColor={labelColor}
          bgColor={bgColor}
          textColor={textColor}
        />
        <LabeledOutput
          label="Telefone"
          content={usuarioSelecionado?.usuario.telefone || 'Não informado'}
          labelColor={labelColor}
          bgColor={bgColor}
          textColor={textColor}
        />
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header navigation={navigation} />
      <View style={styles.body}>
      <GoBack navigation={navigation} style={{marginBottom:10,}}/>
        {usuarioSelecionado ? (
          <>
            <Text style={styles.titulo}>{usuarioSelecionado?.usuario.nome}</Text>
            <Text style={styles.subTitulo}>{usuarioSelecionado?.usuario.profissao}</Text>
            <Text style={styles.subTitulo2}>{usuarioSelecionado?.usuario.estado}</Text>
          </>
        ) : (
          <Text style={styles.titulo}>Carregando...</Text>
        )}
        <ProfileItens />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: cores.c,
  },
  body: {
    flex: 1,
    padding: 24,
  },
  titulo: {
    color: cores.f,
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 15,
  },
  subTitulo: {
    color: cores.e,
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  subTitulo2: {
    color: cores.f,
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  scrollView: {
    flex: 1,
    width: '100%',
    marginTop: 18,
  },
  photoBox: {
    alignItems: 'center',
    marginBottom: 25,
  },
});