/* INITIALIZE ANIMATE ON SCROLL (AOS)
   This makes elements fade in when you scroll down.
*/
AOS.init({
    duration: 1000, // Animation lasts 1 second
    once: true      // Animation only happens once per scroll
});


/* THE DECRYPTION EFFECT
   When you hover over your name, it scrambles the letters.
*/
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%&";
const hackerText = document.querySelector("#hacker-text");

if (hackerText) {
    hackerText.onmouseover = event => {  
        let iteration = 0;
        
        const interval = setInterval(() => {
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
                clearInterval(interval);
            }
            
            iteration += 1 / 3;
        }, 30); // Speed of the scramble
    }
}