function openPopup(section) {
  const popup = document.getElementById('popup');
  const popupBody = document.getElementById('popup-body');

  if (section === 'contact') {
    popupBody.innerHTML = '<h2>Contact Me</h2><p><i class="fa-solid fa-envelope"></i> viniiciussd@hotmail.com</p><a target="_blank" href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"><i class="fa-brands fa-linkedin"></i></a>';
  } else if (section === 'about') {
    popupBody.innerHTML = '<h2>ABOUT</h2><p>Oi! Sou o Marcos Vinícius, mas pode me chamar de Marvin. Nasci no dia do Natal de 1994 🎄😅. Sou cristão, casado e ainda sem filhos. Me considero uma pessoa mais na minha, que valoriza a simplicidade e vai direto ao ponto. Gosto de resolver as coisas de forma prática e sem enrolação. Curto tecnologia, jogos e tudo o que envolve esse universo digital. Estou aprendendo front-end e acho incrível como algumas linhas de código viram algo visual e interativo na tela. Sigo sempre aprendendo e tentando evoluir a cada projeto.</p>';
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
