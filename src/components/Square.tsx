import * as React from 'react';
import MatrixCell from '../utils/MatrixCell';
import './Square.css';

function Square(props: SquareProps) {
    let classes = 'square';
    const cell = props.cell;
    if(cell.selected)
        classes += ' selected';
    return (
        <button className={classes} onClick={props.onClick}>
        {cell.player}
        </button>
    );
}
  
export default Square;

interface SquareProps {
    cell: MatrixCell;
    onClick(): void;
}