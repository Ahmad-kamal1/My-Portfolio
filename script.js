// script.js - Enhanced Portfolio

document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio website loaded! ');
    
    // ========== Certifications Data ==========
const certifications = [
    {
        id: 1,
        title: "JavaScript Essentials 1",
        issuer: "Cisco Networking Academy",
        date: "2025",
        description: "Fundamental JavaScript programming concepts including variables, data types, operators, control structures, functions, and basic DOM manipulation.",
        pdfPath: "assets/certificates/JS essentials1.pdf",
        skills: ["JavaScript", "Programming Fundamentals", "Algorithm Design"]
    },
    {
        id: 2,
        title: "JavaScript Essentials 2",
        issuer: "Cisco Networking Academy",
        date: "2025",
        description: "Advanced JavaScript topics covering object-oriented programming, asynchronous JavaScript, ES6+ features, error handling, and modern development practices.",
        pdfPath: "assets/certificates/JS essentials2.pdf",
        skills: ["Advanced JavaScript", "Async Programming", "ES6+", "Error Handling"]
    },
    {
        id: 3,
        title: "English for IT",
        issuer: "Cisco Networking Academy",
        date: "2025",
        description: "Specialized English language course focusing on IT vocabulary, technical documentation, professional communication in technology contexts, and IT-specific language skills.",
        pdfPath: "assets/certificates/Englishfor IT.pdf",
        skills: ["Technical English", "IT Vocabulary", "Professional Communication", "Documentation"]
    }
];

// ========== Certificate Modal Elements ==========
const certificateModal = document.getElementById('certificateModal');
const closeCertificateModal = document.querySelector('.close-certificate-modal');
const certificatePdfViewer = document.getElementById('certificatePdfViewer');
const downloadCertificateBtn = document.getElementById('downloadCertificateBtn');
const certificateModalTitle = document.getElementById('certificateModalTitle');
const certificationsContainer = document.getElementById('certificationsContainer');
    // ========== Projects Data ==========
    const projects = [
        {
            id: 1,
            title: "Elegantvenues - Wedding Hall Booking Platform",
            description: "A comprehensive wedding hall booking system with user authentication, venue management, booking system, and admin dashboard. This full-stack application allows users to browse venues, book appointments, and manage their bookings seamlessly.",
            images: [
                "assets/images/project1/home.jpg",
                "assets/images/project1/login.jpg",
                "assets/images/project1/admin dashboard.jpg",
                "assets/images/project1/admin login.jpg",
                "assets/images/project1/register.jpg",
                "assets/images/project1/contumer management.jpg",
                "assets/images/project1/report and analysis.jpg",
                "assets/images/project1/contact us.jpg",
                "assets/images/project1/about.jpg",
                "assets/images/project1/setting.jpg",
                "assets/images/project1/overall Frame.jpg",
            ],
            technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL",],
            category: "fullstack",
            features: [
                "User Registration & Login System",
                "Venue Catalog with Advanced Filtering",
                "Real-time Booking Management",
                "Admin Dashboard with Analytics",
                "Responsive Mobile Design",
                "User Reviews & Ratings System"
            ],
            liveLink: "#",
            githubLink: "https://github.com/Ahmad-kamal1/Wedding-Hall-Booking"
        },
       {
            id: 2,
            title: "My-Portfolio",
            description: "A modern and responsive personal portfolio website showcasing my skills, projects, and experience in web development. Built using HTML, CSS, and JavaScript, this portfolio highlights my work, creativity, and passion for building clean and user-friendly digital experiences.",
            images: [
                "assets/images/project2/home.jpg",
                "assets/images/project2/contact me.jpg",
                "assets/images/project2/about.jpg",
                "assets/images/project2/my project.jpg",
                "assets/images/project2/my skill.jpg",
                "assets/images/project2/my qualification.jpg",
                "assets/images/project2/overall.jpg",
            ],
            technologies: ["HTML5", "CSS3", "JavaScript",],
            category: "frontend",
            features: [
                "Home Page",
                "About Me",
                "My Projects Showcase",
                "My Qualification",
                "Responsive Mobile Design",
                "Contact Me"
            ],
            liveLink: "https://ahmad-kamal1.github.io/My-Portfolio/",
            githubLink: "https://github.com/Ahmad-kamal1/My-Portfolio"
        },
          {
            id: 3,
            title: "Basic-Calculator",
            description: "A clean, responsive, and user-friendly web-based calculator built using HTML, CSS, and JavaScript.",
            images: [
                "assets/images/project3/dark mode calculator.jpg",
                "assets/images/project3/light mode calculator.jpg",
            ],
            technologies: ["HTML5", "CSS3", "JavaScript",],
            category: "frontend",
            features: [
                "Home Page",
                "About Me",
                "My Projects Showcase",
                "My Qualification",
                "Responsive Mobile Design",
                "Contact Me"
            ],
            liveLink: "#",
            githubLink: "https://github.com/Ahmad-kamal1/Basic-Calculator"
        },
    ];
    
    // ========== Initialize Certifications ==========
