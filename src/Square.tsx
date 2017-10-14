import * as React from 'react';
import './Square.css';

function Square(props: SquareProps) {
    let classes = 'square';
    if(props.selected)
        classes += ' selected';
    return (
        <button className={classes} onClick={props.onClick}>
        {props.value}
        </button>
    );
}
  
export default Square;

interface SquareProps {
    selected: boolean;
    value: string;
    onClick(): void;
}