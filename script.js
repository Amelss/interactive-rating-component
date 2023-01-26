let ratings = document.querySelectorAll('#rating-btn')
let submitBtn = document.getElementById('submit-btn')

for (let i = 0; i < ratings.length; i++){
    ratings[i].addEventListener('click', function () {
    ratings[i].classList.add('selected')   
    console.log('Ratings clicked');
})
}

submitBtn.addEventListener('click', function () {
    console.log('clicked');
})
