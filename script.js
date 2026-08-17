// Mobile navigation menu

const menuButton = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


// Project interaction

function showMessage(projectName) {
    alert(
        "You selected: " +
        projectName +
        "\nMore project details can be added here."
    );
}


// Contact form interaction

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    formMessage.textContent =
        "Thank you, " + name + "! Your message has been received.";

    contactForm.reset();
});
