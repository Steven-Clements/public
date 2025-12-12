const el = document.getElementById("typewriter");

typewriter({
  element: el,
  words: [
    "technical writer",
    "software engineer",
    "backend architect",
    "web developer",
    "open‑source maintainer"
  ],
  typeSpeed: 200,
  deleteSpeed: 40,
  delayBetween: 1000
});

function typewriter({
  element,
  words,
  typeSpeed = 80,
  deleteSpeed = 45,
  delayBetween = 1200,
}) {
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function tick() {
    const current = words[wordIndex];
    const visible = isDeleting
      ? current.slice(0, charIndex--)
      : current.slice(0, charIndex++);

    element.textContent = visible;

    if (!isDeleting && charIndex === current.length + 1) {
      setTimeout(() => {
        isDeleting = true;
        tick();
      }, delayBetween);
      return;
    }

    if (isDeleting && charIndex === -1) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      charIndex = 0;
    }

    const speed = isDeleting ? deleteSpeed : typeSpeed;
    setTimeout(tick, speed);
  }

  tick();
}