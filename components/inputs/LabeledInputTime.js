import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import cores from '../../assets/cores.json';
import {formatarHorario} from '../../Utils/formatters';

const LabeledInputTime = ({ onAddHorario }) => {
  const [diasSelecionados, setDiasSelecionados] = useState([]);
  const [horaInicio, setHoraInicio] = useState('');
  const [horaFim, setHoraFim] = useState('');
  const [horarios, setHorarios] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  const diasDaSemana = [
    'Segunda', 'Terça', 'Quarta',
    'Quinta', 'Sexta', 'Sábado', 'Domingo'
  ];

  const handleHoraInicioChange = (texto) => {
    setHoraInicio(formatarHorario(texto));
  };

  const handleHoraFimChange = (texto) => {
    setHoraFim(formatarHorario(texto));
  };

  const toggleDiaSelecionado = (dia) => {
    setDiasSelecionados((prev) =>
      prev.includes(dia) ? prev.filter((d) => d !== dia) : [...prev, dia]
    );
  };

  const formatarDias = (dias) => {
    if (dias.length === 0) return '';

    const diasOrdenados = dias.slice().sort((a, b) => diasDaSemana.indexOf(a) - diasDaSemana.indexOf(b));
    const diasUnicos = Array.from(new Set(diasOrdenados));

    const resultado = [];
    let consecutivos = [];

    diasUnicos.forEach((dia, index) => {
      consecutivos.push(dia);

      if (index === diasUnicos.length - 1 || diasDaSemana.indexOf(diasUnicos[index + 1]) !== diasDaSemana.indexOf(dia) + 1) {
        if (consecutivos.length >= 3) {
          resultado.push(`De ${consecutivos[0]} a ${consecutivos[consecutivos.length - 1]}`);
        } else {
          resultado.push(...consecutivos);
        }
        consecutivos = [];
      }
    });

    if (resultado.length > 0) {
      const ultimaParte = resultado.pop();
      return `${resultado.join(', ')}${resultado.length > 0 ? ' e ' : ''}${ultimaParte}`;
    }

    return '';
  };

  const adicionarHorario = () => {
    if (diasSelecionados.length > 0 && horaInicio && horaFim) {
      const diasString = formatarDias(diasSelecionados);
      const novoHorario = `${diasString} - de ${horaInicio} às ${horaFim}`;
      const novosHorarios = [...horarios, novoHorario];
      setHorarios([...horarios, novoHorario]);
      setDiasSelecionados([]);
      setHoraInicio('');
      setHoraFim('');
      onAddHorario && onAddHorario(novosHorarios);
    }
  };

  const exibirFiltros = () => {
    setShowFilters(!showFilters);
  };

  return (
    <View style={{margin:8, marginBottom:30,}}>
      <Text style={styles.titulo}> Horários </Text>
      <TouchableOpacity onPress={exibirFiltros} style={styles.filtrosContainer}>
         <View>
            {horarios.map((horario, index) => (
              <Text key={index} style={styles.horarioItem}>
                {horario}
              </Text>
            ))}
          </View>
        <Icon
          name={showFilters ? 'chevron-up' : 'chevron-down'}
          size={15}
          color={cores.f}
          style={styles.filtrosIcon}
        />
      </TouchableOpacity>
      {showFilters && (
        <View style={styles.container}>
          <Text style={styles.label}>Selecione os dias:</Text>
          {diasDaSemana.map((dia) => (
            <TouchableOpacity
              key={dia}
              style={[
                styles.diaButton,
                diasSelecionados.includes(dia) && styles.diaSelecionado,
              ]}
              onPress={() => toggleDiaSelecionado(dia)}
            >
              <Text style={styles.diaText}>{dia}</Text>
            </TouchableOpacity>
          ))}

          <Text style={styles.label}>Horário de Início:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 08:00"
            value={horaInicio}
            onChangeText={handleHoraInicioChange}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Horário de Fim:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 17:00"
            value={horaFim}
            onChangeText={handleHoraFimChange}
            keyboardType="numeric"
          />

          <TouchableOpacity style={styles.button} onPress={adicionarHorario}>
            <Text style={styles.buttonText}>Adicionar Horário</Text>
          </TouchableOpacity>

        </View>
      )}
    </View>
  );
};

export default LabeledInputTime;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
  },
  titulo: {
    fontWeight: 'bold',
    marginBottom: 10,
    color: cores.f,
  },
  diaButton: {
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 4,
  },
  diaSelecionado: {
    backgroundColor: cores.d,
  },
  diaText: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    marginVertical: 8,
    borderRadius: 8,
  },
  button: {
    backgroundColor: cores.e,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 16,
  },
  buttonText: {
    color: cores.a,
    fontSize: 16,
  },
  horarioItem: {
    fontSize: 15,
    color: '#333',
    marginBottom: 4,
  },
  filtrosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingVertical: 12,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: cores.e,
  },
  filtrosIcon: {
    marginLeft: 10,
  },
});