import * as types from '../constants/ActionTypes'

const initialState = {
    isFetching: false,
    commodities: [],
    strategies: [],
    categoryId: null
}

const getTradeInfo = (state = initialState,action) => {
    switch (action.type) {
        case types.TRADE_REQUEST_POSTS:
            return {
                ...state,
                isFetching: true
            };
        case types.TRADE_RECEIVE_COMMODITY:
            return {
                ...state,
                isFetching: false,
                commodities: action.commodities,
                categoryId: action.categoryId
            };
        case types.TRADE_RECEIVE_STRATEGY:
            return {
                ...state,
                isFetching: false,
                strategies: action.strategies,
                categoryId: action.categoryId
            };
        default:
            return state;
    }
};

const tradeBookingReducer = (state = {}, action) => {
    switch (action.type) {
        case types.TRADE_RECEIVE_COMMODITY:
        case types.TRADE_RECEIVE_STRATEGY:
        case types.TRADE_REQUEST_POSTS:
            return getTradeInfo(state, action);
        case types.TRADE_BOOKING_END:
            return {
                ...state,
                isFetching: true
            };
        default:
            return state;
    }
};

export default tradeBookingReducer
