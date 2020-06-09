import { combineReducer } from " redux";
import calendarReducer from "./calendar/reducer";

// 複数のreducerを一つにまとめる
// combineReducerの引数は{state名: reducer} となる
const rootReducer = combineReducer({ calendar: calendarReducer });

export default rootReducer;