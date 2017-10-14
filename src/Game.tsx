import * as React from 'react';
import Board from './Board';
import './Game.css';
import MatrixCell from './MatrixCell';

class Game extends React.Component<GameProps,GameState> {
    private size: number;

    constructor(props: GameProps) {
        super(props);
        this.size = 3;
        this.state = {
            history:[{ // at the beginning there is no cell selected
                squares: Array(this.size*this.size).fill(null)
            }],
            stepNumber: 0,
            xIsNext: true
        };
    }
    jumpTo(move: number) {
        this.setState({
            stepNumber: move,
            xIsNext: (move % 2) ===0
        });
    }
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        const moves = history.map((step,move)=>{
            // possible that cell is undefined if we are in the first spot
            let label: string;
            if(move===0){
                label = '#1';
            }else{
                if(!step.cell){
                    throw `Strange, cell is missing in step ${this.state.stepNumber}`;
                }
                label = `(${step.cell!.x},${step.cell!.y})`;
            }
            const desc = move ? `Go to move ${label}` : 'Got to game start';
            return (
                <li key={move}>
                    <button onClick={()=>this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });
        let status;
        if(winner){
            status = `Winner is ${winner}`;
        }else{
            status = `Next player: ${(this.state.xIsNext ? 'X' : 'O')}`;
        }
        const getPLFunc = (cell: MatrixCell)=>{
            return current.squares[this.flattenIndex(cell)];
        };
        return (
            <div className="game">
            <div className="game-board">
                <Board 
                    selectedCell={current.cell}
                    getCellId={cell=>this.flattenIndex(cell)} 
                    dimSize={this.size} 
                    getPositionLabel={getPLFunc} 
                    onClick={(cell)=>this.handleClick(cell)}
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
            </div>
        );
    }
    flattenIndex(cell: MatrixCell) {
        return cell.x + (cell.y*this.size);
    }
    handleClick(cell: MatrixCell) {
        const flatIndex = this.flattenIndex(cell);
        const history = this.state.history.slice(0,this.state.stepNumber+1);
        const current = history[history.length-1];
        const squares = current.squares.slice();
        if(calculateWinner(squares) || squares[flatIndex]){
            // already winner or square already clicked
            return;
        }
        squares[flatIndex] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares,
                cell
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }
}

export default Game;

function calculateWinner(squares: string[]): string | null {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

interface GameState {
    xIsNext: boolean;
    history: History[];
    stepNumber: number;
}

interface History {
    squares: string[];
    cell?: MatrixCell;
}

interface GameProps {

}