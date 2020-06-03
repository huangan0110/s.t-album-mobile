<template>
    <div id="app">
        <transition :name="transitionName" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <router-view class="child-view"/>
        </transition>
        <Tabbar v-show="this.$route.meta.showTabbar" :class="{isTransition:isTransition}"></Tabbar>
    </div>
</template>

<script>
    import Tabbar from './components/Common/Tabbar'

    export default {
        name: "App",
        components: {
            Tabbar
        },
        data() {
            return {
                transitionName: "slide-right",
                isTransition:false
            }
        },
        watch: {
            $route(to, from) {
                //如果to索引大于from索引,判断为前进状态,反之则为后退状态
                if (to.meta.index > from.meta.index) {
                    //设置动画名称
                    this.transitionName = "slide-left";
                } else {
                    this.transitionName = "slide-right";
                }
            }
        },
        created() {
            if (localStorage.getItem('gbIndex') == null) {
                localStorage.setItem('bgIndex', '0');
            }
            localStorage.setItem('checkIndex',1)
        },
        methods:{
            beforeEnter() {
                this.isTransition = true;
            },
            afterEnter() {
                this.isTransition = false;
            }
        }
    };
</script>

<style lang="scss" scoped>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
    }

    .child-view {
        position: absolute!important;
        top: 0!important;
        width: 100%!important;
        transition: all 0.2s;
        height: 100%;
    }

    .slide-left-enter,
    .slide-right-leave-active {
        opacity: 0;
        -webkit-transform: translate(100%, 0);
        transform: translate(100%, 0);
    }

    .slide-right-enter,
    .slide-left-leave-active {
        opacity: 0;
        -webkit-transform: translate(-100%, 0);
        transform: translate(-100%, 0);
    }

    .isTransition {
        position: absolute!important;
        bottom: 0!important;
    }
</style>
