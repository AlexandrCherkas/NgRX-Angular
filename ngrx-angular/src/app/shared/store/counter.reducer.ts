import { createReducer, on } from "@ngrx/store"
import { increment, decrement, reset, customIncrement} from "./counter.actions"
import { initialState } from "./counter.state";
import { Effect, IState } from "../Interfaces/state";

const _counterReducer = createReducer(initialState, 
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1
        }
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1
        }
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0,
        }
    }),
    on(customIncrement, (state, action) => {
        return {
            ...state,
            counter: action.effect == Effect.ADD ? state.counter + action.value : state.counter - action.value
        }
    })
);
 

export function counterReducer(state: IState, action) {
    return _counterReducer(state, action)
} 