// an example of action creator
export function makeMove(): MoveAction{
    return {
        type: 'ADD_TODO',
        id: 2
    };
}

export interface MoveAction extends AbstractAction{
    id: number
}

interface AbstractAction{
    type: string;
}