const modalOverlay = document.querySelector('.modal-overlay');
const recipes = document.querySelectorAll('.recipe');

for (let recipe of recipes) {
    
    recipe.addEventListener("click", function() {
        //Ativando a classe Active no Modal-Overlay
        modalOverlay.classList.add('active')
        
        //Aplicando a foto no Modal
        const fotoId = recipe.getAttribute('id');
        modalOverlay.querySelector('.modal-content img').src = `assets/${fotoId}.png`;

        //Aplicando o H4 no Modal
        modalOverlay.querySelector('.modal .modal-content h4').innerText = recipe.querySelector('h4').innerText;

        //Aplicando o P no Modal
        modalOverlay.querySelector('.modal .modal-content p').innerText = recipe.querySelector('p').innerText;
    })
}

//Fechando o Modal.
document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active')
})