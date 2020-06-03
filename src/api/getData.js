import request from 'axios'
import { Toast } from 'vant';
import router from '../router/index'
// request.defaults.baseURL = 'http://39.105.137.236:10000'
request.interceptors.request.use(function (config) {
    let token = window.localStorage.getItem("access_token")
    if (token) {
        //将token放到请求头发送给服务器
        config.headers.Authorization = "bearer" + " " + token;
        return config;
    } else {
        return config;
    }
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

request.interceptors.response.use(
    response => {

        return response
    },
    //接口错误状态处理，也就是说无响应时的处理
    error => {
        console.log(error)
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    Toast.fail('身份信息过期,请登录!');
                    router.replace({
                        path: '/',
                    })
                    localStorage.clear();
                    break;
                case 403:
                    Toast.fail('权限不足!');
                    break;
                case 405:
                    Toast.fail('GG 方向错了!');
                    break;
                case 500:
                    Toast.fail('GG 服务器挂了 o(╥﹏╥)o');
                    break;
                case 503:
                    Toast.fail('GG 服务器挂了 o(╥﹏╥)o');
                    break;
                default: break;
            }
        }
        return Promise.reject(error.response) // 返回接口返回的错误信息
    })

//登录获取Token
export function getCity() {

    return request({
        url: '../static/city.json',
        method: 'get'
    })

}

//登录
export function login(username, password) {
    return request({
        url: '/auth/oauth/token',
        method: 'post',
        params: {
            grant_type: 'password',
            client_id: 'client',
            client_secret: 'secret',
            username: username,
            password: password
        }
    })
}

//添加相册
export function addAlbum(name, visiblePermissionId) {
    return request({
        url: '/album/album/add',
        method: 'post',
        data: JSON.stringify({
            name: name,
            visiblePermissionId: visiblePermissionId
        }),
        headers: {
            'Content-Type': 'application/json;'
        }
    })
}

//查看相册
export function seeAlbum( ) {
    return request({
        url: '/album/album/getMyAlbum',
        method: 'get',
    })
}

//查看tareb相册
export function seeOtherAlbum(othersId) {
    return request({
        url: '/album/othersAlbum/pageOthersAlbum',
        method: 'get',
        params:{
            othersId:othersId
        }
    })
}

//查看相册详情
export function seeAlbumInfo(id, pageNo) {
    return request({
        url: '/album/album/pageImageByAlbumId',
        method: 'get',
        params: {
            albumId: id,
            pageNo: pageNo
        }
    })
}

//是否存在用户
export function isExitUser(username) {
    return request({
        url: '/reg/reg/uniqueUsername/' + username,
        method: 'get',
    })
}

//获取验证码
export function getNcode(username) {
    return request({
        url: '/reg/emailCode?email=' + username,
        method: 'get',
    })
}

//用户注册
export function registerUser(data) {
    return request({
        url: '/reg/reg/user',
        method: 'post',
        params: data
    })
}

//上传图片
export function upImg(data, isShare, content) {
    return request({
        url: '/album/image/upload',
        method: 'post',
        params: {
            content: content,
            isShare: isShare
        },
        // data:JSON.stringify(data),
        data: data
        // headers: {
        //     'Content-Type': 'application/json;'
        // }
    })
}


//获取精选
export function getFeatured(data) {
    return request({
        url: data.url,
        method: 'get',
        params: data
    })
}

export function deletePhoto(data) {
    return request({
        url: '/album/image/delete?' + test(data),
        method: 'post',
    })
}


function test(data) {
    let url = "";
    for (let i in data.imageIds) {
        if (i == 0) {
            url += "imageIds%5B%5D=" + data.imageIds[i]
        } else {
            url += "&imageIds%5B%5D=" + data.imageIds[i]
        }
    }
    url += "&albumId=" + data.albumId;
    return url;
}

//更新相册
export function updateAlbum(data) {
    return request({
        url: '/album/album/update',
        method: 'post',
        data: data,
        // headers: {
        //     'Content-Type': 'application/json;'
        // }
    })
}

//上传11

//更新相册
export function upFile(data) {
    return request({
        url: '/album/image/uploadFile',
        method: 'post',
        data: data,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

//更新用户信息
export function updateUserInfo(data) {
    return request({
        url: '/user/user/update',
        method: 'put',
        data: data,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

//更换用户头像
export function updateUserAvatar(data) {
    return request({
        url: '/album/user/uploadFile',
        method: 'post',
        data: data,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

//获取自己的信息
export function getMyInfo() {
    return request({
        url: '/user/user/getMyInfo',
        method: 'get',
    })
}


//登出
export function logout() {
    return request({
        url: '/auth/auth/exit?access_token=' + localStorage.getItem('access_token'),
        method: 'delete',
    })
}

//获取关注
export function getAttention() {
    return request({
        url: '/user/attention/page',
        method: 'get',
    })
}

//获取粉丝
export function getFans() {
    return request({
        url: '/user/fan/page',
        method: 'get',
    })
}


//删除分析
export function delShared(shareId) {
    return request({
        url: '/album/share/deleteShare',
        method: 'delete',
        params: {
            shareId: shareId
        }
    })
}

//点赞
export function clickLike(shareId, url,method) {
    return request({
        url: url,
        method: method,
        params: {
            shareId: shareId
        }
    })
}

//获取精选评论
export function getComment(shareId) {
    return request({
        url: '/album/comment/pageContentByShareId',
        method: 'get',
        params: {
            shareId: shareId
        }
    })
}

//发布评论
export function setComment(shareId, commentRecord,getterId) {
    return request({
        url: '/album/comment/sendComment',
        method: 'post',
        data: JSON.stringify(
            {
                iamgeShowId: shareId,
                comment: commentRecord,
                getterId:getterId
            }
        ),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

//获取点赞人
export function getLike(id) {
    return request({
        url: '/album/likeRecord/pageLikeRecordByShareId',
        method: 'post',
        params:{
            shareId:id
        }
    })
}

// //关注
export function setAttention(id,url,method) {
    return request({
        url: url,
        method: method,
        params:{
            attentionId:id
        },
    })
}
//获取所有评论
export function getAllComment() {
    return request({
        url: '/album/comment/pageMyComment',
        method: 'get',
    })
}

//天机首页访问
export function addViewNum() {
    return request({
        url: '/backstage/index/addFrequency',
        method: 'post',
    })
}





