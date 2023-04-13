const cells = document.querySelectorAll('.game-field-block'); 
const reset = document.querySelector('.reset');
const players = ['❁', '❀'];
const field = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

reset.addEventListener('click', (e) => {
	e.preventDefault();
	location.reload();
});	

function startGame(cells) {
    let i = 0;

    for (let cell of cells) {
        cell.addEventListener('click', function step() {
            this.textContent = players[i % 2];
            this.removeEventListener('click', step);

            if (isVictory(cells)) {
				alert(`${this.textContent} WIN!`);
			} else if (i === 8) {
				alert(`DRAW!`);
			}

            i += 1;
        })
    }
};

function isVictory(cells) {
    for (let item of field) {
		if (
			cells[item[0]].textContent === cells[item[1]].textContent &&
			cells[item[1]].textContent === cells[item[2]].textContent &&
			cells[item[0]].textContent !== ''
		) {
			return true;
		}
	}
	return false;
};

startGame(cells);