function initCertifications() {
    if (!certificationsContainer) return;
    
    renderCertifications();
    attachCertificateEventListeners();
}

// ========== Render Certifications ==========
function renderCertifications() {
    certificationsContainer.innerHTML = '';
    
    certifications.forEach(cert => {
        const certCard = createCertificationCard(cert);
        certificationsContainer.innerHTML += certCard;
    });
}

function createCertificationCard(cert) {
    return `
        <div class="certification-card" data-id="${cert.id}">
            <div class="certification-header">
                <h3 class="certification-title">${cert.title}</h3>
                <span class="certification-date">${cert.date}</span>
            </div>
            <p class="certification-issuer">${cert.issuer}</p>
            <p class="certification-description">${cert.description}</p>
            <div class="certification-skills">
                ${cert.skills.map(skill => 
                    `<span class="certification-skill">${skill}</span>`
                ).join('')}
            </div>
            <div class="certification-actions">
                <button class="certification-btn preview-btn" data-id="${cert.id}">
                    <i class="fas fa-eye"></i> Preview Certificate
                </button>
                <a href="${cert.pdfPath}" class="certification-btn view-btn" download="${cert.title.replace(/\s+/g, '-').toLowerCase()}-certificate.pdf">
                    <i class="fas fa-download"></i> Download PDF
                </a>
            </div>
        </div>
    `;
}

// ========== Certificate Modal Functions ==========
function openCertificateModal(certificateId) {
    const cert = certifications.find(c => c.id === certificateId);
    if (!cert) return;
    
    // Set modal content
    certificateModalTitle.textContent = `${cert.title} - ${cert.issuer}`;
    
    // Set PDF viewer source
    certificatePdfViewer.src = cert.pdfPath;
    
    // Set download link
    downloadCertificateBtn.href = cert.pdfPath;
    downloadCertificateBtn.download = `${cert.title.replace(/\s+/g, '-').toLowerCase()}-certificate.pdf`;
    
    // Show modal
    certificateModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Smooth appearance
    setTimeout(() => {
        certificateModal.style.opacity = '1';
    }, 10);
}

function closeCertificateModalFunc() {
    certificateModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Clear PDF viewer
    certificatePdfViewer.src = '';
}

