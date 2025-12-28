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
        title: "Aloe Relief TVC | IdeaRoute Films",
        category: "tvc",
        youtubeId: "yVLubOxsvFU",
        thumbnail: "https://img.youtube.com/vi/yVLubOxsvFU/maxresdefault.jpg"
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
        title: "Pop Punk - Mandarame [feat. BigDoggy]",
        category: "music",
        youtubeId: "geDLgasXNv4",
        thumbnail: "https://img.youtube.com/vi/geDLgasXNv4/maxresdefault.jpg"
    },
    {
        title: "Veenavi - Iraj Ft. Ashanya, Neo & Jay Princce",
        category: "music",
        youtubeId: "MtAXfij4x00",
        thumbnail: "https://img.youtube.com/vi/MtAXfij4x00/maxresdefault.jpg"
    },
    {
        title: "Nipuna Fernando x Costa - Trip",
        category: "music",
        youtubeId: "HfDPzA0V2xw",
        thumbnail: "https://img.youtube.com/vi/HfDPzA0V2xw/maxresdefault.jpg"
    },
    {
        title: "SAAVI ( Kare Badinnada Ran Male ) - Dimi3 x LIl Hassi‬ ft. Yasas Medagedara",
        category: "music",
        youtubeId: "ynN0c10kqw4",
        thumbnail: "https://img.youtube.com/vi/ynN0c10kqw4/maxresdefault.jpg"
    },
    {
        title: "Passa - Ravi Royster X Dimi3",
        category: "music",
        youtubeId: "I313PpwgWvs",
        thumbnail: "https://img.youtube.com/vi/I313PpwgWvs/maxresdefault.jpg"
    },
    {
        title: "Amal Perera - Mareeza",
        category: "music",
        youtubeId: "8dH0kNOP4UY",
        thumbnail: "https://img.youtube.com/vi/8dH0kNOP4UY/maxresdefault.jpg"
    },
    {
        title: "Sihine Mayawi - A Ryan",
        category: "music",
        youtubeId: "Q3Egm57k8fk",
        thumbnail: "https://img.youtube.com/vi/Q3Egm57k8fk/maxresdefault.jpg"
    },
    {
        title: "Oya Nisane - Dimi3",
        category: "music",
        youtubeId: "rlwzjp7yv8M",
        thumbnail: "https://img.youtube.com/vi/rlwzjp7yv8M/maxresdefault.jpg"
    },
    {
        title: "Kasi Panam - Big Doggy x Pop Punk",
        category: "music",
        youtubeId: "8qXFdrzgBMU",
        thumbnail: "https://img.youtube.com/vi/8qXFdrzgBMU/maxresdefault.jpg"
    },
    {
        title: "Pop Punk - Samsara (feat. Shadhir Ahamed) [Aco Electro Mode]",
        category: "music",
        youtubeId: "iDz0zmlCgx4",
        thumbnail: "https://img.youtube.com/vi/iDz0zmlCgx4/maxresdefault.jpg"
    },
    {
        title: "Pop Punk - Nonidana Ra [feat. Freaky Mobbig]",
        category: "music",
        youtubeId: "ZQhs5AK-xsY",
        thumbnail: "https://img.youtube.com/vi/ZQhs5AK-xsY/maxresdefault.jpg"
    },
    {
        title: "Dimi3 x Shakila Dilshan - Heena Thoranna",
        category: "music",
        youtubeId: "1P1D0j3RATI",
        thumbnail: "https://img.youtube.com/vi/1P1D0j3RATI/maxresdefault.jpg"
    },
    // Add some corporate videos (placeholder examples - replace with your actual videos)
    {
        title: "It's Martini Time | IdeaRoute Films",
        category: "corporate",
        youtubeId: "m_JhIERspQI", // Replace with actual corporate video ID
        thumbnail: "https://img.youtube.com/vi/m_JhIERspQI/maxresdefault.jpg"
    },
    {
        title: "It's Martini Time | IdeaRoute Films",
        category: "corporate",
        youtubeId: "m_JhIERspQI", // Replace with actual corporate video ID
        thumbnail: "https://img.youtube.com/vi/m_JhIERspQI/maxresdefault.jpg"
    }
];

// Category name mapping
const categoryNames = {
    reel: 'Showreel',
    tvc: 'Commercials',
    music: 'Music Videos',
    corporate: 'Corporate Films'
};

// Portfolio Category Selection
const categoryCards = document.querySelectorAll('.category-card');
const portfolioCategories = document.querySelector('.portfolio-categories');
const portfolioContent = document.getElementById('portfolioContent');
const portfolioGrid = document.getElementById('portfolioGrid');
const portfolioCategoryTitle = document.getElementById('portfolioCategoryTitle');
const backButton = document.getElementById('backButton');

