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
                return {x: xindex,y:yindex,selected: false};
            });
        });
    }
    renderSquare(cell: MatrixCell): JSX.Element {
        const selected = this.areEqual(this.props.selectedCell,cell);
        return (
        <Square 
            selected={selected}
            key={this.props.getCellId(cell)} 
            value={this.props.getPositionLabel(cell)} 
            onClick={()=>this.props.onClick(cell)} 
        />
        );
    }

    areEqual(cell1: MatrixCell|undefined,cell2: MatrixCell): boolean{
        if(!cell1) return false;
        return cell1.x===cell2.x && cell1.y===cell2.y;
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
    selectedCell?: MatrixCell;
    dimSize: number;
    getCellId(cell: MatrixCell): number;
    getPositionLabel(cell: MatrixCell): string;
    onClick(cell: MatrixCell): void;
}

interface BoardState{}