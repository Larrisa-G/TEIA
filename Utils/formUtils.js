export const camposObrigatoriosPreenchidos = (novoUsuario) => { 
  console.log(novoUsuario);
  return (
    novoUsuario.nome &&
    novoUsuario.dataNascimento &&
    novoUsuario.genero &&
    novoUsuario.cpf &&
    novoUsuario.profissao &&
    novoUsuario.servico &&
    novoUsuario.modalidade &&
    novoUsuario.duracao &&
    Array.isArray(novoUsuario.valores) && novoUsuario.valores.length > 0 &&
    novoUsuario.nicho &&
    Array.isArray(novoUsuario.especialidades) && novoUsuario.especialidades.length > 0 &&
    novoUsuario.telefone &&
    novoUsuario.cep &&
    novoUsuario.estado &&
    novoUsuario.cidade &&
    novoUsuario.bairro &&
    novoUsuario.logradouro &&
    novoUsuario.numero &&
    Array.isArray(novoUsuario.horarios) && novoUsuario.horarios.length > 0 &&
    novoUsuario.email &&
    novoUsuario.senha &&
    novoUsuario.fotoPerfil
  );
};

export const confirmarIgualdade = (item, confirmarItem) => item === confirmarItem;

// Atualiza o estado preservando as propriedades não modificadas e alterando apenas as partes necessárias
export const atualizarCampoNoDicionario = (campo, novoValor, setNovoUsuario) => {
  setNovoUsuario((state) => ({
    ...state,
    [campo]: Array.isArray(state[campo]) ? [...state[campo], novoValor] : novoValor
  }));
};  

// Atualiza o estado da lista de opções, não salva permanentemente as atualizações 
export const atualizarListaDeOpcoes = (setLista, novaLista) => {
    setLista(novaLista);
  }