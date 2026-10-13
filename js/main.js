/* INITIALIZE ANIMATE ON SCROLL (AOS)
   This makes elements fade in when you scroll down.
*/
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (typeof AOS !== "undefined") {
    AOS.init({
        duration: prefersReducedMotion ? 0 : 700,
        once: true,
        disable: prefersReducedMotion
    });
}


/* THE DECRYPTION EFFECT
   When you hover over your name, it scrambles the letters.
*/
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%&";
const hackerText = document.querySelector("#hacker-text");

if (hackerText) {
    let activeInterval;

    hackerText.onmouseenter = event => {
        if (prefersReducedMotion) {
            event.target.innerText = event.target.dataset.value;
            return;
        }

        if (activeInterval) {
            clearInterval(activeInterval);
        }

        let iteration = 0;
        
        activeInterval = setInterval(() => {
            event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if(index < iteration) {
                    return event.target.dataset.value[index];
                }
            
                return letters[Math.floor(Math.random() * 26)];
            })
            .join("");
            
            if(iteration >= event.target.dataset.value.length){ 
                clearInterval(activeInterval);
            }
            
            iteration += 1 / 3;
        }, 35);
    }
}