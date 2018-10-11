let puzzle = [
  ["a", "k", "f", "o", "x", "e", "s"],
  ["s", "o", "a", "w", "a", "h", "p"],
  ["i", "t", "c", "k", "e", "t", "n"],
  ["o", "t", "s", "d", "h", "o", "h"],
  ["s", "e", "x", "g", "s", "t", "a"],
  ["u", "r", "p", "i", "w", "e", "u"],
  ["z", "s", "b", "n", "u", "i", "r"]
]

let newPuzzle =  puzzle[0].map((x,i) => puzzle.map(x => x[i]))

//function searchStraightLineInclude(word, puzzle){

	
	function horSearch(word, puzzle) {
		let str = '';
		let newWord = word.length;
		

		for(let row = 0; row < puzzle.length; row++) {
			for(let j = 0; j < (puzzle[row].length - newWord + 1); j++) {
				str = puzzle[row].slice(j, j+newWord).join('');

				if (str == word) {
					return true;
				}
			}
		}
		return false;

	}

	function verSearch(word, newPuzzle)
	{
		let str = '';
		let newWord = word.length;
		

		for(let row = 0; row < newPuzzle.length; row++) {
			for(let j = 0; j < (newPuzzle[row].length - newWord + 1); j++) {
				str = newPuzzle[row].slice(j, j+newWord).join('');

				if (str == word) {
					return true;
				}
			}
		}
		return false;

	}

	console.log(verSearch('ios', newPuzzle))

	function diagSearch(word, puzzle) {
		let str = '';
		let newWord = word.length;
		

		for(let row = 0; row < puzzle.length; row--) {
			for(let j = 0; j < (puzzle[row].length - newWord); j++) {
				str = puzzle[row].slice(j, j+newWord).join('');

				if (str == word) {
					return true;
				}
			}
		}
		return false;
	}
	//}
	console.log(diagSearch('bis', puzzle));

//console.log(searchStraightLineInclude('fox', puzzle));
