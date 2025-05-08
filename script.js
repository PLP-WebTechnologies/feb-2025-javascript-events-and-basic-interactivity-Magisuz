// Event Handling: Button Click
document.getElementById("showDetailsButton").addEventListener("click", function() {
    document.getElementById("details").innerHTML = `
        <p><strong>Painite:</strong> Painite was discovered in 1956 in Ohngaing in Myanmar. The mineral was named in honor of the British gemologist Arthur Charles Davy Pain. At one point it was considered the rarest mineral on Earth.</p>
        <p><strong>Tanzanite:</strong> Tanzanite was discovered in 1967 in Northern Tanzania. With its supply possibly declining in the next 30 years, this gemstone is considered to be more rare than a diamond. This type of gemstone receives its vibrant blue from being heated.</p>
        <p><strong>Hibonite:</strong> Hibonite was discovered in 1956 in Madagascar. It was named after the discoverer, French geologist Paul Hibon. Gem quality hibonite has been found only in Myanmar.</p>
    `;
});

// Form Validation for Email Submission
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    const email = document.getElementById("email").value;
    const feedback = document.getElementById("formFeedback");

    // Basic email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        feedback.textContent = "Please enter a valid email address.";
        feedback.style.color = "red";
    } else {
        feedback.textContent = "Thank you for your feedback!";
        feedback.style.color = "blue"
        ;
    }
});
