# 📚 Biblioteca Inatel - S05 (Interação Homem-Máquina)

Aplicação web para consulta de livros e gerenciamento de reservas, empréstimos e devoluções de uma biblioteca universitária, desenvolvida como projeto da disciplina de Interação Homem-Máquina.

## 📖 Visão geral

O objetivo do projeto é oferecer uma interface simples e clara para que o aluno encontre um livro, reserve e acompanhe todo o ciclo até a devolução.

### Funcionalidades

- **Catálogo de livros:** lista de livros em cards, com busca por autor, título ou editora, filtro por categoria (Cálculo, Física, Engenharia de Software, Algoritmos, Circuitos, Redes e Sistemas) e ordenação.
- **Detalhes do livro:** página com capa, autor, editora, ano e quantidade de exemplares disponíveis.
- **Confirmar reserva:** formulário com nome, matrícula e curso (Engenharia de Software, da Computação, Biomédica, de Telecomunicações, Elétrica e de Produção).
- **Histórico de reservas:** cada reserva tem prazo de **7 dias** para retirada. O botão *Simular retirada* transforma a reserva em empréstimo.
- **Histórico de empréstimos:** cada empréstimo tem data limite de devolução (**14 dias**). Em caso de atraso, é cobrada multa de **R$ 2,00 por dia**. O botão *Simular devolução* encerra o empréstimo.
- **Histórico de devoluções:** registra a data da devolução e a multa paga, quando houver.

### Fluxo do usuário

```
Catálogo → Detalhes do livro → Confirmar reserva → Reserva
        → (retirada) Empréstimo → (devolução) Devolução
```

### Observações

- As ações de retirada e devolução são **simuladas**, pois o projeto não possui um sistema de bibliotecário nem backend.
- Reservas, empréstimos e devoluções ficam salvos no `localStorage` do navegador, portanto existem apenas no computador e no navegador em que foram criados.

## 🛠️ Ferramentas utilizadas

| Ferramenta | Uso no projeto |
| --- | --- |
| [React 19](https://react.dev/) | Construção da interface em componentes |
| [Vite](https://vite.dev/) | Servidor de desenvolvimento e build |
| [React Router](https://reactrouter.com/) | Navegação entre as páginas |
| [Tailwind CSS 4](https://tailwindcss.com/) | Estilização da interface |
| [Lucide React](https://lucide.dev/) | Ícones |
| [React Compiler](https://react.dev/learn/react-compiler) | Otimização automática dos componentes |
| [ESLint](https://eslint.org/) | Padronização e verificação do código |
| Context API + `localStorage` | Estado compartilhado e persistência dos dados |
| [Git](https://git-scm.com/) e [GitHub](https://github.com/) | Controle de versão e hospedagem do código |
| [Visual Studio Code](https://code.visualstudio.com/) | Editor de código |

## 🗂️ Estrutura do projeto

```
src/
├── components/     # Header, BookCard, BookList, GenreFilter
├── context/        # Estado de reservas, empréstimos e devoluções
├── data/           # Dados dos livros
├── pages/          # Home, BookDetails, ConfirmarReserva,
│                   # Reservas, Emprestimos, Devolucoes
├── services/       # Acesso aos dados dos livros
├── utils/          # Cálculo de prazos, multa e formatação de datas
├── App.jsx         # Rotas da aplicação
└── main.jsx        # Ponto de entrada
```

## ▶️ Como executar

Pré-requisito: [Node.js](https://nodejs.org/) instalado.

```bash
# instalar as dependências
npm install

# iniciar o servidor de desenvolvimento
npm run dev
```

Depois, abra o endereço mostrado no terminal (normalmente `http://localhost:5173`).

Outros comandos:

```bash
npm run build     # gera a versão de produção
npm run preview   # visualiza a versão de produção
npm run lint      # verifica o código com o ESLint
```

## 🎓 Autoria e informações acadêmicas

| | |
| --- | --- |
| **Nome** | Vitor Nolasco Ynoguti |
| **Matrícula** | 818 |
| **Curso** | Engenharia de Software |
| **Disciplina** | Interação Homem-Máquina |