
// NEXORA WEBSITE INTERACTIONS

// Navigation links

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});


// Reveal sections when scrolling

const sections = document.querySelectorAll(
    ".services, .work, .contact"
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }

    });

}, {
    threshold: 0.15
});

sections.forEach(section => {
    observer.observe(section);
});


// Current year in footer

const year = new Date().getFullYear();

const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.textContent =
        `© ${year} NEXORA. Portfolio concept.`;
}


// CLIENT ENQUIRY FORM

const enquiryForm = document.getElementById("enquiry-form");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("client-name").value.trim();

        const business = document.getElementById("business-name").value.trim();

        const email = document.getElementById("client-email").value.trim();

        const type = document.getElementById("website-type").value;

        const details = document.getElementById("project-details").value.trim();

        const subject = encodeURIComponent(
            "New NEXORA Project Enquiry"
        );

        const message = encodeURIComponent(
            "NEW PROJECT ENQUIRY\n\n" +
            "Name: " + name + "\n" +
            "Business: " + business + "\n" +
            "Email: " + email + "\n" +
            "Website Type: " + type + "\n\n" +
            "Project Details:\n" + details
        );

        const gmailURL =
            "https://mail.google.com/mail/?view=cm&fs=1" +
            "&to=a.muhammadchauhdary@gmail.com" +
            "&su=" + subject +
            "&body=" + message;

        window.open(gmailURL, "_blank");

    });

}

console.log("NEXORA is online.");
