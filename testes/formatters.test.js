const formatarValor = (valor) => {
    const somenteNumeros = valor.replace(/\D/g, '');
    const valorFormatado = (somenteNumeros / 100).toFixed(2).replace('.', ',');
    return valorFormatado;
  };

const formatarData = (valor) => {
    return valor
      .replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3') 
      .substring(0, 10); 
  };

test('Deve formatar o valor corretamente', () => {
    const resultado = formatarValor('10000');
    expect(resultado).toBe('100,00'); 
  });

test('Deve formatar a data corretamente', () => {
    const resultado = formatarData('16052005');
    expect(resultado).toBe('16/05/2005');  
  });