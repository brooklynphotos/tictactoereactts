class Coordinate{
    readonly x: number;
    readonly y: number;
    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }
    get id(): string{
        return `(${this.x},${this.y})`;
    }
    equals(other: Coordinate){
        return other.x===this.x && other.y==this.y;
    }
    toString(){
        return `(${this.x},${this.y})`;
    }
}

export default Coordinate;