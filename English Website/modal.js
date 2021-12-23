const btns = document.querySelectorAll('.btn-modal');
const facilitiesModal = document.querySelector('.bloc-modal');
const closeModal = document.querySelector('.close-modal');
const imgIndex = document.querySelector('.bloc-modal img');

/* "matchMedia" method that returns true or false depending on a certain screen size (responsive) */
/* If above 850px return true, if under 850px return false and this script is not run */
if(window.matchMedia("(min-width: 850px").matches){
    btns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            /* Select the image directly with its associated data-index number */
            imgIndex.src = `Styles/ressources/img${event.target.getAttribute
            ('data-index')}-equip.jpg`;
    
            facilitiesModal.classList.add('active-modal');
        })
    });
    
    /* If I click anywhere in the category facilities, it closes the current picture */
    facilitiesModal.addEventListener('click', () => {
        facilitiesModal.classList.remove('active-modal');
    });
};


