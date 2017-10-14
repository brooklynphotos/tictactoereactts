import * as React from 'react';
import './Square.css';

function Square(props: SquareProps) {
    return (
        <button className="square" onClick={props.onClick}>
        {props.value}
        </button>
    );
}
  
export default Square;

interface SquareProps {
    value: string;
    onClick(): void;
}