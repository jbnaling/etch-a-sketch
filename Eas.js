//global vars
let redColor = Math.floor(Math.random() * (255 - 0) );
let greenColor = Math.floor(Math.random() * (255 - 0) );
let blueColor = Math.floor(Math.random() * (255 - 0) );

//reset screen
btnClear = document.createElement("button");
btnClear.textContent = "Reset";
let menu = document.querySelector(".menu");
menu.append(btnClear);
let hgBody = document.querySelector(".HolyGrail-body");
//hgBody.append(btnClear);


//grid container initial values
let gridRowNum=15;
let gridColumnNum=15;
let gridArea=0;
let gridContainer = document.createElement("div");


let tile = {
    initialRed: 255,
    initialGreen: 255,
    initialBlue: 255,
    currentRed: 255,
    currentBlue: 255,
    currentGreen: 255,
  }; 



createGrid(gridRowNum, gridColumnNum);

function createGrid(gridRowNum, gridColumnNum){
    gridContainer.id = "gridContainer";
    gridContainer.style.height = "50vh"
    gridContainer.style.display = "grid";
    
    gridContainer.style.gridTemplateRows= "auto"
    gridContainer.style.gridTemplateColumns = `repeat(${gridColumnNum}, 1fr)`;
    //document.body.append(gridContainer);
    hgBody.append(gridContainer);
    gridArea = gridRowNum * gridColumnNum;
    fillGrid(gridArea);
}

//create and append item for every grid area

function fillGrid(gridArea){
    let item = [];
    for (i=0; i<gridArea; i++){

        //clear color
        item[i] = document.createElement("div");
        item[i].style.backgroundColor = `rgb(255, 255, 255)`;
        

        //clear color for tile
        tile[i] = document.createElement("div");
        tile[i].style.backgroundColor = `rgb(255, 255, 255)`;


        /*
        //add event
        item[i].addEventListener("mouseover", (e) => {
            //if the item is white create the initial random color
            if (e.target.style.backgroundColor == `rgb(255, 255, 255)`){
                redColor = Math.floor(Math.random() * (255 - 0) );
                greenColor = Math.floor(Math.random() * (255 - 0) );
                blueColor = Math.floor(Math.random() * (255 - 0) );
                e.target.style.backgroundColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
            }
                
            //grab the current RGB color and make it darker
            else{
                //find red color 
                console.log("the target's color is" + e.target.style.backgroundColor);
                let redColorIndexStart = e.target.style.backgroundColor.indexOf("(") + 1;
                let redColorIndexEnd = e.target.style.backgroundColor.indexOf(",");
                redColor = parseInt(e.target.style.backgroundColor.substring(redColorIndexStart, redColorIndexEnd));

                //find green color
                let greenColorText =e.target.style.backgroundColor.split(" ");                
                greenColorText = greenColorText[1].substring(0, (greenColorText[1].length-1));
                console.log(greenColorText);
                greenColor = parseInt(greenColorText);
                
                //find blue color
                let blueColorText =e.target.style.backgroundColor.split(" ");      
                blueColorText = blueColorText[2].substring(0, (blueColorText[2].length-1));         
                //.substring(0, greenColorText[2].length - 1);
                blueColor = parseInt(blueColorText);
                console.log("the blue value is:" + blueColorText);

                redColor = Math.floor(redColor - ((redColor *.1) * 2));
                greenColor = Math.floor(greenColor - ((greenColor *.1) * 2));
                blueColor = Math.floor(blueColor - ((blueColor *.1) * 2));
                e.target.style.backgroundColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
                //console.log("the red value is:" + redColor);
            }
            
        });
        */


        tile[i].addEventListener("mouseover", (e) => {
            //if the item is white create the initial random color
            if (e.target.style.backgroundColor == `rgb(255, 255, 255)`){
                redColor = Math.floor(Math.random() * (255 - 0) );
                greenColor = Math.floor(Math.random() * (255 - 0) );
                blueColor = Math.floor(Math.random() * (255 - 0) );
                
                //store initial values so we can subtract it as a base later
                e.target.initialRed = redColor;
                e.target.initialGreen = greenColor;
                e.target.initialBlue = blueColor;
                e.target.style.backgroundColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
                console.log("the target's initial green color is: " + e.target.initialGreen);
                
            }
                
            //grab the current RGB color and make it darker
            else{
                //find red color 
                console.log("the target's color is" + e.target.style.backgroundColor);
                let redColorIndexStart = e.target.style.backgroundColor.indexOf("(") + 1;
                let redColorIndexEnd = e.target.style.backgroundColor.indexOf(",");
                redColor = parseInt(e.target.style.backgroundColor.substring(redColorIndexStart, redColorIndexEnd));

                //find green color
                let greenColorText =e.target.style.backgroundColor.split(" ");                
                greenColorText = greenColorText[1].substring(0, (greenColorText[1].length-1));
                console.log(greenColorText);
                greenColor = parseInt(greenColorText);
                
                //find blue color
                let blueColorText =e.target.style.backgroundColor.split(" ");      
                blueColorText = blueColorText[2].substring(0, (blueColorText[2].length-1));         
                //.substring(0, greenColorText[2].length - 1);
                blueColor = parseInt(blueColorText);
                console.log("the blue value is:" + blueColorText);

                if (redColor-(e.target.initialRed *.1) > 0){
                    redColor = Math.floor(redColor - (e.target.initialRed * .1));
                }
                else {
                    redColor = 0;
                }
                
                if (greenColor-(e.target.initialGreen *.1) > 0){
                    greenColor = Math.floor(greenColor - (e.target.initialGreen * .1));
                }
                else {
                    greenColor = 0;
                }

                if (blueColor-(e.target.initialBlue *.1) > 0){
                    blueColor = Math.floor(blueColor - (e.target.initialBlue * .1));
                }
                else {
                    blueColor = 0;
                }

                console.log("i subtract the greenColor with initialGreen")
                console.log("the initial green value is: " + e.target.initialGreen);
                console.log("the green value is now: " + greenColor);
                
                e.target.style.backgroundColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
                console.log("the RGB values are now: " + redColor + " " + greenColor + " " + blueColor)
                
            }
            
        });



        //append element
        //gridContainer.append(item[i]);
        gridContainer.append(tile[i]);
    }
}



