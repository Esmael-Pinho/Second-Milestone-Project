$(document).ready(function() {

    let questions = [];
    let currentQuestionIndex = 0;

    // Read the JSON file
    $.getJSON('./assets/js/questions.json', function(data) {
    questions = data.questions;
    showQuestion();
    });

    // Show the current question
    function showQuestion() {
    $('#question').text(questions[currentQuestionIndex].question);
    }

    // Handle restart button click
    $('#restart-btn').click(function() {
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    showQuestion();
    });


});