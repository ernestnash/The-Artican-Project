// nashon ernest
// nashon ernest
// nashon ernest
// nashon ernest

//menu toggler
const hambuger = document.querySelector (".hambuger");
const close = document.querySelector (".close");
const navUl = document.querySelector (".nav-ul");

hambuger.addEventListener("click", () => {
    navUl.classList.toggle("show");
    hambuger.classList.toggle("hide");
} );

close.addEventListener("click", () => {
    navUl.classList.toggle("show");
    hambuger.classList.toggle("hide");
});

// Modal section
const modal = document.querySelector(".modal");
const btn = document.querySelector(".search");
const closeModal = document.querySelector(".close-modal");

btn.addEventListener("click", openPopup);
closeModal.addEventListener("click", closePopup);

function openPopup() {
    modal.style.display = "block";
}

function closePopup() {
    modal.style.display = "none";
}

// Page animation
AOS.init({
    duration: 1000,
}); 







// nashon ernest
// nashon ernest
// nashon ernest
// nashon ernest