// Lista de Exercícios 

// -=-=-=-=-=-= Exercícios de Interpretação de código -=-=-=-=-=-= //
// Exercício 1: 
/*
        Ao ler o nome da função e o nome do parâmetro da mesma,
    entede-se que o código, converta qualquer valor em decimal que seja em dolar, para real.

        A função recebe como parâmetro o valor em dolar, em seguida, é chamado a função `prompt` 
    , esperando um valor do usuário. Logo em seguinda, o valor fornecido pelo usuário 
    é convertido de string para tipo number, para executar operações.

        No bloco de código seguinte, é retornado o valor da conversão, multiplicado pela cotação atual dolar.

        Ao finalizar a declarão da função, a mesma é chamada recebendo como parâmetro o valor `100` e guardado
    o valor retornado na variável `meuDinheiro`, logo em seguida é impresso no console.

*/

// Exercício 2: 
/*
        A função permite escolher o tipo de investimento, como primeiro parâmetro e o valor a ser investido,
    como segundo parâmetro.
        Para a função saber qual foi o investimento escolhido, é usado a estrutura condicional switch case
    para multiplicar o valor passado como segundo parêmetro de acordo com o investimento

*/

// Exercício 3: 
/*
            Resumidamente, este bloco de código está filtrando numeros ímpares e pares, organizados em arrays 
        (array1 usado para guarda números pares e array2, usado para guarda números ímpares).

            Todos os números estão num array. Logo, esses números são acessados através da estutura de repetição
        For. Para idenitificar se o número é par, é usado o módulo, onde retorna o resto da divisão. 

            Se o resto da divisçao for zero, o número é par, caso contrário o número é ímpar.

            Idenitificado o número, é inserido o número através do método ´push´

*/

// Exercício 4: 
/*
    Este bloco de código, mostra o menor número e o maior número no array.
*/

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

// -=-=-=-=-=-= Exercícios de Funções -=-=-=-=-=-= //
//Exercício 1
/*
    var numeros = [];

    for (i = 0; i < 10; i++) {
    numeros.push(Math.floor(Math.random() * 100));
    }

    segundoMenorNumero = Infinity;
    segundoMaiorNumero = 0;

    arrayMaiorNumero = [];
    arrayMenorNumero = [];

    for(let numero of numeros)
    {
        if(numero > segundoMaiorNumero){
            segundoMaiorNumero = numero;
            arrayMaiorNumero.push(segundoMaiorNumero);
        }

        if(numero < segundoMenorNumero){
            segundoMenorNumero = numero;
            arrayMenorNumero.push(segundoMenorNumero);
        }
    }

    if(arrayMaiorNumero.length == 1){
        console.log("Segundo maior numero: " + arrayMaiorNumero[0]);
    }else{
        console.log("Segundo maior numero: " + arrayMaiorNumero[(arrayMaiorNumero.length - 1) - 1]);
    }

    if(arrayMenorNumero.length == 1){
        console.log("Segundo menor numero: " + arrayMenorNumero[0]);
    }else{
        console.log("Segundo menor numero: " + arrayMenorNumero[(arrayMenorNumero.length - 1) - 1]);
    }
*/

//Exercício 2
/*
    funcaoHelloFuture4 = (mensagem) => {
        alert(mensagem);
    }

    funcaoHelloFuture4('Hello Future4');
*/

// -=-=-=-=-=-= Exercícios de Objetos -=-=-=-=-=-= //
//Exercício 1
/*
    Arrays é uma estrtura de dados que guarda uma coleção de dados.
    Objeto é também uma estrutura de dados, que serve também para guarda uma coleção de dados.

    Devemos usar objetos, afim de utilizar a abstração do mundo real, para as regras de negócio. O objeto
    é o resultado da instância de uma classe, que pode ser um objeto da vida real, como por exemplo, uma caneta.

    Arrays, podemos utilizar para guardar N quatidade de dados, afim de tratar da melhor maneira esses dados. 
*/

// Exercício 2
/*
    function criaRetangulo(lado1, lado2)
    {
        retangulo = {
            largura: lado1,
            altura: lado2,
            perimetro: 2 * (lado1 + lado2),
            area: lado1 * lado2
        };

        return retangulo
    }
    console.log(criaRetangulo(2,2));
*/

// Exercício 3
/*
    avatar = {
        titulo: "Avatar",
        ano: 2009,
        diretor: "James Cameron",
        atores: ["Sam Worthington", "Stephen Lang"],
        atrizes: ["Zoë Saldaña", "Sigourney Weaver"]

    };

    console.log("Venha assistir ao filme " 
    + avatar.titulo + ", de " + avatar.ano + ", dirigido por " + avatar.diretor + 
    " e estrelado por " + avatar.atores + avatar.atrizes);
*/

