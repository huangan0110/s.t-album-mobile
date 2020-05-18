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
import CommentNotice from "../components/Notice/NoticeType/CommentNotice";
import LikeNotice from "../components/Notice/NoticeType/LikeNotice";
import SysNotice from "../components/Notice/NoticeType/SysNotice";
import FeaturedDetail from "../components/Common/FeaturedDetail";
import Register from "../components/Login/Register";
import Other from "../components/Mine/Other";


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
                index:1
            }
        },
        {
            path: '/email-login',
            name: 'EmailLogin',
            component: EmailLogin,
            meta: {
                showTabbar: false,
                index: 2
            }
        },
        {
            path: '/register',
            name: 'Register',
            component: Register,
            meta: {
                showTabbar: false,
                index: 2
            }
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            meta: {
                showTabbar: true,
                index:3
            }
        },
        {
            path: '/upload',
            name: 'UpLoad',
            component: UpLoad,
            meta: {
                showTabbar: false,
                index:4
            }
        },
        {
            path: '/featured',
            name: 'Featured',
            component: Featured,
            meta: {
                showTabbar: true,
                index:4
            }
        },
        {
            path: '/featured_detail',
            name: 'FeaturedDetail',
            component: FeaturedDetail,
            meta: {
                showTabbar: false,
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
            path: '/comment_notice',
            name: 'CommentNotice',
            component: CommentNotice,
            meta: {
                showTabbar: false,
            }
        },
        {
            path: '/like_notice',
            name: 'LikeNotice',
            component: LikeNotice,
            meta: {
                showTabbar: false,
            }
        },
        {
            path: '/sys_notice',
            name: 'SysNotice',
            component: SysNotice,
            meta: {
                showTabbar: false,
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
            path: '/other',
            name: 'Other',
            component: Other,
            meta: {
                showTabbar: false,
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
