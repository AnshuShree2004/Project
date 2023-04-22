

      const quizContainer = document.getElementById('quiz')
        const submitButton = document.getElementById('submit')
        const resultsContainer = document.getElementById('results')
        console.log(quizContainer);

        

        const myQuestions = [
            {
                question: "What is the capital of France?",
                answers: {
                a: "Paris",
                b: "London",
                c: "New York"
                },
                correctAnswer: "a"
            },
            {
                question: "What is the largest country in the world?",
                answers: {
                a: "Russia",
                b: "China",
                c: "United States"
                },
                correctAnswer: "a"
            },
            {
                question: "What is the currency of Japan?",
                answers: {
                a: "Yuan",
                b: "Euro",
                c: "Yen"
                },
                correctAnswer: "c"
            }
        ];

        function buildQuiz(){
            const output = []
            

            myQuestions.forEach((currentQuestion, questionNumber) => {
                const answers = []

                for(letter in currentQuestion.answers){
                    answers.push(
                        `<label> 
                            <input type="radio" name="question${questionNumber}" value="${letter}" /> ${letter} : ${currentQuestion.answers[letter]}
                        </label>
                        `
                    )
                }
                output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>
                `
            );
            })
            
            
           // console.log("TEST");
           // console.log("Output", output);
          //  console.log(quizContainer);

            quizContainer.innerHTML = output.join('')

        }
        function showResults(){
           // console.log("RESULT");
            const answerContainers = quizContainer.querySelectorAll('.answers')

            let numCorrect = 0

            myQuestions.forEach((currentQuestion, questionNumber) => {
                const answerContainer = answerContainers[questionNumber]
                const selector = `input[name=question${questionNumber}]:checked`;
                const userAnswer = (answerContainer.querySelector(selector) || {}).value

                if (userAnswer === currentQuestion.correctAnswer) {
                    numCorrect++
                    answerContainers[questionNumber].style.color = 'green'
                    answerContainers[questionNumber].style.padding = '20px'
                     answerContainers[questionNumber].style.fontSize = '15px'


                } else {
                    answerContainers[questionNumber].style.color = 'red'
                    answerContainers[questionNumber].style.padding = '20px'
                   answerContainers[questionNumber].style.fontSize = '15px'

                }
            })
            console.log(numCorrect);
            resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`

        }

        buildQuiz()
        submitButton.addEventListener('click', showResults)
    

