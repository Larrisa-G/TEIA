import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LabeledInput from '../inputs/LabeledInput';
import LabeledInputOptions from '../inputs/LabeledInputOptions';
import LabeledInputAddOption from '../inputs/LabeledInputAddOption';
import LabeledInputMultAddOptions from '../inputs/LabeledInputMultiAddOptions';
import LabeledInputValues from '../inputs/LabeledInputValues';
import LabeledInputTime from '../inputs/LabeledInputTime';
import LabeledInputPhoto from '../inputs/LabeledInputPhoto';
import LabeledOutputForm  from '../outputs/LabeledOutputForm';
import cores from '../../assets/cores.json';
import {
  listaProfissoes, listaNichos, listaDuracao, listaServicos, listaGeneros, listaModalidades,
  listaMusica, listaArtes, listaEsportes, listaTerapias, listaDanca, listaEstados
  } from '../../assets/startFilters';
import {atualizarListaDeOpcoes} from '../../Utils/formUtils';

const EditTopForm = ({ usuario, onChange}) => {

  const [profissoes, setProfissoes] = useState(listaProfissoes);
  const [listaEspecialidades, setListaEspecialidades] = useState([]);

  const obterListaPorNicho = (nicho) => {
    const lista = 
      nicho === 'Terapia' ? listaTerapias :
      nicho === 'Esporte' ? listaEsportes :
      nicho === 'Arte' ? listaArtes :
      nicho === 'Musica' ? listaMusica :
      nicho === 'Dança' ? listaDanca :
      null;

    return lista;
  }

  useEffect(() => {obterListaPorNicho(usuario.nicho)}, [usuario.nicho]);

  return (
    <>
      <LabeledInput
        titulo="Nome Completo"
        value={usuario.nome}
        placeholder={usuario.nome}
        onChangeText={(value) => onChange('nome', value)}
      />
      <View style={styles.content}>
        <LabeledInput
          titulo="Data de Nascimento"
          value={usuario.dataNascimento}
          placeholder={usuario.dataNascimento}
          onChangeText={(value) => onChange('dataNascimento', value)}
          mask="data"
          keyboardType="numeric"
        />
        <LabeledOutputForm
          titulo="CPF"
          value={usuario.cpf}
          content={usuario.cpf}
        />
      </View>
      <LabeledInputOptions
        titulo="Gênero"
        lista_de_opcoes={listaGeneros}
        value={usuario.genero}
        placeholder={usuario.genero}
        onChangeValue={(value) => onChange('genero', value)}
      />
      <LabeledInputAddOption
        titulo="Profissão"
        placeholder={usuario.profissao || 'Digite sua profissão'}
        lista_de_opcoes={profissoes}
        value={usuario.profissao}
        onChangeValue={(valor) => onChange('profissao', valor)}
        updateOptions={(novaLista) => atualizarListaDeOpcoes(setProfissoes, novaLista)}
      />
      <LabeledInputOptions
        titulo="Área"
        lista_de_opcoes={listaNichos}
        value={usuario.nicho}
        placeholder={usuario.nicho}
        onChangeValue={(value) => onChange('nicho', value)}
      />
      <LabeledInputMultAddOptions
        titulo="Especialidades"
        placeholder={usuario.especialidades || 'Digite sua especialidade'}
        lista_de_opcoes={listaEspecialidades}
        value={usuario.especialidades}
        onChangeValue={(valor) => onChange('especialidades', valor)}
        updateOptions={(novaLista) => atualizarListaDeOpcoes(setListaEspecialidades, novaLista)}
      />
      <LabeledInputOptions
        titulo="Modalidade"
        lista_de_opcoes={listaModalidades}
        value={usuario.modalidade}
        placeholder={usuario.modalidade}
        onChangeValue={(value) => onChange('modalidade', value)}
      />
      <View style={styles.content}>
        <LabeledInputOptions
          titulo="Serviço"
          lista_de_opcoes={listaServicos}
          value={usuario.servico}
          placeholder={usuario.servico}
          onChangeValue={(value) => onChange('servico', value)}
        />
        <LabeledInputOptions
          titulo="Duração"
          lista_de_opcoes={listaDuracao}
          value={usuario.duracao}
          placeholder={usuario.duracao}
          onChangeValue={(value) => onChange('duracao', value)}
        />
      </View>
      <Text style={styles.infoText}>
        * Código refere-se ao número do conselho regional ou de outra entidade reguladora de sua profissão, se houver.
      </Text>
      <View style={styles.content}>
        <LabeledInput
          titulo="Código"
          value={usuario.codigo}
          placeholder={usuario.codigo}
          onChangeText={(value) => onChange('codigo', value)}
        />
        <LabeledInput
          titulo="Convênios"
          value={usuario.convenios}
          placeholder={usuario.convenios || 'Opcional'}
          onChangeText={(value) => onChange('convenios', value)}
        />
      </View>
      <LabeledInputValues
        value={usuario.valores}
        placeholder={usuario.valores}
        onChangeValue={(value) => onChange('valores', value)}
      />
      <View style={styles.content}>
        <LabeledInput
          titulo="Telefone"
          value={usuario.telefone}
          placeholder={usuario.telefone}
          onChangeText={(value) => onChange('telefone', value)}
          mask="telefone"
          keyboardType="numeric"
        />
        <LabeledInput
          titulo="CEP"
          value={usuario.cep}
          placeholder={usuario.cep}
          onChangeText={(value) => onChange('cep', value)}
          mask="cep"
          keyboardType="numeric"
        />
      </View>
      <LabeledInputOptions
        titulo="Estado"
        lista_de_opcoes={listaEstados}
        value={usuario.estado}
        placeholder={usuario.estado}
        onChangeValue={(value) => onChange('estado', value)}
      />
      <LabeledInput
        titulo="Cidade"
        value={usuario.cidade}
        placeholder={usuario.cidade}
        onChangeText={(value) => onChange('cidade', value)}
      />
      <View style={styles.content}>
        <LabeledInput
          titulo="Bairro"
          value={usuario.bairro}
          placeholder={usuario.bairro}
          onChangeText={(value) => onChange('bairro', value)}
        />
        <LabeledInput
          titulo="Logradouro"
          value={usuario.logradouro}
          placeholder={usuario.logradouro}
          onChangeText={(value) => onChange('logradouro', value)}
        />
      </View>
      <View style={styles.content}>
        <LabeledInput
          titulo="Número"
          value={usuario.numero}
          placeholder={usuario.numero}
          onChangeText={(value) => onChange('numero', value)}
          keyboardType="numeric"
        />
        <LabeledInput
          titulo="Complemento"
          value={usuario.complemento}
          placeholder={usuario.complemento || 'Opcional'}
          onChangeText={(value) => onChange('complemento', value)}
        />
      </View>
      <LabeledInputTime
        value={usuario.horarios}
        onAddHorario={(value) => onChange('horarios', value)}
      />
      <LabeledInput
        titulo="Email"
        value={usuario.email}
        placeholder={usuario.email}
        onChangeText={(value) => onChange('email', value)}
        keyboardType="email-address"
      />
      <LabeledInput
        titulo="Confirmar Email"
        value={usuario.confirmarEmail}
        placeholder={usuario.confirmarEmail}
        onChangeText={(value) => onChange('confirmarEmail', value)}
        keyboardType="email-address"
      />
      <View style={styles.content}>
        <LabeledInput
          titulo="Senha"
          value={usuario.senha}
          onChangeText={(value) => onChange('senha', value)}
          secureTextEntry={true}
        />
        <LabeledInput
          titulo="Confirmar Senha"
          value={usuario.confirmarSenha}
          placeholder="******"
          onChangeText={(value) => onChange('confirmarSenha', value)}
          secureTextEntry={true}
        />
      </View>
      <LabeledInputPhoto
        onChangeValue={(value) => onChange('fotoPerfil', value)}
      />

    </>
  );
};

export default EditTopForm;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  infoText: {
    color: cores.f,
    marginHorizontal: 12,
    marginVertical: 7,
  },
});