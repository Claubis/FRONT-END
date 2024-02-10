document.addEventListener("DOMContentLoaded", function() {
    const menuHamburger = document.querySelector('.menu-hamburger');
    const nav = document.getElementsByClassName('menu_navegacao')[0];
    const closeButton = document.querySelector('.menu_navegacao .close-button');

    // Função para alternar a visibilidade do menu de navegação
    function toggleNav() {
        nav.style.display = nav.style.display === "block" ? "none" : "block";
    }

    // Adiciona event listener ao menu hambúrguer
    menuHamburger.addEventListener('click', toggleNav);
    closeButton.addEventListener('click', toggleNav);

    // Adiciona event listeners para cada item do menu
    document.querySelectorAll('.menu_navegacao .menu li a').forEach(function(item) {
        item.addEventListener('click', function() {
            // Esconde o menu de navegação em dispositivos móveis
            if (window.matchMedia('(max-width: 667px)').matches) {
                nav.style.display = 'none';
            }
        });
    });

    // Função para lidar com a mudança de tamanho da janela
    function handleWindowResize() {
        // Verifica se estamos em um dispositivo móvel (menos que 668px)
        if (window.matchMedia('(max-width: 667px)').matches) {
            menuHamburger.style.display = 'block';
            nav.style.display = 'none'; // Esconde o menu de navegação
        }
        // Para tablets e desktops (maior que 668px)
        else {
            menuHamburger.style.display = 'none';
            nav.style.display = 'block'; // Mostra o menu de navegação
        }
    }

    // Adiciona o event listener ao redimensionamento da janela
    window.addEventListener('resize', handleWindowResize);

    // Chama a função imediatamente para definir o estado inicial
    handleWindowResize();
});
