//  Hugging Face api

const themeToggle = document.querySelector(".theme-toggle");
const promptBTN = document.querySelector(".prompt-btn");
const promptINPUT = document.querySelector(".prompt-input");
const promptFOMR = document.querySelector(".prompt-form");

const modelSelect = document.getElementById("model-select");
const countSelect = document.getElementById("count-select");
const ratioSelect = document.getElementById("ratio-select");

const gridGallery = document.querySelector(".gallery-grid");

const examplePrompts = [
    "A magic forest with glowing plants and fairy homes among giant mushrooms",
    "An old ..",
    "A future ..",
];

// Set theme based on saved preference ot system default
(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefer-color-scheme: dark)").matches;

    const isDarkTheme = savedTheme === "dark" || (!savedTheme && systemPrefersDark);
    document.body.classList.toggle("dark-theme", isDarkTheme);
    themeToggle.querySelector("i").classList = isDarkTheme ? "fa-solid fa-sun" : "fa-solid fa-moon";
})();
 
// Switch between light and dark themes
const toggleTheme = () => {
    const isDarkTheme = document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light" );
    themeToggle.querySelector("i").classList = isDarkTheme ? "fa-solid fa-sun" : "fa-solid fa-moon";
};

const generateImages = (selectModel, imageCount, aspectRatio, promptTxt) => {
    const MODEL_URL = `huggingface API`; 
}

// Create placeholder cards with loading spinners
const createImageCards = (selectModel, imageCount, aspectRatio, promptTxt) => {
    gridGallery.innerHTML = "";
    
    for (let i = 0; i < imageCount; i++) {
            gridGallery.innerHTML += `
            <div class="img-card loading" id="img-card-${i}" style="aspect-ratio: ${aspectRatio}" >
                <div class="status-container">
                    <div class="spinner"></div>
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <p class="status-txt">Generating...</p>
                </div>
                <img src="./images/app5.jpg" class="result-img" />
            </div>
            `;
    }

    generateImages(selectModel, imageCount, aspectRatio, promptTxt);
};

// Handle form submission
const handleFormSubmit = (e) => {
    e.preventDefault();

    // Get form values
    const selectModel = modelSelect.value;
    const imageCount = parseInt(countSelect.value) || 1;
    const aspectRatio = ratioSelect.value || "1/1";
    const promptTxt = promptINPUT.value.trim();
    createImageCards(selectModel, imageCount, aspectRatio, promptTxt);
}

// Fill prompt input with random example
promptBTN.addEventListener("click", () => {
    const prompt = examplePrompts[Math.floor(Math.random() * examplePrompts.length)];
    promptINPUT.value = prompt;
    promptINPUT.focus();
})

promptFOMR.addEventListener("submit", handleFormSubmit);
themeToggle.addEventListener("click", toggleTheme);


