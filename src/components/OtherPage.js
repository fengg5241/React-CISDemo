import React from "react";

class OtherPage extends React.Component {
  render() {
    return <div>Other page {this.props.match.params.id}</div>;
  }
}

export default OtherPage;
