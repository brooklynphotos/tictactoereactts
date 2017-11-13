import BoardMatrix from './BoardMatrix';

/**
 * 
 * @param size initializes the start of the game with a completely blank matrix
 */
export function createEmptyBoard(size: number): BoardMatrix[]{
    return [BoardMatrix.newBlankMatrix(size)];
}