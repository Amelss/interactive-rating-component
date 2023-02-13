let ratings = document.querySelectorAll('.rating-btn');
let submitBtn = document.getElementById('submit-btn');
let ratingsCard = document.querySelector(".rating-card");
let thankYouCard = document.querySelector(".thank-you-card");
let ratingNumber = document.getElementById("rating-number")
let result = document.querySelectorAll(".rating-btn")



for (let i = 0; i < ratings.length; i++){
    ratings[i].addEventListener('click', function (e) {
        console.log('ratings clicked')
        result = e.target.innerHTML
    })
}
ratings.forEach(rated => {
    rated.addEventListener('click', function () {
        buttonChange(rated)
    })
})

function buttonChange(a) {
    ratings.forEach(rated => {
        rated.style.background = "#3e444b";
    })
        a.style.background = "hsl(25, 97%, 53%)";
        a.style.color = "white"
}

submitBtn.addEventListener('click', function () {
    console.log('clicked');
    submitBtn.classList.toggle("submit-selected")
    ratingNumber.textContent = result
    // ratingsCard.classList.add("hidden")
    // thankYouCard.classList.remove("hidden")

})






