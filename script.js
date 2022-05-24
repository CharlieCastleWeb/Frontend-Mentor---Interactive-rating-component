
const myForm = document.getElementById("rating");
const ratingCard = document.getElementsByClassName("rating-card")[0];
const thankYouCard = document.getElementsByClassName("thank-you-card")[0];
const ratingDisplay = document.getElementsByClassName("rating-display")[0];
const alertMessage = document.getElementsByClassName("alert")[0];

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if(!document.querySelector('input[name="rating"]:checked')) {
        alertMessage.style.display = "block";
        return;
    }
    ratingDisplay.textContent = document.querySelector('input[name="rating"]:checked').value;
    ratingCard.style.display = "none";
    thankYouCard.style.display = "flex";
})