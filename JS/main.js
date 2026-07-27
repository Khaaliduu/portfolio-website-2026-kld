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



// =================================================================================================================




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









/*=========================================
  PROJECTS REVEAL ANIMATION
=========================================*/

const projectCards = document.querySelectorAll(".project-card");

const projectObserver = new IntersectionObserver(

(entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

            projectObserver.unobserve(entry.target);

        }

    });

},

{

    threshold:0.2

}

);

projectCards.forEach((card)=>{

    projectObserver.observe(card);

});


/*=========================================
  PROJECT CARD TILT EFFECT
=========================================*/

projectCards.forEach((card)=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;

        const centerY = rect.height / 2;

        const rotateX = ((y-centerY)/18)*-1;

        const rotateY = (x-centerX)/18;

        card.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-10px)
        `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";

    });

});


/*=========================================
  PROJECT IMAGE PARALLAX
=========================================*/

projectCards.forEach((card)=>{

    const image = card.querySelector("img");

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const moveX = (e.clientX-rect.left)/35;

        const moveY = (e.clientY-rect.top)/35;

        image.style.transform=`scale(1.08) translate(${moveX}px,${moveY}px)`;

    });

    card.addEventListener("mouseleave",()=>{

        image.style.transform="scale(1) translate(0,0)";

    });

});


/*=========================================
  PROJECT BUTTON RIPPLE
=========================================*/

const projectButtons=document.querySelectorAll(".project-icon");

projectButtons.forEach((button)=>{

    button.addEventListener("click",(e)=>{

        const ripple=document.createElement("span");

        ripple.classList.add("ripple");

        const rect=button.getBoundingClientRect();

        ripple.style.left=e.clientX-rect.left+"px";

        ripple.style.top=e.clientY-rect.top+"px";

        button.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});


/*=========================================
  PROJECT STAGGER ANIMATION
=========================================*/

projectCards.forEach((card,index)=>{

    card.style.transitionDelay=`${index * 0.15}s`;

});













