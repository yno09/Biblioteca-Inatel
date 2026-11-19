// Acervo da biblioteca (dados de exemplo).
// Troque pelos livros reais do Inatel quando quiser.
//
// genero: mesmo id de GENRES em services/api.js
//   1 Cálculo | 2 Física | 3 Engenharia de Software | 4 Algoritmos | 5 Circuitos | 6 Redes e Sistemas
// capa: opcional. Coloque a imagem em public/capas/ e escreva capa: "/capas/arquivo.jpg"
//       (o api.js ajusta o caminho para o GitHub Pages).
//       Sem capa, o card mostra o ícone "Sem capa".
// quantidade: exemplares disponíveis (valores de exemplo, ajuste para os reais).
//             0 mostra "Indisponível" no card.
// ano: ano da edição que a biblioteca tem (valores de exemplo, ajuste para os reais).

export const LIVROS = [
  // Cálculo
  { id: "calc-stewart-1", titulo: "Cálculo, Volume 1", autores: ["James Stewart"], editora: "Cengage", genero: 1, quantidade: 3, ano: 2013 },
  { id: "calc-stewart-2", titulo: "Cálculo, Volume 2", autores: ["James Stewart"], editora: "Cengage", genero: 1, quantidade: 0, ano: 2013 },
  { id: "calc-thomas-1", titulo: "Cálculo, Volume 1", autores: ["George B. Thomas"], editora: "Pearson", genero: 1, quantidade: 2, ano: 2012 },
  { id: "calc-guidorizzi-1", titulo: "Um Curso de Cálculo, Volume 1", autores: ["Hamilton Luiz Guidorizzi"], editora: "LTC", genero: 1, quantidade: 4, ano: 2001 },

  // Física
  { id: "fis-halliday-1", titulo: "Fundamentos de Física, Volume 1", autores: ["David Halliday", "Robert Resnick", "Jearl Walker"], editora: "LTC", genero: 2, quantidade: 5, ano: 2016 },
  { id: "fis-halliday-3", titulo: "Fundamentos de Física, Volume 3", autores: ["David Halliday", "Robert Resnick", "Jearl Walker"], editora: "LTC", genero: 2, quantidade: 2, ano: 2016 },
  { id: "fis-tipler", titulo: "Física para Cientistas e Engenheiros", autores: ["Paul A. Tipler", "Gene Mosca"], editora: "LTC", genero: 2, quantidade: 0, ano: 2009 },
  { id: "fis-nussenzveig-1", titulo: "Curso de Física Básica, Volume 1", autores: ["H. Moysés Nussenzveig"], editora: "Blucher", genero: 2, quantidade: 3, ano: 2013 },

  // Engenharia de Software
  { id: "es-sommerville", titulo: "Engenharia de Software", autores: ["Ian Sommerville"], editora: "Pearson", genero: 3, quantidade: 4, ano: 2011 },
  { id: "es-pressman", titulo: "Engenharia de Software: Uma Abordagem Profissional", autores: ["Roger S. Pressman", "Bruce R. Maxim"], editora: "AMGH", genero: 3, quantidade: 1, ano: 2016 },
  { id: "es-codigo-limpo", titulo: "Código Limpo", autores: ["Robert C. Martin"], editora: "Alta Books", genero: 3, quantidade: 6, ano: 2009 },
  { id: "es-arquitetura-limpa", titulo: "Arquitetura Limpa", autores: ["Robert C. Martin"], editora: "Alta Books", genero: 3, quantidade: 0, ano: 2019 },

  // Algoritmos
  { id: "alg-cormen", titulo: "Algoritmos: Teoria e Prática", autores: ["Thomas H. Cormen", "Charles E. Leiserson", "Ronald L. Rivest", "Clifford Stein"], editora: "Elsevier", genero: 4, quantidade: 2, ano: 2012 },
  { id: "alg-goodrich", titulo: "Estruturas de Dados e Algoritmos em Java", autores: ["Michael T. Goodrich", "Roberto Tamassia"], editora: "Bookman", genero: 4, quantidade: 3, ano: 2013 },

  // Circuitos
  { id: "circ-boylestad", titulo: "Introdução à Análise de Circuitos", autores: ["Robert L. Boylestad"], editora: "Pearson", genero: 5, quantidade: 3, ano: 2012 },
  { id: "circ-sadiku", titulo: "Fundamentos de Circuitos Elétricos", autores: ["Charles K. Alexander", "Matthew N. O. Sadiku"], editora: "AMGH", genero: 5, quantidade: 2, ano: 2013 },
  { id: "circ-nilsson", titulo: "Circuitos Elétricos", autores: ["James W. Nilsson", "Susan A. Riedel"], editora: "Pearson", genero: 5, quantidade: 0, ano: 2016 },
  { id: "circ-sedra", titulo: "Microeletrônica", autores: ["Adel S. Sedra", "Kenneth C. Smith"], editora: "Pearson", genero: 5, quantidade: 4, ano: 2007 },

  // Redes e Sistemas
  { id: "rs-tanenbaum-redes", titulo: "Redes de Computadores", autores: ["Andrew S. Tanenbaum", "David J. Wetherall"], editora: "Pearson", genero: 6, quantidade: 3, ano: 2011 },
  { id: "rs-kurose", titulo: "Redes de Computadores e a Internet", autores: ["James F. Kurose", "Keith W. Ross"], editora: "Pearson", genero: 6, quantidade: 5, ano: 2013 },
  { id: "rs-tanenbaum-so", titulo: "Sistemas Operacionais Modernos", autores: ["Andrew S. Tanenbaum", "Herbert Bos"], editora: "Pearson", genero: 6, quantidade: 2, ano: 2016 },
];
