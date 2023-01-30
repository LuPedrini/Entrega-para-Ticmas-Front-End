const actionButton1 = document.getElementById("botonproyecto1");
const imagenproyecto1 = document.querySelector(".imagenproyecto1");

const toggleShowImage1 = () => {
  const isHidden = imagenproyecto1.style.display === "none";
  if (isHidden) {
    // Display hidden element
    imagenproyecto1.style.display = "block";
    actionButton1.innerHTML = "Nombre del proyecto 1";
  } else {
    // Hide element
    imagenproyecto1.style.display = "none";
    actionButton1.innerHTML = "Nombre del proyecto 1";
  }
};
// Adding click event listener
actionButton1.addEventListener("click", toggleShowImage1);

const actionButton2 = document.getElementById("botonproyecto2");
const imagenproyecto2 = document.querySelector(".imagenproyecto2");

const toggleShowImage2 = () => {
  const isHidden = imagenproyecto2.style.display === "none";
  if (isHidden) {
    // Display hidden element
    imagenproyecto2.style.display = "block";
    actionButton2.innerHTML = "Nombre del proyecto 2";
  } else {
    // Hide element
    imagenproyecto2.style.display = "none";
    actionButton2.innerHTML = "Nombre del proyecto 2";
  }
};
// Adding click event listener
actionButton2.addEventListener("click", toggleShowImage2);

