import GameState from './GameState'
import NavigationState from './NavigationState'
import PlayerStatusState from './PlayerStatusState'

export default interface AppState{
    moves: GameState;
    navigation: NavigationState;
    playerStatus: PlayerStatusState;
}