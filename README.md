<div align="center">
  <img src="public/vite.svg" alt="Logo" width="80" height="80">
  <h1 align="center">Gerador de QR Code Pro</h1>
  <p align="center">
    Uma aplicação moderna, elegante e de alta performance para criação e customização de QR Codes.<br/>
    Desenvolvido pela <strong>Noda Soluções Dev</strong>.
  </p>
  <p align="center">
    <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React 19" /></a>
    <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" /></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/TailwindCSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" /></a>
    <a href="https://www.framer.com/motion/"><img src="https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer" alt="Framer Motion" /></a>
  </p>
</div>

<br />

## ✨ Visão Geral

O **Gerador de QR Code Pro** foi projetado para ir além do básico. Em vez de códigos QR em preto e branco sem graça, esta ferramenta permite que você estilize cores, formatos, pontilhados e insira a marca da sua empresa perfeitamente centralizada. Tudo isso é envolto em uma interface moderna utilizando o conceito de *Glassmorphism* (efeito de vidro) com animações dinâmicas, proporcionando uma experiência de usuário premium.

## 🚀 Funcionalidades Principais

- **Customização Total:** Altere a cor do fundo, pontos e cantos interativos em tempo real.
- **Temas Pré-definidos:** Acesso a estilos instantâneos como *Cyber Neon*, *Midnight Dark*, e *Noda Brand*.
- **Upload de Logo:** Adicione a logomarca da sua empresa ao centro do código e configure o seu tamanho perfeitamente.
- **Exportação Multiformato:** Baixe a imagem final com altíssima qualidade nos formatos **PNG**, **SVG** e **WEBP**.
- **Cópia Instantânea:** Área de Transferência rápida. Copie a imagem renderizada com 1 clique para colar no WhatsApp, e-mail ou redes sociais.
- **Preview Eficiente:** As alterações do código QR renderizam e animam perfeitamente sem gargalos no Canvas.

## 💻 Tecnologias e Arquitetura

A aplicação modular e componentizada foca na escalabilidade técnica:

- **[React 19](https://react.dev/)** para a reatividade da UI.
- **[Vite](https://vitejs.dev/)** atuando como build tool otimizada para desenvolvimento rápido.
- **[Tailwind CSS v4](https://tailwindcss.com/)** proporcionando a estrutura de estilos nativa in-memory.
- **[Framer Motion](https://www.framer.com/motion/)** responsável pelas animações dos componentes (modais e cards spring).
- **[Lucide React](https://lucide.dev/)** para os icones vetoriais minimalistas e consistentes.
- **[qr-code-styling](https://qr-code-styling.com/)** integrando a capacidade de manipulação real do QR no HTML5 Canvas.

## 🛠️ Como Executar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/en/) (Versão 18+ recomendada).

### Instalação e Execução

1. Faça o clone (ou download) deste repositório para o seu ambiente.
2. Abra seu terminal na pasta do projeto e instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento interativo local:
   ```bash
   npm run dev
   ```
4. Acesse seu navegador em `http://localhost:5173`.

## 📦 Deploy e Produção

Para otimizar e construir os arquivos estáticos (*assets*) pesados prontos para deploy no servidor da sua escolha (Vercel, Netlify, Nginx, etc), execute:

```bash
npm run build
```
Os arquivos prontos e minificados serão gerados na subpasta `/dist`.

<br />

<div align="center">
  <sub>
  <a href="https://www.nodasolucoes.dev/">Noda Soluções Dev</a>
  </sub>
</div>
