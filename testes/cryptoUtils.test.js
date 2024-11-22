import CryptoJS from 'crypto-js';

const gerarHashSenha = (senha) => {
    return CryptoJS.SHA256(senha).toString(CryptoJS.enc.Base64);
}

test('Deve gerar o mesmo hash para a mesma senha', () => {
    const senha = 'E1senh@';
    
    const hash1 = gerarHashSenha(senha);
    const hash2 = gerarHashSenha(senha);
    
    expect(hash1).toBe(hash2);
  });
  
  test('Deve gerar hashes diferentes para senhas diferentes', () => {
    const senha1 = 'E1senh';
    const senha2 = 'N1senh@';
    
    const hash1 = gerarHashSenha(senha1);
    const hash2 = gerarHashSenha(senha2);
    
    expect(hash1).not.toBe(hash2);
  });
  