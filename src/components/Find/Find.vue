<template>
    <div class="find">
        <div class="find-header">
            <span>发现</span>
            <i class="iconfont albumsousuo4"></i>
        </div>
        <div style="height:50px"></div>
        <div class="find-content clearfix">
            <h3>分类</h3>
            <ul>
                <li v-for="(item, index) in typeData" :key="index">
                    <div class="type-card" @click="viewType">
                        <img :src="item.imgSrc" />
                        <span>{{ item.title }}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            touched: false,
            typeData: [
                {
                    imgSrc: require("./../../assets/img/固定图2.jpg"),
                    title: "风光"
                },
                {
                    imgSrc: require("./../../assets/img/固定图4.jpg"),
                    title: "风光"
                },
                {
                    imgSrc: require("./../../assets/img/固定图4.jpg"),
                    title: "风光"
                },
                {
                    imgSrc: require("./../../assets/img/固定图4.jpg"),
                    title: "风光"
                },
                {
                    imgSrc: require("./../../assets/img/固定图4.jpg"),
                    title: "风光"
                },
                {
                    imgSrc: require("./../../assets/img/固定图4.jpg"),
                    title: "风光"
                },
                {
                    imgSrc: require("./../../assets/img/固定图4.jpg"),
                    title: "风光"
                },
                {
                    imgSrc: require("./../../assets/img/固定图4.jpg"),
                    title: "风光"
                },
                {
                    imgSrc: require("./../../assets/img/固定图4.jpg"),
                    title: "风光"
                },
                {
                    imgSrc: require("./../../assets/img/固定图4.jpg"),
                    title: "风光"
                },
                {
                    imgSrc: require("./../../assets/img/固定图4.jpg"),
                    title: "风光"
                },
                {
                    imgSrc: require("./../../assets/img/固定图4.jpg"),
                    title: "风光"
                },
                {
                    imgSrc: require("./../../assets/img/固定图4.jpg"),
                    title: "风光"
                }
            ]
        };
    },
    methods: {
        viewType() {
            this.$router.push('/type');
        }
    }
};
</script>

<style scoped lang="scss">
.find {
    .find-header {
        height: 50px;
        width: 100%;
        border-bottom: 1px solid #eee;
        box-shadow: 0px 8px 25px -22px #5e5e5e;
        position: fixed;
        top: 0;
        z-index: 9;
        background-color: #fff;
        span {
            position: absolute;
            top: 50%;
            left: 20px;
            transform: translateY(-50%);
            font-size: 18px;
            font-weight: 500;
            color: #555;
        }
        i {
            position: absolute;
            right: 20px;
            top: 50%;
            font-size: 20px;
            transform: translateY(-50%);
            color: #555;
        }
    }
    .find-content {
        z-index: 8;
        padding: 18px;
        margin-bottom: 40px;
        h3 {
            margin: 0;
            margin-bottom: 18px;
        }
        ul li {
            position: relative;
            list-style: none;
            float: left;
            width: calc(50% - 9px);
            height: 160px;
            background-color: pink;
            margin-bottom: 10px;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
            transition: linear 0.1s;
        }
        li:active {
            transform: scale(0.98);
            -webkit-filter: brightness(90%); /* Chrome, Safari, Opera */
            filter: brightness(90%);
        }
        li:nth-child(2n) {
            float: right;
        }
        li img {
            width: 100%;
            height: 160px;
            object-fit: cover;
        }
        li span {
            position: absolute;
            bottom: 15px;
            left: 15px;
            font-size: 18px;
            color: #fff;
        }
    }
}
.clearfix:before,
.clearfix:after {
    content: "";
    /* 触发BFC, 防止外边距合并 */
    display: table;
}
.clearfix:after {
    clear: both;
}
.clearfix {
    /* *代表    ie 6 7 能识别的符号  带*的属性，只有IE67执行   zoom代表ie67清除浮动的方法 */
    *zoom: 1;
}
</style>