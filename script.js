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

});
