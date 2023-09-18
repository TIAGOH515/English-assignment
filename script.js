var Historia = "O Natal é uma festa cristã que celebra o nascimento de Jesus Cristo e também é uma celebração cultural. Suas características incluem missas religiosas, montagem de árvores de Natal decoradas, troca de presentes, decorações festivas, a figura de São Nicolau (Papai Noel), músicas natalinas e refeições especiais. O Natal promove o espírito de generosidade, solidariedade e união familiar e comunitária."

// Função para destacar a página ativa no menu de navegação
function highlightActivePage() {
    const currentPage = window.location.hash;
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Função para alternar o modo noturno e o título da página
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode'); // Alterna a classe 'dark-mode' no corpo

    // Seleciona o título h1
    const tituloH1 = document.querySelector('h1');

    // Verifica se o modo noturno está ativado
    if (document.body.classList.contains('dark-mode')) {
        tituloH1.textContent = 'Krampus';
    } else {
        tituloH1.textContent = 'Natal';
    }
    // Seleciona o título h1
    const tituloH2 = document.querySelector('h2');

    // Verifica se o modo noturno está ativado
    if (document.body.classList.contains('dark-mode')) {
        tituloH2.textContent = 'Quem é Krampus?';
    } else {
        tituloH2.textContent = 'O que é o Natal?';
    }


    // Seleciona o título h1
    const titulop = document.querySelector('p');

    // Verifica se o modo noturno está ativado
    if (document.body.classList.contains('dark-mode')) {
        titulop.textContent = 'Krampus é isso isso e aquilo';
    } else {
        titulop.textContent = Historia ;
    }

    const imagem = document.getElementById('logo1');

    // Verifica se o modo noturno está ativado
    if (document.body.classList.contains('dark-mode')) {
        imagem.innerHTML = '<img id="rodapé2" src="bode.jpg">'
    } else {
        imagem.innerHTML = '<img id="logo" src="Arvore.png">'
    }

    const menu1 = document.getElementById('primeiro');

    // Verifica se o modo noturno está ativado
    if (document.body.classList.contains('dark-mode')) {
        menu1.textContent = 'Quem é Krampus?';
    } else {
        menu1.textContent = "O que é o Natal?" ;
    }

    const menu2 = document.getElementById('segundo');

    // Verifica se o modo noturno está ativado
    if (document.body.classList.contains('dark-mode')) {
        menu2.textContent = 'Origem';
    } else {
        menu2.textContent = "Historia do Natal" ;
    }

    const menu3 = document.getElementById('terceiro');

    // Verifica se o modo noturno está ativado
    if (document.body.classList.contains('dark-mode')) {
        menu3.textContent = 'Video';
    } else {
        menu3.textContent = "Personagens do Natal" ;
    }

    const audio = document.getElementById('audio');

    // Verifica se o modo noturno está ativado
    if (document.body.classList.contains('dark-mode')) {
        audio.innerHTML = '<audio preload="metadata" autoplay controls><source src="Ameno.mp3" type="audio/mpeg"></audio>';
    }else {
        audio.innerHTML = '<audio preload="metadata" autoplay controls><source src="Natal.mp3" type="audio/mpeg"></audio>'
    }
}
// Adiciona um ouvinte de evento para o botão de alternância de modo noturno
const darkModeButton = document.getElementById('dark-mode-button');
darkModeButton.addEventListener('click', toggleDarkMode);
