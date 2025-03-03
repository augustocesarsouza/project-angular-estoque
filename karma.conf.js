module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    browserNoActivityTimeout: 100000, // ⬅ Aumenta o tempo de inatividade antes de timeout
    browserDisconnectTimeout: 20000, // ⬅ Tempo antes de desconectar o navegador
    captureTimeout: 120000, // ⬅ Tempo máximo para capturar o navegador
  });
};
