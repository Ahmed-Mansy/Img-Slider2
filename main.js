

const cards = Array.from(document.querySelectorAll('.card'));
const myBg = document.getElementById('myBg')
const currentImg = document.getElementById('currentImg')
let currentIndex = 0



cards.forEach(card => {
    card.addEventListener('click', function (e) {
        removeClassActive();
        card.classList.add('active')

        currentIndex = cards.indexOf(e.target);


    })
});

cards.forEach(card => {
    card.addEventListener('dblclick', function (e) {


        openImg()

        // var newImge = e.target.style.backgroundImage 
        // if (card.classList.contains('active')) {
        //     myBg.style.display = 'flex'
        //     currentImg.style.backgroundImage = newImge

        // }

    })
})
function removeClassActive() {
    cards.forEach(card => {
        card.classList.remove('active');
    })
}

myBg.addEventListener('click', e => {
    console.log(e.target.getAttribute('id'))
    if (e.target.getAttribute('id') == 'myBg') {
        myBg.style.display = 'none'
    }
})

document.addEventListener('keyup', function (enfo) {
    console.log(enfo.code)
    if (enfo.code == 'ArrowRight') {
        nextImg();

    } else if (enfo.code == 'ArrowLeft') {
        prevImg()
    }
    else if (enfo.code == 'Escape') {
        myBg.style.display = 'none'

    }
    else if (enfo.code == 'Enter') {
        openImg()
    }

})


function nextImg() {
    currentIndex++
    if (currentIndex > cards.length - 1) {
        currentIndex = 0
    }
    removeClassActive();
    cards[currentIndex].classList.add('active')
    let imgSrc = cards[currentIndex].style.backgroundImage
    currentImg.style.backgroundImage = imgSrc



}

function openImg() {

    // var newImge = e.target.style.backgroundImage
    if (cards[currentIndex].classList.contains('active')) {
        myBg.style.display = 'flex'
        let imgSrc = cards[currentIndex].style.backgroundImage
        currentImg.style.backgroundImage = imgSrc
    }

}


function prevImg() {

    currentIndex--
    if (currentIndex < 0) {
        currentIndex = cards.length - 1
    }
    removeClassActive();
    cards[currentIndex].classList.add('active')
    let imgSrc = cards[currentIndex].style.backgroundImage
    currentImg.style.backgroundImage = imgSrc


}