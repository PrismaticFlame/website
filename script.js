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
        tile.querySelectorAll('.tag').forEach(tag => {
            const span = document.createElement('span');
            span.className = 'tag';
            span.textContent = tag.textContent;
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
