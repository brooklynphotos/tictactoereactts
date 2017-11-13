import * as React from 'react';
import './Square.css';
import Move from '../utils/Move';
import Player from '../utils/Player';

function ControlPanel(props: ControlPanelProp) {
    const {moves, onSortClick, onJumpClick, sortAsc, winner, nextPlayer} = props;
    const moveList = moves.map((step,move)=>{
        const selectedCell = step;
        const descr = selectedCell ? selectedCell.toString() : 'none';
        return (
            <li key={move}>
                <button onClick={e=>onJumpClick(move)}>{descr}</button>
            </li>
        );
    });
    const status = winner ? `Winner: ${winner}` : `Next player: ${nextPlayer}`;
    return (
        <div className="navbar">
            <div>{status}</div>
            <button onClick={e=>onSortClick(!sortAsc)}>Sort {sortAsc ? 'ASC' : 'DESC'}</button>
            <ol>{moveList}</ol>
        </div>
    );
}
  
export default ControlPanel;

export interface ControlPanelProp {
    moves: Move[];
    onSortClick(sortAsc: boolean) : void;
    onJumpClick(moveIndex: number) : void;
    sortAsc: boolean;
    winner?: Player;
    nextPlayer?: Player;
}