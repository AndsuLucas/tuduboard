
export interface TaskInterface {
    index: number,
    id: string,
    name: string,
    notes: string,
    status: string
}

export class Task implements TaskInterface {
    constructor(
        public index: number,
        public id: string,
        public name: string,
        public notes: string,
        public status: string
    ) 
    {}
}
