<template>
    <div id="app">
        <router-view />
        
        <Tabbar v-show="this.$route.meta.showTabbar"></Tabbar>
    </div>
</template>

<script>
import Tabbar from './components/Common/Tabbar'
export default {
    name: "App",
    components: {
        Tabbar
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
}
</style>
