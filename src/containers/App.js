import React from "react";
import TradeBooking from "./TradeBooking";
import Menu from "../components/Menu";

class App extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <TradeBooking />
      </div>
    );
  }
}

export default App;
