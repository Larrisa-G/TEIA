import CryptoJS from 'crypto-js';

export const gerarHashSenha = (senha) => {
  return CryptoJS.SHA256(senha).toString(CryptoJS.enc.Base64);
}