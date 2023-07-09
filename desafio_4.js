//criando um função
function inverterFrase(frase) {
    //usando o método split para separar e adicionar as palavas em um array
    frase = frase.split("");
    ////laço de repetição para percorrer a string e fazer a verificação
    for (let i = 0; i < frase.length; i++) {
        //deixando a primeira letra ja maiuscula
        frase[0] = frase[0].toUpperCase();
        //deixando a letra depois do ponto maiuscula
        if(frase[i] === "." || frase[i] === "!" || frase[i] === "?"){
            if(frase[i+1] != " "){
                frase[i+1] = frase[i+1].toUpperCase();
            }else{
                frase[i+2] = frase[i+2].toUpperCase();
            }
            
        }

    }

    //usando o método join para concatenar o array
    return frase.join("");
}

//Exemplo pratico:
console.log(inverterFrase("hello. how are you? i'm fine, thank you"));