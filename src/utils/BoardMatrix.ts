import MatrixCell from './MatrixCell'
import Player from './Player'
import Coordinate from './Coordinate'

export default class BoardMatrix{
    readonly matrix: MatrixCell[][];    
    
    /**
     * creates a blank board matrix with cells that only contains the coordinate info
     * @param size 
     */
    static newBlankMatrix(size: number): BoardMatrix {
        return new BoardMatrix(
            Array(size).map((row,rowIndex)=>
                Array(size).map((cell,cellIndex)=>new MatrixCell(new Coordinate(cellIndex,rowIndex),null,false))
            )
        );
    }

    /**
     * creates a new board matrix based on the original board but a player has now made a move
     * @param original 
     * @param player 
     * @param movedCell 
     */
    public static movedOn(original: BoardMatrix,player: Player, movedCell: Coordinate){
        return new BoardMatrix(
            original.matrix.map(
                row=>row.map(
                    cell=>cell.isIn(movedCell) ? new MatrixCell(cell.coordinate,player, true) : cell
                )
            )
        );
    }

    constructor(matrix: MatrixCell[][]){
        this.matrix = matrix;
    }

    get selectedCell(): MatrixCell|null{
        for(let i=0;i<this.matrix.length;i++){
            const row = this.matrix[i];
            const found = row.find(cell=>cell.selected);
            if(found)
                return found;
        }
        return null;
    }
}