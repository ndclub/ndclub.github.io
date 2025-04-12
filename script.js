document.getElementById('navToggle').addEventListener('click', function() {
    var nav = document.getElementById('navbar');
    if (nav.classList.contains('active')) {
      nav.classList.remove('active');
    } else {
      nav.classList.add('active');
    }
  });
  