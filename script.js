const toggle = document.getElementById("menu-toggle");
const links = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("open");
  links.classList.toggle("show");
});

const bgToggleBtn = document.getElementById("bg-toggle-btn");

// Replace these with your background image URLs
const backgroundImages = [
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKHtxBW4TSDJKRcQhlsRi_6vzxAC74O30Lce0xnTbh41XRiSH5lGl398oXrm3Y0_V0-YuiU6j7QJgAZyjitB7gcYmVCfJ7IyC_H7J_HPHRO207A_ddK8njJQPHIrwzsQoKRDEh8l0Wp_M_xvN_Nh55e7qcyAzbMdiTJd3TOXTqRanU4iasli3-f_7O6Q/s3840/BEAUTIFUL-WALLPAPER-5032023.png", // Add your first image URL here
  "https://img.freepik.com/premium-photo/3d-rendering-modern-stage-cyber-sci-fi-futuristic-spaceship-triangle-corridor-hallway-with-neon-illumination-light-tech-illustration-background_74387-599.jpg?semt=ais_hybrid&w=740", // Add your second image URL here
  "", // Add your third image URL here
];

let currentIndex = 0;

bgToggleBtn.addEventListener("click", () => {
  if (backgroundImages.length > 0) {
    currentIndex = (currentIndex + 1) % backgroundImages.length;
    const imageUrl = backgroundImages[currentIndex];

    if (imageUrl) {
      document.body.style.background = `url('${imageUrl}') no-repeat center center fixed`;
      document.body.style.backgroundSize = "cover";
    } else {
      document.body.style.background = "#0a0a0a"; // Default dark background
    }
  } else {
    alert("Please provide valid background image URLs in the script.js file.");
  }
});



// URL Search Bar Functionality
function searchURL() {
  const urlInput = document.getElementById("urlInput").value.trim();
  if (urlInput) {
    let formattedUrl = urlInput;

    // If the input doesn't contain a protocol or a dot, assume it's a domain and append ".com"
    if (!formattedUrl.includes(".") && !formattedUrl.startsWith("http://") && !formattedUrl.startsWith("https://")) {
      formattedUrl += ".com";
    }

    // Add "http://" if no protocol is provided
    if (!formattedUrl.startsWith("http://") && !formattedUrl.startsWith("https://")) {
      formattedUrl = "http://" + formattedUrl;
    }

    window.location.href = formattedUrl;
  } else {
    alert("Please enter a URL");
  }
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    searchURL();
  }
}






