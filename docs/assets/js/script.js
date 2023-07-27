

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
    },5000)

}
setInterval(Bubbles,90);



