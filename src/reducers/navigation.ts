import { SortAction, AbstractAction, MoveAction } from '../actions'
import NavigationState from '../states/NavigationState'
import ActionType from '../actions/ActionType'
import Move from '../utils/Move'

// reduces a navigation state when someone wants to jump to a previous board or sort the list of boards
export default function navigation(previousState: NavigationState,action: AbstractAction): NavigationState{
    switch(action.type){
        case ActionType.SORT:
            const sortAction = action as SortAction;
            return {
                ...previousState,
                sortAsc: sortAction.sortAsc,
                moves: sortFrom(previousState.moves, sortAction.sortAsc)
            };
        case ActionType.MOVE:
            // if someone makes a move, add to coordinate
            const moveAction = action as MoveAction;
            const newMove = {coordinates: moveAction.cell, moveNumber: previousState.moves.length} as Move;
            return {
                ...previousState,
                moves: previousState.sortAsc ? [...previousState.moves, newMove]: [newMove, ...previousState.moves]
            }
        default:
            return previousState;
    }
}

/**
 * takes a coordinates array and sort it based on id
 * @param coordinates 
 * @param sortAsc 
 */
function sortFrom(moves: Move[], sortAsc: boolean): Move[]{
    const newMoves = moves.slice();
    newMoves.sort((a,b)=>(a.moveNumber-b.moveNumber)* (sortAsc ? 1 : -1));
    return newMoves;
}