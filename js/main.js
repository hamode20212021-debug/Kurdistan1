// ── Particle system ──
const canvas = document.getElementById('particles');
const ctx = (canvas && canvas.getContext) ? canvas.getContext('2d') : null;
let W, H, particles = [];

function resize() {
    if (!canvas || !ctx) return;
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
}
if (canvas && ctx) {
    resize();
    window.addEventListener('resize', resize);
}

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

if (canvas && ctx) {
    for (let i = 0; i < 180; i++) particles.push(new Particle());
    function animParticles() {
        ctx.clearRect(0, 0, W, H);
        particles.forEach(p => { p.update(); p.draw(); });
        ctx.globalAlpha = 1;
        requestAnimationFrame(animParticles);
    }
    animParticles();
}

// ── Build 21 sun rays ──
const sunRays = document.getElementById('sunRays');
if (sunRays) {
    for (let i = 0; i < 21; i++) {
        const ray = document.createElement('div');
        ray.className = 'ray';
        ray.style.transform = `rotate(${i * (360 / 21)}deg)`;
        sunRays.appendChild(ray);
    }
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
    if (y < window.innerHeight && hero) {
        const mountains = hero.querySelector('.mountains');
        const sunWrap = hero.querySelector('.sun-wrap');
        if (mountains) mountains.style.transform = `translateY(${y * 0.25}px)`;
        if (sunWrap) sunWrap.style.transform = `translate(-50%, calc(-58% + ${y * 0.15}px))`;
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
        if (player) player.src = defaultAudio[name];
    }
});

// ── Security: Disable right-click context menu on sensitive content (optional)
document.addEventListener('contextmenu', (e) => {
    // Allow on images/links, but can restrict on critical elements
    // This is optional - comment out if you want to allow right-click
    // e.preventDefault();
});

// ── Mobile Navigation Toggle ──
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('open');
        navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('open');
            navLinks.classList.remove('open');
        });
    });
}

// ══════════════════════════════════════════
//  LANGUAGE SWITCHER  (exposed on window so HTML onclick works)
// ══════════════════════════════════════════
const langNames = { ar: 'العربية', ku: 'Kurdî', en: 'English' };

window.changeLanguage = function (lang) {
    if (typeof translations === 'undefined' || !translations[lang]) return;

    const dict = translations[lang];

    // Auto-map existing Arabic text nodes to translation keys (so we don't need to annotate every element)
    try {
        const base = translations['ar'] || {};
        const reverse = Object.keys(base).reduce((acc, k) => {
            const v = (base[k] || '').toString().trim();
            if (v) acc[v] = k;
            return acc;
        }, {});

        // operate on leaf nodes only (no child elements)
        document.querySelectorAll('body *:not(script):not(style)').forEach(el => {
            if (el.hasAttribute && el.hasAttribute('data-translate')) return;
            if (el.children && el.children.length) return;
            const html = (el.innerHTML || '').toString().trim();
            const text = (el.textContent || '').toString().trim();
            if (!html && !text) return;
            // prefer HTML match (for entries with tags), otherwise text
            const key = reverse[html] || reverse[text];
            if (key) {
                el.setAttribute('data-translate', key);
            }
        });
    } catch (e) { /* ignore auto-mapping errors */ }

    // 1. Translate all [data-translate] elements
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (dict[key] !== undefined) {
            // Use innerHTML for entries containing HTML tags (em, br, a, strong)
            if (/<[a-z]/i.test(dict[key])) {
                el.innerHTML = dict[key];
            } else {
                el.textContent = dict[key];
            }
        }
    });

    // 2. Set page direction
    const dir = (lang === 'en') ? 'ltr' : 'rtl';
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
    document.body.dir = dir;

    // 3. Update globe button label
    const langCurrent = document.getElementById('langCurrent');
    if (langCurrent) langCurrent.textContent = langNames[lang];

    // 4. Highlight the active option
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // 5. Show checkmark on selected language only
    ['ar', 'ku', 'en'].forEach(code => {
        const el = document.getElementById('check-' + code);
        if (el) el.textContent = (code === lang) ? '✓' : '';
    });

    // 6. Translate YouTube buttons (.yt-btn) if present
    try {
        const playKey = 'play_channel';
        if (dict && dict[playKey]) {
            const full = dict[playKey];
            const text = full.replace(/^▶\s*/, '');
            document.querySelectorAll('.yt-btn').forEach(a => {
                const icon = a.querySelector('.yt-icon') ? a.querySelector('.yt-icon').outerHTML : '';
                // replace inner HTML with icon + localized label
                a.innerHTML = icon + ' ' + '<span class="yt-label">' + text + '</span>';
            });
        }
    } catch (e) { /* ignore */ }

    // 6. Persist choice
    try { localStorage.setItem('kurdistan_lang', lang); } catch (e) { }

    // 7. Close the dropdown
    const switcher = document.getElementById('langSwitcher');
    if (switcher) switcher.classList.remove('open');
};

// ── Globe button: open/close dropdown ──
const langBtn = document.getElementById('langBtn');
const langSwitcher = document.getElementById('langSwitcher');

if (langBtn && langSwitcher) {
    langBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        langSwitcher.classList.toggle('open');
    });

    // Close when clicking anywhere outside the switcher
    document.addEventListener('click', function (e) {
        if (!langSwitcher.contains(e.target)) {
            langSwitcher.classList.remove('open');
        }
    });
}


console.log('✓ Site loaded securely - DOM ready, particles running, lang system active.');

// Apply saved language on load (falls back to Arabic)
(function () {
    let saved = null;
    try { saved = localStorage.getItem('kurdistan_lang'); } catch (e) { saved = null; }
    if (!saved) saved = 'ar';
    // call the global function to apply translations and UI state
    if (typeof window.changeLanguage === 'function') {
        window.changeLanguage(saved);
    }
})();

