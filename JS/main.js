/*=========================================
  STICKY HEADER
=========================================*/

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});



/*=========================================
  ACTIVE NAV LINK
=========================================*/

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop) {
        current = section.getAttribute('id');
    }
  });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });


/*=========================================
  SCROLL REVEAL ANIMATION
=========================================*/

const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    reveals.forEach(item => {
        const windowHeight = window.innerHeight;
        const revealTop = item.getBoundingClientRect().top;
        const revealPoint = 100;
        if (revealTop < windowHeight - revealPoint) {
            item.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Call the function on page load to reveal elements that are already in view












/*=========================================
  SKILLS PROGRESS ANIMATION
=========================================*/

const progressBars = document.querySelectorAll(".progress");

const animateProgress = () => {

    progressBars.forEach((bar) => {

        const targetWidth = bar.classList.contains("html") ? "95%" :
                            bar.classList.contains("css") ? "90%" :
                            bar.classList.contains("js") ? "85%" :
                            bar.classList.contains("flutter") ? "90%" :
                            bar.classList.contains("dart") ? "88%" :
                            bar.classList.contains("firebase") ? "85%" :
                            bar.classList.contains("node") ? "85%" :
                            bar.classList.contains("express") ? "82%" :
                            bar.classList.contains("mongo") ? "80%" : "0%";

        bar.style.width = "0";

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    setTimeout(() => {

                        bar.style.width = targetWidth;

                    }, 250);

                    observer.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.35
        });

        observer.observe(bar);

    });

};

animateProgress();


/*=========================================
  SKILL CARD HOVER EFFECT
=========================================*/

const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);

    });

});


/*=========================================
  ACTIVE SKILL CARD
=========================================*/

skillCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.classList.add("active");

    });

    card.addEventListener("mouseleave", () => {

        card.classList.remove("active");

    });

});