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

//
