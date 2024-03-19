const quizData = [
    {
        question: "What is the surname given to bastards born in Dorne?",
        a: "Rivers",
        b: "Waters",
        c: "Stone",
        d: "Sand",
        correct: "d",
    },
    {
        question: "'The Mountain' is the nickname for which character?",
        a: "Gerold Clegane",
        b: "Gregor Clegane",
        c: "Oberyn Martell",
        d: "Sandor Clegane",
        correct: "b",
    },
    {
        question: "Who is Lord Commander of the Kingsguard at the beginning of Game of Thrones?",
        a: "Ser Barristan Selmy",
        b: "Ser Loras Tyrell",
        c: "Ser Jaime Lannister",
        d: "Ser Jeor Mormont",
        correct: "a",
    },
    {
        question: "Who was Margaery Tyrell's first husband?",
        a: "Renly Baratheon",
        b: "Joffrey Baratheon",
        c: "Tommen Baratheon",
        d: "Stannis Baratheon",
        correct: "a",
    },
    {
      question: "Who is known as 'The-King-Beyond-the-Wall'?",
      a: "Mance Rayder",
      b: "Tormund Giantsbane",
      c: "Stannis Baratheon",
      d: "The Night King",
      correct: "a",
      
    },
    {
      question: "What is Walt’s middle name?",
      a: "Archibald",
      b: "Matthew",
      c: "Hartwell",
      d: "Peter",
      correct: "c",
      
    },
    {
      question: "What is the plant Walt used to poison Brock?",
      a: "Narcissus",
      b: "Lily-of-the-valley",
      c: "Black Nightshade",
      d: "Lavender",
      correct: "b",
      
    },
    {
      question: "What is the name of the boy Todd shot in the desert?",
      a: "Drew Sharp",
      b: "David Stewart",
      c: "Donnie Solis",
      d: "Martin West",
      correct: "a",
      
    },
    {
      question: "What is the model of Walt’s original car?",
      a: "1987 Toyota Tercel",
      b: "2004 Pontiac Aztek",
      c: "2006 PT Cruiser",
      d: "2002 Toyota Celica",
      correct: "b",
      
    },
    {
      question: "Before becoming Walt’s partner, Jesse cooked his meth with what special ingredient?",
      a: "Chili powder",
      b: "A1 Steal Sauce",
      c: "Oregano",
      d: "Koriander",
      correct: "a",
    },
  
  ];
  const quiz= document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  const c_text = document.getElementById('c_text')
  const d_text = document.getElementById('d_text')
  const submitBtn = document.getElementById('submit')
  let currentQuiz = 0
  let score = 0
  loadQuiz()
  function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
  }
  function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
  }
  function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
  }
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">RETRY</button>
           `
       }
    }
  })