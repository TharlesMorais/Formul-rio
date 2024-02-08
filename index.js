const perguntas= [
  {
    pergunta: "Qual é o nome do café onde os personagens de Friends costumam se encontrar?",
    respostas: [
      "Central Perk",
      "Central Park Café",
      "Perk Central",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o nome do personagem interpretado por Jennifer Aniston?",
    respostas: [
      "Rachel Green",
      "Monica Geller",
      "Phoebe Buffay",
    ],
    correta: 0
  },
  {
    pergunta: "O que Ross sempre diz quando faz um erro?",
    respostas: [
      "Oops!",
      "My Bad!",
      "Oh no!",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a profissão de Chandler Bing?",
    respostas: [
      "Advogado",
      "Contador",
      "Publicitário",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome do peixe de estimação de Ross?",
    respostas: [
      "Goldie",
      "Nemo",
      "Wanda",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o sobrenome de Monica e Ross?",
    respostas: [
      "Geller",
      "Green",
      "Bing",
    ],
    correta: 0
  },
  {
    pergunta: "O que Joey sempre diz para se despedir?",
    respostas: [
      "See you later!",
      "How you doin'?",
      "Goodbye!",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a profissão de Phoebe Buffay?",
    respostas: [
      "Massagista",
      "Chef",
      "Música de rua",
    ],
    correta: 2
  },
  {
    pergunta: "O que é 'Unagi', de acordo com Ross?",
    respostas: [
      "Uma fruta exótica",
      "Um estado mental de paz",
      "Conhecimento total de artes marciais",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a nacionalidade de Janice, a ex-namorada irritante de Chandler?",
    respostas: [
      "Britânica",
      "Canadense",
      "Italiana",
    ],
    correta: 2
  },
];


const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas

for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for (let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta 
        
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }

        mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
    }


    quizItem.querySelector('dl').appendChild(dt)
  }



  quizItem.querySelector('dl dt').remove()

  quiz.appendChild(quizItem)
}