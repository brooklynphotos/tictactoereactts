import * as React from 'react';
import {Component} from 'react';
import Square from './Square';
import './Board.css';
import MatrixCell from './MatrixCell';

class Board extends Component<BoardProps,BoardState> {
    private matrix: MatrixCell[][];
    constructor(props: BoardProps){
        super(props);
        const size = this.props.dimSize;
        this.matrix = Array(size).fill([])
        .map((y,yindex)=>{
            return Array(size).fill({})
            .map((x,xindex)=>{
                return {x: xindex,y:yindex};
            });
        });
    }
    renderSquare(cell: MatrixCell): JSX.Element {
        return (
        <Square 
            key={this.props.getCellId(cell)} 
            value={this.props.getPositionLabel(cell)} 
            onClick={()=>this.props.onClick(cell)} 
        />
        );
    }

    createButtons() {
        return this.matrix.map((row,rowIndex)=>{
            const cells = row.map(cell=>{
                return this.renderSquare(cell);
            });
            return (<div key={rowIndex} className="board-row">{cells}</div>);
        });
    }
  
    render() {
        const content = this.createButtons();
        return (
            <div>{content}</div>
        );
    }
}

export default Board;

interface BoardProps{
    dimSize: number;
    getCellId(cell: MatrixCell): number;
    getPositionLabel(cell: MatrixCell): string;
    onClick(cell: MatrixCell): void;
}

interface BoardState{}