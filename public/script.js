(function () {
  const roles = [
    "Software Developer",
    "Full Stack Engineer",
    "Problem Solver",
    "Competitive Programmer",
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typingSpeed = 120;
  const deletingSpeed = 80;
  const delayBetweenRoles = 1500;

  function type() {
    const element = document.getElementById("typing-text");
    if (!element) return;

    const currentRole = roles[roleIndex];

    if (!isDeleting) {
      element.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentRole.length) {
        setTimeout(() => (isDeleting = true), delayBetweenRoles);
      }
    } else {
      element.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
  }

  document.addEventListener("DOMContentLoaded", type);
})();
