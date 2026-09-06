document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("admissionForm");

    if (!form) return;

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        // Get form values
        const name = document.getElementById("name").value.trim();
        const city = document.getElementById("city").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const course = document.getElementById("course").value.trim();
        const message = document.getElementById("message").value.trim();

        // Basic validation
        if (!name || !city || !phone || !course) {
            alert("Please fill all required fields.");
            return;
        }

        // Phone validation
        const cleanPhone = phone.replace(/\D/g, "");

        if (cleanPhone.length !== 10) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        // WhatsApp number of BCI
        const instituteWhatsApp = "918192080081";

        // Create WhatsApp message
        let whatsappMessage =
`🎓 *BRIGHT CAREER INSTITUTE*

📋 *NEW ADMISSION ENQUIRY*

━━━━━━━━━━━━━━━━━━

👤 *Name:* ${name}
📍 *City:* ${city}
📱 *Phone:* ${phone}
📚 *Course:* ${course}`;

        if (message) {
            whatsappMessage += `
💬 *Message:* ${message}`;
        }

        whatsappMessage += `

━━━━━━━━━━━━━━━━━━

I am interested in admission at Bright Career Institute.

Please contact me with the admission details.

Thank you.`;

        // Encode message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);

        // WhatsApp URL
        const whatsappURL =
            `https://wa.me/${instituteWhatsApp}?text=${encodedMessage}`;

        // Button feedback
        const submitButton = form.querySelector("button[type='submit']");

        if (submitButton) {
            const originalText = submitButton.innerText;

            submitButton.innerText = "Opening WhatsApp...";
            submitButton.disabled = true;

            setTimeout(function () {
                submitButton.innerText = originalText;
                submitButton.disabled = false;
            }, 2000);
        }

        // Open WhatsApp
        window.open(whatsappURL, "_blank");

    });
/* ================================
   MOBILE NAVIGATION
================================ */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {
        mainNav.classList.toggle("active");

        if (mainNav.classList.contains("active")) {
            menuToggle.innerHTML = "✕";
            menuToggle.setAttribute("aria-label", "Close Menu");
        } else {
            menuToggle.innerHTML = "☰";
            menuToggle.setAttribute("aria-label", "Open Menu");
        }
    });

    // Close menu after clicking a navigation link
    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            mainNav.classList.remove("active");
            menuToggle.innerHTML = "☰";
            menuToggle.setAttribute("aria-label", "Open Menu");
        });
    });
}
});
/* =================================
   COURSE WHATSAPP ENQUIRY
================================= */

const courseButtons = document.querySelectorAll(".course-btn");

courseButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedCourse = button.getAttribute("data-course");

        const message =
`🎓 *BRIGHT CAREER INSTITUTE*

📚 *COURSE ENQUIRY*

━━━━━━━━━━━━━━━━━━

I am interested in:

🎯 *${selectedCourse}*

Please share the course details, batch timings, fees and admission information.

━━━━━━━━━━━━━━━━━━

Thank you.`;

        const encodedMessage = encodeURIComponent(message);

        const whatsappURL =
            `https://wa.me/918192080081?text=${encodedMessage}`;

        window.open(whatsappURL, "_blank");

    });

});
