// ===========================
// GENERATIVE AI ENGINEER ROADMAP
// Advanced JavaScript for Animations & Interactivity
// ===========================

// ===========================
// 1. PARTICLE BACKGROUND ANIMATION
// ===========================

function createParticles() {
    const particleContainer = document.getElementById('particleContainer');
    const particleCount = window.innerWidth > 768 ? 50 : 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 3 + 1;
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 5;
        const leftPosition = Math.random() * 100;
        
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = leftPosition + '%';
        particle.style.bottom = '-10px';
        particle.style.animation = `float ${duration}s linear ${delay}s infinite`;
        
        // Random color between primary and accent
        const colors = ['rgba(0, 255, 136, 0.5)', 'rgba(0, 212, 255, 0.5)', 'rgba(102, 126, 234, 0.5)'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        particleContainer.appendChild(particle);
    }
}

createParticles();

// ===========================
// 2. SCROLL PROGRESS BAR
// ===========================

function updateScrollProgress() {
    const scrollProgress = document.getElementById('scrollProgress');
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    
    scrollProgress.style.width = scrolled + '%';
}

window.addEventListener('scroll', updateScrollProgress);

// ===========================
// 3. ANIMATED COUNTERS
// ===========================

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
}

function startCounters() {
    const statsElements = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    statsElements.forEach(element => observer.observe(element));
}

window.addEventListener('load', startCounters);

// ===========================
// 4. TYPING TEXT ANIMATION
// ===========================

function typeText(element, text, speed = 100) {
    let index = 0;
    element.textContent = '';
    
    const typeInterval = setInterval(() => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
        } else {
            clearInterval(typeInterval);
        }
    }, speed);
}

document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        const text = 'Become a Generative AI Engineer';
        typeText(typingElement, text, 80);
    }
});

// ===========================
// 5. FAQ ACCORDION
// ===========================

function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

document.addEventListener('DOMContentLoaded', initializeFAQ);

// ===========================
// 6. TIMELINE ANIMATIONS
// ===========================

function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `slideIn 0.8s ease-out forwards`;
                entry.target.style.animationDelay = `${index * 0.1}s`;
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    timelineItems.forEach(item => observer.observe(item));
}

window.addEventListener('load', animateTimeline);

// ===========================
// 7. SKILL CARDS PROGRESS ANIMATION
// ===========================

