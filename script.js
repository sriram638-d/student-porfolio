
document.getElementById("contactForm")
.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;

    document.getElementById("result").textContent =
        "Thank you, " + name + "! Message submitted.";

    this.reset();
});
