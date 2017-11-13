import * as React from 'react';
import Square from './Square';
import './Board.css';
import MatrixCell from '../utils/MatrixCell';
import BoardMatrix from '../utils/BoardMatrix';

export default function Board(props: BoardProps){
    const boardMatrix = props.matrix;
    const renderSquare = (cell: MatrixCell): JSX.Element=>{
        return (
        <Square 
            cell={cell}
            onClick={()=>{}}
        />
        );
    };

    const content = boardMatrix.matrix.map((row,rowIndex)=>{
        const cells = row.map(cell=>{
            return renderSquare(cell);
        });
        return (<div key={rowIndex} className="board-row">{cells}</div>);
    });
  
    return (
        <div>{content}</div>
    );
}

interface BoardProps{
    matrix: BoardMatrix;
}