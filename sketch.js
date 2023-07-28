let color = 'black';
let click = false;

document.addEventListener('DOMContentLoaded', function(){
    createBoard(16);

    document.querySelector('body').addEventListener('click', (e) => {
        click = !click;
        let draw = document.querySelector('.draw');
        if(click){
            draw.innerHTML = 'You can draw!'
        } else{
            draw.innerHTML = 'Not allowed to draw...'
        }
    })

    let submitBtn = document.querySelector('.submitBtn');
    submitBtn.addEventListener('click', () => {
        let size = getSize();
        createBoard(size);
    })
})

function createBoard(size){
    let container = document.querySelector('.container');

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; 1 < numDivs; i++){
        let div = document.createElement('div');
        div.addEventListener('mouseover', colorDiv);
        container.insertAdjacentElement('beforeend', div);
    }
}

function getSize(){
    let inputNum = document.getElementById('gridSize').value;
    if(inputNum == ''){
        alert('Please provide a number...');
    } else if(inputNum < 0 || inputNum > 100){
        alert('Provide a number between 1 and 100');
    } else{
        alert('Creating your board...');
        return inputNum;
    }
}

function colorDiv(){
    if(click){
        if(color == 'random'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else{
            this.style.backgroundColor = 'black';
        }
    }
}

function setColor(colorChoice){
    color = colorChoice;
}

function resetBoard(){
    let divs = document.querySelector('.container').querySelectorAll('div');
    divs.forEach((div) => div.style.backgroundColor = '#eceaea');
}