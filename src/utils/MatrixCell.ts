import Player from './Player'
import Coordinate from './Coordinate'

class MatrixCell{
    readonly coordinate: Coordinate;
    readonly player: Player;
    readonly selected: boolean;

    constructor(coordinate: Coordinate, player: Player, selected: boolean){
        this.coordinate = coordinate;
        this.player = player;
        this.selected = selected;
    }
    get id(): string{
        return this.coordinate.id;
    }

    isIn(coordinate: Coordinate){
        return this.coordinate.equals(coordinate);
    }
}

export default MatrixCell;