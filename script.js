function openPopup(section) {
  const popup = document.getElementById('popup');
  const popupBody = document.getElementById('popup-body');

  if (section === 'contact') {
    popupBody.innerHTML = '<h2>Contact Me</h2><p>Email: viniiciussd@hotmail.com</p>';
  } else if (section === 'about') {
    popupBody.innerHTML = '<h2>ABOUT</h2><p>Meu nome é Marcos Vinícius, mas pode me chamar de Marvin, nasci em dezembro de 1994, no dia do natal 😅. Sou cristão, casado e sem filhos. Me considero uma pessoa reservada, que valoriza a simplicidade e a objetividade. Aprecio a comunicação direta e eficaz, buscando sempre simplificar processos e resolver problemas de maneira prática. Tenho um grande interesse por tecnologia e games eletrônicos. Sou aprendiz de desenvolvimento front-end, apaixonado por transformar ideias em interfaces visuais. Gosto de ver como códigos simples ganham forma na tela e se tornam experiências interativas. Estou em constante aprendizado, buscando evoluir a cada projeto.</p>';
  } else if (section === 'projects') {
    popupBody.innerHTML = '<h2>PROJECTS</h2><h4>Loja Deblando Mais Som - deblandomais.com.br</h4><p>Site criado para a Loja Deblando Mais Som, com o objetivo de apresentar produtos e serviços de som automotivo, acessórios e instalações. A plataforma destaca ofertas, contatos e redes sociais, proporcionando uma navegação simples e moderna para atrair clientes e facilitar o atendimento.</p><a href="https://deblandomais.com.br/" target="_blank"><img style="border-radius: 10px; width: 95%; margin: 5px 2px;" src="images/deblandomais.jpg" alt="Print Screen da pagina web Deblando Mais Som"></a>';
  }

  popup.classList.remove('hidden');
}

function closePopup() {
  document.getElementById('popup').classList.add('hidden');
}


// SCROLLREVEAL
ScrollReveal().reveal('.image-section', {
    origin: 'right',
    duration: 3000,
    delay: 500,
    distance: '50%',
    reset: true
});
ScrollReveal().reveal('h1', {
    origin: 'top',
    duration: 1500,
    delay: 500,
    distance: '20%',
    reset: true
});
ScrollReveal().reveal('.button', {
    origin: 'bottom',
    duration: 1500,
    delay: 1000,      
    distance: '90%',
    reset: true
});

ScrollReveal().reveal('.links', {
    origin: 'bottom',
    duration: 1800,
    delay: 2000,      
    distance: '90%',
    reset: true
});
