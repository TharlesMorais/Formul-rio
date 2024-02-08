const perguntas = [
    {
      pergunta: "Qual é a função do comando 'console.log()' em JavaScript?",
      respostas: [
        "Exibir uma mensagem de erro no console",
        "Imprimir uma mensagem no console",
        "Executar uma operação matemática",
      ],
      correta: 1
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "let = minhaVariavel;",
        "variable minhaVariavel;",
        "let minhaVariavel;",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Um tipo de dado primitivo",
        "Uma biblioteca popular",
        "Uma representação da estrutura da página web",
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de dado",
        "Um bloco de código reutilizável",
        "Um operador lógico",
      ],
      correta: 1
    },
    {
      pergunta: "Como se comenta uma linha de código em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "'Este é um comentário'",
        "/* Este é um comentário */",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "!=",
      ],
      correta: 1
    },
    {
      pergunta: "O que significa a sigla 'AJAX' em JavaScript?",
      respostas: [
        "Asynchronous JavaScript and XML",
        "Advanced JavaScript and XML",
        "Asynchronous JSON and XML",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o evento 'click' em JavaScript?",
      respostas: [
        "Um tipo de dado",
        "Um tipo de função",
        "Uma ação do usuário ao clicar em um elemento",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      respostas: [
        "'let' é utilizado para constantes, e 'const' para variáveis mutáveis",
        "'const' é utilizado para constantes, e 'let' para variáveis mutáveis",
        "Não há diferença, ambos são usados da mesma forma",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o JSON em JavaScript?",
      respostas: [
        "Uma biblioteca de gráficos",
        "Um formato de dados leve e legível",
        "Uma função de manipulação de strings",
      ],
      correta: 1
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