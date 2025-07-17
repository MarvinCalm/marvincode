function openPopup(section) {
  const popup = document.getElementById('popup');
  const popupBody = document.getElementById('popup-body');

  if (section === 'contact') {
    popupBody.innerHTML = `
      <img class="project-image" src="images/capa-contato.svg" alt="Banner contato">
      <br><br>
      <a title="E-mail" target="_blank" href="mailto:viniiciussd@hotmail.com?subject=Olá&body=Vim pelo site e quero saber mais sobre seus serviços.">
        <i class="fa-solid fa-envelope"></i>
      </a> 
      <a title="LinkedIn" target="_blank" href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
        <i class="fa-brands fa-linkedin"></i>
      </a>
      <a title="Whatsapp" target="_blank" href="https://api.whatsapp.com/send/?phone=5561992701884&text=Ol%C3%A1%2C+vim+pelo+site+e+quero+fazer+um+or%C3%A7amento.&type=phone_number&app_absent=0">
        <i class="fa-brands fa-square-whatsapp"></i>
      </a>
    `;
  } else if (section === 'about') {
    popupBody.innerHTML = `
      <img class="project-image" src="images/capa-sobre.svg" alt="Banner Sobre Mim">
      <p>Olá! Sou MarvinCode, um desenvolvedor web iniciante apaixonado por transformar ideias em realidade digital. Com foco em HTML5, CSS3 e JavaScript, crio soluções web simples, porém eficazes e visualmente atraentes. Meu objetivo é ajudar pequenos negócios e indivíduos a estabelecerem sua presença online com qualidade e acessibilidade.</p>
      
      <p>Como iniciante na área, dedico-me a cada projeto com entusiasmo e atenção aos detalhes, garantindo que o resultado final atenda às suas expectativas e necessidades. Acredito que a simplicidade pode ser poderosa, e meu trabalho reflete essa filosofia, entregando projetos limpos, funcionais e fáceis de usar.</p>
      
      <p>Estou sempre aprendendo e evoluindo, buscando as melhores práticas para oferecer um serviço de excelência. Se você precisa de uma landing page, um portfólio online ou um website simples, estou pronto para ajudar a construir sua presença digital de forma eficiente e descomplicada.</p>
    `;
  } else if (section === 'services') {
    popupBody.innerHTML = `
      <img class="project-image" src="images/capa-servicos.svg" alt="Banner de Serviços">
      <p>Ofereço soluções de desenvolvimento web sob medida para suas necessidades, com foco em projetos simples e eficazes, ideais para quem está começando ou busca uma presença online direta e funcional.</p>
      
      <div class="services-grid">
        <div class="service-card">
          <h4>🚀 Landing Pages</h4>
          <p>Páginas de alta conversão, projetadas para um objetivo específico, como capturar leads, promover um produto ou serviço, ou divulgar um evento.</p>
        </div>
        
        <div class="service-card">
          <h4>💼 Portfólios Online</h4>
          <p>Portfólios personalizados que destacam seus projetos mais importantes, sua experiência e suas informações de contato.</p>
        </div>
        
        <div class="service-card">
          <h4>🌐 Websites em Geral</h4>
          <p>Websites simples e responsivos para pequenos negócios, projetos pessoais ou iniciativas específicas, usando HTML5, CSS3 e JavaScript.</p>
        </div>
      </div>
      
      <h3>Por que escolher meus serviços?</h3>
      <ul>
        <li><strong>Qualidade e Simplicidade:</strong> Projetos bem feitos, sem complexidades desnecessárias.</li>
        <li><strong>Foco no Cliente:</strong> Entendimento das suas necessidades para entregar a melhor solução.</li>
        <li><strong>Preço Acessível:</strong> Soluções eficazes que cabem no seu orçamento.</li>
        <li><strong>Suporte:</strong> Acompanhamento e suporte para garantir o bom funcionamento do seu site.</li>
      </ul>
      
      <p><strong>Vamos construir sua presença digital juntos! 🚀</strong></p>
    `;
  } else if (section === 'projects') {
    popupBody.innerHTML = `
      <img class="project-image" src="images/capa-projetos.svg" alt="Banner de Projetos">
      <p>Aqui estão alguns dos projetos que desenvolvi, demonstrando minhas habilidades em HTML5, CSS3 e JavaScript. Cada projeto foi criado com foco em funcionalidade, design responsivo e experiência do usuário.</p>
      <hr>
      <h4>Loja Deblando Mais Som - deblandomais.com.br</h4>
      <p>Site criado para a Loja Deblando Mais Som, com o objetivo de apresentar produtos e serviços de som automotivo, acessórios e instalações. A plataforma destaca ofertas, contatos e redes sociais, proporcionando uma navegação simples e moderna para atrair clientes e facilitar o atendimento.</p>
      <a title="Confira! - deblandomais.com.br" href="https://deblandomais.com.br/" target="_blank"><img class="project-image" src="images/deblandomais.jpg" alt=Página Web da Loja Deblando Mais Som"></a>
      
    `;
    
  }

  popup.classList.remove('hidden');
}

