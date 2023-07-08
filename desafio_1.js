//criando um função
function inverter(frase){
//usando o método split para separar e adicionar as palavas em um array passando como delimitador um espaço
  frase = frase.split(" ");
  //usando o método reverse para inverter a ordem do array
  frase = frase.reverse();
  //usando o método join para retornar uma string com o array ja invertido
  return frase.join(" ");
}

console.log(inverter("Hello, World! OpenAi is amazing"));