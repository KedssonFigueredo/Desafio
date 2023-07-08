function noRepeat(palavra){

    resultado="";
  

    for (let i = 0; i <= palavra.length; i++) {
        for (let j = i+1; j <= palavra.length ; j++) {
            if(palavra[i] === palavra[j]){
                    resultado += palavra[i];
           
            }else{
                resultado += palavra[i];
            }
        }
    }
    console.log(resultado);
}

noRepeat('teste');