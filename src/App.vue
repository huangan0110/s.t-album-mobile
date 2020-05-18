<template>
    <div id="app">
        <dvi style="height: 20px;background-color:#fff;"></dvi>
        <transition :name="transitionName">
            <router-view class="child-view"/>
        </transition>
        <div style="position: absolute">
            <Tabbar v-show="this.$route.meta.showTabbar" class="test"></Tabbar>
        </div>
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
        }
    };
</script>

<style lang="scss" scoped>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
    }

    .child-view {
        position: absolute;
        top: 0;
        width: 100%;
        transition: all 0.2s;
        height: 100%;
    }

    .slide-left-enter,
    .slide-right-leave-active {
        opacity: 0;
        -webkit-transform: translate(50%, 0);
        transform: translate(50%, 0);
    }

    .slide-right-enter,
    .slide-left-leave-active {
        opacity: 0;
        -webkit-transform: translate(-50%, 0);
        transform: translate(-50%, 0);
    }

    .test {
    }
</style>
