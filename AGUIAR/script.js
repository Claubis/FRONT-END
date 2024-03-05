

// Ajuste para os feedbacks

const allStar = document.querySelectorAll('.rating .star')
const ratingValue = document.querySelector('.rating input')

allStar.forEach((item, idx)=> {
	item.addEventListener('click', function () {
		let click = 0
		ratingValue.value = idx + 1

		allStar.forEach(i=> {
			i.classList.replace('bxs-star', 'bx-star')
			i.classList.remove('active')
		})
		for(let i=0; i<allStar.length; i++) {
			if(i <= idx) {
				allStar[i].classList.replace('bx-star', 'bxs-star')
				allStar[i].classList.add('active')
			} else {
				allStar[i].style.setProperty('--i', click)
				click++
			}
		}
	})
})

// Para manipulação do botão submit do formulário de feedback

document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedbackFormId');
    

    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir o comportamento padrão de submissão do formulário

        // Aqui eu posso adicionar lógica para validar os campos do formulário, se necessário

        // Exemplo: exibir os valores dos campos no console
        console.log('Rating:', ratingValue.value);
        console.log('Opinion:', feedbackForm.opinion.value);

        // Adicionar lógica para exibir um alerta quando a pesquisa é respondida
        //alert('Obrigado por responder à pesquisa!');

        // Agora você pode permitir a submissão do formulário
        feedbackForm.submit();

    });
});

