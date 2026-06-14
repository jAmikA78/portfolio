// ===== Data =====
const skillCategories = [
  {
    icon: 'fa-mobile-alt', title: 'Mobile Development',
    color: 'primary',
    skills: [
      { name: 'Flutter', proficiency: 0.90 },
      { name: 'Dart', proficiency: 0.85 },
      { name: 'Kotlin', proficiency: 0.80 },
      { name: 'Firebase', proficiency: 0.80 },
      { name: 'Android SDK', proficiency: 0.75 },
      { name: 'REST APIs', proficiency: 0.85 },
      { name: 'State Management (Provider, Bloc)', proficiency: 0.80 },
      { name: 'Push Notifications', proficiency: 0.75 },
    ]
  },
  {
    icon: 'fa-graduation-cap', title: 'Teaching & Mentorship',
    color: 'secondary',
    skills: [
      { name: 'C++ Beginner to Advanced', proficiency: 0.90 },
      { name: 'DSA & Problem Solving', proficiency: 0.92 },
      { name: 'Competitive Programming Coaching', proficiency: 0.88 },
      { name: 'Curriculum Design', proficiency: 0.85 },
      { name: 'Live Coding & Debugging', proficiency: 0.90 },
      { name: 'Contest Organization', proficiency: 0.85 },
      { name: 'Mentored 500+ Students', proficiency: 1.0 },
      { name: 'MACPC Leadership (Ended Sep 2024)', proficiency: 1.0 },
    ]
  },
  {
    icon: 'fa-terminal', title: 'Programming Languages',
    color: 'secondary',
    skills: [
      { name: 'Python', proficiency: 0.92 },
      { name: 'C++', proficiency: 0.88 },
      { name: 'Java', proficiency: 0.87 },
      { name: 'Dart', proficiency: 0.85 },
      { name: 'SQL', proficiency: 0.85 },
      { name: 'PHP', proficiency: 0.70 },
    ]
  },
  {
    icon: 'fa-microchip', title: 'C++ Systems & Competitive Programming',
    color: 'accent',
    skills: [
      { name: 'C++17 / STL', proficiency: 0.88 },
      { name: 'CMake & Ninja', proficiency: 0.80 },
      { name: 'Memory Allocators (First/Best/Worst-Fit)', proficiency: 0.85 },
      { name: 'OOP & Design Patterns', proficiency: 0.85 },
      { name: 'File I/O & Persistence', proficiency: 0.80 },
      { name: 'Data Structures (Linked List, Stack, Queue, Tree)', proficiency: 0.90 },
      { name: 'Algorithms (Greedy, DP, Binary Search, Graph)', proficiency: 0.88 },
      { name: 'Codeforces (500+ Problems Solved)', proficiency: 0.85 },
    ]
  },
  {
    icon: 'fa-desktop', title: 'Java Desktop & Enterprise',
    color: 'secondary',
    skills: [
      { name: 'Flutter Desktop', proficiency: 0.99 },
      { name: 'Java Swing', proficiency: 0.85 },
      { name: 'JPA / Hibernate', proficiency: 0.78 },
      { name: 'JDBC', proficiency: 0.82 },
      { name: 'MySQL Integration', proficiency: 0.85 },
      { name: 'CRUD & Transactions', proficiency: 0.85 },
      { name: 'Search & Sort Algorithms', proficiency: 0.80 },
    ]
  },
  {
    icon: 'fa-globe', title: 'Web Development',
    color: 'primary',
    skills: [
      { name: 'Flutter Web', proficiency: 0.99 },
      { name: 'HTML', proficiency: 0.95 },
      { name: 'CSS', proficiency: 0.92 },
      { name: 'JavaScript', proficiency: 0.85 },
      { name: 'Bootstrap', proficiency: 0.82 },
      { name: 'PHP + MySQL Backend', proficiency: 0.75 },
      { name: 'Google Sites', proficiency: 0.75 },
      { name: 'Responsive Design', proficiency: 0.80 },
    ]
  },
  {
    icon: 'fa-database', title: 'Database Management',
    color: 'secondary',
    skills: [
      { name: 'MySQL', proficiency: 0.88 },
      { name: 'Microsoft SQL Server', proficiency: 0.80 },
      { name: 'Firebase Realtime DB', proficiency: 0.78 },
      { name: 'SQLite', proficiency: 0.75 },
      { name: 'Database Design & Normalization', proficiency: 0.85 },
      { name: 'Indexing & Query Optimization', proficiency: 0.78 },
    ]
  },
  {
    icon: 'fa-tools', title: 'Development Tools & Collaboration',
    color: 'primary',
    skills: [
      { name: 'Git', proficiency: 0.92 },
      { name: 'GitHub', proficiency: 0.90 },
      { name: 'Android Studio', proficiency: 0.88 },
      { name: 'VS Code', proficiency: 0.95 },
      { name: 'IntelliJ IDEA', proficiency: 0.85 },
      { name: 'Linux (Ubuntu)', proficiency: 0.82 },
      { name: 'Windows', proficiency: 0.95 },
      { name: 'Google Drive Suite', proficiency: 0.90 },
      { name: 'Microsoft Office', proficiency: 0.88 },
      { name: 'Figma (Basic UI/UX)', proficiency: 0.65 },
    ]
  },
];

