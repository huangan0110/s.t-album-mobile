import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login'
import EmailLogin from '@/components/Login/EmailLogin'
import Featured from '@/components/Featured/Featured'
import Home from '@/components/Home1/Home'
import Find from '@/components/Find/Find'
import Type from '@/components/Find/FindType/Type'
import Notice from '@/components/Notice/Notice'
import Mine from '@/components/Mine/Mine'
import AlbumDetail from "../components/Home1/AlbumDetail/AlbumDetail";
import EditAlbum from "../components/Home1/AlbumDetail/EditAlbum";
import MovePhoto from "../components/Home1/AlbumDetail/MovePhoto";
import UpLoad from "../components/UpLoad/UpLoad";
import EditInfo from "../components/Mine/EditInfo";
import ChnagePass from "../components/Mine/ChnagePass";
import ChangeBg from "../components/Mine/ChangeBg";
import ViewLevel from "../components/Mine/ViewLevel";


Vue.use(Router)

export default new Router({
    //防止路由之间滚动位置相互影响
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {x: 0, y: 0}
        }
    },
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login,
            meta: {
                showTabbar: false,
            }
        },
        {
            path: '/email-login',
            name: 'EmailLogin',
            component: EmailLogin,
            meta: {
                showTabbar: false,
            }
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            meta: {
                showTabbar: true,
            }
        },
        {
            path: '/upload',
            name: 'UpLoad',
            component: UpLoad,
            meta: {
                showTabbar: false,
            }
        },
        {
            path: '/featured',
            name: 'Featured',
            component: Featured,
            meta: {
                showTabbar: true,
            }
        },
        {
            path: '/album_detail',
            name: 'AlbumDetail',
            component: AlbumDetail,
            meta: {
                showTabbar: false,
            }
        },
        {
            path: '/edit_album',
            name: 'EditAlbum',
            component: EditAlbum,
            meta: {
                showTabbar: false,
            }
        },
        {
            path: '/move_photo',
            name: 'MovePhoto',
            component: MovePhoto,
            meta: {
                showTabbar: false,
            }
        },
        {
            path: '/find',
            name: 'Find',
            component: Find,
            meta: {
                showTabbar: true,
            }
        },
        {
            path: '/type',
            name: 'Type',
            component: Type,
            meta: {
                showTabbar: false,
            }
        },
        {
            path: '/notice',
            name: 'Notice',
            component: Notice,
            meta: {
                showTabbar: true,
            }
        },
        {
            path: '/mine',
            name: 'Mine',
            component: Mine,
            meta: {
                showTabbar: true,
            }
        },
        {
            path: '/edit_info',
            name: 'EditInfo',
            component: EditInfo,
            meta: {
                showTabbar: false,
            }
        },
        {
            path: '/change_pass',
            name: 'ChnagePass',
            component: ChnagePass,
            meta: {
                showTabbar: false,
            }
        },
        {
            path: '/change_bg',
            name: 'ChnageBg',
            component: ChangeBg,
            meta: {
                showTabbar: false,
            }
        },
        {
            path: '/view_level',
            name: 'ViewLevel',
            component: ViewLevel,
            meta: {
                showTabbar: false,
            }
        },
    ]
})
