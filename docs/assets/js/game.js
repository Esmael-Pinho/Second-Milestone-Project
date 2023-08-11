$(document).ready(function() {

    // general variables
    let questions = [];
    let currentQuestionIndex = 0;
    let currentLevel = 'hard';

    // Read the JSON file
    $.getJSON('./assets/js/questions.json')
        .done(function(data) {
            questions = data.questions;
            showQuestion();
        })
        .fail(function(error) {
            console.log(error)
            // redirect user to 404 error page
            window.location.replace("./404.html")
        });

        
   

    // Shuffle an array using Fisher-Yates shuffle algorithm
    // function shuffleArray(array) {
    //     for (let i = array.length - 1; i > 0; i++) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     [array[i], array[j]] = [array[j], array[i]];
    //     }
    // }
  
    // Show a random question
    function showQuestion() {
        const currentQuestions = questions.filter(q => q.level === currentLevel);
        currentQuestionIndex = Math.floor(Math.random() * currentQuestions.length);
        $('#question').text(currentQuestions[currentQuestionIndex].question);
      }
  
    
    // Handle restart button click
    $('#restart-btn').click(function() {
        showQuestion();
    });
    
    // Handle level button clicks
    $("#easy, #medium, #hard").click(function(event) {
        currentLevel = event.target.id;
        window.location.href = 'game.html';
        showQuestion();
    });

    

});

