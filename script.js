// script.js
const roles = ['Ingénieur Backend', 'Ingénieur Front-End', 'Ingénieur Fullstack'];
let currentRole = 0;
let deleting = false;
let roleIndex = 0;

const element = document.getElementById('role');
const typingSpeed = 150;
const deletingSpeed = 50;
const pauseBetweenRoles = 2000;

function typeRole() {
    const currentText = roles[currentRole].substring(0, roleIndex);
    element.textContent = currentText;

    if (deleting) {
        if (roleIndex > 0) {
            roleIndex--;
        } else {
            deleting = false;
            currentRole = (currentRole + 1) % roles.length;
        }
    } else {
        if (roleIndex < roles[currentRole].length) {
            roleIndex++;
        } else {
            setTimeout(() => { deleting = true; }, pauseBetweenRoles);
        }
    }

    const delay = deleting ? deletingSpeed : typingSpeed;
    setTimeout(typeRole, delay);
}

// Démarrer la fonction
typeRole();



document.querySelectorAll('.menu li a').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelector('.menu li.active').classList.remove('active');
        this.parentNode.classList.add('active');
    });
});



//contactez moi : 
