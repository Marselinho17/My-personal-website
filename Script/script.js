// fly-in effects and views
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden, .hiddenL, .hiddenR");
hiddenElements.forEach((el) => observer.observe(el));


// border when scrolling
const header = document.getElementById('navigation');


function addBorderOnScroll() {
    const scrollPosition = window.scrollY;
    const offset = header.offsetTop;
    if (scrollPosition > offset) {
        header.classList.add('border-visible');
    } else {
        header.classList.remove('border-visible');
    }
}

window.addEventListener('scroll', addBorderOnScroll);


// toggle bar active
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navigation_bar')[0]

toggleButton.addEventListener('click', (event) => {
    event.preventDefault()
    navbarLinks.classList.toggle('active')
})

// deactivation of click navigation on link
const navBLinks = document.querySelectorAll('.navigation_bar a');
navBLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarLinks.classList.remove('active');
    });
});


// display of the active section
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    for (const section of document.querySelectorAll('section')) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            const targetId = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('data-target') === targetId);
            });
        }
    }
})

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('toggle-button');
})




