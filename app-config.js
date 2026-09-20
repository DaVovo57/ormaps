// Configurações do app. Essas chaves são públicas (ficam no navegador) — pode deixar no repositório.
window.ORMAPS_CONFIG = {
  // "Esqueci a senha": envio do código de 6 dígitos por e-mail (emailjs.com, plano grátis: 200 e-mails/mês)
  emailjs: {
    serviceId: "",
    templateId: "",
    publicKey: ""
  },
  // 360° preciso: chave do Google Maps (Maps JavaScript API). Sem ela, o 360° fica no modo aproximado.
  gmapsKey: ""
};
