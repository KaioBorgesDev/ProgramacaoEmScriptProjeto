import React, { useState } from 'react';

const perguntas = [
  {
    id: 1,
    pergunta: "Seu animal é mamífero?",
    opcoes: [
      { resposta: "Não", proximaPergunta: 2 },
      { resposta: "Sim", proximaPergunta:  3}
    ]
  },
  {
    id: 3,
    pergunta: "Seu animal é quadrúpede?",
    opcoes: [
      { resposta: "Não", proximaPergunta: 3128},
      { resposta: "Sim", proximaPergunta:  31}
    ]
  },
  {
  id: 31,
  pergunta: "Seu animal é um canívoro?",
  opcoes: [
    { resposta: "Não", proximaPergunta: 312},
    { resposta: "Sim", proximaPergunta:  311}
    ]
   },
    {
        id: 311,
        pergunta: "Você pensou no leão!",
        opcoes: [
          { resposta: "", proximaPergunta: 0},
          { resposta: "", proximaPergunta: 0}
        ]
    },
    {
        id: 312,
        pergunta: "Seu animal é um herbívo?",
        opcoes: [
            { resposta: "Não", proximaPergunta: 1},
            { resposta: "Sim", proximaPergunta:  313}
            ]
    },
    {
        id: 313,
        pergunta: "Você pensou em um cavalo!",
        opcoes: [
            { resposta: "", proximaPergunta: 0},
            { resposta: "", proximaPergunta: 0}
            ]
    },
    {
        id: 3128,
        pergunta: "Seu animal é bípede?",
        opcoes: [
            { resposta: "Não", proximaPergunta: 356},
            { resposta: "Sim", proximaPergunta:  3123}
            ]
    },
    {
        id: 3123,
        pergunta: "Seu animal é onívoro?",
        opcoes: [
            { resposta: "Não", proximaPergunta: 23},
            { resposta: "Sim", proximaPergunta:  314}
            ]
    },
    {
        id: 311,
        pergunta: "Voce pensou em um humano!",
        opcoes: [
            { resposta: "", proximaPergunta: 0},
            { resposta: "", proximaPergunta: 0}
            ]
    },
    {
        id: 314,
        pergunta: "Seu animal é frutívoro?",
        opcoes: [
            { resposta: "Não", proximaPergunta: 1},
            { resposta: "Sim", proximaPergunta:  3145}
            ]
    },
    {
        id: 3145,
        pergunta: "Você pensou em um macaco!",
        opcoes: [
            { resposta: "", proximaPergunta: 0},
            { resposta: "", proximaPergunta: 0}
            ]
    },
    {
        id: 356,
        pergunta: "Seu animal é voador?",
        opcoes: [
            { resposta: "Não", proximaPergunta: 357},
            { resposta: "Sim", proximaPergunta:  237}
            ]
    },
    {
        id: 237,
        pergunta: "Você pensou em um morcego!",
        opcoes: [
            { resposta: "", proximaPergunta: 0},
            { resposta: "", proximaPergunta: 0}
            ]
    },
    {
        id: 357,
        pergunta: "Seu animal é aquático?",
        opcoes: [
            { resposta: "Não", proximaPergunta: 23},
            { resposta: "Sim", proximaPergunta:  234}
            ]
    },
    {
        id: 237,
        pergunta: "Você pensou em uma baleia!",
        opcoes: [
            { resposta: "", proximaPergunta: 0},
            { resposta: "", proximaPergunta: 0}
            ]
    },
    {
    id: 2,
    pergunta: "Seu animal é uma ave?",
    opcoes: [
      { resposta: "Não", proximaPergunta: 4 },
      { resposta: "Sim", proximaPergunta: 5 }
    ]
  },
  {
    id: 3,
    pergunta: "Seu animal é um reptil?",
    opcoes: [
        { resposta: "Não", proximaPergunta: 4 },
        { resposta: "Sim", proximaPergunta: 7 }
    ]
  },
  {
    id: 4,
    pergunta: "Seu animal é um amfíbio?",
    opcoes: [
        { resposta: "Não", proximaPergunta: 8 },
        { resposta: "Sim", proximaPergunta: 7 }
    ]
  },
  {
    id: 8,
    pergunta: "Seu animal é um Peixe!",
    opcoes: [
        { resposta: "Acabou!", proximaPergunta: 0 },
        { resposta: "", proximaPergunta: 0 }
    ]
  },
  
  // Adicione mais perguntas conforme necessário
];



export default function Form() {
  const [perguntaAtual, setPerguntaAtual] = useState(1);
  const [respostas, setRespostas] = useState({});

  const handleResposta = (resposta, proximaPergunta) => {
    // Atualiza o estado das respostas
    setRespostas({ ...respostas, [perguntaAtual]: resposta });

    // Avança para a próxima pergunta
    setPerguntaAtual(proximaPergunta);
  };

  const renderizaPergunta = () => {
    const pergunta = perguntas.find(p => p.id === perguntaAtual);

    if (!pergunta) {
      return <p>Questionário concluído.</p>;
    }
    

    return (
      <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
        
        <h3>Pergunta {pergunta.id}</h3>
        <p>{pergunta.pergunta}</p>
        
        <div className="btn-group" role="group">

        {pergunta.opcoes.map(opcao => (
            <button
              key={opcao.resposta}
              onClick={() => handleResposta(opcao.resposta, opcao.proximaPergunta)}
              className="btn btn-success"
            >
              {opcao.resposta}
            </button>
          ))}
        </div>
       

       {/*
        
        
          {pergunta.opcoes.map(opcao => (
            <button
              key={opcao.resposta}
              onClick={() => handleResposta(opcao.resposta, opcao.proximaPergunta)}
              className="btn btn-primary"
            >
              {opcao.resposta}
            </button>
          ))}
       
        */}
      </div>
    );
  };

  return (
    <div>
      
      {renderizaPergunta()}
    </div>
  );
}
