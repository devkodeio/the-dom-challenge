let grid = document.querySelector('#grid');
let rows=null;
let color=["background-color:#0c98ca","background-color:#7200cf","background-color:#f43100","background-color:#00d6d8","background-color:#200052","background-color:#60e800","background-color:#6d00ff","background-color:#ff7c55","background-color:#00a650","background-color:#00a9cd"]

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
}

function colorCols(col) {
    let str="";
    for (let i = 0; i < col; i++) {
        str+=`<div class="grid-col cell" style=${color[i]}></div>`
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