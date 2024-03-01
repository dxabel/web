document.getElementById("birthdayForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  const fileInput = document.getElementById("image");
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function() {
    const imageDataUrl = reader.result;
    displayBirthdayCard(name, imageDataUrl, message);
  };

  reader.readAsDataURL(file);
});

function displayBirthdayCard(name, imageDataUrl, message) {
  const cardContainer = document.getElementById("birthdayCard");
  cardContainer.innerHTML = `
    <h2>¡Feliz Cumpleaños, ${name}!</h2>
    <img src="${imageDataUrl}" alt="Imagen de Cumpleaños">
    <p>${message}</p>
  `;
}
