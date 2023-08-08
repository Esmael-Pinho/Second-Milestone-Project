

document.addEventListener("DOMContentLoaded", function () {

  
  

  function goToLevels() {
    window.location.href = "levels.html";
  }
  let playButton = document.getElementById("play-button");
  playButton.addEventListener("click", goToLevels); // play button links to levels page


  // creates random colors for the bubbles 
  function randomColor() {
    return (
      "rgba(" +
      Math.round(Math.random() * 250) +
      "," +
      Math.round(Math.random() * 250) +
      "," +
      Math.round(Math.random() * 250) +
      "," +
      Math.ceil(Math.random() * 10) / 10 +
      ")"
    );
  }

  function Bubbles() {

      const section = document.querySelector('section');
      const createBubble = document.createElement('span');
      var size = Math.random() * 90;

      createBubble.style.background = randomColor();
      createBubble.style.width = 40 + size + 'px';
      createBubble.style.height = 40 + size + 'px';
      createBubble.style.left = Math.random() * innerWidth + 'px';
      section.appendChild(createBubble);

      setTimeout(() => {
          createBubble.remove()
      },8000)

  }
  setInterval(Bubbles,100);

 });

 // links each button to game.html 
 const levelButtons = document.querySelectorAll("#easy, #medium, #hard");
 levelButtons.forEach(button => {
  button.addEventListener("click", () => {
     window.location.href = "game.html";
  });
 });

 // links logo and game home-btn to index.html
 const homePageLink = document.querySelectorAll(".pop, .game-home-btn");
 homePageLink.forEach(homeLink => {
   homeLink.addEventListener("click", () => {
     window.location.href = "index.html";
   });
 });





$(document).ready(function() {


  // shows demo video after clicking demo-button 
  $("#demo-button").click(function() {
    if (toggle) {
      $("#demo-button").html("demo");
    } else {
      $("#demo-button").html("close"); // changes btn text to close
    };
    toggle = !toggle;
    $("video").toggle();
    $(".hide").toggle();
  });

  // Initially hide the scoreboard and the questions
  $('#scoreboard').hide();
  $('.container').css('margin-top', '6.59rem', 'margin-bottom', '0');

  // Show the scoreboard and questions when the button is clicked, and hide start btn
  $('#restart-btn').click(function() {
      $('#scoreboard').show();
      $('#scoreboard').css('display', 'flex');
      $('.container').css('margin-top', 'auto');
      $('#restart-btn').hide();
  });


  // alternates between sound on or off
  var toggle = false;
  $(".sound-btn").click(function() {
    if (toggle) {
      $(".sound-btn").html(`<i class="fa-solid fa-volume-high"></i>`);
    } else {
      $(".sound-btn").html(`<i class="fa-solid fa-volume-xmark"></i>`);
    }
    toggle = !toggle;
  });


  // modal open after click feedback button
  $(".message-btn").click(function() {
    $("#modalContact").show();
  });

  // modal close after press X (close) button
  $(".close-btn").click(function() {
    $("#modalContact").hide();
  });




});




  


