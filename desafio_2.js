    //criando uma função
    function removerLetrasRepetidas(frase) {

        //criando variavel para guardar o resultado e um array para guardar as letras n repetidas 
        const letras = [];
        let novaFrase = "";
      
        //laço de repetição para percorrer a string e fazer a verificação
        for (let i = 0; i < frase.length; i++) {
            //usando o metodo tolowercase para as letras maiusculas e minisculas nao serem valores diferentes
          const letraAtual = frase[i].toLowerCase();
      
          //usando indexOf para verificar se a minha letras atual esta no array, caso nao esteja ela colocara 
          //essa letras no array e adicionara ela na variavel de resultado
          if (letras.indexOf(letraAtual) === -1) {
            letras.push(letraAtual);
            novaFrase += frase[i];
          }
        }
      
        return novaFrase;
      }
      
    //Exemplo pratico:
      const frase = "Hello, World!";
      const fraseSemRepeticao = removerLetrasRepetidas(frase);
      console.log(fraseSemRepeticao);