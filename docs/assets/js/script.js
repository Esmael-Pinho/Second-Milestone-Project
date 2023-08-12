

$(document).ready(function() {

  var toggle = false;
  

  // play button links to levels page
  $("#play-button").click(function() {
    window.location.href = "levels.html";
  });

  // links logo and game home-btn to index.html
  $(".pop, .game-home-btn").click(function() {
    window.location.href = "index.html";
  });


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
    const section = $('section');
    const createBubble = $('<span></span>');
    var size = Math.random() * 90;

    createBubble.css({
      'background': randomColor(),
      'width': 40 + size + 'px',
      'height': 40 + size + 'px',
      'left': Math.random() * innerWidth + 'px'
    });
    
    section.append(createBubble);

    setTimeout(() => {
      createBubble.remove()
    },8000)
  }

  setInterval(Bubbles,100);


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


  // link buttons to game.html and attribute the level
  $('#easy').on('click', () => {
    window.location.href = 'game.html?level=easy';
  });

  $('#medium').on('click', () => {
    window.location.href = 'game.html?level=medium';
  });

  $('#hard').on('click', () => {
    window.location.href = 'game.html?level=hard';
  });


  // alternates between sound on or off
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





  


