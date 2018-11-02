export default class EnvConfig {
    static host = 'https://5a795ffe7fbfbb00126256c5.mockapi.io/api'

    static API = {
        getTradeCategories: EnvConfig.host + '/getTradeCategories',
        getCommoditiesByCategoryId: EnvConfig.host + '/getCommoditiesByCategoryId',
        getStrategyByCategoryId: EnvConfig.host + '/getStrategyByCategoryId',
        bookTrade: EnvConfig.host + '/getStrategyByCategoryId'
    }

}