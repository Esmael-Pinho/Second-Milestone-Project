$(document).ready(function() {


    // Get the selected level from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const level = urlParams.get('level');
  
    // Variables for the game
    let questions = [];
    let usedQuestions = [];
    const gameSound = document.getElementById('game-sound');

    // Initially hide the scoreboard and the questions
    $('#scoreboard').hide();
    $('.container').css('margin-top', '6.59rem', 'margin-bottom', '0');
  
    // Load questions from JSON file
    $.getJSON('./assets/js/questions.json', data => {
      questions = data;
    }).fail((jqxhr, textStatus, error) => {
      console.error("Error fetching questions:", error);
      window.location.replace("./404.html");
    });

    // call function
    changeQuestionColor();
    showScoreboard();
  
    // Display a random question by level
    function displayRandomQuestion(level) {
      // Check if questions have been loaded
      if (!questions) {
        console.log('Questions have not been loaded yet');
        return;
      }

      // Filter questions by level and exclude used questions
      const filteredQuestions = questions.filter(question => question.level === level && !usedQuestions.includes(question));
      if (filteredQuestions.length === 0) {
        console.log(`No more questions available with level "${level}"`);
        return;
      }

      // Select a random question
      const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
      const question = filteredQuestions[randomIndex];
      usedQuestions.push(question);
      $('#question').text(question.question);
    }
  
    // testing if questions change by action
    $('#start-btn').on('click', () => {
      displayRandomQuestion(level);
    });

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
  
  
    // Show the scoreboard and questions when the button is clicked, and hide start btn
    function showScoreboard() {
      $('#start-btn').click(function() {
        $('#scoreboard').show();
        $('#scoreboard').css('display', 'flex');
        $('.container').css('margin-top', 'auto');
        gameSound.volume = 0.2;
      //   $('#restart-btn').hide();
      });
    };
    


});
  
  


