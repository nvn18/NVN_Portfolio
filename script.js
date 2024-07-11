document.addEventListener("DOMContentLoaded", function() {
    const typewriter = document.getElementById('typewriter');
    const texts = [
        "Welcome to my portfolio",
        "I am V.N.V Neeraj",
        "CSE UnderGrad",
        "web developer",
        "UI/UX developer",
        "ML enthusiast"
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];
        if (!isDeleting && charIndex < currentText.length) {
            typewriter.textContent += currentText.charAt(charIndex);
            charIndex++;
            setTimeout(type, 100); 
        } else if (isDeleting && charIndex > 0) {
            typewriter.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, 50); 
        } else if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => { isDeleting = true; type(); }, 1000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, 900);
        }
    }
    type();
});
