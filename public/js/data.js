export const quizData = [
    {
        question: "What is a function in JavaScript?",
        options: [
            "A reusable block of code that performs a specific task",
            "A variable that stores a value",
            "A loop that iterates through an array",
            "A conditional statement"
        ],
        correctAnswer: "a",
        explanation: "Functions are reusable blocks of code that perform a specific task. They are fundamental building blocks in JavaScript that help in organizing code, avoiding repetition, and making programs more modular and maintainable."
    },
    {
        question: "Which of the following is NOT a valid way to create a function in JavaScript?",
        options: [
            "function myFunc() {}",
            "const myFunc = function() {}",
            "const myFunc = () => {}",
            "create function myFunc() {}"
        ],
        correctAnswer: "d",
        explanation: "JavaScript provides several ways to create functions: function declarations, function expressions, and arrow functions. The syntax 'create function myFunc() {}' is not valid in JavaScript."
    },
    {
        question: "What is the correct way to call a function named 'calculateSum' with parameters 5 and 10?",
        options: [
            "call calculateSum(5, 10)",
            "calculateSum(5, 10)",
            "execute calculateSum[5, 10]",
            "run calculateSum{5, 10}"
        ],
        correctAnswer: "b",
        explanation: "In JavaScript, you call a function by using its name followed by parentheses containing the arguments. The correct syntax is 'calculateSum(5, 10)'."
    },
    {
        question: "What does the 'return' keyword do in a function?",
        options: [
            "It stops the function and sends a value back to the caller",
            "It restarts the function",
            "It logs a message to the console",
            "It declares a variable"
        ],
        correctAnswer: "a",
        explanation: "The 'return' keyword stops the execution of a function and sends a value back to the caller. If no return value is specified, the function returns undefined."
    },
    {
        question: "What is a callback function?",
        options: [
            "A function passed as an argument to another function",
            "A function that returns another function",
            "A function that is called automatically",
            "A function that cannot be called manually"
        ],
        correctAnswer: "a",
        explanation: "A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. Callbacks are commonly used in asynchronous operations."
    }
];

export const userState = {
    points: 1250,
    currentQuestion: 0,
    selectedAnswers: {},
    quizTimer: null,
    timeRemaining: 300 // 5 minutes
};
