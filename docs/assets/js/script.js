

document.addEventListener("DOMContentLoaded", function () {

  let playButton = document.getElementById("play-button");
  

  function goToLevels() {
    window.location.href = "levels.html";
  }
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
 const buttons = document.querySelectorAll("#easy, #medium, #hard");
 buttons.forEach(button => {
   button.addEventListener("click", () => {
       window.location.href = "game.html";
   });
 });




$(document).ready(function() {


  // shows demo video after clicking demo-button 
  $("#demo-button").click(function() {
    $("video").toggle();
    $(".hide").toggle();
  });

  // modal open after click feedback button
  $(".message-btn").click(function() {
    $("#modalContact").show();
  });

  // modal close after press X (close) button
  $(".close-btn").click(function() {
    $("#modalContact").hide();
  });


  // alternates between sound on or off
  var toggle = false;
  $(".sound-btn").click(function() {
    if (toggle) {
      $(".sound-btn").html(`<i class="fa-solid fa-volume-xmark"></i>`);
    } else {
      $(".sound-btn").html(`<i class="fa-solid fa-volume-high"></i>`);
    }
    toggle = !toggle;
  });

  
});




  


