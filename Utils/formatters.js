export const formatarEndereco = (usuario) => {
  if (!usuario) return 'Não informado';
  const { estado, cidade, bairro, logradouro, numero, complemento } = usuario;

  const enderecoFormatado = [
    logradouro ? `${logradouro}, ` : '',
    numero ? `nº ${numero} ` : '',
    complemento ? `(${complemento})` : '',
    bairro ? `, ${bairro} ` : '',
    cidade ? `- ${cidade} ` : '',
    estado ? `- ${estado} ` : '',
  ].join('');

  return enderecoFormatado || 'Não informado';
};

export const formatarEspecialidades = (especialidades) => {
  if (!especialidades || especialidades.length === 0) {
    return 'Não informado';
  }
  return especialidades.join(', ');
};

export const formatarValores = (valores) => {
  if (!valores || valores.length === 0) {
    return 'Não informado';
  }
  return valores.join('\n ');
};

export const formatarValor = (valor) => {
  const somenteNumeros = valor.replace(/\D/g, '');
  const valorFormatado = (somenteNumeros / 100).toFixed(2).replace('.', ',');
  return valorFormatado;
};

export const formatarHorario = (valor) => {
  const somenteNumero = valor.replace(/\D/g, '');
  let horarioFormatado = somenteNumero.slice(0, 4); // Limita a 4 caracteres (HHMM)

  if (horarioFormatado.length >= 3) { // (00:00)
    horarioFormatado = `${horarioFormatado.slice(0, 2)}:${horarioFormatado.slice(2)}`;
  }

  return horarioFormatado;
};

export const formatarCPF = (valor) => {
  return valor
    .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4') 
    .substring(0, 14); // Limita o comprimento  (xxx.xxx.xxx-xx)
};

export const formatarData = (valor) => {
  return valor
    .replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3') 
    .substring(0, 10); // (dd/mm/yyyy)
};

export const formatarCEP = (valor) => {
  return valor
    .replace(/(\d{5})(\d{3})/, '$1-$2') 
    .substring(0, 9); // (xxxxx-xxx)
};

export const formatarTelefone = (valor) => {
  return valor
    .replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3') 
    .substring(0, 15); // ((xx) xxxxx-xxxx)
};
