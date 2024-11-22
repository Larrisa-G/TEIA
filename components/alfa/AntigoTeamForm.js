import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { camposObrigatoriosPreenchidos, atualizarListaDelistaProfissoes, atualizarListaDeEspecialidades, confirmarIgualdade } from '../../Utils/formUtils';
import {carregarUsuarios, salvarUsuario} from '../../services/Storage';
import cores from '../../assets/cores.json';
import LabeledInput from '../inputs/LabeledInput';
import LabeledInputOptions from '../inputs/LabeledInputOptions';
import LabeledInputAddOption from '../inputs/LabeledInputAddOption';
import LabeledInputTime from '../inputs/LabeledInputTime';
import LabeledInputPhoto from '../inputs/LabeledInputPhoto';
import LabeledInputValues from '../inputs/LabeledInputValues';
import LabeledInputMultAddOptions from '../inputs/LabeledInputMultiAddOptions';
import ButtonSwitch from '../inputs/ButtonSwitch';

export default function TeamForm({navigation}) {
  
  // Estados
  const [usuarios, setUsuarios] = useState([]);
  const [novoUsuario, setnovoUsuario] = useState({
    nome: '', dataNascimento: '', genero: '', cpf: '', profissao: '', telefone: '', fotoPerfil: null,
    cep: '', estado: '', cidade: '', bairro: '', logradouro: '', numero: '', complemento: '',
    servico: '', modalidade: '', duracao: '', especialidades: [], valores: '', horarios: [],
    codigo: '', convenios: '',
    email: '', confirmarEmail: '', senha: '', confirmarSenha: '',
  });


  // Listas com as opções
  const generos = ['Feminino', 'Masculino', 'Outro'];
  const servicos = ['Consulta', 'Aula', 'Seção'];
  const modalidades = ['Presencial','Online', 'Presencial ou Online']
  const listaDuracao = ['Mensalidade','60 min', '50 min', '40 min', '30 min', 'Não informado']
  const [listaProfissoes, setListaProfissoes] = useState(['Psicólogo', 'Professor', 'Nutricionista']);
  const [listaEspecialidades, setListaEspecialidades] = useState(['Piano', 'Natação', 'Basquet', 'Violão', 'Vegano']);
 
  // Funções
  
  const handleChange = (campo, valor) => {
    setnovoUsuario({ ...novoUsuario, [campo]: valor });
  };

  const handleSalvarUsuario = async () => {

    if (!camposObrigatoriosPreenchidos(novoUsuario)) {
      Alert.alert('Campos Obrigatórios','Apenas os campos convênios, código e complemento não são obrigatórios.\n\nPreencha todos os campos obrigatórios para realizar o cadastro. ');
      return;
    }

    if (!confirmarIgualdade(novoUsuario.email, novoUsuario.confirmarEmail)) {
      Alert.alert('Erro', 'Os e-mails não correspondem.');
      return;
    }

    if (!confirmarIgualdade(novoUsuario.senha, novoUsuario.confirmarSenha)) {
      Alert.alert('Erro', 'As senhas não correspondem.');
      return;
    }

    const sucesso = await salvarUsuario(novoUsuario);
    if (sucesso) {
      navigation.navigate('Profile');
    }
  };

  useEffect(() => {
    const carregarDados = async () => {
      const dados = await carregarUsuarios();
      setUsuarios(dados);
    };
    carregarDados();
  }, []);

  return (
    <ScrollView style={styles.scrollView}>
      <LabeledInput
        titulo="Nome Completo"
        value={novoUsuario.nome}
        onChangeText={(value) => handleChange('nome', value)}
      />
      <View style={styles.content}>
        <LabeledInput
          titulo="Data de Nascimento"
          value={novoUsuario.dataNascimento}
          onChangeText={(value) => handleChange('dataNascimento', value)}
        />
        <LabeledInput
          titulo="CPF"
          value={novoUsuario.cpf}
          onChangeText={(value) => handleChange('cpf', value)}
        />
      </View>
      <LabeledInputOptions
        titulo="Gênero"
        lista_de_opcoes={generos}
        value={novoUsuario.genero}
        onChangeValue={(value) => handleChange('genero', value)}
      />
      <LabeledInputAddOption
        titulo="Profissão"
        placeholder="Digite sua profissão"
        lista_de_opcoes={listaProfissoes}
        value={novoUsuario.profissao}
        onChangeValue={(value) => handleChange('profissao', value)}
        updateOptions={atualizarListaDelistaProfissoes}
      />
      <LabeledInputMultAddOptions
        titulo="Especialidades"
        lista_de_opcoes={listaEspecialidades}
        onChangeValue={(value) => handleChange('especialidades', value)}
        updateOptions={() => atualizarListaDeEspecialidades(setListaEspecialidades)}
      />
      <LabeledInputOptions
        titulo="Modalidade"
        lista_de_opcoes={modalidades}
        value={novoUsuario.modalidade}
        onChangeValue={(value) => handleChange('modalidade', value)}
      />
      <View style={styles.content}>
        <LabeledInputOptions
          titulo="Serviço"
          lista_de_opcoes={servicos}
          value={novoUsuario.servico}
          onChangeValue={(value) => handleChange('servico', value)}
        />
        <LabeledInputOptions
          titulo="Duração"
          lista_de_opcoes={listaDuracao}
          value={novoUsuario.duracao}
          onChangeValue={(value) => handleChange('duracao', value)}
        />
      </View>
      <Text style={{ color: cores.f, marginHorizontal: 12, marginVertical: 7 }}>
        * Código refere-se ao número do concelho regional ou de outra entidade reguladora de sua profissão, se houver.
      </Text>
      <View style={styles.content}>
        <LabeledInput
          titulo="Código"
          value={novoUsuario.codigo}
          onChangeText={(value) => handleChange('codigo', value)}
        />
        <LabeledInput
          titulo="Convênios"
          value={novoUsuario.convenios}
          onChangeText={(value) => handleChange('convenios', value)}
          placeholder="Ex. Unimed, Amil"
        />
      </View>
      <LabeledInputValues
        value={novoUsuario.valores}
        onChangeValue={(value) => handleChange('valores', value)}
      />
      <View style={styles.content}>
        <LabeledInput
          titulo="Telefone"
          value={novoUsuario.telefone}
          onChangeText={(value) => handleChange('telefone', value)}
        />
        <LabeledInput
          titulo="CEP"
          value={novoUsuario.cep}
          onChangeText={(value) => handleChange('cep', value)}
        />
      </View>
      <View style={styles.content}>
        <LabeledInput
          titulo="Estado"
          value={novoUsuario.estado}
          onChangeText={(value) => handleChange('estado', value)}
        />
        <LabeledInput
          titulo="Cidade"
          value={novoUsuario.cidade}
          onChangeText={(value) => handleChange('cidade', value)}
        />
      </View>
      <View style={styles.content}>
        <LabeledInput
          titulo="Bairro"
          value={novoUsuario.bairro}
          onChangeText={(value) => handleChange('bairro', value)}
        />
        <LabeledInput
          titulo="Logradouro"
          value={novoUsuario.logradouro}
          onChangeText={(value) => handleChange('logradouro', value)}
        />
      </View>
      <View style={styles.content}>
        <LabeledInput
          titulo="Número"
          value={novoUsuario.numero}
          onChangeText={(value) => handleChange('numero', value)}
        />
        <LabeledInput
          titulo="Complemento"
          value={novoUsuario.complemento}
          onChangeText={(value) => handleChange('complemento', value)}
        />
      </View>
      <LabeledInputTime onAddHorario={(value) => handleChange('horarios', value)} />
      <LabeledInput
        titulo="Email"
        value={novoUsuario.email}
        onChangeText={(value) => handleChange('email', value)}
      />
      <LabeledInput
        titulo="Confirmar Email"
        value={novoUsuario.confirmarEmail}
        onChangeText={(value) => handleChange('confirmarEmail', value)}
      />
      <View style={styles.content}>
        <LabeledInput
          titulo="Senha"
          value={novoUsuario.senha}
          onChangeText={(value) => handleChange('senha', value)}
          secureTextEntry
        />
        <LabeledInput
          titulo="Confirmar Senha"
          value={novoUsuario.confirmarSenha}
          onChangeText={(value) => handleChange('confirmarSenha', value)}
          secureTextEntry
        />
      </View>
      <LabeledInputPhoto onChangeValue={(value) => handleChange('fotoPerfil', value)} />
      <View style={{ alignItems: 'center' }}>
        <View style={styles.switchContainer}>
          <ButtonSwitch style={styles.butao} />
          <Text style={styles.switchText}>Declaro que li e concordo com as Políticas de privacidade</Text>
        </View>
        <View style={styles.switchContainer}>
          <ButtonSwitch style={styles.butao} />
          <Text style={styles.switchText}>Declaro que li e concordo com os Termos de serviço</Text>
        </View>
        <TouchableOpacity style={styles.butao} onPress={handleSalvarUsuario}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: cores.a,
    padding: 8,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 18,
    marginHorizontal: 4,
    width:'82%',
  },
  switchText: {
    marginLeft: 20,
    color: cores.f,
  },
  butao: {
    fontSize: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: cores.f,
    color: 'white',
    marginTop: 50,
    marginBottom:100,
    width: 150,
    textAlign: 'center',
  },
});