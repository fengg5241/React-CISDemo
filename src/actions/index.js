import * as types from '../constants/ActionTypes'
import FetchUtil from '../util/FetchUtil'
import EnvConfig from '../constants/EnvConfig'

 const tradeBookingEnd = () => ({
    type: types.TRADE_BOOKING_END
});

 const requestStart = () => ({
    type: types.REQUEST_START
});

 const requestPosts = categoryId => ({
  type: types.TRADE_REQUEST_POSTS,
  categoryId
});

export const receiveCommodities = (categoryId, json) => ({
  type: types.TRADE_RECEIVE_COMMODITY,
  categoryId,
  commodities: json,
  receivedAt: Date.now()
});

const fetchCommoditiesByCategoryId = categoryId => dispatch => {
    dispatch(requestPosts(categoryId));
    return FetchUtil.get(EnvConfig.API.getCommoditiesByCategoryId, {categoryId},response=>
        dispatch(receiveCommodities(categoryId, response))
    )
};

export const receiveStrategy = (categoryId, json) => ({
  type: types.TRADE_RECEIVE_STRATEGY,
  categoryId,
  strategies: json,
  receivedAt: Date.now()
});

const fetchStrategyByCategoryId = categoryId => dispatch => {
    dispatch(requestPosts(categoryId));
    return FetchUtil.get(EnvConfig.API.getStrategyByCategoryId, {categoryId},response=>
        dispatch(receiveStrategy(categoryId, response))
    )
};

const shouldFetchPosts = (state, categoryId) => {
  /*
  const posts = state.postsBySubreddit[categoryId]
  if (!posts) {
    return true
  }
  if (posts.isFetching) {
    return false
  }
  return posts.didInvalidate
  */
  return true;
};

const fetchInfoByCategoryId = categoryId => dispatch => {
  return Promise.all([
    dispatch(fetchCommoditiesByCategoryId(categoryId)),
    dispatch(fetchStrategyByCategoryId(categoryId))
  ]);
};

export const fetchPostsIfNeeded = categoryId => (dispatch, getState) => {
  if (shouldFetchPosts(getState(), categoryId)) {
    return dispatch(fetchInfoByCategoryId(categoryId));
  }
};

export const bookTradeAction = trade => (dispatch, getState) => {
    dispatch(requestStart)
    return FetchUtil.get(EnvConfig.API.bookTrade, {trade},response=>
        dispatch(tradeBookingEnd())
    )
}
