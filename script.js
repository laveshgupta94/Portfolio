const form = document.getElementById("contactForm");
const btn = document.getElementById("sendBtn");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    btn.innerText = "Sending...";
    btn.disabled = true;

    emailjs
      .sendForm(
        "service_ukqnt7a",
        "template_3jid0xr",
        form
      )
      .then(() => {
        form.classList.add("success");
        btn.innerText = "Sent ✓";

        setTimeout(() => {
          form.reset();
          form.classList.remove("success");
          btn.innerText = "Send Message";
          btn.disabled = false;
        }, 3000);
      })
      .catch((error) => {
        console.error(error);
        btn.innerText = "Failed ❌";
        btn.disabled = false;
      });
  });
}





const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 120;

  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // run on load
const staggerContainers = document.querySelectorAll(".stagger");

staggerContainers.forEach(container => {
  const items = container.children;

  Array.from(items).forEach((item, index) => {
    item.classList.add("reveal", "fast");
    item.style.transitionDelay = `${index * 0.12}s`;
  });
});


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});


const heroParallax = document.querySelector(".hero-parallax");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  if (heroParallax) {
    heroParallax.style.transform = `translateY(${scrolled * 0.25}px)`;
  }
});


const aboutBg = document.querySelector(".about-bg");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  if (aboutBg) {
    aboutBg.style.transform = `translateY(${scrolled * 0.15}px)`;
  }
});


const footerWave = document.querySelector(".footer-wave");

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  if (footerWave) {
    footerWave.style.transform = `translateY(${scrolled * 0.2}px)`;
  }
});


let latestScroll = 0;

window.addEventListener("scroll", () => {
  latestScroll = window.scrollY;
});

function smoothParallax() {
  if (heroParallax)
    heroParallax.style.transform = `translateY(${latestScroll * 0.25}px)`;

  if (aboutBg)
    aboutBg.style.transform = `translateY(${latestScroll * 0.15}px)`;

  requestAnimationFrame(smoothParallax);
}

smoothParallax();

const typingText = document.getElementById("typing-text");

if (typingText) {
  const roles = [
    "Computer Science Student",
    "Java & Python Developer",
    "Frontend Developer",
    "Learning AI Agents & ML"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
      typingText.textContent = currentRole.slice(0, charIndex++);
    } else {
      typingText.textContent = currentRole.slice(0, charIndex--);
    }

    if (!isDeleting && charIndex === currentRole.length) {
      setTimeout(() => (isDeleting = true), 1200);
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, isDeleting ? 60 : 100);
  }

  typeEffect();
}


const heroImage = document.querySelector(".hero-image");

if (heroImage) {
  document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;

    heroImage.style.transform = `translate(${x}px, ${y}px)`;
  });
}



const toggleBtn = document.getElementById("theme-toggle");

if (toggleBtn) {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") document.body.classList.add("dark");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  });
}


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll("section, .project-card, .skill-card")
  .forEach(el => observer.observe(el));




