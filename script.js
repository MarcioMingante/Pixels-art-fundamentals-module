// ADICIONA CORES A PALETA

const paletColors = document.querySelectorAll('.color');

paletColors[0].style.backgroundColor = 'red';
paletColors[1].style.backgroundColor = 'green';
paletColors[2].style.backgroundColor = 'blue';
paletColors[3].style.backgroundColor = 'black';

// CRIA SECTION DO BOARD

const grid = document.createElement('section');

const firstGrid = () => {
    grid.id = 'pixel-board';
    grid.style.textAlign = 'center';
    grid.style.width = '210px';
    grid.style.margin = 'auto';
    grid.style.marginBottom = '0px';
    grid.style.marginTop = '0px';
    grid.style.padding = '0px';
};

firstGrid();

// CRIA O BOARD

const gridValues = (number) => {
    for (let indexHeight = 0; indexHeight < number; indexHeight += 1) {
        for (let indexWidth = 0; indexWidth < number; indexWidth += 1) {
            const gridPixels = document.createElement('div');
            grid.style.width = `${42 * number}px`;
            gridPixels.classList = 'pixel';
            gridPixels.style.backgroundColor = 'white';
            gridPixels.style.height = '40px';
            gridPixels.style.width = '40px';
            gridPixels.style.border = '1px black solid';
            gridPixels.style.marginTop = '-4px';
            gridPixels.style.display = 'inline-block';
            grid.appendChild(gridPixels);
        }
    }
    document.body.appendChild(grid);
};

const saveLocalStorageGrid = () => {
    if (localStorage.getItem('lastGrid')) {
        grid.style.width = localStorage.getItem('lastGrid');
    }
};

const saveLocalStorageValues = () => {
    if (localStorage.getItem('lastGridValues')) {
        gridValues();
        gridValues(localStorage.getItem('lastGridValues'));
    } else {
        gridValues(5);
    }
};

// localStorage.setItem('lastGrid', grid.style.width)

saveLocalStorageValues();

saveLocalStorageGrid();

const saveLocalStorageDrawing = () => {
    if (localStorage.getItem('drawing')) {
        grid.innerHTML = localStorage.getItem('drawing');
    }
};

saveLocalStorageDrawing();

// FUNÇÃO PARA SELECIONAR COR

const colorSelector = () => {
    const color = document.querySelectorAll('.color');
    for (let index = 0; index < color.length; index += 1) {
        color[index].addEventListener('click', (event) => {
            const selectedColor = document.querySelector('.selected');
        if (selectedColor) {
            selectedColor.classList.remove('selected');
          }
          event.target.classList.add('selected');
         });
    }
};

colorSelector();

// ALTERA A COR DOS PIXELS SELECIONADOS

const paintPixel = () => {
    const pixelSelector = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixelSelector.length; index += 1) {
        pixelSelector[index].addEventListener('click', (event) => {
          const { target } = event;
          const selectedColor = document.querySelector('.selected');
          const currentColor = selectedColor.style.backgroundColor;
          if (selectedColor) {
              target.style.backgroundColor = currentColor;
              localStorage.setItem('drawing', grid.innerHTML);
            }
        });
    }
};

paintPixel();

// Cria botão que limpa as cores já pintadas

const header = document.body.querySelector('header');

const buttons = document.createElement('div');
buttons.style.textAlign = 'center';
buttons.style.marginBottom = '8px';
header.appendChild(buttons);

const gridInfo = document.createElement('div');
gridInfo.style.textAlign = 'center';
header.appendChild(gridInfo);

const clearButton = document.createElement('button');
clearButton.innerText = 'Limpar';
clearButton.id = 'clear-board';
buttons.appendChild(clearButton);

const resetGrid = document.getElementById('clear-board');

resetGrid.addEventListener('click', () => {
    const paintedPixels = document.getElementsByClassName('pixel');
    for (let index = 0; index < paintedPixels.length; index += 1) {
        paintedPixels[index].style.backgroundColor = 'white';
    }
    localStorage.setItem('drawing', grid.innerHTML);
});

// Cria botão de cores aleatorias

const randomColors = document.createElement('button');
randomColors.id = 'button-random-color';
randomColors.innerText = 'Cores aleatórias';
randomColors.style.marginLeft = '5px';
buttons.append(randomColors);

const randomizeColors = document.getElementById('button-random-color');

const randomizeRGB = () => {
    const mathematics = [];

    for (let index = 0; index < 3; index += 1) {
        const number = Math.floor(Math.random() * 255);
        mathematics.push(number);
    }
    return `rgb(${mathematics[0]},${mathematics[1]},${mathematics[2]})`;
};

randomizeColors.addEventListener('click', () => {
    for (let index = 0; index < paletColors.length; index += 1) {
        paletColors[index].style.backgroundColor = randomizeRGB();
    }
});

// Adiciona o desenho no local storage

// Altera tamanho da grid

const gridSize = document.createElement('input');
gridSize.style.width = '40px';
gridSize.style.fontSize = '20px';
gridSize.id = 'board-size';
gridSize.value = '0';
gridSize.type = 'number';
gridSize.min = '1';
gridSize.style.marginBottom = '8px';
gridInfo.appendChild(gridSize);

const applyGridSize = document.createElement('button');
applyGridSize.id = 'generate-board';
applyGridSize.innerText = 'VQV';
applyGridSize.style.marginLeft = '4px';
gridInfo.appendChild(applyGridSize);

const generateBoard = document.getElementById('generate-board');

const verifyInputNumber = (currentNumber) => {
    if (currentNumber === '0') {
        window.alert('Board inválido!');
    }

    if (currentNumber < 5) {
        gridValues(5);
        localStorage.setItem('lastGridValues', '5');
    } else if (currentNumber > 50) {
        gridValues(50);
        localStorage.setItem('lastGridValues', '50');
    } else {
        gridValues(currentNumber);
        localStorage.setItem('lastGridValues', currentNumber);
    }
};

generateBoard.addEventListener('click', () => {
    const currentBoard = document.querySelectorAll('.pixel');

    for (let index = 0; index < currentBoard.length; index += 1) {
        if (currentBoard[index]) {
            currentBoard[index].remove();
        }
    }

    const inputNumber = document.getElementById('board-size').value;

    verifyInputNumber(inputNumber);

    localStorage.setItem('lastGrid', grid.style.width);

    localStorage.removeItem('drawing');

    paintPixel();
});
