import React from "react";

class TradeBody extends React.Component {
  render() {
    return (
      <div className="panel-body">
        <form>
          <div className="form-group row">
            <div className="col-sm-1">
              <label className="col-form-label">Commodity:</label>
            </div>
            <div className="col-sm-4">
              <select className="form-control"
                      id="commoditySelect"
                      ref="commoditySelect">
                  {this.props.commodityOptions &&
                  this.props.commodityOptions.map(option => (
                      <option key={option.id} value={option.id}>{option.name}</option>
                  ))}
              </select>
            </div>
          </div>
          <div className="form-group row">

            <div className="col-sm-1">
              <label className="col-form-label">Strategy:</label>
            </div>
            <div className="col-sm-4">
              <select className="form-control"
                      id="strategySelect"
                      ref="strategySelect">
                  {this.props.strategyOptions &&
                  this.props.strategyOptions.map(option => (
                      <option key={option.id} value={option.id}>{option.name}</option>
                  ))}
              </select>
            </div>
            <div className="form-check mb-2">
              <input
                  type="checkbox"
                  className="form-check-input"
                  id="strategyAllCheck"
                  ref="strategyAllCheck"
              />
              <label className="form-check-label" htmlFor="strategyAllCheck">
                All
              </label>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-1">
              <label className="col-form-label">Quantity:</label>
            </div>
            <div className="col-sm-3">
              <input className="form-control mb-2"
                     id="qtyInput"
                     ref="qtyInput"/>

            </div>
            <div className="col-sm-1">
              <select className="form-control"
                      id="qtyUnitSelect"
                      ref="qtyUnitSelect">
                <option>tOz</option>
                <option>tOz2</option>
                <option>tOz3</option>
              </select>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-1">
              <label className="col-form-label pt-0">Maturity Date:</label>
            </div>
            <div className="col-sm-4">
              <input id="maturityDate" className="form-control" type="date"
                     ref="maturityDate"/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-1">
              <label className="col-form-label pt-0">Comment:</label>
            </div>
            <div className="col-sm-4">
              <input id="commentInput" className="form-control" ref="commentInput"/>
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-5">

            </div>
            <div className="col-sm-1">
              <button
                  className="btn btn-primary mb-2"
                  onClick={e => this.props.onBookTradeClicked(e, this.refs)}> Submit </button>
            </div>
          </div>


        </form>
      </div>
    );
  }
}

export default TradeBody;