function animateSkillBars() {
    const progressBars = document.querySelectorAll('.level-fill');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                bar.style.width = '0';
                
                setTimeout(() => {
                    bar.style.animation = `fillBar 1.5s ease-out forwards`;
                    bar.style.width = width;
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    progressBars.forEach(bar => observer.observe(bar));
}

window.addEventListener('load', animateSkillBars);

// ===========================
// 8. SCROLL-TRIGGERED ANIMATIONS
// ===========================

function initScrollAnimations() {
    const elements = document.querySelectorAll('.skill-card, .project-card, .tool-box, .routine-card, .career-card, .mistake-card, .resource-card');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeInUp 0.8s ease-out forwards`;
                entry.target.style.animationDelay = `${index * 0.1}s`;
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    elements.forEach(element => observer.observe(element));
}

window.addEventListener('load', initScrollAnimations);

// ===========================
// 9. NAVIGATION HIGHLIGHTING
// ===========================

function highlightNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 200) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === currentSection) {
                link.classList.add('active');
            }
        });
    });
}

highlightNavigation();

// ===========================
// 10. MOBILE MENU TOGGLE
// ===========================

function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.style.display = 'none';
            });
        });
    }
}

window.addEventListener('DOMContentLoaded', initMobileMenu);

// ===========================
// 11. SMOOTH SCROLL FOR ANCHORS
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// 12. CTA BUTTON ACTIONS
// ===========================

function initCTAButtons() {
    const startBtn = document.getElementById('startBtn');
    const ctaBtn = document.getElementById('ctaBtn');
    
    const handleCTA = () => {
        alert('🚀 Welcome to Your Gen AI Journey!\n\nYour roadmap awaits. Start with Python fundamentals and progress through our 12-month structured path.\n\nGood luck on your transformation! 💪');
    };
    
    if (startBtn) {
        startBtn.addEventListener('click', handleCTA);
    }
    
    if (ctaBtn) {
        ctaBtn.addEventListener('click', handleCTA);
    }
}

window.addEventListener('DOMContentLoaded', initCTAButtons);

// ===========================
// 13. PARALLAX EFFECT
// ===========================

function initParallax() {
    const parallaxElements = document.querySelectorAll('.gradient-sphere');
    
    window.addEventListener('scroll', () => {
        parallaxElements.forEach((element, index) => {
            const scrollPosition = window.scrollY;
            const speed = (index + 1) * 0.5;
            element.style.transform = `translateY(${scrollPosition * speed}px)`;
        });
    });
}

initParallax();

// ===========================
// 14. FLOATING CARDS INTERACTION
// ===========================

function initFloatingCards() {
    const floatingCards = document.querySelectorAll('.floating-card');
    
    floatingCards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
            // Stop animation and apply custom transform
            card.style.animation = 'none';
        });
        
        card.addEventListener('mouseleave', () => {
            // Restart animation
            const animationName = ['float-card-1', 'float-card-2', 'float-card-3'][index];
            card.style.animation = `${animationName} 6s ease-in-out infinite`;
        });
    });
}

initFloatingCards();

// ===========================
// 15. DYNAMIC ROADMAP HIGHLIGHTING
// ===========================

function dynamicRoadmapHighlight() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.borderColor = 'var(--primary-color)';
            } else {
                entry.target.style.borderColor = 'rgba(0, 255, 136, 0.2)';
            }
        });
    }, observerOptions);
    
    timelineItems.forEach(item => observer.observe(item));
}

window.addEventListener('load', dynamicRoadmapHighlight);

// ===========================
// 16. HOVER EFFECTS FOR BUTTONS
// ===========================

function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            button.style.setProperty('--x', x + 'px');
            button.style.setProperty('--y', y + 'px');
        });
    });
}

initButtonEffects();

// ===========================
// 17. INTERSECTION OBSERVER FOR FADE-IN
// ===========================

function initFadeInOnScroll() {
    const elements = document.querySelectorAll('section, .project-card, .skill-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.animation = 'fadeInUp 1s ease-out';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    elements.forEach(element => {
        element.style.opacity = '0';
        observer.observe(element);
    });
}

window.addEventListener('load', initFadeInOnScroll);

// ===========================
// 18. PAGE LOAD ANIMATION
// ===========================

function initPageLoad() {
    // Fade in main content on load
    const body = document.body;
    body.style.opacity = '0';
    body.style.transition = 'opacity 0.8s ease-in';
    
    window.addEventListener('load', () => {
        body.style.opacity = '1';
    });
}

initPageLoad();

// ===========================
// 19. ACTIVE LINK STYLING
// ===========================

function updateActiveLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (window.location.hash === link.getAttribute('href')) {
            link.classList.add('active');
        }
        
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

window.addEventListener('load', updateActiveLink);

// ===========================
// 20. PERFORMANCE OPTIMIZATION
// ===========================

// Throttle function for scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Use throttled scroll for better performance
window.addEventListener('scroll', throttle(updateScrollProgress, 16));
window.addEventListener('scroll', throttle(highlightNavigation, 16));

// ===========================
// 21. RESPONSIVE ADJUSTMENTS
// ===========================

function handleResponsive() {
    if (window.innerWidth <= 768) {
        // Disable certain animations on mobile for better performance
        const particles = document.querySelectorAll('.particle');
        particles.forEach(particle => {
            particle.style.opacity = '0.5';
        });
    }
}

window.addEventListener('resize', handleResponsive);
window.addEventListener('load', handleResponsive);

// ===========================
// 22. ROADMAP PROGRESS TRACKING
// ===========================

function initRoadmapProgress() {
    const progressBars = document.querySelectorAll('.timeline-card .progress');
    
    const months = ['Month 1-2', 'Month 3-4', 'Month 5-6', 'Month 7-8', 'Month 9-10', 'Month 11', 'Month 12'];
    const currentMonth = new Date().getMonth(); // 0-11
    
    progressBars.forEach((bar, index) => {
        // Calculate progress based on current time of year
        let progress = Math.min(((currentMonth / 12) * 100), 100);
        
        // Add some variation for different months
        progress = Math.min(progress + (index * 5), 100);
        
        bar.style.width = progress + '%';
    });
}

window.addEventListener('load', initRoadmapProgress);

// ===========================
// 23. SMOOTH HOVER SCALE
// ===========================

function addHoverScale() {
    const cards = document.querySelectorAll('.skill-card, .project-card, .career-card, .tool-box');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02) translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
        });
    });
}

window.addEventListener('load', addHoverScale);

// ===========================
// 24. FORM VALIDATION & SUBMISSION
// ===========================

function initFormHandling() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you! We will contact you soon.');
            form.reset();
        });
    });
}

window.addEventListener('load', initFormHandling);

// ===========================
// 25. KEYBOARD NAVIGATION
// ===========================

document.addEventListener('keydown', (e) => {
    // Esc key to close mobile menu
    if (e.key === 'Escape') {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            navLinks.style.display = 'none';
        }
    }
    
    // Tab through sections
    if (e.key === 'Tab') {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.style.outline = 'none';
            link.addEventListener('focus', () => {
                link.style.outline = '2px solid var(--primary-color)';
            });
        });
    }
});

// ===========================
// 26. CONSOLE MESSAGE
// ===========================

console.log('%c🚀 Welcome to Gen AI Engineer Roadmap!', 'color: #00ff88; font-size: 20px; font-weight: bold;');
console.log('%cYour 12-month journey to becoming a Generative AI Engineer starts here! 💪', 'color: #00d4ff; font-size: 16px;');
console.log('%cCheck out the roadmap and start learning today! 🎓', 'color: #ff006e; font-size: 16px;');

// ===========================
// INITIALIZATION COMPLETE
// ===========================

console.log('✅ All animations and interactions loaded successfully!');
