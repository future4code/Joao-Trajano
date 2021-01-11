// -=-=-=-=-=-= Exercícios de Lógica de Programação -=-=-=-=-=-= //
//Exercício 1
 /* 
    Uma lista geralmente é percorrida por uma estrura de repetição, como: `for`, `while` e `do while`.
    A diferença entre o while e do while, o while ele testa a condição primeiro, e o do while testa depois.

    Exemplo usando o `for`:

        var listaDeNumerosExemplo = [0,1,2,3,4,5,6,7,8,9];
        
        for (i = 0; i < listaDeNumerosExemplo.length; i++)
        {
            console.log(listaDeNumerosExemplo[i]);
        }
    
    Exemplo usando o `while`:

        var listaDeNumerosExemplo = [0,1,2,3,4,5,6,7,8,9];
        var i = 0;

        while (i < listaDeNumerosExemplo.length)
        {
            console.log(listaDeNumerosExemplo[i]);
            i++; // ou  i = i + 1;

        }

    Exemplo usando o `do while`

        var listaDeNumerosExemplo = [0,1,2,3,4,5,6,7,8,9];
        var i = 0;

        do{
            console.log(listaDeNumerosExemplo[i]);
            i++; // ou  i = i + 1;

        } while (i < listaDeNumerosExemplo.length)
 */

//Exercício 2
 /* 
        a) false
        b) false
        c) true
        d) true
        e) true
 */

//Exercício 3
  /* 
        O bloco de código está errado, pois ao executar o código, irá da um erro de sintaxe, porque uma
        constante precisa ser inicializada com algum valor. Tem um outro erro: mesmo inicializando a constante,
        irá ter um looping infinito, porque `i` sempre será menor que `quantidadeDeNumerosPares` e ainda irá 
        imprimir sempre 0 no console.

        Bloco de código errado:

            const quantidadeDeNumerosPares
            let i = 0
            while(i <= quantidadeDeNumerosPares) {
                console.log(i*2)
            }
        
        Bloco de código corrigido:
            
            const quantidadeDeNumerosPares = 3; //ou qualquer número do exemplo do exercício.
            let i = 0;

            while(i < quantidadeDeNumerosPares) 
            {
                console.log(i*2);
                i++; 
            }  
  */
//Exercício 4
/* 
    arrayMedidasLadoDoTriangulo = [];

    function mostrarTipoTriangulo(arrayMedidasLadoDoTriangulo)
    {
        var qtdeLadosIguais = 1;

        for (i = 0; i < arrayMedidasLadoDoTriangulo.length; i++)
        {
            if(arrayMedidasLadoDoTriangulo[i] == arrayMedidasLadoDoTriangulo[i+1])
            {
                qtdeLadosIguais++;
            }
        }

        switch(qtdeLadosIguais)
        {
            case 1: alert("O triângulo é Escaleno.");
            break;

            case 2: alert("O triângulo é Isósceles.");
            break;

            case 3: alert("O triângulo é Equilátero.");
            break;
        }
    }

    for (i = 0; i < 3; i++){
        arrayMedidasLadoDoTriangulo.push(Number(prompt("Insira o " + Number(i+1) + " lado do triângulo.")));
    }

    mostrarTipoTriangulo(arrayMedidasLadoDoTriangulo);

*/

//Exercício 5
/* 
    numero1 = Number(prompt("Insira o PRIMEIRO número."));
    numero2 = Number(prompt("Insira o SEGUNDO número."));
    var flagNumeroMaior = 0;

    if(numero1 > numero2){
        console.log("O maior é: " + numero1);
    }else {
        console.log("O maior é: " + numero2);
        flagNumeroMaior = 1;
    }

    if(numero1 % numero2 == 0){
        console.log(numero1 + " é divisível por " + numero2);
    }else if(numero2 % numero1 == 0){
        console.log(numero2 + " é divisível por " + numero1);
    }
    else {
        console.log("Nenhum número é divisível por outro");
    }

    if(flagNumeroMaior){
        console.log("A diferença entre eles é: " + Number(numero2 - numero1));
    }else {
        console.log("A diferença entre eles é: " + Number(numero1 - numero2));
    }
*/