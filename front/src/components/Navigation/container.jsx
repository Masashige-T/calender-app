import { connect } from "react-redux";

import Navigation from "./presentation";
import {
  getNextMonth,
  getPreviousMonth,
  getMonth,
  formatMonth,
} from "../../services/calendar";
import { calendarSetMonth } from "../../redux/calendar/actions";

const mapStateToProps = (state) => ({ calendar: state.calendar });

const mapDispatchToProps = (dispatch) => ({
  setMonth: (month) => {
    dispatch(calendarSetMonth(month));
  },
});

const margeProps = (stateProps, dispatchProps) => ({
  // reduxのstate → dayjs
  month: getMonth(stateProps.calendar),
  setNextMonth: () => {
    const nextMonth = getNextMonth(stateProps.calendar);
    dispatchProps.setMonth(nextMonth);
  },
  setPreviousMonth: () => {
    const previousMonth = getPreviousMonth(stateProps.calendar);
    dispatchProps.setMonth(previousMonth);
  },
  setMonth: (dayObj) => {
    // dayjs → reduxのstate
    const month = formatMonth(dayObj);
    dispatchProps.setMonth(month);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  margeProps
)(Navigation);
