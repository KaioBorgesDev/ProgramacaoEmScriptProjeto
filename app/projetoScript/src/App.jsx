import React, { useState } from 'react';
import './App.css'
const perguntas = [
  {
    id: 1,
    pergunta: "Seu animal é mamífero?",
    opcoes: [
      { resposta: "Não", proximaPergunta: 2 },
      { resposta: "Sim", proximaPergunta: 1.1 }
    ]
  },
  {
    id: 1.1,
    pergunta: "Seu animal é quadrúpede?",
    opcoes: [
      { resposta: "Não", proximaPergunta: 1.2},
      { resposta: "Sim", proximaPergunta: 1.11}
    ]
  },
  {
  id: 1.11,
  pergunta: "Seu animal é um canívoro?",
  opcoes: [
    { resposta: "Não", proximaPergunta: 1.12},
    { resposta: "Sim", proximaPergunta: 1.111}
    ]
   },
    {
        id: 1.111,
        pergunta: "Você pensou no leão!",
        opcoes: [
          { resposta: "", proximaPergunta: 0},
          { resposta: "", proximaPergunta: 0}
        ]
    },
    {
        id: 1.12,
        pergunta: "Seu animal é um herbívo?",
        opcoes: [
            { resposta: "Não", proximaPergunta: 1},
            { resposta: "Sim", proximaPergunta: 1.112}
            ]
    },
    {
        id: 1.112,
        pergunta: "Você pensou em um cavalo!",
        opcoes: [
            { resposta: "", proximaPergunta: 0},
            { resposta: "", proximaPergunta: 0}
            ]
    },
    {
        id: 1.2,
        pergunta: "Seu animal é bípede?",
        opcoes: [
            { resposta: "Não", proximaPergunta: 1.1},
            { resposta: "Sim", proximaPergunta: 1.21}
            ]
    },
    {
        id: 1.21,
        pergunta: "Seu animal é onívoro?",
        opcoes: [
            { resposta: "Não", proximaPergunta: 1.22},
            { resposta: "Sim", proximaPergunta: 1.221}
            ]
    },
    {
        id: 1.221,
        pergunta: "Voce pensou em um humano!",
        opcoes: [
            { resposta: "", proximaPergunta: 0},
            { resposta: "", proximaPergunta: 0}
            ]
    },
    {
        id: 1.22,
        pergunta: "Seu animal é frutívoro?",
        opcoes: [
            { resposta: "Não", proximaPergunta: 1.21},
            { resposta: "Sim", proximaPergunta: 1.211}
            ]
    },
    {
        id: 1.211,
        pergunta: "Você pensou em um macaco!",
        opcoes: [
            { resposta: "", proximaPergunta: 0},
            { resposta: "", proximaPergunta: 0}
            ]
    },
    {
        id: 2.1,
        pergunta: "Seu animal é voador?",
        opcoes: [
            { resposta: "Não", proximaPergunta: 2.11},
            { resposta: "Sim", proximaPergunta:  2.2}
            ]
    },
    {
        id: 2371,
        pergunta: "Você pensou em um morcego!",
        opcoes: [
            { resposta: "", proximaPergunta: 0},
            { resposta: "", proximaPergunta: 0}
            ]
    },
    {
        id: 357,
        pergunta: "Seu animal  é aquático?",
        opcoes: [
            { resposta: "Não", proximaPergunta: 1},
            { resposta: "Sim", proximaPergunta:  237}
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
      { resposta: "Não", proximaPergunta: 3 },
      { resposta: "Sim", proximaPergunta: 2.1 }
    ]
  },
  {
    id: 411,
    pergunta: "Seu animal é uma ave voadora?",
    opcoes: [
      { resposta: "Não", proximaPergunta: 567 },
      { resposta: "Sim", proximaPergunta: 568 }
    ]
  },
  {
    id: 2.11,
    pergunta: "Seu animal é uma tropical?",
    opcoes: [
      { resposta: "Não", proximaPergunta: 2.12 },
      { resposta: "Sim", proximaPergunta: 2.111 }
    ]
  },
  {
    id: 2.111,
    pergunta: "Seu animal é um Avestruz!",
    opcoes: [
      { resposta: "", proximaPergunta: 0 },
      { resposta: "", proximaPergunta: 0 }
    ]
  },
  {
    id: 2.12,
    pergunta: "Seu animal é uma polar?",
    opcoes: [
      { resposta: "Não", proximaPergunta: 2.11 },
      { resposta: "Sim", proximaPergunta: 2.112 }
    ]
  },
  {
    id: 2.112,
    pergunta: "Seu animal é um pinguim!",
    opcoes: [
      { resposta: "", proximaPergunta: 0 },
      { resposta: "", proximaPergunta: 0 }
    ]
  },
  {
    id: 2.2,
    pergunta: "Seu animal é uma ave nadadora?",
    opcoes: [
      { resposta: "Não", proximaPergunta: 2.3 },
      { resposta: "Sim", proximaPergunta: 2.21 }
    ]
  },
  {
    id:2.21,
    pergunta: "Seu animal é um pato!",
    opcoes: [
      { resposta: "", proximaPergunta: 0 },
      { resposta: "", proximaPergunta: 0 }
    ]
  },
  {
    id: 2.3,
    pergunta: "Seu animal é uma ave de rapina?",
    opcoes: [
      { resposta: "Não", proximaPergunta: 2.32 },
      { resposta: "Sim", proximaPergunta: 2.31 }
    ]
  },
  {
    id: 2.31,
    pergunta: "Seu animal é uma águia!",
    opcoes: [
      { resposta: "", proximaPergunta: 0 },
      { resposta: "", proximaPergunta: 0 }
    ]
  },
  {
    id: 2.32,
    pergunta: "Seu animal é um pombo!",
    opcoes: [
      { resposta: "", proximaPergunta: 0 },
      { resposta: "", proximaPergunta: 0 }
    ]
  },
  {
    id: 3,
    pergunta: "Seu animal é um réptil?",
    opcoes: [
        { resposta: "Não", proximaPergunta: 1 },
        { resposta: "Sim", proximaPergunta: 3.1 }
    ]
  },
  {
    id: 3.1,
    pergunta: "Seu animal possui casco?",
    opcoes: [
        { resposta: "Não", proximaPergunta: 3.2 },
        { resposta: "Sim", proximaPergunta: 3.11 }
    ]
  },
  {
    id: 3.2,
    pergunta: "Seu animal é carnivoro?",
    opcoes: [
        { resposta: "Não", proximaPergunta: 3.3 },
        { resposta: "Sim", proximaPergunta: 3.21 }
    ]
  },
  {
    id: 3.3,
    pergunta: "Seu animal não tem pata?",
    opcoes: [
        { resposta: "Não", proximaPergunta: 3.1 },
        { resposta: "Sim", proximaPergunta: 3.31 }
    ]
  },
  {
    id: 3.11,
    pergunta: "Seu animal é marinho?",
    opcoes: [
        { resposta: "Não", proximaPergunta: 3.111 },
        { resposta: "Sim", proximaPergunta: 3.112 }
    ]
  },
  {
    id: 3.111,
    pergunta: "Seu animal é um jabuti!",
    opcoes: [
        { resposta: "", proximaPergunta: 0},
        { resposta: "", proximaPergunta: 0}
    ]
  },
  {
    id: 3.112,
    pergunta: "Seu animal é um tartaruga!",
    opcoes: [
        { resposta: "", proximaPergunta: },
        { resposta: "", proximaPergunta: }
    ]
  },
  {
    id: 4,
    pergunta: "Seu animal é um anfíbio!",
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
