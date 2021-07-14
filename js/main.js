var elsHeader = document.querySelector('.header');
var elsHeaderNavBtn = elsHeader.querySelector('.header__btn');

if (elsHeaderNavBtn){
  elsHeaderNavBtn.addEventListener('click', function() {
    elsHeader.classList.toggle('header--open');
  });
}