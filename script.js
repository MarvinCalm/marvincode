function openPopup(section) {
  const popup = document.getElementById('popup');
  const popupBody = document.getElementById('popup-body');

  if (section === 'contact') {
    popupBody.innerHTML = '<h2>Contact Me</h2><a title="E-mail" target="_blank" href="mailto:viniiciussd@hotmail.com?subject=Olá&body=Vim pelo site e quero saber mais."><i class="fa-solid fa-envelope"></i></a> <a title="LinkedIn" target="_blank" href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"><i class="fa-brands fa-linkedin"></i></a>';
  } else if (section === 'about') {
    popupBody.innerHTML = '<h2>ABOUT</h2><p>Oi! Sou o Marcos Vinícius, mas pode me chamar de Marvin. Nasci no dia do Natal de 1994 🎄😅. Sou cristão, casado e ainda sem filhos. Me considero uma pessoa mais na minha, que valoriza a simplicidade e vai direto ao ponto. Gosto de resolver as coisas de forma prática e sem enrolação. Curto tecnologia, jogos e tudo o que envolve esse universo digital. Estou aprendendo front-end e acho incrível como algumas linhas de código viram algo visual e interativo na tela. Sigo sempre aprendendo e tentando evoluir a cada projeto.</p>';
  } else if (section === 'projects') {
    popupBody.innerHTML = '<h2>PROJECTS</h2><h4>Loja Deblando Mais Som - deblandomais.com.br</h4><p>Site criado para a Loja Deblando Mais Som, com o objetivo de apresentar produtos e serviços de som automotivo, acessórios e instalações. A plataforma destaca ofertas, contatos e redes sociais, proporcionando uma navegação simples e moderna para atrair clientes e facilitar o atendimento.</p><a title="Acesse!" href="https://deblandomais.com.br/" target="_blank"><img style="border-radius: 10px; width: 95%; margin: 5px 2px;" src="images/deblandomais.jpg" alt="Print Screen da pagina web Deblando Mais Som"></a>';
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
    delay: 800,
    distance: '70%',
    reset: true
});
ScrollReveal().reveal('h1', {
    origin: 'top',
    duration: 1200,
    delay: 500,
    distance: '20%',
    reset: true
});
ScrollReveal().reveal('.button', {
    origin: 'bottom',
    duration: 1000,
    delay: 2000,      
    distance: '80%',
    reset: true
});

ScrollReveal().reveal('.links', {
    duration: 1300,
    delay: 3000,
    reset: true
});



// ANIMAÇÃO

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
const balls = Array.from({ length: 4 }, () => new FadingBall());

function animate() {
  ctx.clearRect(0, 0, width, height);
  balls.forEach(ball => {
    ball.update();
    ball.draw(ctx);
  });
  requestAnimationFrame(animate);
}

animate();