//event - clear grid color and make buttons visible 
//has an error message - is this being used? - yes


btnClear.addEventListener("click", () => {
    gridRowNum = prompt("Enter number of rows(100 max):", "");
    while (gridRowNum > 100 || gridRowNum < 1){
        gridRowNum = prompt("Enter number of rows(100 max):", "");
    }

    gridColumnNum = prompt("Enter number of columns(100 max):", "");
    while (gridColumnNum > 100 || gridColumnNum < 1){
        gridColumnNum = prompt("Enter number of columns(100 max):", "");
    }

    clearGrid();
    createGrid(gridRowNum, gridColumnNum);
});


function clearGrid(){
    gridContainer.remove()
    gridContainer = [];
    gridContainer = document.createElement("div");
}

let buttonBW = document.querySelector(".blackAndWhite");
buttonBW.addEventListener("click", (e) => {
    console.log("black and white function");
    //blackAndWhite();
});


/*
function blackAndWhite(){
    console.log("black and white function");
}
*/



/*not trying to use anymore for testing
//grid container initial values
let gridRowNum2=15;
let gridColumnNum2=15;
let gridArea2=0;
let gridContainer2 = document.createElement("div");


//add GC2 to class GC2

gridContainer2.id = "gridContainer2";
gridContainer2.style.height = "50vh"
gridContainer2.style.display = "grid";
gridContainer2.style.border = "1px solid #ddd";

gridContainer2.style.gridTemplateRows= "auto"
gridContainer2.style.gridTemplateColumns = `repeat(${gridColumnNum2}, 1fr)`;


gridArea2 = gridRowNum * gridColumnNum;
let GC2 = document.querySelector(".GridContainer2")
GC2.append(gridContainer2);



//fillGrid(gridArea2);
*/