// ── Particle system ──
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let W, H, particles = [];

function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

class Particle {
    constructor() { this.reset(); }
    reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = -Math.random() * 0.4 - 0.1;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = Math.random() > 0.7 ? '#F5C842' : '#ffffff';
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.y < -5) this.reset();
        if (this.x < 0) this.x = W;
        if (this.x > W) this.x = 0;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
    }
}

for (let i = 0; i < 180; i++) particles.push(new Particle());
function animParticles() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    ctx.globalAlpha = 1;
    requestAnimationFrame(animParticles);
}
animParticles();

// ── Build 21 sun rays ──
const sunRays = document.getElementById('sunRays');
for (let i = 0; i < 21; i++) {
    const ray = document.createElement('div');
    ray.className = 'ray';
    ray.style.transform = `rotate(${i * (360 / 21)}deg)`;
    sunRays.appendChild(ray);
}

// ── Scroll reveal ──
const reveals = document.querySelectorAll('.reveal, .t-event');
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); }
    });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// ── Parallax on hero ──
window.addEventListener('scroll', () => {
    const y = window.scrollY;
    const hero = document.getElementById('hero');
    if (y < window.innerHeight) {
        hero.querySelector('.mountains').style.transform = `translateY(${y * 0.25}px)`;
        hero.querySelector('.sun-wrap').style.transform = `translate(-50%, calc(-58% + ${y * 0.15}px))`;
    }
});

// ── Attach smooth scroll handlers for buttons with data-target
document.querySelectorAll('.scroll-to').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const sel = btn.getAttribute('data-target');
        if (!sel) return;
        const target = document.querySelector(sel);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ── Music: allow adding audio URLs to each singer card
document.querySelectorAll('.add-audio').forEach((b, i) => {
    b.addEventListener('click', () => {
        const url = window.prompt('أدخل رابط ملف صوتي (mp3/ogg):');
        if (!url) return;
        const card = b.closest('.hero-card');
        const player = card.querySelector('.song-player');
        player.src = url;
        player.load();
        player.play().catch(() => console.log('Audio ready: ', url));
    });
});

// ── Load default audio files (public-domain / PD or CC on Wikimedia Commons)
const defaultAudio = {
    'Şivan Perwer': 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Ey_Reqib_-_%C5%9Eivan_Perwer.wav',
    'حسن زيرك': 'https://upload.wikimedia.org/wikipedia/commons/8/82/K%C3%BB%C5%99_dell%C3%AA_feleka_-_Hesen_Z%C3%AErek.ogg'
};
document.querySelectorAll('#music .hero-card').forEach(card => {
    const name = card.querySelector('h3')?.textContent.trim();
    if (name && defaultAudio[name]) {
        const player = card.querySelector('.song-player');
        player.src = defaultAudio[name];
    }
});

// ── Security: Disable right-click context menu on sensitive content (optional)
document.addEventListener('contextmenu', (e) => {
    // Allow on images/links, but can restrict on critical elements
    // This is optional - comment out if you want to allow right-click
    // e.preventDefault();
});
let lang = {
    hello: 'مرحبا',
    welcome: 'مرحبًا بكم في موقعنا',
}
en: {
    hello: 'Hello',
        welcome : 'Welcome to our site',
}
const lang = {
    'ar': {
        'welcome': 'مرحباً بكم في موقعنا',
        'desc': 'هذا موقع متعدد اللغات.'
    },
    'en': {
        'welcome': 'Welcome to our site',
        'desc': 'This is a multi-language website.'
    }
};

function updateLanguage(selectedLang) {
    const nodes = document.querySelectorAll('[data-lang]');

    nodes.forEach(node => {
        const key = node.getAttribute('data-lang');
        if (lang[selectedLang] && lang[selectedLang][key]) {
            node.textContent = lang[selectedLang][key];
        }
    });

    // تغيير اتجاه الصفحة بناءً على اللغة
    document.body.dir = (selectedLang === 'ar') ? 'rtl' : 'ltr';
}

// تشغيل عند تغيير القائمة
document.getElementById('language-selector').addEventListener('change', (e) => {
    updateLanguage(e.target.value);
});
console.log('✓ Site loaded securely - DOM ready, particles running, UI attached.');
