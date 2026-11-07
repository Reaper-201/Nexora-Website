// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// CLOSE MENU AFTER CLICKING A LINK

const navigationLinks = navLinks.querySelectorAll("a");

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});

// RESERVATION FORM

const reservationForm = document.getElementById("reservationForm");
const formMessage = document.getElementById("formMessage");
const reservationDate = document.getElementById("reservationDate");

// PREVENT PAST DATES

const today = new Date();
const localToday = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

reservationDate.min = localToday;

// HANDLE FORM SUBMISSION

reservationForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("customerName").value.trim();
    const email = document.getElementById("customerEmail").value.trim();
    const date = reservationDate.value;
    const guests = document.getElementById("guestCount").value;

    if (!name || !email || !date || !guests) {
        formMessage.textContent = "Please complete all fields.";
        return;
    }

    formMessage.textContent =
        "Thank you, " + name +
        "! Your demo reservation request has been recorded on this page. No booking has been sent to a restaurant.";

    reservationForm.reset();

    // RESTORE THE MINIMUM DATE

    reservationDate.min = localToday;
});