// ========== Attach Certificate Event Listeners ==========
function attachCertificateEventListeners() {
    // Preview certificate buttons
    document.querySelectorAll('.preview-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const certId = parseInt(this.getAttribute('data-id'));
            openCertificateModal(certId);
        });
    });
    
    // Close certificate modal
    closeCertificateModal?.addEventListener('click', closeCertificateModalFunc);
    
    // Close certificate modal on outside click
    certificateModal?.addEventListener('click', function(e) {
        if (e.target === certificateModal) {
            closeCertificateModalFunc();
        }
    });
    
    // Close certificate modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && certificateModal.style.display === 'flex') {
            closeCertificateModalFunc();
        }
    });
}
    // Fallback image in case project images don't load
    const fallbackImage = "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
    
    // ========== DOM Elements ==========
    const projectsContainer = document.getElementById('projectsContainer');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectModal = document.getElementById('projectModal');
    const closeModal = document.querySelector('.close-modal');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.querySelector('.nav-menu');
    const resumeBtn = document.getElementById('resumeBtn');
    
    // Modal elements
    const modalMainImage = document.getElementById('modalMainImage');
    const modalProjectTitle = document.getElementById('modalProjectTitle');
    const modalProjectTech = document.getElementById('modalProjectTech');
    const modalProjectDescription = document.getElementById('modalProjectDescription');
    const modalProjectFeatures = document.getElementById('modalProjectFeatures');
    const modalLiveLink = document.getElementById('modalLiveLink');
    const modalGitHubLink = document.getElementById('modalGitHubLink');
    const thumbnailContainer = document.getElementById('thumbnailContainer');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    // ========== Gallery State ==========
    let currentImageIndex = 0;
    let currentProjectImages = [];
    
    // ========== Initialize ==========
    function init() {
        renderProjects();
         initCertifications();
        attachEventListeners();
        setupAnimations();
        console.log('Portfolio initialized! ✨');
    }
    
    // ========== Render Projects ==========
    function renderProjects(filter = 'all') {
        if (!projectsContainer) return;
        
        projectsContainer.innerHTML = '';
        
        const filteredProjects = filter === 'all' 
            ? projects 
            : projects.filter(project => project.category === filter);
        
        if (filteredProjects.length === 0) {
            projectsContainer.innerHTML = `
                <div class="no-projects" style="grid-column: 1/-1; text-align: center; padding: 60px;">
                    <i class="fas fa-folder-open" style="font-size: 3rem; color: var(--text-light); margin-bottom: 20px;"></i>
                    <h3 style="color: var(--text); margin-bottom: 10px;">No projects found in this category</h3>
                    <p style="color: var(--text-light);">Try selecting a different filter or check back soon for new projects!</p>
                </div>
            `;
            return;
        }
        
        filteredProjects.forEach(project => {
            const projectCard = createProjectCard(project);
            projectsContainer.innerHTML += projectCard;
        });
        
        // Re-attach event listeners to new cards
        attachProjectCardListeners();
        
        // Animate project cards
        animateProjectCards();
    }
    
    function createProjectCard(project) {
        const firstImage = project.images && project.images.length > 0 ? project.images[0] : fallbackImage;
        const truncatedDescription = project.description.length > 120 
            ? project.description.substring(0, 120) + '...' 
            : project.description;
        
        return `
            <div class="project-card" data-category="${project.category}" data-id="${project.id}">
                <div class="project-image">
                    <img src="${firstImage}" alt="${project.title}" 
                         onerror="this.src='${fallbackImage}'">
                    <div class="project-overlay">
                        <button class="overlay-btn view-project" data-id="${project.id}">
                            <i class="fas fa-eye"></i>
                        </button>
                        ${project.liveLink !== '#' ? `
                        <a href="${project.liveLink}" class="overlay-btn" target="_blank" onclick="event.stopPropagation()">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                        ` : ''}
                        <a href="${project.githubLink}" class="overlay-btn" target="_blank" onclick="event.stopPropagation()">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${truncatedDescription}</p>
                    <div class="project-tech">
                        ${project.technologies.slice(0, 3).map(tech => 
                            `<span class="tech-tag">${tech}</span>`
                        ).join('')}
                        ${project.technologies.length > 3 ? 
                            `<span class="tech-tag">+${project.technologies.length - 3}</span>` : ''}
                    </div>
                    <div class="project-links">
                        <button class="project-link view-project" data-id="${project.id}">
                            <i class="fas fa-eye"></i> View Details
                        </button>
                        <a href="${project.githubLink}" class="project-link secondary" target="_blank" onclick="event.stopPropagation()">
                            <i class="fab fa-github"></i> Source Code
                        </a>
                    </div>
                </div>
            </div>
        `;
    }
    
    // ========== Event Listeners ==========
    function attachEventListeners() {
        // Filter buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                const filterValue = this.getAttribute('data-filter');
                renderProjects(filterValue);
            });
        });
        
        // Close modal
        closeModal?.addEventListener('click', closeProjectModal);
        
        // Close modal on outside click
        projectModal?.addEventListener('click', function(e) {
            if (e.target === projectModal) {
                closeProjectModal();
            }
        });
        
        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeProjectModal();
            }
        });
        
        // Gallery navigation
        prevBtn?.addEventListener('click', showPreviousImage);
        nextBtn?.addEventListener('click', showNextImage);
        
        // Keyboard navigation in gallery
        document.addEventListener('keydown', function(e) {
            if (projectModal.style.display === 'flex') {
                if (e.key === 'ArrowLeft') showPreviousImage();
                if (e.key === 'ArrowRight') showNextImage();
            }
        });
        
        // Mobile menu toggle
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', toggleMobileMenu);
        }
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navMenu.classList.remove('active');
                }
            });
        });
        
        // Resume button
        if (resumeBtn) {
            resumeBtn.addEventListener('click', function() {
                alert('Resume download starting...');
                // In a real implementation, this would trigger a file download
                window.open('assets/images/icons/pdf/My-resume.pdf', '_blank');
            });
        }
        
        // Newsletter form
        const newsletterForm = document.getElementById('newsletterForm');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const emailInput = this.querySelector('input[type="email"]');
                const email = emailInput.value.trim();
                
                if (email && validateEmail(email)) {
                    const submitBtn = this.querySelector('button');
                    const originalText = submitBtn.innerHTML;
                    
                    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
                    submitBtn.disabled = true;
                    
                    // Simulate API call
                    setTimeout(() => {
                        alert('Thank you for subscribing! You\'ll receive updates soon.');
                        emailInput.value = '';
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                    }, 1500);
                } else {
                    alert('Please enter a valid email address.');
                }
            });
        }
    }
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function toggleMobileMenu() {
        navMenu.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }
    
    function attachProjectCardListeners() {
        // View project buttons
        document.querySelectorAll('.view-project').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const projectId = parseInt(this.getAttribute('data-id'));
                openProjectModal(projectId);
            });
        });
        
        // Project card click
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', function(e) {
                if (!e.target.closest('.overlay-btn') && !e.target.closest('.project-link')) {
                    const projectId = parseInt(this.getAttribute('data-id'));
                    openProjectModal(projectId);
                }
            });
        });
    }
    
    // ========== Modal Functions ==========
    function openProjectModal(projectId) {
        const project = projects.find(p => p.id === projectId);
        if (!project) return;
        
        // Set modal content
        modalProjectTitle.textContent = project.title;
        modalProjectDescription.textContent = project.description;
        
        // Set technologies
        modalProjectTech.innerHTML = project.technologies
            .map(tech => `<span class="tech-tag">${tech}</span>`)
            .join('');
        
        // Set features
        modalProjectFeatures.innerHTML = project.features
            .map(feature => `<li>${feature}</li>`)
            .join('');
        
        // Set links
        modalLiveLink.href = project.liveLink;
        modalGitHubLink.href = project.githubLink;
        
        // Handle live link availability
        if (project.liveLink === '#') {
            modalLiveLink.style.opacity = '0.6';
            modalLiveLink.style.cursor = 'not-allowed';
            modalLiveLink.setAttribute('aria-disabled', 'true');
            modalLiveLink.onclick = (e) => {
                e.preventDefault();
                alert('Live demo not available for this project. Check GitHub for source code.');
            };
        } else {
            modalLiveLink.style.opacity = '1';
            modalLiveLink.style.cursor = 'pointer';
            modalLiveLink.removeAttribute('aria-disabled');
            modalLiveLink.onclick = null;
        }
        
        // Set up image gallery
        setupImageGallery(project.images);
        
        // Show modal
        projectModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Smooth appearance
        setTimeout(() => {
            projectModal.style.opacity = '1';
        }, 10);
    }
    
    function setupImageGallery(images) {
        if (!images || images.length === 0) {
            images = [fallbackImage];
        }
        
        currentProjectImages = images;
        currentImageIndex = 0;
        
        // Set main image
        modalMainImage.src = images[0];
        modalMainImage.alt = `Project image 1 of ${images.length}`;
        modalMainImage.onerror = function() {
            this.src = fallbackImage;
        };
        
        // Create thumbnails
        thumbnailContainer.innerHTML = '';
        images.forEach((image, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = image;
            thumbnail.alt = `Thumbnail ${index + 1}`;
            thumbnail.className = index === 0 ? 'thumbnail active' : 'thumbnail';
            thumbnail.onerror = function() {
                this.src = fallbackImage;
            };
            
            thumbnail.addEventListener('click', () => {
                setActiveImage(index);
            });
            
            thumbnailContainer.appendChild(thumbnail);
        });
        
        // Show/hide navigation buttons
        updateNavigationButtons();
    }
    
    function setActiveImage(index) {
        currentImageIndex = index;
        
        // Update main image
        modalMainImage.src = currentProjectImages[index];
        modalMainImage.alt = `Project image ${index + 1} of ${currentProjectImages.length}`;
        
        // Update active thumbnail
        document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
            thumb.classList.toggle('active', i === index);
        });
    }
    
    function showNextImage() {
        if (currentProjectImages.length <= 1) return;
        currentImageIndex = (currentImageIndex + 1) % currentProjectImages.length;
        setActiveImage(currentImageIndex);
    }
    
    function showPreviousImage() {
        if (currentProjectImages.length <= 1) return;
        currentImageIndex = (currentImageIndex - 1 + currentProjectImages.length) % currentProjectImages.length;
        setActiveImage(currentImageIndex);
    }
    
    function updateNavigationButtons() {
        const showButtons = currentProjectImages.length > 1;
        if (prevBtn) prevBtn.style.display = showButtons ? 'flex' : 'none';
        if (nextBtn) nextBtn.style.display = showButtons ? 'flex' : 'none';
    }
    
    function closeProjectModal() {
        projectModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // Reset gallery
        currentProjectImages = [];
        currentImageIndex = 0;
    }
    
    // ========== Animations ==========
    function setupAnimations() {
        // Animate skill bars on scroll
        const skillBars = document.querySelectorAll('.skill-level');
        const observerOptions = {
            threshold: 0.5
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillBar = entry.target;
                    const width = skillBar.style.width;
                    skillBar.style.width = '0';
                    
                    setTimeout(() => {
                        skillBar.style.width = width;
                    }, 300);
                    
                    observer.unobserve(skillBar);
                }
            });
        }, observerOptions);
        
        skillBars.forEach(bar => {
            observer.observe(bar);
        });
    }
    
    function animateProjectCards() {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 150);
        });
    }
    
    // ========== Other Functionality ==========
    
    // Back to top button
    const backToTopBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', function() {
        if (backToTopBtn) {
            backToTopBtn.style.display = window.pageYOffset > 300 ? 'flex' : 'none';
        }
        
        // Navbar background on scroll
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (window.pageYOffset > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.05)';
            }
        }
    });
    
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href;
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Initialize the portfolio
    init();
});
