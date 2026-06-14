let skillCategories = [];
let projects = [];
let testimonials = [];

// ===== Color Helpers =====
const colorMap = {
  primary: { main: '#0284C7', light: '#E0F2FE' },
  secondary: { main: '#43A047', light: '#E8F5E9' },
  accent: { main: '#F59E0B', light: '#FEF3C7' },
};

const categoryColors = {
  'Mobile Development': { bg: '#E0F2FE', text: '#1D4ED8' },
  'Machine Learning': { bg: '#F3E8FF', text: '#6B21A8' },
  'IoT & Multi-Platform': { bg: '#E8F5E9', text: '#047857' },
  'Web Development': { bg: '#E8F5E9', text: '#047857' },
  'Desktop Application': { bg: '#FFF7ED', text: '#9A3412' },
  'Systems Programming': { bg: '#FEE2E2', text: '#B91C1C' },
  'Python Tools': { bg: '#F3E8FF', text: '#6B21A8' },
};

function getCategoryColors(category) {
  return categoryColors[category] || { bg: '#F9FAFB', text: '#1F2937' };
}

function getMainTechList() {
  return ['All', ...new Set(projects.map(p => p.mainTech))];
}

// ===== Navigation =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const navLinkEls = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  navbar.classList.toggle('scrolled', scrollY > 50);

  const sections = document.querySelectorAll('section[id]');
  sections.forEach(section => {
    const top = section.offsetTop - 150;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute('id');
    if (scrollY >= top && scrollY < bottom) {
      navLinkEls.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + id);
      });
    }
  });
});

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinkEls.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ===== Skills Grid =====
function renderSkills() {
  const skillsGrid = document.getElementById('skillsGrid');

  skillCategories.forEach((cat, idx) => {
    const colors = colorMap[cat.color] || colorMap.primary;
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', String(idx * 100));

    const chipsHTML = cat.skills.map(skill => {
      const pct = Math.round(skill.proficiency * 100);
      const gradient = `conic-gradient(${colors.main} ${pct * 3.6}deg, #e5e7eb ${pct * 3.6}deg)`;
      return `<span class="skill-chip" title="Proficiency: ${pct}%">
      <span class="skill-chip-progress" style="background:${gradient}"></span>
      ${skill.name}
    </span>`;
    }).join('');

    card.innerHTML = `
    <div class="skill-card-header" style="background:${colors.light};color:${colors.main}">
      <i class="fas ${cat.icon}"></i>
    </div>
    <h3 class="skill-card-title">${cat.title}</h3>
    <div class="skill-chips">${chipsHTML}</div>
  `;
    skillsGrid.appendChild(card);
  });
}

// ===== Projects Grid =====
const projectsGrid = document.getElementById('projectsGrid');
const filtersContainer = document.querySelector('.project-filters');

let selectedTechFilter = null;

