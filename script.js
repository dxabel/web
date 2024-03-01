// Menú responsive
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    menuIcon.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});

// Funciones para el lightbox
function openLightbox(image) {
    document.getElementById('lightboxImg').src = image;
    document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal-cookies");

    // Mostrar el cuadro de diálogo modal cuando se cargue la página
    modal.style.display = "block";

    // Evento al hacer clic en el botón Aceptar
    document.getElementById("aceptar-cookies").addEventListener("click", function() {
        // Aquí puedes agregar tu código para guardar la aceptación de cookies
        modal.style.display = "none";
    });

    // Evento al hacer clic en el botón Rechazar
    document.getElementById("rechazar-cookies").addEventListener("click", function() {
        // Aquí puedes agregar tu código para gestionar el rechazo de cookies
        modal.style.display = "none";
    });
});

// Para el botón ir arriba

// Función para desplazarse hacia arriba
function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // Mostrar o ocultar el botón de "ir arriba" según la posición del scroll
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("goToTopBtn").style.display = "block";
    } else {
      document.getElementById("goToTopBtn").style.display = "none";
    }
  }
  