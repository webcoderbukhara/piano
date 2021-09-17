function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.piano-key[data-key="${e.keyCode}"]`);


    if (!audio) return;
    audio.currentTime = 0;
    audio.play();


}




const keys = document.querySelectorAll(".btn");

keys.forEach((e) =>
    e.addEventListener("click", (c) => {
        const audio = document.querySelectorAll(`audio`);
        const key = document.querySelectorAll(`.btn`);
        const keyCode = c.target.attributes[0].value
        audio.forEach(e => {
            if (e.attributes[0].value == keyCode) {
                if (!e) return;
                e.currentTime = 0;
                e.play();
            }

        })
    })
);



window.addEventListener("keyup", playSound);