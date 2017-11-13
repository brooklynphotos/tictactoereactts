import * as React from 'react';
import Board from './Board';
import BoardMatrix from '../utils/BoardMatrix';
import Coordinate from '../utils/Coordinate';
import Player from '../utils/Player';
import './Game.css';

export default function Game(props: GameProps) {
    return (
        <div className="game-board">
            <Board 
                matrix={props.matrix}
            />
        </div>
    );
}

export interface GameProps {
    matrix: BoardMatrix;
    onClick(player: Player, cell: Coordinate, board: BoardMatrix): void;
}