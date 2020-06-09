import { connect } from "react-redux";
import CalendarBoard from "./presentation";
import { createCalendar } from "../../services/calendar";

const mapStateToProps = state => ({ calendar: state.calendar });

const margeProps = (stateProps,dispatchProps) => ({
  month: stateProps.calendar,
  calendar: createCalendar(stateProps.calendar)
});

export default connect(mapStateToProps, null, margeProps)(CalendarBoard);