```markdown
# 🎯 Batalha Naval — InovaGames

Projeto de um jogo interativo de **Batalha Naval** em formato web, desenvolvido como parte das atividades práticas e desafios de programação no **SENAC**. O projeto exercita a lógica de matrizes, manipulação do DOM e renderização dinâmica baseada no estado de uma aplicação.

---

## 📌 Sobre o Projeto

O objetivo do jogo é localizar e afundar **3 navios inimigos** escondidos aleatoriamente em um tabuleiro de **5x5** (25 quadrantes) antes que a sua munição acabe. 

### ⚙️ Mecânicas e Regras do Jogo
* **Limite de Munição:** O jogador possui um total máximo de **10 tentativas** por partida.
* **Sistema de Feedback:** A cada clique, o jogo atualiza o status informando se o disparo atingiu a **Água** ou um **Navio**.
* **Condição de Vitória:** Encontrar e destruir os 3 navios utilizando 10 munições ou menos.
* **Condição de Derrota (Game Over):** Esgotar as 10 munições sem encontrar todos os navios. Ao perder, a posição dos navios restantes é revelada no tabuleiro.
* **Prevenção de Erros:** Caso o jogador clique em um quadrante já atingido anteriormente, o sistema exibe um alerta e não consome sua munição.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias web padrão (Front-end Vanilla):

* **HTML5:** Estruturação semântica da página do jogo.
* **CSS3 (Customizado):** Estilizações específicas de posicionamento, cores e efeitos visuais.
* **JavaScript (ES6):** Toda a lógica do motor do jogo, geração da matriz do tabuleiro, posicionamento aleatório, regras de disparo e renderização dinâmica.
* **Bootstrap 5:** Framework utilizado para agilizar o layout responsivo, uso de componentes (Cards, Grid, Botões) e utilitários.
* **Bootstrap Icons:** Biblioteca de ícones vetoriais usada na interface e no tabuleiro (fogo, miras, navios, etc).

---

## 🏗️ Estrutura de Arquivos Base

O projeto é composto primordialmente pelos seguintes arquivos fundamentais:
```bash
├── index.html       # Estrutura de visualização e interface com o usuário
├── style.css        # Estilos customizados da identidade visual do jogo
└── script.js        # Motor lógico do jogo (Matrizes, cliques e estados)

## Acesse: https://gcbieu.github.io/BATALHA_NAVAL/