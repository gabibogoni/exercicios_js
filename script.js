function distribuiCaractere() {
    //selecionar o valor digitado
    var caractere = document.getElementById("campo_entrada_caractere").value;
    //limpar campo de digitação
    //document.getElementById("campo_entrada_caractere").value = "";
    //limpar espaços em branco na extremidades da string
    caractere.trim();


    var ultimoDigito = caractere.substr(-1, 1);

    switch(ultimoDigito) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        //adicionar o caractere no campo referente a números
        document.getElementById("campo_numeros").value += ultimoDigito;
        break;
      default:
        //adicionar o caractere no campo referente a letras
        document.getElementById("campo_letras").value += ultimoDigito;

        /*podemos a partir do atributo .value setar valores, então nesse caso se entrar na condição de 
        que o caractere informado é um número nós vamos recuperar esse caractere e vamos atribui-lo como
        valor do campo, a mesma coisa caso não seja um número e por default caia no campo apenas_letras,
        assim vamos atribuir a esse o campo document.getElementById("campo_letras") o value caractere.
        o sinal de += está concatenando a atribuição, ele pega o valor atual e vai concatenar esse
        caractere juntamento com o valor atual,a o invés de sobrepor, ele concatena os valores. */
    }

  }