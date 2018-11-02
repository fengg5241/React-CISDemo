import React from "react";
import TradeSelect from "../components/TradeSelect";
import TradeBody from "../components/TradeBody";
import { connect } from "react-redux";
import { fetchPostsIfNeeded,bookTradeAction } from "../actions/index";
import { withRouter } from "react-router-dom";

class TradeBooking extends React.Component {
  render() {
    return (
      <div>
        <TradeSelect onClick={this.searchInfoByCategory} />
        <TradeBody
          commodityOptions={this.props.commodities}
          strategyOptions={this.props.strategies}
          onBookTradeClicked = {this.bookTrade}
          categoryId = {this.props.categoryId}
        />
      </div>
    );
  }

  searchInfoByCategory = (e, categoryId) => {
    e.preventDefault();
    this.props.dispatch(fetchPostsIfNeeded(categoryId));
  };

  bookTrade = (e, refsObject) => {
    e.preventDefault();
    let strategies = [];
    if(refsObject.strategyAllCheck.checked){
        this.props.strategies.forEach(e=>strategies.push(e.id));
    }else {
        strategies.push(refsObject.strategySelect.value)
    }
    const trade = {
        categoryId:this.props.categoryId,
        commodity:refsObject.commoditySelect.value,
        strategies,
        qty:{value:refsObject.qtyInput.value,unit:refsObject.qtyUnitSelect.value},
        maturityDate:refsObject.maturityDate.value,
        comment:refsObject.commentInput.value
    };
    this.props.dispatch(bookTradeAction(trade));
  };
}

const mapStateToProps = state => {
  const { tradeBooking } = state;
  const { isFetching, commodities, strategies,categoryId } = tradeBooking || {
    isFetching: true,
    commodities: [],
    strategies: [],
    categoryId:null
  };

  return {
    isFetching,
    commodities,
    strategies,
    categoryId
  };
};

export default withRouter(connect(mapStateToProps)(TradeBooking));