const projects = [
  {
    title: 'ANIS - Child Client',
    description: 'An Android native client for the child phone in a parental control system. Part of the ANIS Solutions ecosystem for monitoring and managing children\'s device usage.',
    image: 'https://drive.google.com/file/d/1AQw2bbUw8VU3HxVHIPoKnHoAxHMFlIYt/view?usp=drive_link',
    mainTech: 'Android Native',
    tech: ['Android Native', 'Kotlin', 'Parental Control', 'Firebase', 'REST APIs'],
    category: 'Mobile Development',
    icon: 'fa-child',
    sourceLink: 'https://github.com/ANIS-Solutions/Child-app',
    liveLink: 'https://anis.solutions',
  },
  {
    title: 'MovieX',
    description: 'A native Android app built with modern Android development practices. Provides an intuitive interface to discover trending movies, search for titles, view detailed information including cast and reviews, and save favorites for later.',
    image: 'https://drive.google.com/file/d/1Wip7TmNNW7fSeiNG9Mxad60aDGDX1QPA/view?usp=sharing',
    mainTech: 'Android Native',
    tech: ['Android Native', 'Kotlin', 'REST APIs', 'TMDB API', 'Material Design'],
    category: 'Mobile Development',
    icon: 'fa-film',
    sourceLink: 'https://github.com/jAmikA78/MovieX',
    liveLink: 'https://moviexwebsite.netlify.app/',
  },
  {
    title: 'Quran Karim',
    description: 'Complete Flutter mobile app providing access to the Quran in text and audio formats, along with a searchable Hadith dataset from major Islamic texts. Supports offline reading, bookmarks, multilingual recitations, and Firebase for user preferences.',
    image: 'https://static-sg.winudf.com/apk-com-img/70480791f8e45f3dd822f2a50fac3207f8a07d534bc136bc766eb6548bbe56ea3902308a.jpg',
    mainTech: 'Flutter',
    tech: ['Flutter', 'Dart', 'SQLite', 'Firebase', 'Audio Players', 'Offline Support'],
    category: 'Mobile Development',
    icon: 'fa-book-open',
    sourceLink: 'https://github.com/jAmikA78/Quran-Karim',
    liveLink: '',
  },
  {
    title: 'Palestine Supporter',
    description: 'Secure Flutter chat app enabling users to edit and preview text before posting on social media, bypassing content moderation algorithms.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf9n3uxRvy3PyXJL06HK0vtNxU2nL7GmUEHQ&s',
    mainTech: 'Flutter',
    tech: ['Flutter', 'Dart', 'Firebase Auth', 'Provider State Management', 'Text Processing'],
    category: 'Mobile Development',
    icon: 'fa-shield-alt',
    sourceLink: 'https://github.com/jAmikA78/Palestine-Supporter',
    liveLink: '',
  },
  {
    title: 'News App',
    description: 'Cross-platform Flutter news aggregator with real-time updates via NewsAPI, categories, search, favorites, offline reading, image caching, and background notifications.',
    image: 'https://drive.google.com/file/d/1rIYb0mMBFC1hi-XA4yMuBKp0r81l5xTO/view?usp=drive_link',
    mainTech: 'Flutter',
    tech: ['Flutter', 'Dart', 'REST API (NewsAPI)', 'Provider', 'Image Caching', 'Push Notifications'],
    category: 'Mobile Development',
    icon: 'fa-newspaper',
    sourceLink: 'https://github.com/jAmikA78/News-App',
    liveLink: '',
  },
  {
    title: 'Glyph Quest',
    description: 'Cross-platform typing mastery app built with Flutter for mobile, desktop, and web.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLZ5uLTGGpEc36TUS_XeyBEskhxAO9H8V6bg&s',
    mainTech: 'Flutter',
    tech: ['Flutter', 'Dart', 'Firebase Sync', 'Cross-Platform', 'Offline-First'],
    category: 'Mobile Development',
    icon: 'fa-keyboard',
    sourceLink: 'https://github.com/jAmikA78/Glyph-Quest',
    liveLink: '',
  },
  {
    title: 'DSA Coach',
    description: 'Flutter mobile app for problem-solving students, featuring a tracker, tutorials, videos, and 500+ DSA practice problems with progress dashboard and Firebase authentication.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtIHM6XUyIcpYtrn11jg6N_esJoMAN05yC-A&s',
    mainTech: 'Flutter',
    tech: ['Flutter', 'Dart', 'Firebase Auth', 'Offline Support', 'Video Integration'],
    category: 'Mobile Development',
    icon: 'fa-school',
    sourceLink: 'https://github.com/jAmikA78/DSA--Coach',
    liveLink: '',
  },
  {
    title: 'Toxic Comment Classification',
    description: 'High-performance CNN model for toxic comment detection, achieving 92% accuracy on a large Wikipedia dataset labeled by human reviewers.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    mainTech: 'AI/ML',
    tech: ['Python', 'CNN', 'TensorFlow', 'scikit-learn', 'NLP', 'NumPy'],
    category: 'Machine Learning',
    icon: 'fa-brain',
    sourceLink: 'https://github.com/jAmikA78/Toxic-Comment-Classification',
    liveLink: '',
  },
  {
    title: 'Car Model Detector',
    description: 'Deep learning CNN model trained on a custom dataset of over 7,000 high-quality images for multi-class car model classification.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_eysuWZpoA9JBdTqJZK5yz5h0ra9WgvEMZXR9ekH7aIAKRGSmRbW4XnXasm_YAr3yEhM&usqp=CAU',
    mainTech: 'AI/ML',
    tech: ['Python', 'CNN', 'Deep Learning', 'scikit-learn', 'NumPy', 'Custom Dataset'],
    category: 'Machine Learning',
    icon: 'fa-car',
    sourceLink: 'https://github.com/jAmikA78/Cars-classification',
    liveLink: '',
  },
  {
    title: 'Mesh Car',
    description: 'Innovative IoT project with ESP8266-based smart car for WiFi-enabled control.',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    mainTech: 'IoT',
    tech: ['ESP8266', 'Python', 'Tkinter', 'Flutter', 'Dart', 'HTML/JS', 'Voice APIs', 'WiFi Protocols'],
    category: 'IoT & Multi-Platform',
    icon: 'fa-car-side',
    sourceLink: 'https://github.com/jAmikA78/mesh_car',
    liveLink: '',
  },
  {
    title: 'AI Services Platform',
    description: 'Team-developed full-stack web app offering AI functionalities like image generation, chatbot, TTS/STT using APIs.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    mainTech: 'Web',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'APIs'],
    category: 'Web Development',
    icon: 'fa-globe',
    sourceLink: '',
    liveLink: '',
  },
  {
    title: 'Hotel Management System',
    description: 'Java desktop application featuring Swing GUI for hotel operations management.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/b0/b9/d0/cheap-hotels.jpg?w=1200&h=-1&s=1',
    mainTech: 'Desktop',
    tech: ['Java', 'Swing', 'MySQL', 'JDBC', 'Search/Sort Algorithms'],
    category: 'Desktop Application',
    icon: 'fa-hotel',
    sourceLink: 'https://github.com/jAmikA78/Hotel-Management-System',
    liveLink: '',
  },
  {
    title: 'Mail Order System',
    description: 'Java desktop app for order flow management, including processing, inventory tracking, delivery.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPUXYkwUZycZBDOuDaUA9Q7X2izfLEwDs-C7Ffhe5pa3EwHTeYjwu2t4X7LsCZ8xEuYUA&usqp=CAU',
    mainTech: 'Desktop',
    tech: ['Java', 'Swing', 'MySQL', 'JDBC', 'Transaction Logging'],
    category: 'Desktop Application',
    icon: 'fa-shipping-fast',
    sourceLink: 'https://github.com/jAmikA78/Mail-Order',
    liveLink: '',
  },
  {
    title: 'Bank Management System (BMS)',
    description: 'Console-based C++ banking system using OOP principles, data structures like linked lists.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    mainTech: 'C++',
    tech: ['C++17', 'OOP', 'Linked Lists', 'File I/O', 'CMake', 'Admin Auth'],
    category: 'Systems Programming',
    icon: 'fa-university',
    sourceLink: 'https://github.com/jAmikA78/bank-management-system',
    liveLink: '',
  },
  {
    title: 'Dynamic Memory Allocator Simulator',
    description: 'C++ console application simulating and comparing memory allocation techniques (First-Fit, Best-Fit, Worst-Fit).',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    mainTech: 'C++',
    tech: ['C++17', 'Memory Management', 'CMake', 'Custom UI', 'Fragmentation Analysis'],
    category: 'Systems Programming',
    icon: 'fa-microchip',
    sourceLink: 'https://github.com/jAmikA78/dynamic-memory-allocator-simulator',
    liveLink: '',
  },
  {
    title: 'Bulk Email Sender',
    description: 'Python script for bulk sending personalized HTML emails with embedded images via Gmail SMTP.',
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    mainTech: 'Python',
    tech: ['Python', 'smtplib', 'Email.MIME', 'pandas', 'Jinja2 Templating'],
    category: 'Python Tools',
    icon: 'fa-envelope',
    sourceLink: 'https://github.com/jAmikA78/Mail-Client',
    liveLink: '',
  },
  {
    title: 'Certificate Generator',
    description: 'Lightweight Tkinter GUI tool for generating bulk personalized PDF certificates using image templates.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe2Op2QzH_yCvQiTNQT2R6UrpcNcriP52EhL2Vk3eXpEq44Y_moXoWgIWFbG95yqaiIKg&usqp=CAU',
    mainTech: 'Python',
    tech: ['Python', 'Tkinter', 'Pillow (PIL)', 'ReportLab PDF'],
    category: 'Python Tools',
    icon: 'fa-id-card',
    sourceLink: 'https://github.com/jAmikA78/Certificate-Generator-Pro',
    liveLink: '',
  },
  {
    title: 'Novel Translator',
    description: 'Practical Python utility for translating novel text files using a configurable prompt-driven workflow with OpenAI API.',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    mainTech: 'Python',
    tech: ['Python', 'OpenAI API', 'File I/O', 'Text Processing'],
    category: 'Python Tools',
    icon: 'fa-language',
    sourceLink: 'https://github.com/jAmikA78/Novel-Rewriter',
    liveLink: '',
  },
  {
    title: 'CSV Duplicate Row Cleaner',
    description: 'User-friendly Tkinter GUI tool for removing duplicate rows from CSV files via a 3-step workflow.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    mainTech: 'Python',
    tech: ['Python', 'Tkinter', 'pandas', 'CSV Processing'],
    category: 'Python Tools',
    icon: 'fa-table',
    sourceLink: 'https://github.com/jAmikA78/CSV-Duplicate-Row-Cleaner',
    liveLink: '',
  },
  {
    title: 'YT Downloader GUI',
    description: 'Simple Tkinter-based GUI for downloading YouTube videos and playlists using yt-dlp.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJzXnZFoX3uEH1bdQ6XzLOUdD1fFNBZ2p8sw&s',
    mainTech: 'Python',
    tech: ['Python', 'yt-dlp', 'Tkinter', 'Threading', 'MVVM'],
    category: 'Python Tools',
    icon: 'fa-download',
    sourceLink: 'https://github.com/jAmikA78/YT-Video-downloader',
    liveLink: '',
  },
  {
    title: 'Warehouse Server',
    description: 'Lightweight Python backend starter for warehouse management, featuring REST API skeleton with CRUD endpoints.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
    mainTech: 'Python',
    tech: ['Python', 'Flask', 'SQLAlchemy', 'pytest', 'API Design'],
    category: 'Python Tools',
    icon: 'fa-warehouse',
    sourceLink: 'https://github.com/jAmikA78/Warehouse-server',
    liveLink: '',
  },
];

