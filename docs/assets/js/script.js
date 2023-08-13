

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

  changeLevelsButtonsColor();

  showDemoVideo();

  linkButtonsToGame();


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
  function showDemoVideo() {
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
  }
  

  function changeLevelsButtonsColor() {
    $('.easy').mouseover(function() {
      $('.green').css('color', 'white');
      $('.green').css('background-color', 'var(--green)');
      $('.b-c1').css('border', '5px solid var(--green)')
    });
    $('.easy').mouseout(function () {
      $('.green').css('color', '');
      $('.green').css('background-color', '');
      $('.b-c1').css('border', '');
    });
  
    $('.medium').mouseover(function() {
      $('.yellow').css('color', 'white');
      $('.yellow').css('background-color', 'var(--yellow)');
      $('.b-c2').css('border', '5px solid var(--yellow)')
    });
    $('.medium').mouseout(function () {
      $('.yellow').css('color', '');
      $('.yellow').css('background-color', '');
      $('.b-c2').css('border', '');
    });
  
    $('.hard').mouseover(function() {
      $('.red').css('color', 'white');
      $('.red').css('background-color', 'var(--red)');
      $('.b-c3').css('border', '5px solid var(--red)')
    });
    $('.hard').mouseout(function () {
      $('.red').css('color', '');
      $('.red').css('background-color', '');
      $('.b-c3').css('border', '');
    });
  }
  


  // link buttons to game.html and attribute the level
  function linkButtonsToGame() {
    $('#easy').on('click', () => {
      window.location.href = 'game.html?level=easy';
    });
  
    $('#medium').on('click', () => {
      window.location.href = 'game.html?level=medium';
    });
  
    $('#hard').on('click', () => {
      window.location.href = 'game.html?level=hard';
    });
  }
  


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





  


