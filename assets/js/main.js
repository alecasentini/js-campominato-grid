const playBtn = document.getElementById("play");

playBtn.addEventListener("click", generaGriglia);

function generaGriglia() {
    const livello = document.getElementById("livello").value;
    const griglia = document.querySelector(".griglia");
    griglia.innerHTML = "";

    let width = "";

    let numBox = "";

    if (livello === "easy") {
      width = "calc(100% / 10)";
      numBox = 100;

    } else if (livello === "normal") {
      width = "calc(100% / 9)";
      numBox = 81;

    } else if (livello === "hard") {
      width = "calc(100% / 7)";
      numBox = 49;
    }

    let boxCounter = 1;
    for (let i = 0; i < numBox; i++) {
        const box = document.createElement("div");
        box.classList.add("box", livello);

        box.style.width = width;

        box.innerText = boxCounter;

        griglia.appendChild(box);
        
        boxCounter++;

    box.addEventListener('click', function(){
        
    this.classList.toggle('active')
    console.log('Cella cliccata:', this.innerText);

    })
    }   
    const game = document.querySelector(".game");
    game.style.display = "inline-block";
}