// Exercício 4
/*
    pessoa = {
        nome: "Pessoa Fênix",
        idade: 35, // não faço ideia da idade
        email: "fenixinho.pessoa@gmail.com",
        endereco: "Rua mundo passáro, número 49"
    };

    function anonimizarPessoa(){
        pessoaAnonima = {
            nome: "ANÔNIMO",
            idade: 35, // não faço ideia da idade
            email: "fenixinho.pessoa@gmail.com",
            endereco: "Rua mundo passáro, número 49"
        };

        return pessoaAnonima
    } 
*/

// -=-=-=-=-=-= Exercícios de Funções de array -=-=-=-=-=-= //

//Exercício 1
/*
    a)
        pessoas = [
            { nome: "Pedro", idade: 20 },
            { nome: "João", idade: 10 },
            { nome: "Paula", idade: 12 },
            { nome: "Artur", idade: 89 } 
        ]

        funtion retornarAdulto(pessoas)
        {
            adultos = [];

            for (let pessoa of pessoas)
            {
                if(pessoa.idade >= 20)
                {
                    adultos.push(pessoa);
                }  
            }

            return adultos;
        }

        retornarAdulto(pessoas);

    b)
        criancaAdolescente = []

        funtion retornarCriancaAdolescente(pessoas)
        {
            for (let pessoa of pessoas)
            {
                if(pessoa.idade < 20)
                {
                    criancaAdolescente.push(pessoa);
                }  
            }
        }
        retornarCriancaAdolescente(pessoas)

         
*/
//Exercício 2
//const array = [1, 2, 3, 4, 5, 6]

/* 
    a)
        function multiplosPorDois(array)
        {
            arrayMultiploDeDois = [];

            for(let numero of array)
            {
                arrayMultiploDeDois.push(Number(numero * 2));
            }

            return arrayMultiploDeDois
        }

        console.log(multiplosPorDois(array));

    b)
        function multiplosPorTresString(array)
        {
            arrayMultiploDeTresString = [];

            for(let numero of array)
            {
                arrayMultiploDeTresString.push(String(numero * 3));
            }

            return arrayMultiploDeTresString
        }

        console.log(multiplosPorTresString(array));

    c)
        function retornaParOuImpar(array)
        {
            arrayImparOuPar = [];

            for(let numero of array)
            {
                if(numero % 2 == 0){
                    numeroString = numero + " é par.";
                }else {
                    numeroString = numero + " é ímpar.";
                }
                arrayImparOuPar.push(numeroString);
            }

            return arrayImparOuPar
        }

        console.log(retornaParOuImpar(array));
*/
//Exercício 3
/*const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
] */
/*
    a)
        function pessoasPermitidasMontanhaRussa(pessoas)
        {
            pessoasPermitidas = [];

            for(let pessoa of pessoas){
                if(pessoa.altura >= 1.5 && (pessoa.idade >= 14 && pessoa.idade <= 60))
                {
                    pessoasPermitidas.push(pessoa);
                }
            }
        
            return pessoasPermitidas
        }

        console.log(pessoasPermitidasMontanhaRussa(pessoas));

    b)
        function pessoasNaoPermitidasMontanhaRussa(pessoas)
        {
            pessoasNaoPermitidas = [];

            for(let pessoa of pessoas){
                if(!(pessoa.altura >= 1.5 && (pessoa.idade >= 14 && pessoa.idade <= 60)))
                {
                    pessoasNaoPermitidas.push(pessoa);
                }
            }
        
            return pessoasNaoPermitidas
        }

        console.log(pessoasNaoPermitidasMontanhaRussa(pessoas));
*/

// Exercício 4
/*
    const consultas = [
        { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
        { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
        { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
        { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
    ]

    arrayEmail = [];

    for(let consulta of consultas ){
        var textoConsulta = "";
        
        if(consulta.cancelada)
        {
            textoConsulta = " Olá, Sr./Sra." + consulta.nome + ". Infelizmente, sua consulta marcada para o dia "
            + consulta.dataDaConsulta + " foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la"; 
        }else{
            textoConsulta = " Olá, Sr./Sra." 
            + consulta.nome + ". Estamos enviando esta mensagem para da sua consulta no dia"
            + consulta.dataDaConsulta + ". Por favor, acuse o recebimento deste e-mail.";
        }

        arrayEmail.push(textoConsulta);
    }

    console.log(arrayEmail);
*/

// Exercício 5

/* 
    const contas = [
        { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
        { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
        { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
        { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
        { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
        { cliente: "Soter", saldoTotal: 1200, compras: [] }
    ]

    function atualziarSaldo(contas)
    {
        for(let conta of contas)
        {
            var valortotalCompra = 0;

            for(let valor of conta.compras)
            {
                valortotalCompra += valor;
            }

            conta.saldoTotal = conta.saldoTotal - valortotalCompra;
        }
    }

    atualziarSaldo(contas);
    console.log(contas);
*/






