import request from 'axios'
//登录获取Token
export function getCity() {

    return request({
        url: '../static/city.json',
        method: 'get'
    })
}
