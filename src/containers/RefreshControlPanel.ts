import { connect, Dispatch } from 'react-redux'
import { jumpBack, sortHistory, MoveAction } from '../actions'
import NavBar, { ControlPanelProp } from '../components/ControlPanel'
import AppState from '../states/AppState'

/**
 * building props for the presentational component you're wrapping, i.e. Game
 * @param state current redux store
 */
const mapStateToProps = (state: AppState): ControlPanelProp => ({
  moves: state.navigation.moves,
  sortAsc: state.navigation.sortAsc,
  winner: state.playerStatus.winner,
  nextPlayer: state.playerStatus.nextPlayer
} as ControlPanelProp);

/**
 * 
 * @param dispatch dispatch function for the store
 * @returns props for the enclosed presentational component
 */
const mapDispatchToProps = (dispatch: Dispatch<MoveAction>): ControlPanelProp => ({
  onSortClick: (sortAsc: boolean) => {
    dispatch(sortHistory(sortAsc))
  },
  onJumpClick: (moveIndex: number) => {
    dispatch(jumpBack(moveIndex));
  }
} as ControlPanelProp);

const RefreshControlPanel = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)

export default RefreshControlPanel
