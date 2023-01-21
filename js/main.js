console.log('Welcome');

const iconmarket = document.querySelector('#bread_icon');

function logThisId() {
    console.log('clicked on this element:', this.id);
}

iconmarket.addEventListener('click', logThisId);

