import { createAction, props } from "@ngrx/store";
import { IChanelName, IPropsData } from "./counter.model";

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');

export const customIncrement = createAction('customIncrement', props<IPropsData>());
export const changeChanelName = createAction('changeChanelName', props<IChanelName>());