document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalTech = document.getElementById('modalTech');
    const modalGallery = document.getElementById('modalGallery');
    const modalFullDesc = document.getElementById('modalFullDesc');
    const closeBtn = document.querySelector('.modal-close');
    const projectCards = document.querySelectorAll('.project-card');

    if (!modal || !modalTitle || !modalTech || !modalGallery || !modalFullDesc || !closeBtn) {
        return;
    }

    let activeCard = null;

    const updateModalText = () => {
        if (!activeCard) return;

        modalTitle.textContent = activeCard.querySelector('h3').textContent;
        modalTech.textContent = activeCard.querySelector('.tech-tag').textContent;
        modalFullDesc.textContent = activeCard.dataset.fullDesc;

        const emptyMessage = modalGallery.querySelector('.gallery-empty');
        if (emptyMessage) {
            emptyMessage.textContent = document.documentElement.lang === 'nl'
                ? 'Er zijn geen afbeeldingen beschikbaar voor dit project.'
                : 'No images are available for this project.';
        }
    };

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            activeCard = card;
            updateModalText();

            const folder = card.dataset.folder || '';
            const files = (card.dataset.images || '').split(',').map(file => file.trim()).filter(Boolean);
            modalGallery.replaceChildren();

            if (files.length === 0) {
                const message = document.createElement('p');
                message.className = 'gallery-empty';
                message.dataset.i18n = 'work.gallery.empty';
                message.textContent = document.documentElement.lang === 'nl'
                    ? 'Er zijn geen afbeeldingen beschikbaar voor dit project.'
                    : 'No images are available for this project.';
                modalGallery.appendChild(message);
            } else {
                files.forEach(file => {
                    const source = encodeURI(`${folder}${file}`);
                    const isVideo = /\.mp4$/i.test(file);
                    const media = document.createElement(isVideo ? 'video' : 'img');
                    media.src = source;
                    media.setAttribute('aria-label', card.querySelector('h3').textContent);
                    if (!isVideo) media.alt = card.querySelector('h3').textContent;

                    if (isVideo) {
                        media.controls = true;
                        media.preload = 'metadata';
                    }

                    media.addEventListener('error', () => {
                        console.error(`Unable to load project media: ${source}`);
                        media.remove();
                    });
                    modalGallery.appendChild(media);
                });
            }

            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', event => {
        if (event.target === modal) closeModal();
    });
    window.addEventListener('keydown', event => {
        if (event.key === 'Escape' && modal.style.display === 'block') closeModal();
    });
    window.addEventListener('languagechange', updateModalText);

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        activeCard = null;
    }
});
