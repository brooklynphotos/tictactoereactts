import { connect, Dispatch } from 'react-redux'
import { makeMove, MoveAction } from '../actions'
import Game, {GameProps} from '../components/Game'
import AppState from '../states/AppState'
import Coordinate from '../utils/Coordinate';
import BoardMatrix from '../utils/BoardMatrix';
import Player from '../utils/Player';

/**
 * building props for the presentational component you're wrapping, i.e. Game
 * @param state current redux store
 * @param ownProps 
 */
const mapStateToProps = (state: AppState): GameProps => ({
  matrix: state.moves.history[state.moves.history.length-1]
}) as GameProps;

/**
 * 
 * @param dispatch dispatch function for the store
 * @param ownProps props of the container component
 * @returns props for the enclosed presentational component
 */
const mapDispatchToProps = (dispatch: Dispatch<MoveAction>): GameProps => ({
  onClick: (player: Player, cell: Coordinate, board: BoardMatrix) => {
    dispatch(makeMove(player, cell, board));
  }
} as GameProps)

const MoveGame = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)

export default MoveGame
