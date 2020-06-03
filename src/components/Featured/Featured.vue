<template>
    <div class="home">
        <div class="home-header">
            <span class="title">精选</span>
<!--            <i class="clearmsg iconfont albumsousuo4" @click="$router.push('/find')"></i>-->
        </div>
        <div style="height:80px;width:100%;background-color:#fff;z-index: 999999"></div>
        <div class="content" >
            <div v-for="(item,index) in shareData">
                <FeaturedCard
                    :imageList="item.imageList"
                    :browseNum="item.browseNum"
                    :commentNum="item.commentNum"
                    :content="item.content"
                    :id="item.id"
                    :userInfo="item.userInfo"
                    :likeNum="item.likeNum"
                    :createTime="item.createTime"
                    :isDelete="false"
                    :isAttention = "item.isAttention"
                    :isLiked = "item.isLiked"
                ></FeaturedCard>
            </div>

        </div>
        <div class="detail-bottom" v-show="!noPic">
            <span>&nbsp;<van-loading color="#1989fa" /> 加载中...</span>
        </div>
        <div class="detail-bottom" v-show="noPic">
            <span>&nbsp;暂无更多</span>
        </div>
        <div style="height: 50px"></div>
    </div>
</template>

<script>
import FeaturedCard from "../Common/FeaturedCard";
import {getFeatured,addViewNum} from "../../api/getData";
import BScroll from "better-scroll";
export default {
    components: {
        FeaturedCard
    },
    mounted() {
        window.addEventListener('scroll',this.headerBgc);
        this.getShared();
        addViewNum()
    },
    beforeCreate() {
        document.querySelector("body").setAttribute("style", "background:#eee");
    },
    beforeDestroy() {
        document.querySelector("body").setAttribute("style", "background:#fff");
        window.removeEventListener("scroll", this.headerBgc);
    },
    data() {
        return {
            shareData:[],
            totalCount:'',
            pageCount:1,
            isBottom:0,
            noPic:false
        };
    },
    methods: {
        headerBgc() {
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            var clientHeight=document.documentElement.clientHeight || document.body.clientHeight;
            var windowHeight =  document.documentElement.scrollHeight ||document.body.scrollHeight;
            console.log(scrollTop+clientHeight)
            if((windowHeight-10) < scrollTop+clientHeight){
                if(this.pageCount == this.isBottom) {
                    this.pageCount++;
                    if(!this.noPic) {
                        this.getShared(this.pageCount);
                    }
                }
            }
        },

        getPhoto(pageNo){
            // this.loading = true;
            seeAlbumInfo(pageNo).then(res=>{
                this.totalCount = res.data.object.totalCount;

                let rows = res.data.object.rows;
                for(let i=0;i<rows.length;i++) {
                    this.photoArray.push(rows[i]);
                }
                if(res.data.object.totalCount == 0) {
                    this.bgTip = "空空如也 o(╥﹏╥)o"
                }else {
                    this.bgTip = "暂无封面 (*╹▽╹*)"
                }
                if(res.data.object.totalCount <= 15) {
                    this.noPic = true
                }
                this.isBottom++;
                if(rows.length == 0) {
                    this.noPic = true;
                }
                this.loading = false;
            })
        },

        find() {
            this.$router.push('/find')
        },
        getShared(pageNo) {
            let fromData = {};
            if(localStorage.getItem("access_token")) {
                fromData.url = '/album/share/pageShare'
                fromData.mark = 0
            }else{
                fromData.url = '/album/public/pageShare'
            }
            if(pageNo) {
                fromData.pageNo = pageNo;
            }
            getFeatured(fromData).then(res=>{
                if(res.data.success) {
                    this.isBottom++;

                    let rows = res.data.object.rows;
                    for(let i=0;i<rows.length;i++) {
                        let row = rows[i];
                        this.shareData.push(row);
                    }
                    if(res.data.object.totalCount <= 15) {
                        this.noPic = true
                    }
                    if(rows.length == 0) {
                        this.noPic = true;
                    }
                    this.loading = false;

                }
            })
        }
    }
};
</script>

<style scoped lang="scss">
.home {
    .detail-bottom {
        text-align: center;
        margin: 15px 0;
        color: #aaa;
        font-size: 12px;
    }
    width: 100%;
    // height: 100%;
    position: relative;
    .home-header {
        height: 80px;
        width: 100%;
        position: fixed;
        top: 0px;
        z-index: 9;
        background-color: #1a497d;
        border-bottom: 0.5px solid #cccccc;
        .title {
            position: absolute;
            bottom: 15px;
            left: 20px;
            font-size: 18px;
            font-weight: 500;
            color: #fff;
        }
        .clearmsg {
            position: absolute;
            top: 50%;
            right: 20px;
            transform: translateY(-50%);
            font-size: 20px;
            font-weight: 500;
            color: #555;
        }
    }

    .content {
        margin-bottom: 20px;
    }
}
</style>
