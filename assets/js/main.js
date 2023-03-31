function creaElementoHtml( tagHtml, classi, text ){
    let elemento = document.createElement( tagHtml )
    elemento.className = classi;

    elemento.innerText = text;

    return elemento 
}

let griglia = document.querySelector('.griglia')

for(let i = 1; i <= 100; i++){
    const divbox = creaElementoHtml("div", "box", i);

    
    divbox.addEventListener('click', function(){
     
       this.classList.toggle('active')
       console.log('Cella cliccata:', this.innerText);
       
    })

    griglia.append( divbox )
}
