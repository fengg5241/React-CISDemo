export default class FetchUtil{

    static get(url, params, success, fail, error){
        if (params) {
            let paramsArray = [];
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
        console.log(url, params)
        return fetch(url,{
            headers:{
                // appId: '1234345656'
            },
        }).then(response=>response.json())
            .then(responseJson=> {
                console.log(responseJson)
                // if (responseJson.code === 200){
                //     success && success(responseJson)
                // }else {
                //     fail && fail(responseJson.msg)
                // }
                if (responseJson && !responseJson.error){
                    success && success(responseJson)
                }else {
                    fail && fail(responseJson.msg)
                }
            })
            .catch(e=>{
                console.log(e)
                error && error(e)
            })
    }

    static post(url, params, success, fail, error){
        console.log(url,params)
        return fetch(url,{
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(params)
        }).then(response=>response.json())
            .then(responseJson=> {
                console.log(responseJson)
                // if (responseJson.code === 200){
                //     success && success(responseJson)
                // }else {
                //     fail && fail(responseJson.msg)
                // }
                if (responseJson && !responseJson.error){
                    success && success(responseJson)
                }else {
                    fail && fail(responseJson.msg)
                }
            })
            .catch(e=>{
                console.log(e)
                error && error(error)
            })
    }
}