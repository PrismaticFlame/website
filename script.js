const overlay = document.getElementById('modal-overlay');
const modalTitle = document.getElementById('modal-title');
const modalTags = document.getElementById('modal-tags');
const modalDescription = document.getElementById('modal-description');
const modalClose = document.getElementById('modal-close');

document.querySelectorAll('.project-tile').forEach(tile => {
    tile.addEventListener('click', () => {
        modalTitle.textContent = tile.querySelector('h3').textContent;
        modalDescription.textContent = tile.dataset.description;

        modalTags.innerHTML = '';
        (tile.dataset.tags || '').split('|').forEach(entry => {
            const [name, type] = entry.split(':');
            if (!name) return;
            const span = document.createElement('span');
            span.className = `tag tag-${type}`;
            span.textContent = name;
            modalTags.appendChild(span);
        });

        const github = document.getElementById('modal-github');
        const githubUrl = tile.dataset.github;
        if (githubUrl) {
            github.href = githubUrl;
            github.style.display = 'inline-block';
        } else {
            github.style.display = 'none';
        }

        overlay.classList.remove('hidden');
    });
});

modalClose.addEventListener('click', () => {
    overlay.classList.add('hidden');
});

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.add('hidden');
});

const track = document.querySelector('.carousel-track');
const tiles = document.querySelectorAll('.project-tile');
const prevBtn = document.getElementById('carousel-prev');
const nextBtn = document.getElementById('carousel-next');
const visibleCount = 5;
let currentIndex = 0;

function updateCarousel() {
    const tileWidth = tiles[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * tileWidth}px)`;
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= tiles.length - visibleCount;
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < tiles.length - visibleCount) {
        currentIndex++;
        updateCarousel();
    }
});

// --- Quantum Superposition: QEC Tile ---
const qecTile = document.getElementById('qec-tile');
const qecGradient = qecTile.querySelector('.superposition-gradient');
const qecCyclingTitle = qecTile.querySelector('.superposition-cycling-title');
const qecRealTitle = qecTile.querySelector('.superposition-real-title');

const superpositionTitles = [
    'Surface Code Stabilizer',
    'Syndrome Measurement Active',
    '|0⟩ + |1⟩ Neural Decoder',
    'Decoherence Threshold Analysis'
];

let qecIndex = 0;
let qecCollapsed = false;

const qecInterval = setInterval(() => {
    qecCyclingTitle.style.opacity = '0';
    setTimeout(() => {
        qecIndex = (qecIndex + 1) % superpositionTitles.length;
        qecCyclingTitle.textContent = superpositionTitles[qecIndex];
        qecCyclingTitle.style.opacity = '1';
    }, 500);
}, 2500);

function playCollapseSound() {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + 0.4);
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.5);
}

function collapseWaveFunction() {
    if (qecCollapsed) return;
    qecCollapsed = true;
    clearInterval(qecInterval);
    playCollapseSound();

    qecGradient.style.opacity = '0';
    qecCyclingTitle.style.opacity = '0';

    setTimeout(() => {
        qecGradient.style.animation = 'none';
        qecCyclingTitle.style.display = 'none';
        qecRealTitle.style.display = 'block';
        requestAnimationFrame(() => requestAnimationFrame(() => {
            qecRealTitle.style.opacity = '1';
        }));
    }, 500);
}

qecTile.addEventListener('mouseenter', collapseWaveFunction);