function loadPortfolioCategory(category) {
    // Clear existing content
    portfolioGrid.innerHTML = '';
    
    // Filter projects by category
    const filteredProjects = portfolioProjects.filter(project => project.category === category);
    
    // Update title
    portfolioCategoryTitle.textContent = categoryNames[category] || category;
    
    // Render filtered projects
    filteredProjects.forEach((project, index) => {
        const item = document.createElement('div');
        item.className = 'portfolio-item';
        item.dataset.category = project.category;
        item.style.transitionDelay = `${index * 0.1}s`;
        item.innerHTML = `
            <img src="${project.thumbnail}" alt="${project.title}" class="portfolio-image">
            <div class="portfolio-overlay">
                <div class="portfolio-category">${categoryNames[project.category]}</div>
                <h3 class="portfolio-title">${project.title}</h3>
            </div>
            <div class="play-button"></div>
        `;
        item.addEventListener('click', () => openModal(project.youtubeId));
        portfolioGrid.appendChild(item);
        
        // Trigger animation
        setTimeout(() => {
            item.classList.add('visible');
        }, 50);
    });
    
    // Show portfolio content, hide categories
    portfolioCategories.style.display = 'none';
    portfolioContent.classList.add('active');
    
    // Scroll to portfolio section
    document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function showCategories() {
    portfolioCategories.style.display = 'grid';
    portfolioContent.classList.remove('active');
    portfolioGrid.innerHTML = '';
}

// Add click event to category cards
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;
        loadPortfolioCategory(category);
    });
});

// Back button functionality
backButton.addEventListener('click', () => {
    showCategories();
    document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Services Data
const services = [
    {
        icon: '<i class="fa-solid fa-tv"></i>',
        title: "TV Commercials (TVCs)",
        description: "High-quality broadcast commercials crafted for global and local audiences"
    },
    {
        icon: '<i class="fa-solid fa-film"></i>',
        title: "Digital Films & Branded Content",
        description: "Engaging digital stories designed for social platforms, web campaigns, and online audiences"
    },
    {
        icon: '<i class="fa-solid fa-video"></i>',
        title: "Commercial Productions",
        description: "End-to-end creative and production services for product, lifestyle, and brand-focused commercials"
    },
    {
        icon: '<i class="fa-solid fa-clapperboard"></i>',
        title: "Documentary Films",
        description: "Authentic, insightful documentaries with strong storytelling and cinematic visuals"
    },
    {
        icon: '<i class="fa-solid fa-building"></i>',
        title: "Corporate Profiles & Brand Films",
        description: "Professional corporate videos that highlight your company's vision, culture, and achievements"
    },
    {
        icon: '<i class="fa-solid fa-music"></i>',
        title: "Music Videos",
        description: "Conceptual, performance-driven, and narrative music videos with creative direction"
    },
    {
        icon: '<i class="fa-solid fa-calendar-days"></i>',
        title: "Event Videos",
        description: "Coverage and highlight films for corporate events, brand activations, launches, and concerts"
    },
    {
        icon: '<i class="fa-solid fa-wand-magic-sparkles"></i>',
        title: "VFX, 3D & Post-Production",
        description: "Advanced CGI, motion graphics, compositing, editing, colour grading, and sound design"
    },
    {
        icon: '<i class="fa-solid fa-globe"></i>',
        title: "International Production Support",
        description: "Full foreign production solutions including crew, logistics, locations, permits, and line production for global clients shooting in Sri Lanka"
    }
];

// Render Services
const servicesGrid = document.getElementById('servicesGrid');
services.forEach((service, index) => {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.style.transitionDelay = `${index * 0.1}s`;
    card.innerHTML = `
        <div class="service-icon">${service.icon}</div>
        <h3 class="service-title">${service.title}</h3>
        <p class="service-description">${service.description}</p>
    `;
    servicesGrid.appendChild(card);
});

// Duplicate Partner Logos for Infinite Scroll
function duplicatePartnerLogos() {
    const track1 = document.getElementById('partnersTrack1');
    const track2 = document.getElementById('partnersTrack2');
    
    if (track1 && track2) {
        // Clone all logos in track 1
        const logos1 = Array.from(track1.children);
        logos1.forEach(logo => {
            const clone = logo.cloneNode(true);
            track1.appendChild(clone);
        });
        
        // Clone all logos in track 2
        const logos2 = Array.from(track2.children);
        logos2.forEach(logo => {
            const clone = logo.cloneNode(true);
            track2.appendChild(clone);
        });
    }
}

duplicatePartnerLogos();

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