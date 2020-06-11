import { combineReducers } from "redux";
import calendarReducer from "./calendar/reducer";
import addaddScheduleReducer from "./addSchedule/reducer";

// 複数のreducerを一つにまとめる
// combineReducerの引数は{state名: reducer} となる
const rootReducer = combineReducers({
  calendar: calendarReducer,
  addSchedule: addaddScheduleReducer,
});

export default rootReducer;