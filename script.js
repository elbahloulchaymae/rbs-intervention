// ========== BACKGROUND SLIDER ==========
let bgSlideIndex = 1;
let bgSlideInterval;

function showBgSlides(n) {
    let slides = document.getElementsByClassName("bg-slide");
    let dots = document.getElementsByClassName("dot-bg");
    
    if (slides.length === 0) return;
    
    if (n > slides.length) bgSlideIndex = 1;
    if (n < 1) bgSlideIndex = slides.length;
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    
    slides[bgSlideIndex - 1].classList.add("active");
    if (dots[bgSlideIndex - 1]) dots[bgSlideIndex - 1].classList.add("active");
}

function changeBgSlide(n) {
    showBgSlides(bgSlideIndex += n);
    resetBgInterval();
}

function currentBgSlide(n) {
    showBgSlides(bgSlideIndex = n);
    resetBgInterval();
}

function startBgAutoSlide() {
    if (document.getElementsByClassName("bg-slide").length > 0) {
        bgSlideInterval = setInterval(() => {
            changeBgSlide(1);
        }, 5000);
    }
}

function resetBgInterval() {
    clearInterval(bgSlideInterval);
    startBgAutoSlide();
}

if (document.getElementsByClassName("bg-slide").length > 0) {
    showBgSlides(bgSlideIndex);
    startBgAutoSlide();
}

// ========== MOBILE MENU ==========
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) navLinks.classList.toggle('active');
}

// ========== NAVBAR SCROLL ==========
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar && window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else if (navbar) {
        navbar.classList.remove('scrolled');
    }
});

// ========== CLOSE MOBILE MENU ON LINK CLICK ==========
if (document.querySelectorAll('.nav-links a')) {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            const navLinks = document.getElementById('navLinks');
            if (navLinks) navLinks.classList.remove('active');
        });
    });
}

// ========== SET ACTIVE NAV LINK ==========
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ========== CONTACT FORM SUBMIT ==========
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const nom = document.getElementById('nom').value;
        const email = document.getElementById('email').value;
        const telephone = document.getElementById('telephone').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;
        
        let whatsappMessage = "🔵 *NOUVEAU MESSAGE RBS INTERVENTION* 🔵%0A%0A";
        whatsappMessage += "*📋 INFORMATIONS CLIENT :*%0A";
        whatsappMessage += `👤 Nom: ${nom}%0A`;
        whatsappMessage += `📧 Email: ${email}%0A`;
        whatsappMessage += `📞 Téléphone: ${telephone}%0A%0A`;
        whatsappMessage += "*🎯 SERVICE :*%0A";
        whatsappMessage += `${service}%0A%0A`;
        whatsappMessage += "*💬 MESSAGE :*%0A";
        whatsappMessage += `${message}%0A%0A`;
        whatsappMessage += "---%0A";
        whatsappMessage += "_Message envoyé depuis le site RBS Intervention_";
        
        alert("✓ Redirection vers WhatsApp...");
        window.open(`https://wa.me/212667757472?text=${whatsappMessage}`, '_blank');
        
        setTimeout(() => {
            document.getElementById('contactForm').reset();
        }, 2000);
    });
}

setActiveNavLink();