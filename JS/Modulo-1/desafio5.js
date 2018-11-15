/*
$$ 5º exercício
Dado o seguinte vetor de objetos:
var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];
Escreva uma função que produza o seguinte resultado:
O Diego possui as habilidades: Javascript, ReactJS, Redux
O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir

*/

var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];


habilidade = (objeto) => {
  for (let pessoa of objeto) {
    console.log(`O ${pessoa.nome} possui as habilidades: ${pessoa.habilidades}`);
  }
};

habilidade(usuarios);
