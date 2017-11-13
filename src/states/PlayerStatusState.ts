import Player from '../utils/Player'

export default interface PlayerStatusState{
    winner?: Player;
    nextPlayer?: Player;
}