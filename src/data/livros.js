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
// ano: ano da edição que a biblioteca te m (valores de exemplo, ajuste para os reais).

export const LIVROS = [
  // Cálculo
  { id: "calc-stewart-1", titulo: "Cálculo, Volume 1", autores: ["James Stewart"], editora: "Cengage", genero: 1, quantidade: 3, ano: 2013, capa: "/capas/calc-stewart-1.png" },
  { id: "calc-stewart-2", titulo: "Cálculo, Volume 2", autores: ["James Stewart"], editora: "Cengage", genero: 1, quantidade: 0, ano: 2013, capa: "/capas/calc-stewart-2.png" },
  { id: "calc-thomas-1", titulo: "Cálculo, Volume 1", autores: ["George B. Thomas"], editora: "Pearson", genero: 1, quantidade: 2, ano: 2012, capa: "/capas/calc-thomas-1.png" },
  { id: "calc-guidorizzi-1", titulo: "Um Curso de Cálculo, Volume 1", autores: ["Hamilton Luiz Guidorizzi"], editora: "LTC", genero: 1, quantidade: 4, ano: 2001, capa: "/capas/calc-guidorizzi-1.png" },
  { id: "calc-guidorizzi-2", titulo: "Um Curso de Cálculo, Volume 2", autores: ["Hamilton Luiz Guidorizzi"], editora: "LTC", genero: 1, quantidade: 3, ano: 2001, capa: "/capas/calc-guidorizzi-2.png" },
  { id: "calc-thomas-2", titulo: "Cálculo, Volume 2", autores: ["George B. Thomas"], editora: "Pearson", genero: 1, quantidade: 1, ano: 2012, capa: "/capas/calc-thomas-2.png" },
  { id: "calc-anton-1", titulo: "Cálculo, Volume 1", autores: ["Howard Anton", "Irl Bivens", "Stephen Davis"], editora: "Bookman", genero: 1, quantidade: 2, ano: 2014, capa: "/capas/calc-anton-1.png" },
  { id: "calc-leithold-1", titulo: "O Cálculo com Geometria Analítica, Volume 1", autores: ["Louis Leithold"], editora: "Harbra", genero: 1, quantidade: 0, ano: 1994, capa: "/capas/calc-leithold-1.png" },
  { id: "calc-flemming", titulo: "Cálculo A: Funções, Limite, Derivação e Integração", autores: ["Diva Marília Flemming", "Mirian Buss Gonçalves"], editora: "Pearson", genero: 1, quantidade: 5, ano: 2006, capa: "/capas/calc-flemming.png" },
  { id: "calc-boulos-precalculo", titulo: "Pré-Cálculo", autores: ["Paulo Boulos"], editora: "Pearson", genero: 1, quantidade: 4, ano: 2006, capa: "/capas/calc-boulos-precalculo.png" },
  { id: "calc-simmons-1", titulo: "Cálculo com Geometria Analítica, Volume 1", autores: ["George F. Simmons"], editora: "Pearson", genero: 1, quantidade: 2, ano: 1987, capa: "/capas/calc-simmons-1.png" },
  { id: "calc-swokowski-1", titulo: "Cálculo com Geometria Analítica, Volume 1", autores: ["Earl W. Swokowski"], editora: "Makron Books", genero: 1, quantidade: 0, ano: 1994, capa: "/capas/calc-swokowski-1.png" },
  { id: "calc-avila-1", titulo: "Cálculo das Funções de Uma Variável, Volume 1", autores: ["Geraldo Ávila"], editora: "LTC", genero: 1, quantidade: 3, ano: 2003, capa: "/capas/calc-avila-1.png" },
  { id: "calc-lima-analise-1", titulo: "Curso de Análise, Volume 1", autores: ["Elon Lages Lima"], editora: "IMPA", genero: 1, quantidade: 1, ano: 2014, capa: "/capas/calc-lima-analise-1.png" },

  // Física
  { id: "fis-halliday-1", titulo: "Fundamentos de Física, Volume 1", autores: ["David Halliday", "Robert Resnick", "Jearl Walker"], editora: "LTC", genero: 2, quantidade: 5, ano: 2016, capa: "/capas/fis-halliday-1.png" },
  { id: "fis-halliday-3", titulo: "Fundamentos de Física, Volume 3", autores: ["David Halliday", "Robert Resnick", "Jearl Walker"], editora: "LTC", genero: 2, quantidade: 2, ano: 2016, capa: "/capas/fis-halliday-3.png" },
  { id: "fis-tipler", titulo: "Física para Cientistas e Engenheiros", autores: ["Paul A. Tipler", "Gene Mosca"], editora: "LTC", genero: 2, quantidade: 0, ano: 2009, capa: "/capas/fis-tipler.png" },
  { id: "fis-nussenzveig-1", titulo: "Curso de Física Básica, Volume 1", autores: ["H. Moysés Nussenzveig"], editora: "Blucher", genero: 2, quantidade: 3, ano: 2013, capa: "/capas/fis-nussenzveig-1.png" },
  { id: "fis-halliday-2", titulo: "Fundamentos de Física, Volume 2", autores: ["David Halliday", "Robert Resnick", "Jearl Walker"], editora: "LTC", genero: 2, quantidade: 4, ano: 2016, capa: "/capas/fis-halliday-2.png" },
  { id: "fis-halliday-4", titulo: "Fundamentos de Física, Volume 4", autores: ["David Halliday", "Robert Resnick", "Jearl Walker"], editora: "LTC", genero: 2, quantidade: 2, ano: 2016, capa: "/capas/fis-halliday-4.png" },
  { id: "fis-nussenzveig-3", titulo: "Curso de Física Básica, Volume 3", autores: ["H. Moysés Nussenzveig"], editora: "Blucher", genero: 2, quantidade: 1, ano: 2015, capa: "/capas/fis-nussenzveig-3.png" },
  { id: "fis-young-1", titulo: "Física I: Mecânica", autores: ["Hugh D. Young", "Roger A. Freedman"], editora: "Pearson", genero: 2, quantidade: 3, ano: 2016, capa: "/capas/fis-young-1.png" },
  { id: "fis-serway-1", titulo: "Princípios de Física, Volume 1", autores: ["Raymond A. Serway", "John W. Jewett Jr."], editora: "Cengage", genero: 2, quantidade: 0, ano: 2014, capa: "/capas/fis-serway-1.png" },
  { id: "fis-feynman-1", titulo: "Lições de Física de Feynman, Volume 1", autores: ["Richard P. Feynman", "Robert B. Leighton", "Matthew Sands"], editora: "Bookman", genero: 2, quantidade: 2, ano: 2008, capa: "/capas/fis-feynman-1.png" },
  { id: "fis-young-2", titulo: "Física II: Termodinâmica e Ondas", autores: ["Hugh D. Young", "Roger A. Freedman"], editora: "Pearson", genero: 2, quantidade: 13, ano: 2016, capa: "/capas/fis-young-2.png" },
  { id: "fis-young-3", titulo: "Física III: Eletromagnetismo", autores: ["Hugh D. Young", "Roger A. Freedman"], editora: "Pearson", genero: 2, quantidade: 0, ano: 2016, capa: "/capas/fis-young-3.png" },
  { id: "fis-nussenzveig-2", titulo: "Curso de Física Básica, Volume 2", autores: ["H. Moysés Nussenzveig"], editora: "Blucher", genero: 2, quantidade: 12, ano: 2014, capa: "/capas/fis-nussenzveig-2.png" },
  { id: "fis-griffiths-eletro", titulo: "Eletrodinâmica", autores: ["David J. Griffiths"], editora: "Pearson", genero: 2, quantidade: 1, ano: 2011, capa: "/capas/fis-griffiths-eletro.png" },

  // Engenharia de Software
  { id: "es-sommerville", titulo: "Engenharia de Software", autores: ["Ian Sommerville"], editora: "Pearson", genero: 3, quantidade: 4, ano: 2011, capa: "/capas/es-sommerville.png" },
  { id: "es-pressman", titulo: "Engenharia de Software: Uma Abordagem Profissional", autores: ["Roger S. Pressman", "Bruce R. Maxim"], editora: "AMGH", genero: 3, quantidade: 1, ano: 2016, capa: "/capas/es-pressman.png" },
  { id: "es-codigo-limpo", titulo: "Código Limpo", autores: ["Robert C. Martin"], editora: "Alta Books", genero: 3, quantidade: 6, ano: 2009, capa: "/capas/es-codigo-limpo.png" },
  { id: "es-arquitetura-limpa", titulo: "Arquitetura Limpa", autores: ["Robert C. Martin"], editora: "Alta Books", genero: 3, quantidade: 0, ano: 2019, capa: "/capas/es-arquitetura-limpa.png" },
  { id: "es-programador-pratico", titulo: "O Programador Prático", autores: ["Andrew Hunt", "David Thomas"], editora: "Bookman", genero: 3, quantidade: 11, ano: 2010, capa: "/capas/es-programador-pratico.png" },
  { id: "es-padroes-projeto", titulo: "Padrões de Projeto", autores: ["Erich Gamma", "Richard Helm", "Ralph Johnson", "John Vlissides"], editora: "Bookman", genero: 3, quantidade: 3, ano: 2000, capa: "/capas/es-padroes-projeto.png" },
  { id: "es-refatoracao", titulo: "Refatoração: Aperfeiçoando o Design de Códigos Existentes", autores: ["Martin Fowler"], editora: "Novatec", genero: 3, quantidade: 2, ano: 2019, capa: "/capas/es-refatoracao.png" },
  { id: "es-tdd", titulo: "TDD: Desenvolvimento Guiado por Testes", autores: ["Kent Beck"], editora: "Bookman", genero: 3, quantidade: 4, ano: 2010, capa: "/capas/es-tdd.png" },
  { id: "es-use-a-cabeca-padroes", titulo: "Use a Cabeça! Padrões de Projetos", autores: ["Eric Freeman", "Elisabeth Robson"], editora: "Alta Books", genero: 3, quantidade: 0, ano: 2007, capa: "/capas/es-use-a-cabeca-padroes.png" },
  { id: "es-ddd", titulo: "Domain-Driven Design", autores: ["Eric Evans"], editora: "Alta Books", genero: 3, quantidade: 2, ano: 2016, capa: "/capas/es-ddd.png" },
  { id: "es-scrum", titulo: "Scrum: A Arte de Fazer o Dobro do Trabalho na Metade do Tempo", autores: ["Jeff Sutherland"], editora: "Leya", genero: 3, quantidade: 5, ano: 2016, capa: "/capas/es-scrum.png" },
  { id: "es-uml-essencial", titulo: "UML Essencial", autores: ["Martin Fowler"], editora: "Bookman", genero: 3, quantidade: 3, ano: 2005, capa: "/capas/es-uml-essencial.png" },
  { id: "es-mitico-homem-mes", titulo: "O Mítico Homem-Mês", autores: ["Frederick P. Brooks Jr."], editora: "Alta Books", genero: 3, quantidade: 1, ano: 2018, capa: "/capas/es-mitico-homem-mes.png" },
  { id: "es-entrega-continua", titulo: "Entrega Contínua", autores: ["Jez Humble", "David Farley"], editora: "Bookman", genero: 3, quantidade: 2, ano: 2014, capa: "/capas/es-entrega-continua.png" },
  { id: "es-agil-csharp", titulo: "Princípios, Padrões e Práticas Ágeis em C#", autores: ["Robert C. Martin", "Micah Martin"], editora: "Bookman", genero: 3, quantidade: 0, ano: 2008, capa: "/capas/es-agil-csharp.png" },

  // Algoritmos
  { id: "alg-cormen", titulo: "Algoritmos: Teoria e Prática", autores: ["Thomas H. Cormen", "Charles E. Leiserson", "Ronald L. Rivest", "Clifford Stein"], editora: "Elsevier", genero: 4, quantidade: 2, ano: 2012, capa: "/capas/alg-cormen.png" },
  { id: "alg-goodrich", titulo: "Estruturas de Dados e Algoritmos em Java", autores: ["Michael T. Goodrich", "Roberto Tamassia"], editora: "Bookman", genero: 4, quantidade: 3, ano: 2013, capa: "/capas/alg-goodrich.png" },
  { id: "alg-bhargava", titulo: "Entendendo Algoritmos", autores: ["Aditya Y. Bhargava"], editora: "Novatec", genero: 4, quantidade: 5, ano: 2017, capa: "/capas/alg-bhargava.png" },
  { id: "alg-ziviani", titulo: "Projeto de Algoritmos com Implementações em Java e C++", autores: ["Nivio Ziviani"], editora: "Cengage", genero: 4, quantidade: 2, ano: 2011, capa: "/capas/alg-ziviani.png" },
  { id: "alg-sedgewick", titulo: "Algorithms", autores: ["Robert Sedgewick", "Kevin Wayne"], editora: "Addison-Wesley", genero: 4, quantidade: 1, ano: 2011, capa: "/capas/alg-sedgewick.png" },
  { id: "alg-kleinberg", titulo: "Algorithm Design", autores: ["Jon Kleinberg", "Éva Tardos"], editora: "Pearson", genero: 4, quantidade: 0, ano: 2005, capa: "/capas/alg-kleinberg.png" },
  { id: "alg-szwarcfiter", titulo: "Estruturas de Dados e Seus Algoritmos", autores: ["Jayme L. Szwarcfiter", "Lilian Markenzon"], editora: "LTC", genero: 4, quantidade: 3, ano: 2010, capa: "/capas/alg-szwarcfiter.png" },
  { id: "alg-skiena", titulo: "The Algorithm Design Manual", autores: ["Steven S. Skiena"], editora: "Springer", genero: 4, quantidade: 2, ano: 2008, capa: "/capas/alg-skiena.png" },
  { id: "alg-dasgupta", titulo: "Algoritmos", autores: ["Sanjoy Dasgupta", "Christos Papadimitriou", "Umesh Vazirani"], editora: "AMGH", genero: 4, quantidade: 3, ano: 2009, capa: "/capas/alg-dasgupta.png" },
  { id: "alg-drozdek", titulo: "Estrutura de Dados e Algoritmos em C++", autores: ["Adam Drozdek"], editora: "Cengage", genero: 4, quantidade: 1, ano: 2016, capa: "/capas/alg-drozdek.png" },
  { id: "alg-feofiloff", titulo: "Algoritmos em Linguagem C", autores: ["Paulo Feofiloff"], editora: "Elsevier", genero: 4, quantidade: 4, ano: 2009, capa: "/capas/alg-feofiloff.png" },
  { id: "alg-knuth-1", titulo: "The Art of Computer Programming, Volume 1", autores: ["Donald E. Knuth"], editora: "Addison-Wesley", genero: 4, quantidade: 1, ano: 1997, capa: "/capas/alg-knuth-1.png" },

  // Circuitos
  { id: "circ-boylestad", titulo: "Introdução à Análise de Circuitos", autores: ["Robert L. Boylestad"], editora: "Pearson", genero: 5, quantidade: 3, ano: 2012, capa: "/capas/circ-boylestad.png" },
  { id: "circ-sadiku", titulo: "Fundamentos de Circuitos Elétricos", autores: ["Charles K. Alexander", "Matthew N. O. Sadiku"], editora: "AMGH", genero: 5, quantidade: 2, ano: 2013, capa: "/capas/circ-sadiku.png" },
  { id: "circ-nilsson", titulo: "Circuitos Elétricos", autores: ["James W. Nilsson", "Susan A. Riedel"], editora: "Pearson", genero: 5, quantidade: 1, ano: 2016, capa: "/capas/circ-nilsson.png" },
  { id: "circ-sedra", titulo: "Microeletrônica", autores: ["Adel S. Sedra", "Kenneth C. Smith"], editora: "Pearson", genero: 5, quantidade: 4, ano: 2007, capa: "/capas/circ-sedra.png" },
  { id: "circ-boylestad-disp", titulo: "Dispositivos Eletrônicos e Teoria de Circuitos", autores: ["Robert L. Boylestad", "Louis Nashelsky"], editora: "Pearson", genero: 5, quantidade: 3, ano: 2013, capa: "/capas/circ-boylestad-disp.png" },
  { id: "circ-malvino-1", titulo: "Eletrônica, Volume 1", autores: ["Albert Malvino", "David J. Bates"], editora: "AMGH", genero: 5, quantidade: 2, ano: 2016, capa: "/capas/circ-malvino-1.png" },
  { id: "circ-irwin", titulo: "Análise Básica de Circuitos para Engenharia", autores: ["J. David Irwin", "R. Mark Nelms"], editora: "LTC", genero: 5, quantidade: 1, ano: 2013, capa: "/capas/circ-irwin.png" },
  { id: "circ-tocci", titulo: "Sistemas Digitais: Princípios e Aplicações", autores: ["Ronald J. Tocci", "Neal S. Widmer", "Gregory L. Moss"], editora: "Pearson", genero: 5, quantidade: 4, ano: 2011, capa: "/capas/circ-tocci.png" },
  { id: "circ-horowitz", titulo: "A Arte da Eletrônica", autores: ["Paul Horowitz", "Winfield Hill"], editora: "Bookman", genero: 5, quantidade: 1, ano: 2017, capa: "/capas/circ-horowitz.png" },
  { id: "circ-floyd-dispositivos", titulo: "Dispositivos Eletrônicos", autores: ["Thomas L. Floyd"], editora: "Bookman", genero: 5, quantidade: 3, ano: 2008, capa: "/capas/circ-floyd-dispositivos.png" },
  { id: "circ-oppenheim", titulo: "Sinais e Sistemas", autores: ["Alan V. Oppenheim", "Alan S. Willsky", "S. Hamid Nawab"], editora: "Pearson", genero: 5, quantidade: 2, ano: 2010, capa: "/capas/circ-oppenheim.png" },
  { id: "circ-haykin", titulo: "Sinais e Sistemas", autores: ["Simon Haykin", "Barry Van Veen"], editora: "Bookman", genero: 5, quantidade: 1, ano: 2001, capa: "/capas/circ-haykin.png" },
  { id: "circ-razavi", titulo: "Fundamentos de Microeletrônica", autores: ["Behzad Razavi"], editora: "LTC", genero: 5, quantidade: 1, ano: 2010, capa: "/capas/circ-razavi.png" },
  { id: "circ-rashid", titulo: "Eletrônica de Potência", autores: ["Muhammad H. Rashid"], editora: "Pearson", genero: 5, quantidade: 4, ano: 2014, capa: "/capas/circ-rashid.png" },

  // Redes e Sistemas
  { id: "rs-tanenbaum-redes", titulo: "Redes de Computadores", autores: ["Andrew S. Tanenbaum", "David J. Wetherall"], editora: "Pearson", genero: 6, quantidade: 3, ano: 2011, capa: "/capas/rs-tanenbaum-redes.png" },
  { id: "rs-kurose", titulo: "Redes de Computadores e a Internet", autores: ["James F. Kurose", "Keith W. Ross"], editora: "Pearson", genero: 6, quantidade: 5, ano: 2013, capa: "/capas/rs-kurose.png" },
  { id: "rs-tanenbaum-so", titulo: "Sistemas Operacionais Modernos", autores: ["Andrew S. Tanenbaum", "Herbert Bos"], editora: "Pearson", genero: 6, quantidade: 2, ano: 2016, capa: "/capas/rs-tanenbaum-so.png" },
  { id: "rs-stallings-cripto", titulo: "Criptografia e Segurança de Redes", autores: ["William Stallings"], editora: "Pearson", genero: 6, quantidade: 2, ano: 2015, capa: "/capas/rs-stallings-cripto.png" },
  { id: "rs-forouzan", titulo: "Comunicação de Dados e Redes de Computadores", autores: ["Behrouz A. Forouzan"], editora: "AMGH", genero: 6, quantidade: 3, ano: 2010, capa: "/capas/rs-forouzan.png" },
  { id: "rs-silberschatz", titulo: "Fundamentos de Sistemas Operacionais", autores: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"], editora: "LTC", genero: 6, quantidade: 4, ano: 2015, capa: "/capas/rs-silberschatz.png" },
  { id: "rs-stallings-arq", titulo: "Arquitetura e Organização de Computadores", autores: ["William Stallings"], editora: "Pearson", genero: 6, quantidade: 1, ano: 2010, capa: "/capas/rs-stallings-arq.png" },
  { id: "rs-comer", titulo: "Redes de Computadores e Internet", autores: ["Douglas E. Comer"], editora: "Bookman", genero: 6, quantidade: 1, ano: 2016, capa: "/capas/rs-comer.png" },
  { id: "rs-coulouris", titulo: "Sistemas Distribuídos: Conceitos e Projeto", autores: ["George Coulouris", "Jean Dollimore", "Tim Kindberg", "Gordon Blair"], editora: "Bookman", genero: 6, quantidade: 2, ano: 2013, capa: "/capas/rs-coulouris.png" },
  { id: "rs-tanenbaum-org", titulo: "Organização Estruturada de Computadores", autores: ["Andrew S. Tanenbaum", "Todd Austin"], editora: "Pearson", genero: 6, quantidade: 3, ano: 2013, capa: "/capas/rs-tanenbaum-org.png" },
  { id: "rs-patterson-hennessy", titulo: "Organização e Projeto de Computadores", autores: ["David A. Patterson", "John L. Hennessy"], editora: "LTC", genero: 6, quantidade: 1, ano: 2014, capa: "/capas/rs-patterson-hennessy.png" },
  { id: "rs-peterson", titulo: "Redes de Computadores: Uma Abordagem de Sistemas", autores: ["Larry L. Peterson", "Bruce S. Davie"], editora: "Elsevier", genero: 6, quantidade: 2, ano: 2013, capa: "/capas/rs-peterson.png" },
  { id: "rs-tanenbaum-distribuidos", titulo: "Sistemas Distribuídos: Princípios e Paradigmas", autores: ["Andrew S. Tanenbaum", "Maarten van Steen"], editora: "Pearson", genero: 6, quantidade: 4, ano: 2008, capa: "/capas/rs-tanenbaum-distribuidos.png" },
];