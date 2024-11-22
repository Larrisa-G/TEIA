import { Text, SafeAreaView, StyleSheet, ScrollView, View, Alert, Modal, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {deslogarUsuario} from '../services/Storage';
import { formatarEndereco, formatarEspecialidades, formatarValores } from '../Utils/formatters';
import cores from '../assets/cores.json'
import Header from '../components/alfa/Header';
import GoBack from '../components/inputs/GoBack';
import LabeledOutput from '../components/outputs/LabeledOutput';
import LabeledOutputRounded from '../components/outputs/LabelOutputRounded';
import LabeledOutputTime from '../components/outputs/LabeledOutputTime';
import LabeledOutputPhoto from '../components/outputs/LabeledOutputPhoto';

export default function Perfil({navigation, route}) {

  const usuario = route.params;
  
  const [modalVisible, setModalVisible] = useState(false); 

  const handleDeslogarUsuario = async () => {
    try {
      deslogado = await deslogarUsuario();
      if (deslogado) {
        setModalVisible(false);
        Alert.alert('Deslogado', 'Você foi deslogado com sucesso!');
        navigation.navigate('Home'); 
      }
    } catch (erro) {
      console.error('Erro ao deslogar:', erro);
      Alert.alert('Erro', 'Não foi possível deslogar. Tente novamente.');
    }
  };

  const PerfilItens = () => {

    const labelColor = cores.f;
    const bgColor = cores.b;
    const textColor = cores.h;

    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.photoBox}>
          <LabeledOutputPhoto 
            photoUri={usuario?.fotoPerfil || null} 
            bgColor = {bgColor}
            />
        </View>
        <LabeledOutputRounded
          content={usuario?.modalidade || 'Não informado'}
          labelColor={labelColor}
          bgColor={bgColor}
          textColor={textColor} 
        />
        <LabeledOutput
          label="Nome"
          content={usuario?.nome || 'Não informado'}
          labelColor={labelColor}
           bgColor={bgColor}
          textColor={textColor}
        />
        <LabeledOutput
          label="Data de Nascimento"
          content={usuario?.dataNascimento || 'Não informado'}
          labelColor={labelColor}
           bgColor={bgColor}
          textColor={textColor}
        />
        <LabeledOutput
          label="Gênero"
          content={usuario?.genero || 'Não informado'}
          labelColor={labelColor}
           bgColor={bgColor}
          textColor={textColor}
        />
        <LabeledOutput
          label="CPF"
          content={usuario?.cpf || 'Não informado'}
          labelColor={labelColor}
          bgColor={bgColor}
          textColor={textColor}
        />
        <LabeledOutput
          label="Profissão"
          content={usuario?.profissao || 'Não informado'}
          labelColor={labelColor}
          bgColor={bgColor}
          textColor={textColor}
        />
        <LabeledOutput
          label="Código"
          content={usuario?.codigo || 'Não informado'}
          labelColor={labelColor}
          bgColor={bgColor}
          textColor={textColor}
        />
        <LabeledOutput
          label="Convênios"
          content={usuario?.convenios || 'Não informado'}
          labelColor={labelColor}
          bgColor={bgColor}
          textColor={textColor}
        />
        <LabeledOutput
          label="Serviço"
          content={usuario?.servico || 'Não informado'}
          labelColor={labelColor}
          bgColor={bgColor}
          textColor={textColor}
        />
        <LabeledOutput
          label="Especialidades"
          content={formatarEspecialidades(usuario?.especialidades)}
          labelColor={labelColor}
          bgColor={bgColor}
          textColor={textColor}
        />
        <LabeledOutputTime 
          content={usuario?.horarios || 'Não informado'} 
          labelColor={labelColor}
          bgColor={bgColor}
          textColor={textColor}
          />
        <LabeledOutput
          label="Valores"
          content={formatarValores(usuario?.valores)}
          labelColor={labelColor}
          bgColor={bgColor}
          textColor={textColor}
        />
        <LabeledOutput
          label="Telefone"
          content={usuario?.telefone || 'Não informado'}
          labelColor={labelColor}
          bgColor={bgColor}
          textColor={textColor}
        />
        <LabeledOutput
          label="Endereço"
          content={formatarEndereco(usuario)}
          labelColor={labelColor}
          bgColor={bgColor}
          textColor={textColor}
        />
        <LabeledOutput
          label="E-mail"
          content={usuario?.email || 'Não informado'}
          labelColor={labelColor}
          bgColor={bgColor}
          textColor={textColor}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('EditPerfil', { usuario })}
          >
            <Icon name="edit" size={24} color={cores.f} style={styles.icon} />
            <Text style={styles.buttonText}>Editar Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
            <Text style={styles.buttonText}>Deslogar ?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

    );
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header navigation={navigation} />
      <View style={styles.body}>
        <GoBack navigation={navigation} style={{marginBottom:10,}}/>
        {usuario ? (
          <>
            <Text style={styles.titulo}>{usuario.nome}</Text>
            <Text style={styles.subTitulo}>{usuario.profissao}</Text>
            <Text style={styles.subTitulo2}>{usuario.estado}</Text>
          </>
        ) : (
          <Text style={styles.titulo}>Carregando...</Text>
        )}
        <PerfilItens />

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)} 
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Tem certeza que deseja deslogar?</Text>
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={styles.modalButtonCancel}
                  onPress={() => setModalVisible(false)} 
                >
                  <Text style={styles.modalButtonText}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalButtonConfirm}
                  onPress={handleDeslogarUsuario} 
                >
                  <Text style={styles.modalButtonText}>Sim</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: cores.a,
  },
  body: {
    flex: 1,
    padding: 24,
  },
  titulo: {
    color: cores.f,
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 8,
    marginRight: 5,
  },
  subTitulo: {
    color: cores.e,
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 4,
    marginLeft: 8,
  },
  subTitulo2: {
    color: cores.f,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
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
   buttonContainer: {
    marginTop: 25,
    marginBottom: 30,
    flexDirection:'row',
    justifyContent:'space-around',
  },
  button: {
    backgroundColor: cores.c,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
    flexDirection:'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: cores.f,
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 10,
  },
    modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: cores.a,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '80%',
  },
  modalText: {
    color: cores.f,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButtonCancel: {
    backgroundColor: cores.c,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalButtonConfirm: {
    backgroundColor: cores.e,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalButtonText: {
    color: cores.f,
    fontSize: 16,
    fontWeight: 'bold',
  },
});