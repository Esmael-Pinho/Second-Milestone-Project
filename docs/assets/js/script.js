function Bubbles() {
    const section = document.querySelector('section');
    const createElement = document.createElement('span');
    var size = Math.random() * 70;

    createElement.style.width = 40 + size + 'px';
    createElement.style.height = 40 + size + 'px';
    createElement.style.left = Math.random() * innerWidth + 'px';
    section.appendChild(createElement);

    setTimeout(() => {
        createElement.remove()
    },9000)

}
setInterval(Bubbles,90);


