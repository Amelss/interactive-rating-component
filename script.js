let ratings = document.querySelectorAll('.rating-btn');
let submitBtn = document.getElementById('submit-btn');
let ratingsCard = document.querySelector(".rating-card");
let thankYouCard = document.querySelector(".thank-you-card");
let ratingNumber = document.getElementById("rating-number")
let selection = document.querySelector("#selection")
let result = document.querySelectorAll(".rating-btn")

 

for (let i = 0; i < ratings.length; i++){
    ratings[i].addEventListener('click', function (e) {
        ratings[i].style.backgroundColor = "hsl(25, 97%, 53%)"; 
        ratings[i].style.color = "white"; 
        ratings[i].classList.toggle('selected')
        console.log('Ratings clicked');

        result = e.target.innerHTML
        console.log(result)
        
        
       
    })
}




submitBtn.addEventListener('click', function () {
    console.log('clicked');
    submitBtn.classList.toggle("submit-selected")
    ratingNumber.textContent = result
  
    // ratingsCard.classList.add("hidden")
    // thankYouCard.classList.remove("hidden")
   
    
    
})






