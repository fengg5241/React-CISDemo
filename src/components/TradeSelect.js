import React from "react";
import FetchUtil from '../util/FetchUtil'
import EnvConfig from '../constants/EnvConfig'

class TradeSelect extends React.Component {
  constructor() {
    super();
    this.state = { categories: [] };
  }

  componentDidMount() {
    FetchUtil.get(EnvConfig.API.getTradeCategories, null,response=>
        this.setState({ categories: response })
    )
  }

  render() {
    return (
      <div className="panel-body mt-4">
          <div className="form-group row">
              <div className="col-sm-1">
                  <label className="col-form-label">Category:</label>
              </div>
              <div className="col-sm-4">
                  <select
                      id="categorySelect"
                      ref="categorySelect"
                      className="form-control"
                  >
                      {this.state.categories.map(category => (
                          <option key={category.id} value={category.id}>{category.name}</option>
                      ))}
                  </select>
              </div>

            <button
                className="btn btn-primary mb-2"
              onClick={e => this.props.onClick(e, this.refs.categorySelect.value)}
            >Go</button>
          </div>
      </div>
    );
  }
}

export default TradeSelect;
