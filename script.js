// Adiciona cores a paleta

const paletColors = document.querySelectorAll('.color');

paletColors[0].style.backgroundColor = 'red';
paletColors[1].style.backgroundColor = 'green';
paletColors[2].style.backgroundColor = 'blue';
paletColors[3].style.backgroundColor = 'black';

// Criação da "grade"

const grid = document.createElement('section');
grid.id = 'pixel-board';
grid.style.textAlign = 'center';
grid.style.width = '210px';
grid.style.margin = 'auto';
grid.style.marginBottom = '0px';
grid.style.marginTop = '0px';
grid.style.padding = '0px';

for (let indexHeight = 0; indexHeight < 5; indexHeight += 1) {
  for (let indexWidth = 0; indexWidth < 5; indexWidth += 1) {
    const gridPixels = document.createElement('div');
    gridPixels.classList = 'pixel';
    gridPixels.style.backgroundColor = 'white';
    gridPixels.style.height = '40px';
    gridPixels.style.width = '40px';
    gridPixels.style.border = '1px black solid';
    gridPixels.style.display = 'inline-block';
    grid.appendChild(gridPixels);
  }
}

document.body.appendChild(grid);

// Função para selecionar a cor

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

// Alterar cor dos pixels selecionados
// Capturar dados da cor selecionada
// Identificar o pixel especifico
// Adicionar cor selecionada ao pixel selecionado

const pixelSelector = document.querySelectorAll('.pixel');

for (let index = 0; index < pixelSelector.length; index += 1) {
    pixelSelector[index].addEventListener('click', (event) => {
      const selectedColor = document.querySelector('.selected');
      const currentColor = selectedColor.style.backgroundColor;
      if (selectedColor) {
        event.target.style.backgroundColor = currentColor;
      }
    });
}

// Cria botão que limpa as cores já pintadas
// Cria "btn"
// Adiciona id "clear-board"
// Entre paleta e grid
// Inner text "limpar"
// Todos os "pixels" em "white"

const header = document.body.querySelector('header');

const buttons = document.createElement('div');
buttons.style.textAlign = 'center';
buttons.style.marginBottom = '5px';
header.appendChild(buttons);

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
});
