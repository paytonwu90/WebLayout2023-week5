import './assets/scss/all.scss';

document.addEventListener('click', function(e) {
  const target = e.target;
  if (target.matches('a[href="#"]') || target.parentElement.matches('a[href="#"]')) {
    e.preventDefault();
  }
});
