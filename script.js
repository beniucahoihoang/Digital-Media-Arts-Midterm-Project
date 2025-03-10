const links = [
    "https://example.com",
    "https://another-random-link.com",
    "https://your-surprise-ending.com",
    "https://one-more-chaotic-link.com"
];

document.getElementById("randomLink").addEventListener("click", function() {
    let randomIndex = Math.floor(Math.random() * links.length);
    let randomLink = links[randomIndex];

    // Open multiple tabs for chaos
    for (let i = 0; i < Math.random() * 5 + 1; i++) {
        window.open(links[Math.floor(Math.random() * links.length)], "_blank");
    }

    // Redirect main page
    window.location.href = randomLink;
});
