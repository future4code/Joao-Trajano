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






