

document.addEventListener("DOMContentLoaded", function () {
  let playButton = document.getElementById("play-button");
  

  function goToLevels() {
    window.location.href = "levels.html";
  }
  playButton.addEventListener("click", goToLevels); // play button links to levels page

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

// adds demo video after clicking demo-button 
function demoWindow() {
  let demo = document.getElementById('demo-window');
  demo.innerHTML = `<video width="500" controls>
    <source src="./assets/video/video.mp4" type="video/mp4">
    Your browser does not support HTML5 video.
    </video>`;
};

// links each button to game.html 
const buttons = document.querySelectorAll("#easy, #medium, #hard");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
        window.location.href = "game.html";
    });
  });

  


