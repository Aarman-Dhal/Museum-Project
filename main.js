// Museum Project


// Global Variables
let characterArray = []; 
createCharacterArray();
let slideIndex = 0;

document.getElementById('prev').addEventListener('click', prevSlide);
document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('update').addEventListener('click', newRating);


function nextSlide() {
    // Increment and update index
    slideIndex++;
    if(slideIndex == characterArray.length) {
      slideIndex = 0;
    }
  
    // Update the page
    displayCharacter(characterArray[slideIndex])
}


function prevSlide() {
    // Increment and update index
    slideIndex--;
    if(slideIndex == -1) {
      slideIndex = characterArray.length - 1;
    }
  
    // Update the page
    displayCharacter(characterArray[slideIndex])
}


function displayCharacter(characterObj) {
    // Update page to new character info
    document.getElementById("img").src = 'images/' + characterObj.imgFile;
    document.getElementById("name").innerHTML = 'Name: ' + characterObj.name;
    document.getElementById("rating").innerHTML = 'Rating: ' + characterObj.rating;
    document.getElementById("interaction").innerHTML = 'Interaction: ' + characterObj.interaction;
}



function createCharacterArray(){
    fetch("character-data.txt")
      .then((rawData) => rawData.text())
      .then(processData);
  }
        
  function processData(data) {
    let lines = data.split("\r\n");
        // Loop through lines and add to characterArray
        for (let i = 0; i < lines.length; i++){
          let lineArray = lines[i].split(";");
            characterArray.push({
            name: lineArray[0],
            rating: lineArray[1],
            interaction: lineArray[2],
            imgFile: lineArray[3]
          })
        }
}

function newRating(score){
    score = Number(document.getElementById('input').value);
    if (score == 1) {
        document.getElementById('output').innerHTML = score
    }

}