function closePopup() {
  document.getElementById('popup').classList.add('hidden');
}


// CARROSSEL DE IMAGENS
let index = 0;
  const slides = document.querySelectorAll('.propaganda-web');
  const total = slides.length;

  function mostrarSlide() {
    slides.forEach(slide => slide.classList.remove('ativo'));
    slides[index].classList.add('ativo');
    index = (index + 1) % total;
  }

  setInterval(mostrarSlide, 7000); // troca a cada 7 segundos
//


// SCROLLREVEAL
ScrollReveal().reveal('h1', {
    origin: 'top',
    duration: 1000,
    delay: 500,
    distance: '20%',
    reset: true
});
ScrollReveal().reveal('.image-section', {
    origin: 'right',
    duration: 1500,
    delay: 800,
    distance: '20%',
    reset: true
});
ScrollReveal().reveal('.propaganda', {
    duration: 1900,
    delay: 1500,
    reset: true
});
ScrollReveal().reveal('.slides', {
    duration: 1900,
    delay: 2500,
    reset: true
});
ScrollReveal().reveal('.button', {
    origin: 'bottom',
    duration: 1200,
    delay: 3000,      
    distance: '20%',
    reset: true
});
ScrollReveal().reveal('.links', {
    duration: 1500,
    delay: 3500,
    reset: true
});






// ANIMAÇÃO bolhas de fundo

const canvas = document.getElementById('spotlight');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

class FadingBall {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.radius = 30 + Math.random() * 30; // bolas menores
    this.vx = (Math.random() - 0.5) * 0.2;
    this.vy = (Math.random() - 0.5) * 0.2;
    this.life = 0;
    this.maxLife = 300 + Math.random() * 200; // tempo até sumir
    this.opacity = 0;
    this.color = `255, 255, 255`;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.life++;

    // suaviza entrada e saída
    if (this.life < 60) {
      this.opacity = this.life / 60 * 0.05; // fade in
    } else if (this.life > this.maxLife - 60) {
      this.opacity = ((this.maxLife - this.life) / 60) * 0.05; // fade out
    } else {
      this.opacity = 0.05;
    }

    // reinicia quando acabar a "vida"
    if (this.life > this.maxLife) {
      this.reset();
    }
  }

  draw(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
    ctx.shadowColor = `rgba(${this.color}, 1)`;
    ctx.shadowBlur = 40;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

// ANIMAÇÃO FUNDO - BOLHAS
const balls = Array.from({ length: 8 }, () => new FadingBall());

function animate() {
  ctx.clearRect(0, 0, width, height);
  balls.forEach(ball => {
    ball.update();
    ball.draw(ctx);
  });
  requestAnimationFrame(animate);
}

animate();




// Tela de carregamento

window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  loader.style.display = "none";
  content.style.display = "block";
});

