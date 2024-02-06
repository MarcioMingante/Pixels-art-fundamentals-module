// Criação da "grade"

const grid = document.createElement('section');
grid.id = 'pixel-board';
grid.style.textAlign = 'center';

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
  const nextLine = document.createElement('br');
  grid.appendChild(nextLine);
}

document.body.appendChild(grid);

// Função para selecionar a cor
// Apenas uma pode ser selecionada por vez
// Selecionada deve er a classe "selected"
// Os elementos "color" que deve receber a classe "selected"

const color = document.querySelectorAll('.color');

for (let index = 0; index < color.length; index += 1) {
    color[index].addEventListener('click', () => {
        const selectedColor = document.querySelector('.selected');
        if (selectedColor) {
            selectedColor.classList.remove('selected');
        }
        color[index].classList.add('selected');
    });  
}
