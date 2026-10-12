// Function runs when the Join the Movement button is clicked
function showMessage() {
    alert("Thank you for supporting a greener planet! 🌱");
}

// Function runs when the contact form is submitted
function sendMessage(event) {
    // Prevents the page from refreshing
    event.preventDefault();

    // Gets the name entered by the user
    let name = document.getElementById("name").value;

    // Displays a success message on the page
    document.getElementById("response").textContent =
        "Thank you, " + name + "! Your message has been received.";

    // Clears all the form fields
    document.querySelector("form").reset();
}