function renderFilters() {
  filtersContainer.innerHTML = '';
  const techList = getMainTechList();

  techList.forEach((filter, i) => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (i === 0 ? ' active' : '');
    btn.dataset.filter = filter;
    btn.textContent = filter;
    btn.addEventListener('click', () => {
      selectedTechFilter = filter === 'All' ? null : filter;
      renderProjects();
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
    filtersContainer.appendChild(btn);
  });
}

function renderProjects() {
  const filtered = selectedTechFilter
    ? projects.filter(p => p.mainTech === selectedTechFilter)
    : projects;

  console.log('renderProjects - filtered count:', filtered.length);
  projectsGrid.innerHTML = '';

  filtered.forEach((project, idx) => {
    console.log('Rendering card', idx, project.title);
    const catColors = getCategoryColors(project.category);
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', String(idx * 80));

    const wrapper = document.createElement('div');
    wrapper.className = 'project-card-image-wrapper';

    const img = document.createElement('img');
    img.className = 'project-card-image';
    img.src = project.image;
    img.alt = project.title;
    img.loading = 'lazy';
    img.onerror = function() {
      this.onerror = function() {
        this.src = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200"><rect fill="#1f2937" width="400" height="200"/><text x="200" y="110" text-anchor="middle" fill="#6b7280" font-size="14" font-family="sans-serif">Image unavailable</text></svg>');
      };
      this.src = 'assets/default-image.png';
    };
    wrapper.appendChild(img);

    const badge = document.createElement('div');
    badge.className = 'project-card-badge';
    badge.style.cssText = `background:${catColors.bg};color:${catColors.text}`;
    badge.innerHTML = `<i class="fas ${project.icon}"></i> ${project.category}`;
    wrapper.appendChild(badge);

    const overlay = document.createElement('div');
    overlay.className = 'project-card-overlay';
    wrapper.appendChild(overlay);

    card.appendChild(wrapper);

    const body = document.createElement('div');
    body.className = 'project-card-body';

    const title = document.createElement('h3');
    title.className = 'project-card-title';
    title.textContent = project.title;
    body.appendChild(title);

    const desc = document.createElement('p');
    desc.className = 'project-card-desc';
    desc.textContent = project.description;
    body.appendChild(desc);

    const techDiv = document.createElement('div');
    techDiv.className = 'project-card-tech';
    project.tech.forEach(t => {
      const tag = document.createElement('span');
      tag.className = 'project-tech-tag';
      tag.textContent = t;
      techDiv.appendChild(tag);
    });
    body.appendChild(techDiv);

    const links = document.createElement('div');
    links.className = 'project-card-links';

    const liveA = document.createElement('a');
    liveA.href = project.liveLink || '#';
    liveA.target = project.liveLink ? '_blank' : '_self';
    liveA.className = 'project-link project-link-live' + (project.liveLink ? '' : ' disabled');
    if (!project.liveLink) liveA.onclick = function() { return false; };
    liveA.innerHTML = '<i class="fas fa-link"></i> ' + (project.liveLink ? 'View Live' : 'View Project');
    links.appendChild(liveA);

    const sourceA = document.createElement('a');
    sourceA.href = project.sourceLink || '#';
    sourceA.target = project.sourceLink ? '_blank' : '_self';
    sourceA.className = 'project-link project-link-source' + (project.sourceLink ? '' : ' disabled');
    if (!project.sourceLink) sourceA.onclick = function() { return false; };
    sourceA.innerHTML = '<i class="fas fa-code"></i> Source Code';
    links.appendChild(sourceA);

    body.appendChild(links);
    card.appendChild(body);
    projectsGrid.appendChild(card);
    console.log('Card', idx, 'appended');
  });
  console.log('renderProjects done');
}

// ===== Testimonials Carousel =====
let currentTestimonialIndex = 0;

const testimonialAvatar = document.getElementById('testimonialAvatar');
const testimonialStars = document.getElementById('testimonialStars');
const testimonialQuote = document.getElementById('testimonialQuote');
const testimonialAuthor = document.getElementById('testimonialAuthor');
const testimonialCompany = document.getElementById('testimonialCompany');
const carouselDots = document.getElementById('carouselDots');
const prevBtn = document.getElementById('prevTestimonial');
const nextBtn = document.getElementById('nextTestimonial');

function renderTestimonial(index) {
  const t = testimonials[index];
  if (!t) return;
  testimonialAvatar.src = t.avatar;
  testimonialAvatar.alt = t.author;
  testimonialStars.innerHTML = Array(t.rating).fill('<i class="fas fa-star"></i>').join('');
  testimonialQuote.textContent = `"${t.quote}"`;
  testimonialAuthor.textContent = t.author;
  testimonialCompany.textContent = t.company;

  document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function renderDots() {
  carouselDots.innerHTML = '';
  testimonials.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => {
      currentTestimonialIndex = i;
      renderTestimonial(i);
    });
    carouselDots.appendChild(dot);
  });
}

// ===== EmailJS Config =====
const EMAILJS_CONFIG = {
  publicKey: 'JiftZe62VMeAog5Yi',
  serviceID: 'service_8hgwvbg',
  templateID: 'template_sthurh3',
};

