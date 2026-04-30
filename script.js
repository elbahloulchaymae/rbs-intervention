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
// ========== ANIMATION AU SCROLL ==========
// Fonction pour animer les éléments quand ils apparaissent
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .feature, .stat-card, .info-card, .section-title, .contact-cards');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        
        if (elementPosition < screenPosition - 100) {
            element.classList.add('animate-show');
        }
    });
}

// Ajouter la classe CSS pour l'animation
const style = document.createElement('style');
style.textContent = `
    .service-card, .feature, .stat-card, .info-card, .contact-cards, .section-title {
        opacity: 0;
        transform: translateY(40px);
        transition: all 0.7s ease-out;
    }
    
    .service-card.animate-show, 
    .feature.animate-show, 
    .stat-card.animate-show, 
    .info-card.animate-show, 
    .contact-cards.animate-show,
    .section-title.animate-show {
        opacity: 1;
        transform: translateY(0);
    }
    
    /* Délais différents pour les services */
    .service-card:nth-child(1) { transition-delay: 0.1s; }
    .service-card:nth-child(2) { transition-delay: 0.2s; }
    .service-card:nth-child(3) { transition-delay: 0.3s; }
    .service-card:nth-child(4) { transition-delay: 0.4s; }
    .service-card:nth-child(5) { transition-delay: 0.5s; }
`;
document.head.appendChild(style);

// Écouter le scroll
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
animateOnScroll();

// ========== HOVER EFFETS AMÉLIORÉS AVEC JS ==========
// Ajouter des effets supplémentaires au survol
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const img = this.querySelector('.service-img-wrapper img');
        if (img) {
            img.style.transform = 'scale(1.08)';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        const img = this.querySelector('.service-img-wrapper img');
        if (img) {
            img.style.transform = 'scale(1)';
        }
    });
});

// Effet sur les boutons
document.querySelectorAll('.btn-primary, .btn-outline, .service-link').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

console.log('✅ Animations et hover effects activés !');