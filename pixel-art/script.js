let grid = document.querySelector('#grid');
let rows=null;
let selectedColor = 
function pixelArt(el,rows,columns){
    let griditem="";
    for(let i=0;i<rows;i++){
        griditem+=`<div class="grid-row">`;
        griditem=cols(griditem,columns);
        griditem+=`</div>`
    }
    el.innerHTML = griditem;
    rows = document.querySelectorAll('.grid-row');
    rows[9].innerHTML= colorCols(columns);
    let colors = rows[9].querySelectorAll(".cell");

}

function colorCols(col) {
    let str="";
    for (let i = 0; i < col; i++) {
        let a= Math.floor(Math.random() * 256); 
        let b= Math.floor(Math.random() * 256); 
        let c= Math.floor(Math.random() * 256); 
        str+=`<div class="grid-col cell" style="background-color:rgb(${a},${b},${c}); cursor:pointer"></div>`
    }
    return str
}

function cols(griditem,columns){
    for (let i = 0; i < columns; i++) {
        griditem+=`<div class="grid-col cell"></div>`    
    }
    return griditem;
}



pixelArt(grid,10,10);