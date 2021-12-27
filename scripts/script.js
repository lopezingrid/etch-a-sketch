let grid = document.querySelector("#grid");
let divGrid = document.querySelectorAll(".divGrid");
let buttonClean = document.querySelector("#clean");
let btnRandomColor = document.querySelector("#randomColor");
let btnBlackHover = document.querySelector("#black");
let btnEraser = document.querySelector("#eraser");
let slider = document.querySelector("#gridSlider");
let outputSliderNum = document.querySelector("#demo");

// The amount of divs per side and total of the grid
let numSize = 16;

// The function that creates the grid
function gridSize(numSize) {
    areaTotal = numSize * numSize;

    for (let i = 1; i <= areaTotal; i++) {
        let divGrid = document.createElement("div");

        grid.appendChild(divGrid);
        divGrid.classList.add("divGrid");
        
        grid.style.gridTemplateColumns = `repeat(${numSize}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${numSize}, 1fr)`;   
    }
    divGrid = document.querySelectorAll(".divGrid");
    hoverEffect(divGrid);
}
gridSize(numSize);



// Set up a hover effect that changes the color to black when passes the mouse
function hoverEffect (divGrid) {
    for (let i = 0; i < divGrid.length; i++) {
        divGrid[i].addEventListener("mouseover", () => {
        divGrid[i].style.backgroundColor = "black"; 
        }); 
        
    }
}
hoverEffect(divGrid);


// A button that cleans the grid 
buttonClean.addEventListener("click", () => {
    for (let i = 0; i < divGrid.length; i++) {
        divGrid[i].style.backgroundColor = "white";
    }
})


// Function that selects randomly a RGB color
function rgbColor() {
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    return `rgb(${randomR}, ${randomG}, ${randomB})`
}


// A button of hover effect that change the color to random color when passes the mouse
btnRandomColor.addEventListener("click", () => {
    for (let i = 0; i < divGrid.length; i++) {
        divGrid[i].addEventListener("mouseover", () => {
            divGrid[i].style.backgroundColor = rgbColor();
        }); 
    }
});


// A button that make the hover black
btnBlackHover.addEventListener("click", () => {
    for (let i = 0; i < divGrid.length; i++) {
        divGrid[i].addEventListener("mouseover", () => {
            divGrid[i].style.backgroundColor = "black";
        }); 
    }
})


// A button que borre el lapiz de la pizarra
btnEraser.addEventListener("click", () => {
    for (let i = 0; i < divGrid.length; i++) {
        divGrid[i].addEventListener("mouseover", () => {
            divGrid[i].style.backgroundColor = "white";
        }); 
    }
})


// Output the slider bar actual number
outputSliderNum.innerHTML = slider.value;
slider.oninput = function() {
    outputSliderNum.innerHTML = this.value + " x " + this.value;
}


// Set new size grid for the slider bar
slider.addEventListener("mouseup", function() {
    numSize = this.value;
    for (let i = 0; i < divGrid.length; i++) {
        divGrid[i].style.backgroundColor = "white";
    }
    gridSize(numSize);
})




