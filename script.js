const imgContainer = document.querySelector('.img-container');
const addImg = document.querySelector('#add-btn');
const showMoreBtn = document.querySelector('#add-btn');


const imgBuddle1 = [
    "<img src='../cake gallery/image 20.png' alt='img-cake' class='img'>",
    "<img src='../cake gallery/image 21.png' alt='img-cake' class='img'>",
    "<img src='../cake gallery/image 22.png' alt='img-cake' class='img'>",
    "<img src='../cake gallery/image 23.png' alt='img-cake' class='img'>",
    "<img src='../cake gallery/image 24.png' alt='img-cake' class='img'>",
    "<img src='../cake gallery/image 25.png' alt='img-cake' class='img'>",
    "<img src='../cake gallery/image 26.png' alt='img-cake' class='img'>",
    "<img src='../cake gallery/image 27.png' alt='img-cake' class='img'>"
]

const imgBuddle2 = [
    "<img src='../cake gallery/image 28.png' alt='img-cake' class='img'>",
    "<img src='../cake gallery/image 29.png' alt='img-cake' class='img'>",
    "<img src='../cake gallery/image 30.png' alt='img-cake' class='img'>",
    "<img src='../cake gallery/image 34.png' alt='img-cake' class='img'>",
    "<img src='../cake gallery/image 35.png' alt='img-cake' class='img'>",
    "<img src='../cake gallery/image 36.png' alt='img-cake' class='img'>"
]

let flag = 0;
// Add an image to the img-container when the button is clicked
addImg.onclick = function() {
    if (flag === 0){
        for(let x = 0; x <= 7; x++){
            imgContainer.innerHTML += imgBuddle1[x];
        }
    }else{
        for(let x = 0; x <= 5; x++){
            imgContainer.innerHTML += imgBuddle2[x];
        }
    }
    flag ++;
    if(flag == 2 ){
        showMoreBtn.remove();
    }
}

console.log(imgBuddle1);
    





// This is an example of how to add click functionality to the button
// You can add more Javascript to implement other features

// const button = document.querySelector('button');

// button.addEventListener('click', function() {
//   alert('You clicked the reserve button!');
// });
