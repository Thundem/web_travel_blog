const testData = {
    "testName": "Тест про туризм в Римі",
    "questions": [
      {
        "question": "Яка з цих споруд є символом Риму?",
        "answers": [
          {
            "answer": "Ейфелева вежа",
            "isCorrect": false
          },
          {
            "answer": "Колізей",
            "isCorrect": true
          },
          {
            "answer": "Біг Бен",
            "isCorrect": false
          },
          {
            "answer": "Пізанська вежа",
            "isCorrect": false
          }
        ]
      },
      {
        "question": "Як називається найбільша площа у Римі?",
        "answers": [
          {
            "answer": "Площа Святого Петра",
            "isCorrect": false
          },
          {
            "answer": "Площа Навони",
            "isCorrect": true
          },
          {
            "answer": "Площа Іспанії",
            "isCorrect": false
          },
          {
            "answer": "Площа Венеції",
            "isCorrect": false
          }
        ]
      },
      {
        "question": "Яке є головне храмове спорудження у Римі?",
        "answers": [
          {
            "answer": "Собор Святого Івана",
            "isCorrect": false
          },
          {
            "answer": "Ватиканська базиліка Святого Петра",
            "isCorrect": true
          },
          {
            "answer": "Собор Парижської Богоматері",
            "isCorrect": false
          },
          {
            "answer": "Собор Мадридської Богоматері",
            "isCorrect": false
          }
        ]
      },
      {
        "question": "Яке з перерахованих місць у Римі є найбільшим музеєм?",
        "answers": [
          {
            "answer": "Музей Лувр",
            "isCorrect": false
          },
          {
            "answer": "Музей Ватикану",
            "isCorrect": true
          },
          {
            "answer": "Метрополітен-музей мистецтва",
            "isCorrect": false
          },
          {
            "answer": "Британський музей",
            "isCorrect": false
          }
        ]
      },
      {
        "question": "Який з перелічених архітектурних стилів переважає у Римі?",
        "answers": [
          {
            "answer": "Готика",
            "isCorrect": false
          },
          {
            "answer": "Ренесанс",
            "isCorrect": true
          },
          {
            "answer": "Бароко",
            "isCorrect": false
          },
          {
            "answer": "Неокласицизм",
            "isCorrect": false
          }
        ]
      }
    ]
};

const questionsContainer = document.getElementById('questions-container');
const submitButton = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

// Відображення питань та відповідей
function displayQuestions() {
    testData.questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `<h3>Питання ${index + 1}: ${question.question}</h3>`;
        
        question.answers.forEach((answer, answerIndex) => {
            const answerDiv = document.createElement('div');
            answerDiv.classList.add('answer');
            answerDiv.innerHTML = `
                <input type="radio" id="answer-${index}-${answerIndex}" name="answer-${index}" value="${answerIndex}">
                <label for="answer-${index}-${answerIndex}">${answer.answer}</label>
            `;
            questionDiv.appendChild(answerDiv);
        });
        
        questionsContainer.appendChild(questionDiv);
    });
}

// Перевірка правильності відповідей та виведення результату
function checkAnswers() {
    let correctAnswers = 0;
    testData.questions.forEach((question, index) => {
        const selectedAnswer = document.querySelector(`input[name="answer-${index}"]:checked`);
        if (selectedAnswer) {
            const selectedAnswerIndex = selectedAnswer.value;
            const selectedAnswerElement = document.getElementById(`answer-${index}-${selectedAnswerIndex}`);
            if (question.answers[selectedAnswerIndex].isCorrect) {
                correctAnswers++;
                selectedAnswerElement.nextElementSibling.style.color = 'green';
            } else {
                selectedAnswerElement.nextElementSibling.style.color = 'red';
            }
        }
        // Відображення правильних відповідей
        question.answers.forEach((answer, answerIndex) => {
            const answerElement = document.getElementById(`answer-${index}-${answerIndex}`);
            if (answer.isCorrect) {
                answerElement.nextElementSibling.style.color = 'green';
            }
            // Відключення радіо-кнопок
            answerElement.disabled = true;
        });
    });
    const totalQuestions = testData.questions.length;
    const score = (correctAnswers / totalQuestions) * 100;
    resultDiv.textContent = `Ви відповіли правильно на ${correctAnswers} з ${totalQuestions} питань. Ваш результат: ${score}%`;
}

// Відображення питань при завантаженні сторінки
window.onload = () => {
    displayQuestions();
};

// Обробник події кнопки "Завершити тест"
submitButton.addEventListener('click', () => {
    checkAnswers();
});
