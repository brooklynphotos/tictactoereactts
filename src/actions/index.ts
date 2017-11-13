import Player from '../utils/Player'
import ActionType from './ActionType'
import Coordinate from '../utils/Coordinate'
import BoardMatrix from '../utils/BoardMatrix'

// an example of action creator
/**
 * Makes a move for a given player at a given cell
 * @param player 
 * @param cell 
 * @returns which player made what move
 */
export function makeMove(player: Player, cell: Coordinate, board: BoardMatrix): MoveAction{
    return {
        type: ActionType.MOVE,
        player,
        cell,
        board
    };
}

/**
 * jump back to a specific move in time
 * @param stepNumber 
 */
export function jumpBack(moveNumber: number): JumpAction{
    return {
        type: ActionType.JUMP,
        moveNumber
    }
}

export function sortHistory(sortAsc: boolean): SortAction{
    return {
        type: ActionType.SORT,
        sortAsc
    }
}

export interface MoveAction extends AbstractAction{
    player: Player; // the player that made the move
    cell: Coordinate; // where the move was made
    board: BoardMatrix; // the board onto which the move was made
}

export interface JumpAction extends AbstractAction{
    moveNumber: number; // the move number to jump to
}

export interface SortAction extends AbstractAction{
    sortAsc: boolean; // is it ascending sort
}

export interface AbstractAction{
    type: ActionType;
}