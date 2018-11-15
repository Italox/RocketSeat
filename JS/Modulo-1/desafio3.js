/*
Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
e retorna um booleano true/false caso exista ou não.
*/

function temHabilidade(skills) {  
  return skills.indexOf("Javascript") >= 0 ? true : false
}
var skills = ["Javascript", "ReactJS", "Italo", "React Native"];
temHabilidade(skills); // true ou false
