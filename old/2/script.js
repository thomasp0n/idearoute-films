// Create Animated Particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particlesContainer.appendChild(particle);
    }
}

createParticles();

// Portfolio Data with correct YouTube video titles
const portfolioProjects = [
    {
        title: "IdeaRoute Films - Showreel 2024",
        category: "reel",
        youtubeId: "sQk8NkhT8UU",
        thumbnail: "https://img.youtube.com/vi/sQk8NkhT8UU/maxresdefault.jpg"
    },
    {
        title: "Rainco - Guru Panduru TVC",
        category: "tvc",
        youtubeId: "8ZVcz7cMAi4",
        thumbnail: "https://img.youtube.com/vi/8ZVcz7cMAi4/maxresdefault.jpg"
    },
    {
        title: "Arpico Super Center - Christmas TVC",
        category: "tvc",
        youtubeId: "nRAb_AzfN00",
        thumbnail: "https://img.youtube.com/vi/nRAb_AzfN00/hqdefault.jpg"
    },
    {
        title: "Matta Matti - Sunny Austin ft. Hirushi Jayasena",
        category: "music",
        youtubeId: "iHitM-uVmwE",
        thumbnail: "https://img.youtube.com/vi/iHitM-uVmwE/maxresdefault.jpg"
    },
    {
        title: "DULUX SuperKote - Favorite Color TVC",
        category: "tvc",
        youtubeId: "e3r3atWHYkk",
        thumbnail: "https://img.youtube.com/vi/e3r3atWHYkk/maxresdefault.jpg"
    },
    {
        title: "Hasangana - Tilan GT x Poppunk",
        category: "music",
        youtubeId: "ZDUMvC_WNsk",
        thumbnail: "https://img.youtube.com/vi/ZDUMvC_WNsk/maxresdefault.jpg"
    },
    {
        title: "Kolam Natannata - Nadeemal Perera",
        category: "music",
        youtubeId: "z-PAp-WOYcA",
        thumbnail: "https://img.youtube.com/vi/z-PAp-WOYcA/maxresdefault.jpg"
    },
    {
        title: "Sithuvili - Eranga UG, Chandralekha Perera & Rookantha Goonatillake",
        category: "music",
        youtubeId: "GlIRiOYc6lM",
        thumbnail: "https://img.youtube.com/vi/GlIRiOYc6lM/maxresdefault.jpg"
    },
    {
        title: "Hadakari - Nadeemal Perera X Pasan Liyanage",
        category: "music",
        youtubeId: "DQQcqDqMhsM",
        thumbnail: "https://img.youtube.com/vi/DQQcqDqMhsM/maxresdefault.jpg"
    },
    {
        title: "Mayam Kirilli - Ishan Lantra",
        category: "music",
        youtubeId: "elHHfhqwYNY",
        thumbnail: "https://img.youtube.com/vi/elHHfhqwYNY/maxresdefault.jpg"
    },
    {
        title: "Veenavi - Iraj Ft. Ashanya, Neo & Jay Princce",
        category: "music",
        youtubeId: "MtAXfij4x00",
        thumbnail: "https://img.youtube.com/vi/MtAXfij4x00/maxresdefault.jpg"
    }
];

// Updated Services Data
const services = [
    {
        number: "01",
        icon: "📺",
        title: "TV Commercials (TVCs)",
        description: "High-quality broadcast commercials crafted for global and local audiences"
    },
    {
        number: "02",
        icon: "🎬",
        title: "Digital Films & Branded Content",
        description: "Engaging digital stories designed for social platforms, web campaigns, and online audiences"
    },
    {
        number: "03",
        icon: "📹",
        title: "Commercial Productions",
        description: "End-to-end creative and production services for product, lifestyle, and brand-focused commercials"
    },
    {
        number: "04",
        icon: "🎞️",
        title: "Documentary Films",
        description: "Authentic, insightful documentaries with strong storytelling and cinematic visuals"
    },
    {
        number: "05",
        icon: "🏢",
        title: "Corporate Profiles & Brand Films",
        description: "Professional corporate videos that highlight your company's vision, culture, and achievements"
    },
    {
        number: "06",
        icon: "🎵",
        title: "Music Videos",
        description: "Conceptual, performance-driven, and narrative music videos with creative direction"
    },
    {
        number: "07",
        icon: "🎪",
        title: "Event Videos",
        description: "Coverage and highlight films for corporate events, brand activations, launches, and concerts"
    },
    {
        number: "08",
        icon: "✨",
        title: "VFX, 3D & Post-Production",
        description: "Advanced CGI, motion graphics, compositing, editing, colour grading, and sound design"
    },
    {
        number: "09",
        icon: "🌍",
        title: "International Production Support",
        description: "Full foreign production solutions including crew, logistics, locations, permits, and line production for global clients shooting in Sri Lanka"
    }
];

// Loading Screen
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loadingScreen').classList.add('hidden');
    }, 2000);
});

// Navigation Scroll Effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Render Portfolio
const portfolioGrid = document.getElementById('portfolioGrid');
portfolioProjects.forEach((project, index) => {
    const item = document.createElement('div');
    item.className = 'portfolio-item';
    item.dataset.category = project.category;
    item.style.transitionDelay = `${index * 0.1}s`;
    item.innerHTML = `
        <img src="${project.thumbnail}" alt="${project.title}" class="portfolio-image">
        <div class="portfolio-overlay">
            <div class="portfolio-category">${project.category}</div>
            <h3 class="portfolio-title">${project.title}</h3>
        </div>
        <div class="play-button"></div>
    `;
    item.addEventListener('click', () => openModal(project.youtubeId));
    portfolioGrid.appendChild(item);
});

// Portfolio Filter
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const items = document.querySelectorAll('.portfolio-item');
        items.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.classList.remove('hidden');
                setTimeout(() => item.classList.add('visible'), 10);
            } else {
                item.classList.add('hidden');
                item.classList.remove('visible');
            }
        });
    });
});

// Render Services
const servicesGrid = document.getElementById('servicesGrid');
services.forEach((service, index) => {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.style.transitionDelay = `${index * 0.1}s`;
    card.innerHTML = `
        <div class="service-number">${service.number}</div>
        <div class="service-icon">${service.icon}</div>
        <h3 class="service-title">${service.title}</h3>
        <p class="service-description">${service.description}</p>
    `;
    servicesGrid.appendChild(card);
});

// Modal Functions
const modal = document.getElementById('videoModal');
const modalClose = document.getElementById('modalClose');
const videoWrapper = document.getElementById('videoWrapper');

function openModal(youtubeId) {
    const iframe = `<iframe src="https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    videoWrapper.innerHTML = iframe;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    videoWrapper.innerHTML = '';
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Form Submission
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    if (name && email && subject && message) {
        formMessage.textContent = 'Thank you for your message! We\'ll get back to you soon.';
        formMessage.className = 'form-message success';
        formMessage.style.display = 'block';
        contactForm.reset();
    } else {
        formMessage.textContent = 'Please fill in all fields.';
        formMessage.className = 'form-message error';
        formMessage.style.display = 'block';
    }
    
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
});

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.portfolio-item').forEach(el => observer.observe(el));

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});