export interface IState {
    counter: number
}

export interface IPropsData {
    value: number,
    effect?: string
}

export enum Effect {
    ADD = 'add',
    REMOVE = 'remove'
}

export interface ICounterModal{
    counter: number,
    chanelName: string
}

export interface IChanelName {
    name: string
}