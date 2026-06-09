// ------------------------------------------------------------
// VARIÁVEIS GLOBAIS DO JOGO
// ------------------------------------------------------------
let tabuleiro = [];
let naviosRestantes = 3;
let tentativas = 0;
let jogoAtivo = true;

// CONFIGURAÇÃO DO JOGO (Limite de munição)
const MAX_TENTATIVAS = 10;


// ------------------------------------------------------------
// REFERÊNCIAS AO DOM
// ------------------------------------------------------------
const elTabuleiro = document.querySelector('#tabuleiro');
const elMensagem = document.querySelector('#mensagem');
const elTentativas = document.querySelector('#tentativas');
const btnReiniciar = document.querySelector('#btn-reiniciar');


// ============================================================
// DESAFIO 1 — criarTabuleiro()
// ============================================================
function criarTabuleiro() {
  for (let i = 0; i < 5; i++) {
    const linha = [];
    for (let j = 0; j < 5; j++) {
      linha.push(0);
    }
    tabuleiro.push(linha);
  }
}


// ============================================================
// DESAFIO 2 & EXTRA — posicionarNaviosAleatorio()
// ============================================================
function posicionarNaviosAleatorio() {
  let naviosPosicionados = 0;

  while (naviosPosicionados < 3) {
    let linha = Math.floor(Math.random() * 5);
    let coluna = Math.floor(Math.random() * 5);

    if (tabuleiro[linha][coluna] === 0) {
      tabuleiro[linha][coluna] = 1; 
      naviosPosicionados++;
    }
  }
}


// ============================================================
// DESAFIO 3 — atirar(linha, coluna)
// ============================================================
function atirar(linha, coluna) {
  const pos = tabuleiro[linha][coluna];

  if (pos === 2 || pos === 3) {
    elMensagem.innerHTML = '⚠️ Posição já atingida! Escolha outro quadrante.';
    return;
  }

  tentativas++;

  if (pos === 1) {
    tabuleiro[linha][coluna] = 2; 
    naviosRestantes--;
    elMensagem.innerHTML = '💥 <strong>BUM!</strong> Você acertou um navio!';
  } else if (pos === 0) {
    tabuleiro[linha][coluna] = 3; 
    elMensagem.innerHTML = '💧 <strong>Tchibum...</strong> Água!';
  }

  if (naviosRestantes === 0) {
    jogoAtivo = false;
    elMensagem.innerHTML = '🎉 <strong>VITÓRIA!</strong> Você limpou os mares e afundou a frota inimiga!';
    return;
  }

  if (tentativas >= MAX_TENTATIVAS) {
    jogoAtivo = false;
    elMensagem.innerHTML = '☠️ <strong>GAME OVER!</strong> Suas munições acabaram. O inimigo venceu!';
  }
}


// ============================================================
// DESAFIO 4 & 5 — renderizarTabuleiro()
// ============================================================
function renderizarTabuleiro() {
  elTabuleiro.innerHTML = '';

  for (let linha = 0; linha < tabuleiro.length; linha++) {
    for (let coluna = 0; coluna < tabuleiro[linha].length; coluna++) { 
      const celula = document.createElement('div');
      const valor = tabuleiro[linha][coluna];

      celula.dataset.linha = linha;
      celula.dataset.coluna = coluna;

      if (valor === 2) {
        celula.classList.add('acerto');
        celula.innerHTML = '<i class="bi bi-fire text-white"></i>'; 
      } else if (valor === 3) {
        celula.classList.add('erro');
        celula.innerHTML = '<i class="bi bi-x text-secondary"></i>'; 
      } 
      else if (!jogoAtivo && valor === 1 && naviosRestantes > 0) {
        celula.style.backgroundColor = '#ffc107'; 
        celula.style.display = 'flex';
        celula.style.alignItems = 'center';
        celula.style.justifyContent = 'center';
        celula.innerHTML = '<i class="bi bi-ship-ease text-dark"></i>'; 
      }

      // DESAFIO 5 — Evento de clique inserido no escopo correto da célula
      celula.addEventListener('click', function () {
        if (!jogoAtivo) return; 

        const l = Number(celula.dataset.linha);
        const c = Number(celula.dataset.coluna);

        atirar(l, c);
        atualizarPainel();
        renderizarTabuleiro();
      });

      elTabuleiro.appendChild(celula);
    }
  }
}


// ------------------------------------------------------------
// PAINEL AUXILIAR — atualizarPainel()
// ------------------------------------------------------------
function atualizarPainel() {
  const restam = MAX_TENTATIVAS - tentativas;
  elTentativas.innerHTML = `Munição: <strong>${restam}</strong> / ${MAX_TENTATIVAS}`;
  
  if (restam <= 3 && jogoAtivo) {
    elTentativas.classList.add('text-danger'); 
  } else {
    elTentativas.classList.remove('text-danger');
  }
}


// ============================================================
// DESAFIO 6 — iniciarJogo()
// ============================================================
function iniciarJogo() {
  tabuleiro = [];
  naviosRestantes = 3;
  tentativas = 0;
  jogoAtivo = true;

  criarTabuleiro();
  posicionarNaviosAleatorio(); 

  elMensagem.innerHTML = '🎯 Alvos detectados! Clique em uma célula para disparar os torpedos.';
  atualizarPainel();
  renderizarTabuleiro();
}


// ------------------------------------------------------------
// EVENTOS
// ------------------------------------------------------------
btnReiniciar.addEventListener('click', function () {
  iniciarJogo();
});


// ------------------------------------------------------------
// INÍCIO DO JOGO
// ------------------------------------------------------------
iniciarJogo();