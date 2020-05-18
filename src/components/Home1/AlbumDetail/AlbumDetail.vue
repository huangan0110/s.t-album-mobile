<template>
    <div class="album-detail">
        <div class="edit-title clearfix" v-if="isEdit">
            <div class="back-btn" @click="editCancel">
                <i class="iconfont albumzuojiantou"></i>
            </div>
            <span class="choose-all" @click="chooseAll">全选</span>
        </div>
        <div class="edit-title1" v-if="isEdit"></div>

        <div class="album-title" v-if="!isEdit">
<!--            <img src="../../../assets/img/fixed1.jpg">-->
            <van-image
                width="100%"
                height="32vh"
                lazy-load
                fit="cover"
                :src="bgSrc"
            >
                <template v-slot:error>{{bgTip}}</template>
            </van-image>

            <div class="detail-header" :class="{bgc:isBgc}">
                <div class="back-btn" @click="goPath('/home')" :class="{isBlack:isBgc}">
                    <i class="iconfont albumzuojiantou"></i>
                </div>
                <i :class="{isBlack:isBgc}" class="iconfont albumyoucecaidan menu-btn" @click="showMnuPopup" v-if="!isEdit"></i>
                <i class="iconfont albumcamera up-btn-bgc" v-if="isBgc" @click="uploadPic"></i>
            </div>

            <div class="title-bottom">
                <span>{{title}}</span>
                <span>共{{totalCount}}张照片</span>
                <div class="bottom-right">
<!--                    <i class="iconfont albumicon"></i><span>浏览量 77</span>-->
                </div>
            </div>
        </div>
        <div class="up-btn" v-if="!isEdit">
            <van-button icon="1" type="info" @click="uploadPic">上传图片</van-button>
            <i class="iconfont albumcamera"></i>
        </div>
        <div class=" clearfix" :class="{bigview:isBigView,photolist:!isBigView}">
            <ul>
                <li v-for="(item,index) in photoArray" :key="index" @click="choosely(index,item.id)">
<!--                    <img :src="item.imgSrc">-->
                    <van-image
                        width="100%"
                        height="100%"
                        lazy-load
                        fit="cover"
                        :src="item.url"
                    >
                        <template v-slot:loading><van-loading /></template>
                    </van-image>
                    <div class="checked" v-if="chooseAfterValue.indexOf( item.id )!=-1">
                        <i class="van-icon van-icon-success"></i>
                    </div>
                </li>
            </ul>
        </div>

        <div class="detail-bottom" v-show="noPic">
            <span>------&nbsp;&nbsp;已显示全部&nbsp;&nbsp;------</span>
        </div>
        <div class="detail-bottom" v-show="!noPic">
            <span>&nbsp;<van-loading color="#1989fa" /> 加载中...</span>
        </div>

        <div class="manage-photo" v-if="isEdit">
            <ul>
                <li @click="movePhoto"><span>移动</span></li>
                <li @click="delPhoto"><span>删除</span></li>
                <li @click="editCancel"><span>取消</span></li>
            </ul>
        </div>

        <van-popup
            v-model="showMenu"
            position="bottom"
        >
            <van-cell title="编辑相册" is-link icon="edit" @click="editAlbum"/>
            <van-cell title="管理照片" is-link icon="setting-o" @click="managePhoto"/>
            <van-cell title="大图浏览" is-link icon="expand-o" @click="bigView" v-if="!isBigView"/>
            <van-cell title="小图浏览" is-link icon="photo-o" @click="bigView" v-else/>
        </van-popup>
        <van-image-preview v-model="seePhoto" :images="imgSrcArr" @change="onChange" @close="onClose"  >
<!--            <template v-slot:index>第{{ index }}页</template>-->
            <template v-slot:cover>
                <div class="viewPhoto-bg" :style="bacImage">
                </div>
                <div style="font-size: 12px; position: fixed;top: 12px;right: 10px; width: 60px;height: 20px;z-index: 999999;color: #00ccff" @click="setBg">设为背景</div>
            </template>
        </van-image-preview>