emailjs.init(EMAILJS_CONFIG.publicKey);

// ===== Contact Form =====
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const formSubmit = document.getElementById('formSubmit');

function showError(input, errorEl, message) {
  input.classList.add('error');
  errorEl.textContent = message;
}

function clearError(input, errorEl) {
  input.classList.remove('error');
}

function validateEmail(email) {
  return /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}

nameInput.addEventListener('input', () => clearError(nameInput, nameError));
emailInput.addEventListener('input', () => clearError(emailInput, emailError));
messageInput.addEventListener('input', () => clearError(messageInput, messageError));

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  let valid = true;

  if (!nameInput.value.trim()) {
    showError(nameInput, nameError, 'Please enter your name');
    valid = false;
  }

  if (!emailInput.value.trim()) {
    showError(emailInput, emailError, 'Please enter your email');
    valid = false;
  } else if (!validateEmail(emailInput.value.trim())) {
    showError(emailInput, emailError, 'Please enter a valid email');
    valid = false;
  }

  if (!messageInput.value.trim()) {
    showError(messageInput, messageError, 'Please enter your message');
    valid = false;
  }

  if (!valid) return;

  formSubmit.disabled = true;
  formSubmit.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceID,
      EMAILJS_CONFIG.templateID,
      {
        name: nameInput.value.trim(),
        from_name: nameInput.value.trim(),
        from_email: emailInput.value.trim(),
        message: messageInput.value.trim(),
        to_name: 'Ahmed',
      }
    );

    if (response.status === 200) {
      showToast('Thank you for your message! I\'ll get back to you soon.');
      nameInput.value = '';
      emailInput.value = '';
      messageInput.value = '';
    } else {
      showToast('Something went wrong. Please try again.');
    }
  } catch (error) {
    console.error('EmailJS error:', error);
    showToast('Failed to send. Please email me directly at Ahmed.Ibrahim.official.mail@gmail.com');
  }

  formSubmit.disabled = false;
  formSubmit.innerHTML = '<i class="fas fa-paper-plane"></i><span>Send Message</span>';
});

// ===== Toast =====
function showToast(message) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast show';
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// ===== Scroll Animations (Intersection Observer) =====
function initAOS() {
  const els = document.querySelectorAll('[data-aos]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.dataset.aosDelay) || 0;
        setTimeout(() => {
          entry.target.classList.add('aos-animate');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  els.forEach(el => observer.observe(el));
}

// ===== Data Loading & App Initialization =====
async function loadData() {
  const [skillsRes, projRes, testRes] = await Promise.all([
    fetch('data/skills.json'),
    fetch('data/projects.json'),
    fetch('data/testimonials.json')
  ]);
  skillCategories = await skillsRes.json();
  projects = await projRes.json();
  testimonials = await testRes.json();
}

async function init() {
  try {
    await loadData();
    console.log('Data loaded:', { skills: skillCategories.length, projects: projects.length, testimonials: testimonials.length });

    console.log('mainTech values:', projects.map(p => p.mainTech));
    console.log('unique mainTech:', getMainTechList());
    console.log('Total projects:', projects.length);

    renderSkills();
    console.log('Calling renderFilters...');
    renderFilters();
    console.log('Calling renderProjects...');
    renderProjects();
    console.log('renderProjects completed');

    renderDots();
    renderTestimonial(0);

    prevBtn.addEventListener('click', () => {
      currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
      renderTestimonial(currentTestimonialIndex);
    });

    nextBtn.addEventListener('click', () => {
      currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
      renderTestimonial(currentTestimonialIndex);
    });

    initAOS();
    requestAnimationFrame(() => {
      document.querySelectorAll('[data-aos]').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          const delay = parseInt(el.dataset.aosDelay) || 0;
          setTimeout(() => el.classList.add('aos-animate'), delay);
        }
      });
    });
  } catch (e) {
    console.error('Failed to load data:', e);
  }
}

init();
