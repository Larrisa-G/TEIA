import { Text, TextInput, TouchableOpacity, View, SafeAreaView, ScrollView, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import {verificarCredenciais, salvarUsuarioLogado} from '../services/Storage';
import cores from '../assets/cores.json';

const LoginForm = ({ navigation }) => {

  const [user, setUser] = useState(''); 
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const irParaCadstro = () => {
    navigation.navigate('TeamRegister')
  };

const verificarLogin = async () => {
  setLoading(true);

  try {
    const usuarioValido = await verificarCredenciais(user, senha);

    if (usuarioValido) {
      await salvarUsuarioLogado(usuarioValido);
      navigation.navigate('Search'); // Redireciona para a próxima tela
    } else {
      Alert.alert('Usuário ou senha incorretos.');
    }
  } catch (error) {
    console.error('Erro ao verificar o login:', error);
    Alert.alert('Erro', 'Ocorreu um erro ao tentar realizar o login.');
  } finally{
    setLoading(false);
  }
};

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View>
      <View style={styles.loginContainer}>
        <Text style={[styles.container, styles.label]}> Usuário </Text>
        <TextInput 
          style={styles.input} 
          placeholder="usuário ou e-mail" 
          value={user}
          onChangeText={setUser} 
        />
      </View>
      <View style={styles.loginContainer}>
        <Text style={[styles.container, styles.label]}> Senha </Text>
        <TextInput 
          style={styles.input} 
          secureTextEntry
          value={senha}
          onChangeText={setSenha} 
        />
        <Text style={styles.linkSenha}>Esqueci minha senha</Text>
      </View>
      </View>
      <View style={styles.botaoBox}>
        {loading ? (
        <ActivityIndicator size="large" color={cores.f} />
        ) : (
        <TouchableOpacity style={styles.botao} onPress={verificarLogin}>
          <Text style={styles.botaoTexto} > Entrar </Text>
        </TouchableOpacity>
      )}

      </View>
      <TouchableOpacity  onPress={irParaCadstro}>
        <Text style={styles.linkCadastrar} >Não possui cadastro? Cadastre-se aqui</Text>
      </TouchableOpacity>
      
    </ScrollView>
  );
};

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Login</Text>
      </View>
      <LoginForm navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: cores.a,
    paddingLeft: 30,
    paddingTop: 70,
    paddingBottom: 50,
  },
  scrollView: {
    flexGrow: 1,
    backgroundColor: cores.a,
    paddingHorizontal: 20,
  },
  titulo: {
    color: cores.e,
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  loginContainer: {
    justifyContent: 'center',
    backgroundColor: cores.a,
    margin:15,
    marginBottom:20,
    color:cores.d,
    fontSize:17,
  },
  label: {
    fontWeight: 'bold',
    marginBottom:10,
    fontSize:16,
    color:cores.f,
  },
  input: {
    paddingHorizontal:14,
    paddingVertical:6,
    borderRadius:20,
    backgroundColor:cores.c,
    fontSize:17,
  },
  linkSenha:{
    color:cores.e,
    margin:8,
    fontSize:14,
  },
  botaoBox: {
    alignItems: 'center',
    marginVertical: 14,
  },
  botao: {
    paddingVertical: 10,
    borderRadius: 30,
    backgroundColor: cores.f,
    marginTop: 50,
    marginBottom:10,
    width: 150,
    textAlign: 'center',
  },
  botaoTexto: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    borderRadius: 30,
  },
  linkCadastrar: {
    color: cores.f,
    textAlign: 'center',
    marginVertical: 20,
    fontSize:14,
  },
});