<!--        <div class="van-overlay"></div>-->
    </div>
</template>

<script>
    import {deletePhoto,seeAlbumInfo,updateAlbum} from "../../../api/getData";

    export default {
        name: "AlbumDetail",
        data() {
            return {
                photoArray:[],
                showMenu:false,
                isEdit:false,
                chooseAfterValue:[],
                idArr: [],
                isBgc:false,
                isBigView:false,
                seePhoto:false,
                imgSrcArr:[],
                index: 1,
                title:"",
                bacImage: {
                    backgroundImage: "",
                },
                id:"",
                totalCount:'',
                pageCount:1,
                isBottom:0,
                noPic:false,
                loading:false,
                visiblePermissionId:'',
                bgSrc:"",
                bgUrl:"",
                bgTip:""
            }
        },
        mounted() {
            window.addEventListener('scroll',this.headerBgc);
            this.title = this.$route.query.title;
            this.visiblePermissionId = this.$route.query.visiblePermissionId;
            this.bgSrc = this.$route.query.background;
            this.getPhoto();
            this.id = this.$route.query.id
            // seeAlbumInfo(id)
        },
        methods: {
            setBg(){
                let formData = {};
                formData.id = this.id;
                formData.title = this.title;
                formData.visiblePermissionId = this.visiblePermissionId;
                formData.background = this.bacImage.backgroundImage.toString();
                updateAlbum(formData).then(res=>{
                    if(res.data.success) {
                        this.$toast({
                            message:"设置成功",
                            position:"bottom"
                        });
                        this.bgSrc = formData.background.slice(4,-2);
                    }else{
                        this.$toast({
                            message:res.data.message,
                            position:"bottom"
                        });
                    }
                })
            },
            uploadPic() {
                let data = {};
                data.id = this.id;
                data.name = this.title;
                data.type = 'detailUpload';
                data.background = this.bgSrc
                this.$router.push({
                    path:"/upload",
                    query: {
                        data: data,
                    }
                })
            },
            getPhoto(pageNo){
                let id = this.$route.query.id;
                this.loading = true;
                seeAlbumInfo(id,pageNo).then(res=>{
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
            headerBgc() {
                var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                var clientHeight=document.documentElement.clientHeight || document.body.clientHeight;
                var windowHeight =  document.documentElement.scrollHeight ||document.body.scrollHeight;
                //滚动条的高度>可视区的高度
                if(scrollTop>(clientHeight*0.32-120)){
                    this.isBgc = true;
                }else{
                    this.isBgc = false;
                }
                // console.log(windowHeight +"----"+ (scrollTop+clientHeight))
                if((windowHeight-20) < scrollTop+clientHeight){
                    if(this.pageCount == this.isBottom) {
                        this.pageCount++;
                        if(!this.noPic) {
                            this.getPhoto(this.pageCount);
                        }
                    }
                }
            },
            editAlbum() {
                this.$router.push({
                    path:'/edit_album',
                    query:{
                        type:'edit',
                        id:this.id,
                        title:this.title,
                        visiblePermissionId:this.visiblePermissionId,
                        background:this.bgSrc
                    }
                })
            },
            goPath(url) {
                this.$router.push(url);
            },
            showMnuPopup() {
                this.showMenu = true;
            },
            managePhoto() {
                this.isEdit = true;
                this.isBigView = false;
                this.showMenu = false;
            },
            movePhoto() {
                if(this.chooseAfterValue.length == 0) {
                    this.$toast({
                        message:"请先选择照片!",
                        position:"bottom"
                    });
                    return false;
                }
                this.$router.push({
                    path:'/move_photo',
                    query:{
                        type:'move',
                        id:this.id,
                        title:this.title,
                        visiblePermissionId:this.visiblePermissionId,
                        chooseAfterValue:this.chooseAfterValue
                    }
                })
            },
            delPhoto() {

                if(this.chooseAfterValue.length == 0) {
                    this.$toast({
                        message:"请先选择照片!",
                        position:"bottom"
                    });
                    return false;
                }
                let that =this;
                this.$dialog.alert({
                    message: '是否删除'+this.chooseAfterValue.length+"张图片？",
                    showCancelButton:true,
                }).then(()=>{
                    let formData = {};

                    formData.albumId = this.id;
                    formData.imageIds = this.chooseAfterValue;
                    deletePhoto(formData).then(res=>{
                        if(res.data.success) {
                            for(let i=0;i<this.chooseAfterValue.length;i++) {
                                for(let j=0;j<this.photoArray.length;j++) {
                                    if(this.chooseAfterValue[i] == this.photoArray[j].id) {
                                        this.photoArray.splice(j,1);
                                    }
                                }
                            }
                            this.$toast({
                                message:"删除成功!",
                                position:"bottom"
                            });
                        }else{
                            this.$toast({
                                message:"删除失败!",
                                position:"bottom"
                            });
                        }
                    })

                }).catch(()=>{
                });

            },
            editCancel() {
                this.isEdit = false;
                this.chooseAfterValue = [];
            },
            choosely(index,id){
                if(!this.isEdit) {
                    let prevArr = [];
                    let nextArr = [];
                    this.index = this.photoArray[index].id;
                    for (let i = 0; i < this.photoArray.length; i++) {
                        if (i < index) {
                            prevArr.push(this.photoArray[i]);
                        } else {
                            nextArr.push(this.photoArray[i]);
                        }
                    }
                    nextArr.push.apply(nextArr, prevArr);
                    for (let i = 0; i < nextArr.length; i++) {
                        this.imgSrcArr.push(nextArr[i].url);
                        this.idArr.push(nextArr[i].id)
                    }
                    this.bacImage.backgroundImage = "url(" + this.imgSrcArr[id] + ") "
                    this.seePhoto = true;
                }else{
                    if(this.chooseAfterValue.indexOf( id )!=-1){
                        this.chooseAfterValue.splice( this.chooseAfterValue.indexOf( id ), 1 )
                    }else{
                        this.chooseAfterValue.push(id)
                    }
                }
            },
            onChange(index){
                this.index = this.idArr[index];
                this.bacImage.backgroundImage = "url(" + this.imgSrcArr[index] + ") "
            },
            onClose() {
                this.imgSrcArr = [];
            },
            chooseAll() {
                if(this.chooseAfterValue.length != this.photoArray.length) {
                    for(let i=0; i<this.photoArray.length; i++) {
                        this.chooseAfterValue.push(this.photoArray[i].id);
                    }
                }else{
                    this.chooseAfterValue = [];
                }
            },
            bigView() {
                this.isBigView = !this.isBigView;
                this.showMenu = false;
            }
        }
    }
</script>

<style scoped lang="scss">
.album-detail {
    /*>>>.van-overlay {*/
    /*    background-color: rgba(0,0,0,0);*/
    /*}*/
    >>>.van-cell {
        padding: 16px 16px;
    }
    > > > .van-image-preview__overlay {
        background-color: rgba(0, 0, 0, 1);
    }

    > > > .van-swipe {
        z-index: 9999 !important;
    }
    >>>.van-image-preview__close-icon {
        z-index: 9999999;
    }
    >>>.van-image-preview__index {
        z-index: 999999;
    }
    .viewPhoto-bg {
        width: 100%;
        height: 100%;
        background: url('../../../assets/img/fixed2.jpg') no-repeat;
        background-size: cover;
        filter: blur(45px) brightness(0.7);;
        transition: linear 0.3s;
        webkit-transform: translateZ(0);
        -moz-transform: translateZ(0);
        -ms-transform: translateZ(0);
        -o-transform: translateZ(0);
        transform: translateZ(0);
    }

    > > > .van-image-preview__cover {
        width: 100%;
        height: 100%;
    }
    .edit-title1 {
        height: 50px;
    }
    .edit-title {
        height: 50px;
        width: 100%;
        font-size: 18px;
        position: fixed;
        top: 0;
        z-index: 999;
        background-color: #fff;
        .back-btn {
            width: 100px;
            height: 50px;
            i {
                font-size: 26px;
                color: #000;
                position: absolute;
                top: 15px;
                left: 13px;
            }
            span {
                position: absolute;
                top: 11px;
                left: 34px;
            }
        }

        .choose-all {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 16px;
            color: #444;
        }

    }
    .album-title {
        position: relative;
        >>>.van-image__error, .van-image__loading {
            filter: brightness(0.8);
        }
        >>>.van-image__img {
            width: 100%;
            height: 32vh;
            min-height: 100px;
            object-fit: cover;
            filter: brightness(0.85);
        }
        .bgc {
            background-color: #fff;
        }
        .isBlack {
            color: #323233!important;
        }
        .detail-header {
            transition: all 0.3s;
            position: fixed;
            z-index: 999;
            top: 0;
            height: 56px;
            width: 100%;
            .back-btn {
                position: absolute;
                top: 12px;
                left: 12px;
                color: #fff;
                width: 60px;
                i {
                    font-size: 26px;
                    position: absolute;
                    margin-top: 4px;
                }
            }
            .menu-btn {
                position: absolute;
                top: 20px;
                right: 15px;
                font-size: 20px;
                color: #fff;
            }
            .up-btn-bgc {
                position: absolute;
                top: 18px;
                right: 65px;
                font-size: 24px;
                color: #000;
            }
        }

        .title-bottom {
            height: 60px;
            width: 100%;
            position: absolute;
            bottom: 0;
            color: #fff;
            span:first-child {
                font-size: 18px;
                position: absolute;
                left: 10px;
                top: 0;
            }
            span:nth-child(2) {
                position: absolute;
                left: 10px;
                top: 30px;
                font-size: 12px;
                color: #eee;
            }
            .bottom-right {
                position: absolute;
                right: 0px;
                width: 100px;
                height: 30px;
                bottom: 0;
                color: #eee;
                i{
                    position: absolute;
                    left: 0;
                    top: 0;
                }

                span {
                    left: 20px;
                    top: 0;
                }
            }
        }
    }

    .up-btn {
        width: 90%;
        margin: 10px auto;
        position: relative;
        .van-button {
            width: 100%;
        }
        i {
            position: absolute;
            top: 50%;
            font-size: 18px;
            color: #eeeeee;
            transform: translateY(-50%);
            left: 35%;
        }
    }

    .photolist {
        ul {
            list-style: none;
            li {
                float: left;
                width: 33%;
                height: 33vw;
                margin-right: 0.5vw;
                margin-bottom: 0.5vw;
                position: relative;
                /*>>>.van-image {*/
                /*    height: 100%;*/
                /*    img {*/
                /*        width: 100%;*/
                /*        height: 100%;*/
                /*        object-fit: cover;*/
                /*    }*/
                /*    >>>.van-image__error, .van-image__img, .van-image__loading {*/
                /*        object-fit: cover;*/
                /*    }*/
                /*}*/

                .checked {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background-color: #1989fa;
                    position: absolute;
                    right: 10px;
                    top: 10px;
                    text-align: center;
                    i {
                        color: #fff;
                        margin-top: 3px;
                    }
                }
            }
            li:nth-child(3n) {
                margin-right: 0;
            }
        }
    }

    .bigview {
        ul {
            list-style: none;
            li {
                width: 100%;
                float: left;
                img {
                    width: 100%;
                }
            }
        }
    }
    .detail-bottom {
        text-align: center;
        margin: 15px 0;
        color: #aaa;
        font-size: 12px;
    }

    .manage-photo {
        height: 50px;
        width: 100%;
        position: fixed;
        bottom: 0;
        background-color: rgba(0,0,0,0.7);
        ul {
            list-style: none;
            li {
                height: 50px;
                color: #fff;
                text-align: center;
                float: left;
                width: 33%;
                margin-right: 0.5%;
                position: relative;
                span {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    top: 14px;
                }
            }
            li:last-child {
                margin-right: 0;
            }

            li:active {
                background-color: rgba(0,0,0,0.4);
            }
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
