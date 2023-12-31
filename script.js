var historia = "Natal é uma festa comemorada em muitos lugares do mundo, incluindo os Estados Unidos, para celebrar o nascimento de Jesus Cristo. É uma época de alegria, amor, dar presentes e estar com a família e amigos. As pessoas costumam decorar árvores de Natal, trocar presentes e compartilhar refeições especiais."

var krampus = "Krampus é uma criatura mitológica que acompanha São Nicolau durante a época do Natal, segundo lendas de várias regiões do mundo.A palavra Krampus vem de Krampen, palavra para 'garra' do alto alemão antigo.Nos Alpes, Krampus é representado por uma criatura semelhante a um demônio."

var origem = "Krampus é uma figura lendária com raízes na Áustria, Baviera e Europa Central,Ele é a contraparte demoníaca do Papai Noel e assusta crianças desobedientes durante o Natal.Sua origem remonta a tradições pagãs e ele é representado como uma criatura com chifres, pele peluda e garras, punindo crianças más.Atualmente, as celebrações do Krampus, como desfiles e festas, ganharam popularidade além de sua região de origem.";

var quemÉ = "Quem é Krampus?"
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
    const tituloH = document.getElementById('tituloH');

    // Verifica se o modo noturno está ativado
    if (document.body.classList.contains('dark-mode')) {
        tituloH.textContent = 'Origem';
    } else {
        tituloH.textContent = 'Origem Estadunidense';
    }

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
        tituloH2.textContent = quemÉ;
    } else {
        tituloH2.textContent = "O que é o Natal?";
    }


    // Seleciona o título h1
    const titulop = document.querySelector('p');

    // Verifica se o modo noturno está ativado
    if (document.body.classList.contains('dark-mode')) {
        titulop.textContent = krampus;
    } else {
        titulop.textContent = historia;
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
        menu1.textContent = "O que é o Natal?";
    }


    const menu3 = document.getElementById('terceiro');

    // Verifica se o modo noturno está ativado
    if (document.body.classList.contains('dark-mode')) {
        menu3.textContent = '';
    } else {
        menu3.textContent = "Personagens";
    }

    const para2 = document.getElementById('paragrafo2');

    // Verifica se o modo noturno está ativado
    if (document.body.classList.contains('dark-mode')) {
        para2.textContent = origem;
    } else {
        para2.textContent = "O Natal foi introduzido nos Estados Unidos pelos colonos europeus, com influências de várias tradições, como as festas de inverno germânicas e o cristianismo. As primeiras celebrações de Natal nos EUA eram modestas e variavam de acordo com as tradições das diferentes comunidades coloniais.";
    }

    const audio = document.getElementById('audio');

    // Verifica se o modo noturno está ativado
    if (document.body.classList.contains('dark-mode')) {
        audio.innerHTML = '<audio preload="metadata" autoplay controls loop><source src="Ameno.mp3" type="audio/mpeg"></audio>';
    } else {
        audio.innerHTML = '<audio preload="metadata" autoplay controls loop><source src="Natal.mp3" type="audio/mpeg"></audio>'
    }
}
// Adiciona um ouvinte de evento para o botão de alternância de modo noturno
const darkModeButton = document.getElementById('dark-mode-button');
darkModeButton.addEventListener('click', toggleDarkMode);
