import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImgagemJoao from './components/img/eu.jpeg';
import ImagemCnh from './components/img/cnh.png';
import ImagemWell from './components/img/well.jpg';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {

  return (
    <div className="App">

      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={ImgagemJoao} 
          nome="João Trajano de Souza Neto" 
          descricao="Oi, meu nome é João Trajano, tenho 22 anos, sou técnico em informática formando pela 
          ETEC Fernando Prestes. Estou quase me formando em análise e desenvolvimento de sistemas, pela FATEC de Itu.
          Recentemente, fui efetivado como programador PHP, mas procuro atualmente mais oportunidades para novos desafios e experiências.
          Consegui um grande feito recentemente, foi ter tirado 9.50 no meu TCC, cujo o tema foi Análise de Dados aplicado ao Marketing, 
          aplicando técnicas de análise de dados e algoritmos de machine learning. Nas horas livres, jogo xadrez, leio livros, toco violão e estudo.
          Procuro passar tempo com a minha namorada também, tendo em vista que pretendo me casar com ela um dia."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />

        <CardGrande 
          imagem={ImagemWell} 
          nome="WELL Internet" 
          descricao="Programador PHP
          Nome da empresaWell Internet Estágio
          Período do empregonov. de 2019 – o momento
          Duração1 ano 2 meses
          LocalidadeSorocaba, São Paulo, Brasil" 
        />
     

        <CardGrande 
          imagem={ImagemCnh} 
          nome="Case New Holland" 
          descricao="Auxiliar administrativo
          Nome da empresaCNH Industrial
          Período do empregoset. de 2014 – out. de 2015
          Duração1 ano 2 meses
          LocalidadeÉden - Sorocaba
          Trabalhava como jovem aprendiz na empresa CNH Industrial na área de Segurança do Trabalho, executando tarefas como Auxiliar Administrativo." 
        />
       </div>
      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>

      <div className="page-section-container">
        <CardPequeno email="joao.trajanosouza@gmail.com"/>
      </div>

    </div>
  );
}

export default App;
