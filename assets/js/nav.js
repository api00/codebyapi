
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navLink = document.getElementById('navLink');

    navToggle.addEventListener('click', () => {
      navLink.classList.toggle('show');
    });
  });