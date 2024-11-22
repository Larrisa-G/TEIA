import AsyncStorage from '@react-native-async-storage/async-storage';
import { gerarHashSenha } from '../Utils/cryptoUtils';

// _____ Funções genéricas _____

 // salvar dados genéricos ('@usuarios', usuariosExistentes)
const salvarDados = async (chave, valor) => {
  try {
    await AsyncStorage.setItem(chave, JSON.stringify(valor));
  } catch (e) {
    console.error(`Erro ao salvar dados em ${chave}:`, e);
    throw e;
  }
};

 // Carregar dados genéricos (@usuarios)/(usuario)
const carregarDados = async (chave) => {
  try {
    const dadosJson = await AsyncStorage.getItem(chave);
    return dadosJson ? JSON.parse(dadosJson) : null;
  } catch (e) {
    console.error(`Erro ao carregar dados de ${chave}:`, e);
    throw e;
  }
};


// _____ Funções específicas _____

// Salvar um novo usuário
export const salvarUsuario = async (usuario) => {
  try {

    usuario.senha = gerarHashSenha(usuario.senha);

    const usuariosExistentes = (await carregarDados('@usuarios')) || [];

    if (!usuario.id) { // usuário sem ID igual a novo usuário

      usuario.id = uuidv4(); 
      usuariosExistentes.push(usuario);
    } else { // sobrescrevemos o usuário com o mesmo ID
      
      const index = usuariosExistentes.findIndex((u) => u.id === usuario.id);
      if (index !== -1) {
        usuariosExistentes[index] = usuario; 
      } else {
        usuariosExistentes.push(usuario); // Caso o ID não seja encontrado, adiciona como novo usuário
      }
    }

    // Salva a lista atualizada no armazenamento
    await salvarDados('@usuarios', usuariosExistentes);
    return true;
  } catch (e) {
    console.error('Erro ao salvar ou editar usuário:', e);
    throw e;
  }
};

// Obter todos os usuários
export const carregarUsuarios = async () => {
  try {
    return await carregarDados('@usuarios') || [];
  } catch (e) {
    console.error('Erro ao carregar usuários:', e);
    return [];
  }
};

// Verificar as credenciais de login
export const verificarCredenciais = async (user, senha) => {
  try {
    const usuarios = await carregarUsuarios();
    const senhaHash = gerarHashSenha(senha);

    // Consulta '.find'
    const usuarioValido = usuarios.find(
      (usuario) => (usuario.cpf === user || usuario.email === user) && usuario.senha === senhaHash
    );

    return usuarioValido || null;
  } catch (e) {
    console.error('Erro ao verificar as credenciais:', e);
    throw e;
  }
};

export const deslogarUsuario = async () => {
  try {
    await AsyncStorage.removeItem('usuarioLogado');
    return true;
  } catch (e) {
    console.error('Erro ao deslogar:', e)
    throw e;
  }
};

// Lembrar o usuário logado
export const salvarUsuarioLogado = async (usuario) => {
  try {
    await salvarDados('usuarioLogado', usuario);
  } catch (e) {
    console.error('Erro ao salvar/lembrar o usuário logado:', e);
    throw e;
  }
};

// Obter o usuário logado
export const carregarUsuarioLogado = async () => {
  try {
    return await carregarDados('usuarioLogado');
  } catch (e) {
    console.error('Erro ao carregar o usuário logado:', e);
    return null;
  }
};

// Buscar usuários
export const buscarUsuarios = async (busca) => {
  try {
    const usuarios = await carregarUsuarios();
    if (!usuarios || usuarios.length === 0) {
      return [];
    }

    // Calcula o número de semelhanças entre o usuário e a busca
    const calcularPontuacao = (usuario, busca) => {
      let pontuacao = 0;

      if (busca.profissionais.length > 0 && busca.profissionais.includes(usuario.profissional)) {
        pontuacao++;
      }

      if (busca.servico && usuario.servico === busca.servico) {
        pontuacao++;
      }

      if (busca.convenios.length > 0 && busca.convenios.some((conv) => usuario.convenios.includes(conv))) {
        pontuacao++;
      }

      if (busca.modalidade && usuario.modalidade === busca.modalidade) {
        pontuacao++;
      }

      if (busca.estado && usuario.estado === busca.estado) {
        pontuacao++;
      }

      if (busca.cidades.length > 0 && busca.cidades.includes(usuario.cidade)) {
        pontuacao++;
      }

      if (busca.terapias.length > 0 && busca.terapias.some((terapia) => usuario.terapias.includes(terapia))) {
        pontuacao++;
      }

      if (busca.musica.length > 0 && busca.musica.some((musica) => usuario.musica.includes(musica))) {
        pontuacao++;
      }

      if (busca.esportes.length > 0 && busca.esportes.some((esporte) => usuario.esportes.includes(esporte))) {
        pontuacao++;
      }

      if (busca.dancas.length > 0 && busca.dancas.some((danca) => usuario.dancas.includes(danca))) {
        pontuacao++;
      }

      if (busca.artes.length > 0 && busca.artes.some((arte) => usuario.artes.includes(arte))) {
        pontuacao++;
      }

      return pontuacao;
    };

    // Atribui as pontuações aos usuários
    const usuariosPontuados = usuarios.map((usuario) => ({
      usuario,
      pontuacao: calcularPontuacao(usuario, busca),
    }));

    // Ordena os usuários pela pontuação (maior para menor)
    usuariosPontuados.sort((a, b) => b.pontuacao - a.pontuacao);

    // Retornar os usuários ordenados
    return usuariosPontuados.map((item) => item.usuario);
  } catch (e) {
    console.error('Erro ao buscar usuários:', e);
    throw e;
  }
};


