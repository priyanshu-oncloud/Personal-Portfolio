"use strict";

/*================ Toggle icon Navbar ================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
};

/*================ Scroll Section Active Link ================*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            // Animate skills progress bars
            if (id === 'skills') {
                const skillsSection = document.querySelector('.skills');
                if (!skillsSection.classList.contains('animated')) {
                    const progressSpans = document.querySelectorAll('.progress-line span');
                    progressSpans.forEach(span => {
                        span.style.width = span.dataset.progress;
                    });
                    skillsSection.classList.add('animated');
                }
            }
        };
    });

/*================ Sticky Navbar ================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
/*================ Remove toggle icon and navbar when click navbar link (Scroll) ================*/
    menuIcon.classList.remove('bx-x'); // Ensure menu icon reverts to the menu icon
    navbar.classList.remove('active');
    
/*================ Show/Hide WhatsApp button on scroll ================*/
    if (window.scrollY > 300) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
};

/*================ Scroll reveal ================*/
const sr = ScrollReveal({
    reset: true,
    distance: '15px',
    duration: 2000,
    delay: 200
});

sr.reveal('.home-content, .heading', { origin: 'top' });
sr.reveal('.home-img, .services-container, .project-box, .contact form, .skills-container', { origin: 'bottom' });
sr.reveal('.home-content h1, .about-img', { origin: 'left' });
sr.reveal('.home-content p, .about-content', { origin: 'right' });


/*================ typed js ================*/
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Cloud Enthusiast', 'IoT Innovator'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
   loop: true
});

/*================ Download Resume Loading Effect ================*/
const downloadBtn = document.querySelector('#download-resume-btn');
const btnText = downloadBtn.querySelector('.btn-text');
const btnProgress = downloadBtn.querySelector('.btn-progress');

downloadBtn.addEventListener('click', (e) => {
    if (downloadBtn.classList.contains('loading')) {
        return;
    }

    downloadBtn.classList.add('loading');

    let percentage = 0;
    const originalText = btnText.textContent;

    const interval = setInterval(() => {
        percentage++;
        btnText.textContent = `Downloading ${percentage}%`;
        if (btnProgress) {
            btnProgress.style.width = `${percentage}%`;
        }

        if (percentage >= 100) {
            clearInterval(interval);
            btnText.textContent = 'Completed!';
            setTimeout(() => {
                downloadBtn.classList.remove('loading');
                btnText.textContent = originalText;
                if (btnProgress) {
                    btnProgress.style.width = '0%';
                }
            }, 1500);
        }
    }, 40); // 40ms * 100 = 4 seconds total
});

function showFormStatus(message, type) {
    if (formStatus) {
        formStatus.textContent = message;
        formStatus.className = type === 'success' ? 'form-status-success' : 'form-status-error';

        setTimeout(() => {
            formStatus.textContent = '';
            formStatus.className = '';
        }, 5000); // Message disappears after 5 seconds
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/*================ Modal Popup For Read More Buttons ================*/
const readMoreBtns = document.querySelectorAll('.read-more-btn');
const modal = document.getElementById('read-more-modal');
const closeModalBtn = modal ? modal.querySelector('.close-button') : null;
const modalBody = modal ? document.getElementById('modal-body') : null;

if (modal && closeModalBtn && modalBody && readMoreBtns.length > 0) {
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();

            const contentWrapper = btn.closest('.about-content, .service-box');
            if (contentWrapper) {
                const details = contentWrapper.querySelector('.modal-details');
                if (details) {
                    modalBody.innerHTML = details.innerHTML;
                } else {
                    modalBody.innerHTML = '<h2>Content Not Found</h2><p>Details for this section are not available.</p>';
                }
            }
            modal.classList.add('active');
        });
    });

    closeModalBtn.addEventListener('click', () => modal.classList.remove('active'));

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });
}

/*================ Contact Form using EmailJS ================*/
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

// Initialize EmailJS with your Public Key
emailjs.init({
  publicKey: '_rxZSJPApjyxFUgLH',
});

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Client-side validation using helper functions
        if (!this.elements.name.value.trim() || !this.elements.email.value.trim() || !this.elements.message.value.trim()) {
            showFormStatus('Please fill out all required fields.', 'error');
            return;
        }
        if (!validateEmail(this.elements.email.value)) {
            showFormStatus('Please enter a valid email address.', 'error');
            return;
        }

        const submitBtn = this.querySelector('input[type="submit"]');
        const originalBtnText = submitBtn.value;
        submitBtn.disabled = true;
        submitBtn.value = 'Sending...';

        // These IDs are from your EmailJS account
        const serviceID = 'service_mzv79yo';
        const templateID = 'template_w12c1ov';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                showFormStatus('Message sent successfully!', 'success');
                this.reset();
            }, (err) => {
                showFormStatus('Failed to send. Please try again.', 'error');
                console.error('EmailJS Error:', JSON.stringify(err));
            })
            .finally(() => {
                // Re-enable the button and restore its text
                submitBtn.disabled = false;
                submitBtn.value = originalBtnText;
            });
    });
}