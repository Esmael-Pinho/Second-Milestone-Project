/*jshint esversion: 6 */
$(document).ready(function() {


    // Get the selected level from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const level = urlParams.get('level');
  
    // Variables for the game
    
    let questions = [];
    let usedQuestions = [];
    let correctAnswer = 0;
    let incorrectAnswer = 0;
    let score = 0;
    let questionCounter = 1;
    let maxQuestions = 10;

    const questionCounterText = $("#question-counter");
    const gameSound = $('#game-sound')[0];
    const correctSound = $('#correct-sound')[0];
    const incorrectSound = $('#incorrect-sound')[0];

    const mostRecentScore = localStorage.getItem('mostRecentScore');
    const finalScore = $('#score');
    
    

    // Initially hide the scoreboard and the questions
    // $('#scoreboard').hide();
    // $('.container').css('margin-top', '7.3rem', 'margin-bottom', '0');
  
    // Load questions from JSON file
    $.getJSON('./assets/js/questions.json', data => {
      questions = data;
    }).fail((jqxhr, textStatus, error) => {
      console.error("Error fetching questions:", error);
      window.location.replace("./404.html");
    });

    // call function
    changeQuestionColor();
    // showScoreboard();
    
    
    displayRandomQuestion(level);

    // Display a random question by level
    function displayRandomQuestion(level) {
      // Check if questions have been loaded
      if (!questions) {
        console.log('Questions have not been loaded yet');
        return;
      }


      // when options is clicked, check correct answer and increment score, correctAnswers and incorrect
      $('.options-btn').off('click').on('click', function() {
        const clickedOption = $(this).text();
        const correctOption = question.options[question.correctIndex];
        if (clickedOption === correctOption) {
          questionCounter++;
          questionCounterText.text(`${questionCounter}/${maxQuestions}`); //Scoreboard - question counter
          correctSound.play();
          correctAnswer++;
          score += 10;
          localStorage.setItem("mostRecentScore", score);
          $('.correct-answer').text(correctAnswer);
          $('.correct-answer').css("color", "var(--green)");
          $('.score').text(score);
          $('.score').css("color", "var(--yellow)");
          updateProgress();
          displayRandomQuestion(level);
        } else {
          questionCounter++;
          questionCounterText.text(`${questionCounter}/${maxQuestions}`);
          incorrectSound.play();
          incorrectAnswer++;
          $('.incorrect-answer').text(incorrectAnswer);
          $('.incorrect-answer').css("color", "var(--red)");
          updateProgress();
          displayRandomQuestion(level);
        }
        if (questionCounter === 11 || questionCounter > maxQuestions) {
          window.location.assign(`./end-game.html?score=${score}`);
        }
      });


      // Update progress bar and text
      function updateProgress() {
        const totalQuestions = Math.min(maxQuestions, questions.length);
        const currentQuestionNumber = questionCounter;
        const progressPercentage = (currentQuestionNumber / totalQuestions) * 100;

        $("#progress-bar").val(progressPercentage);
        $("#progress-text").text(`${Math.round(progressPercentage)}%`);
        $("#question-counter").text(`${currentQuestionNumber}/${totalQuestions}`);
      }

      


      let currentIndex = 0;
      questions.forEach((question, index) => {
        question.index = index;
      });
      // Filter questions by level, without repeating
      const filteredQuestions = questions.filter(question => question.level === level && !usedQuestions.includes(question) && question.index > currentIndex);
      if (filteredQuestions.length === 0) {
          console.log(`No more questions available with level "${level}"`);
          return;
      }
      // Update the current index to the index of the first question in the filteredQuestions array
      currentIndex = filteredQuestions[0].index;



      // Select a random question
      const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
      const question = filteredQuestions[randomIndex];
      usedQuestions.push(question);
      $('#question').text(question.question);


      // Pulls and display the options for the selected question 
      const optionsElements = $('.options-btn');
      optionsElements.each((index, element) => {
        const option = question.options[index];
        $(element).text(option);
      });

    }


    // Change the color of #question according to the level
    function changeQuestionColor() {
      if (level === 'easy') {
        $('#question').css('color', 'var(--green)');
      } else if (level === 'medium') {
        $('#question').css('color', 'var(--yellow)');
      } else if (level === 'hard') {
        $('#question').css('color', 'var(--red)');
      }
    }

  
    // $(".choices-btn").hide();
    // Show the scoreboard and questions when the button is clicked, and hide start btn
    function showScoreboard() {
      $("#start-btn").click(function() {
        // $("#start-btn").hide();
        $(".loading-gif").show(); // Show the gif element
        setTimeout(function() {
          $(".loading-gif").hide(); // Hide the gif element 
          // $(".choices-btn").show();
          displayRandomQuestion(level);
          // $("#scoreboard").show();
          $("#scoreboard").css("display", "flex");
          $(".container").css("margin-top", "auto");
          gameSound.volume = 0.2;
        }, 400);
      });
    }
    

    // links restart btn to levels page
    $("#restart-btn").click(function() {
      $("#end-text").hide();
      $(".loading-gif").show();
        setTimeout(function() {
          $(".loading-gif").hide();
          window.location.href = "levels.html";
        }, 600);
      
    });

    // finalScore.innerText = mostRecentScore;
    finalScore.html(`${mostRecentScore} <i class="trophy fa-solid fa-trophy fa-2xl"></i>`);
    finalScore.css("font-size", "40px");
    finalScore.css("color", "var(--White)");

});
  
  


