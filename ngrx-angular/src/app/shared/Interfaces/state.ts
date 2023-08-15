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