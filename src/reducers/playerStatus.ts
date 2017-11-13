import { MoveAction, AbstractAction } from '../actions';
import PlayerStatusState from '../states/PlayerStatusState'
import ActionType from '../actions/ActionType'
import Player from '../utils/Player'
import BoardMatrix from '../utils/BoardMatrix'
import Coordinate from '../utils/Coordinate'

export default function playerStatus(previousState: PlayerStatusState,action: AbstractAction): PlayerStatusState{
    if(action.type !== ActionType.MOVE) return previousState;
    const moveAction = action as MoveAction;
    // see if we have a winner
    if(isWin(moveAction.board,moveAction.cell)){
        return {
            winner: moveAction.player
        };
    }else{
        return {
            nextPlayer: moveAction.player===Player.O ? Player.X : Player.O
        };
    }
}

function isWin(board: BoardMatrix, newMove: Coordinate): boolean{
    // check the rows
    // check the columns
    // the two diagonals
    return true;
}