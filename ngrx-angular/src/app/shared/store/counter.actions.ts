import { createAction, props } from "@ngrx/store";
import { IPropsData } from "../Interfaces/state";

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');

export const customIncrement = createAction('customIncrement', props<IPropsData>());