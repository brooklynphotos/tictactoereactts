import BoardMatrix from '../utils/BoardMatrix';

export default interface GameState {
    history: BoardMatrix[]; // all the moves that have happened
    currentBoard: BoardMatrix; // the board that game should be showing now
}
