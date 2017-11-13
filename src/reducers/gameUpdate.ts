import { MoveAction, AbstractAction, JumpAction } from '../actions'
import GameState from '../states/GameState'
import BoardMatrix from '../utils/BoardMatrix'
import ActionType from '../actions/ActionType'

// adds a new move to the history of moves
export default function gameUpdate(previousState: GameState,action: AbstractAction): GameState{
    if(action.type===ActionType.JUMP){
        const jumpAction = action as JumpAction;
        return{
            ...previousState,
            currentBoard: previousState.history[jumpAction.moveNumber]
        }
    }
    if(action.type === ActionType.MOVE){
        const moveAction = action as MoveAction;
        const currentMove = previousState.history[previousState.history.length-1];
        // take the previous squares and put a move on the position given by the action
        const newBoard = BoardMatrix.movedOn(currentMove,moveAction.player,moveAction.cell);
        return {
            ...previousState,
            currentBoard: newBoard,
            history: [...previousState.history, newBoard]
        };
    }
    return previousState;
}
