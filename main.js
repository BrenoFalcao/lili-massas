// Detecta quando o usuário rola a página
window.addEventListener('scroll', function () {
  const box = document.querySelector('.box');
  if (window.scrollY > 200) { // Quando rolar 200px
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
});