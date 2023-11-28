import { createReducer, on } from "@ngrx/store";
import { decrement, incrementAction, reset } from "../actions/counter.actions";

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(incrementAction, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);