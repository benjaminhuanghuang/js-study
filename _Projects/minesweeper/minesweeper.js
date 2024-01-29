import { Grid } from "./grid.js"

const MINE = "*"
const isMine = (icon) => icon == MINE

export const annotate = (board) => {
	let grid = new Grid(board.map((row) => [...row]))
	grid.eachSquare((x,y,contents) => {
		if (contents == MINE) { return }

		let nearbyBombs = grid
			.adjacentTo(x,y)
			.filter(isMine)
		if (nearbyBombs.length == 0) { return }

		grid.setSquare(x,y, nearbyBombs.length)
	})

	return grid.toString()
}