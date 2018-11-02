import { combineReducers } from "redux";

import tradeBookingReducer from './tradeBookingReducer'

const rootReducer = combineReducers({
  tradeBooking:tradeBookingReducer
  //selectedSubreddit
});

export default rootReducer;