const testimonials = [
  {
    quote: "انت فرقت معايا جدا فى ال Data structure, انا حرفيا لحد امبارح مكنتش مذاكر كلمه, لميتهم فى كام ساعة ودخلت الامتحان حليت",
    author: "anonymous whatsapp message",
    company: "Modern Academy Student",
    rating: 5,
    avatar: "https://kkc.com/wp-content/uploads/2022/07/Anonymous-Whistleblower-Versus-Confidential-Whistleblower.jpg"
  },
  {
    quote: "اى حد معندوش احمد ابراهيم يشرحله هاشينج فلاح (مع احترامى 🤍).",
    author: "سيف محمد",
    company: "واحد صاحبى",
    rating: 5,
    avatar: "https://kkc.com/wp-content/uploads/2022/07/Anonymous-Whistleblower-Versus-Confidential-Whistleblower.jpg"
  },
];

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

// ===== Tech-based Project Filter =====
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

  // Active nav link
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

console.log('mainTech values:', projects.map(p => p.mainTech));
console.log('unique mainTech:', getMainTechList());
console.log('Total projects:', projects.length);
console.log('Calling renderFilters...');
renderFilters();
console.log('Calling renderProjects...');
try {
  renderProjects();
  console.log('renderProjects completed');
} catch(e) {
  console.error('renderProjects error:', e);
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

prevBtn.addEventListener('click', () => {
  currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
  renderTestimonial(currentTestimonialIndex);
});

nextBtn.addEventListener('click', () => {
  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
  renderTestimonial(currentTestimonialIndex);
});

renderDots();
renderTestimonial(0);

// ===== EmailJS Config =====
// 1. Sign up at https://www.emailjs.com
// 2. Connect an email service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Copy the 3 IDs below
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

// Initial visible elements
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelectorAll('[data-aos]').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        const delay = parseInt(el.dataset.aosDelay) || 0;
        setTimeout(() => el.classList.add('aos-animate'), delay);
      }
    });
  }, 100);
  initAOS();
});
