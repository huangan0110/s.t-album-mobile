<template>
    <div class="mine">
        <div class="info">
            <div class="bg-img">
                <img src="../../assets/img/user_bg1.jpg" alt="">
                <i class="van-icon van-icon-location-o"></i>
            </div>
            <div class="avatar">
                <img src="../../assets/img/default-avatar.png" alt="">
                <span>V.7</span>
            </div>
            <div class="name">
                <span>用户名用户名</span> <i class="van-icon van-icon-friends-o gender"></i>
                <div class="point">
                    <i class="van-icon van-icon-location-o"></i> <span>123</span> 
                </div>
            </div>
            <br>
            <span class="lke">粉丝 0 | 关注 0</span>
            <br>
            <van-button round type="info" class="editBtn" size="small">编辑信息</van-button>

        </div>
    </div>  
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.mine {
    position: relative;
    .info {
        .bg-img {
            border-bottom: 1px solid red;
            img {
                width: 100%;
                object-fit: cover;
            }
            i {
                position: absolute;
                top: 20px;
                right: 20px;
                font-size: 26px;
                color: #fff;
                background-color: #ff4b4b;
                border-radius: 50%;
                padding: 5px;
            }
        }
        .avatar {
            margin-top: -50px;
            margin-left: 20px;
            position: relative;
            img {
                width: 100px;
                height: 100px;
                border: 1px solid red;
                border-radius: 50%;
                background-color: #fff;
                z-index: 999;
            }
            span {
                color: #ff4b4b;
                font-size: 14px;
                font-weight: bold;
                background-color: yellow;
                position: absolute;
                padding: 4px;
                border-radius: 50%;
                left: 80px;
                top: 80px;
            }
        }
        .name {
            position: relative;
            background-color: pink;
            margin-top: 10px;
            margin-left: 10px;
            span:first-child {
                font-size: 16px;
                font-weight: bold;
            }
            .gender {
                color: blue;
                font-size: 18px;
                margin-top: 10px;
            }
            .point {
                float: right;
                position: relative;
                right: 20px;
                top: 5px;
                font-size: 18px;
                background-color: #fff;
                i {
                    vertical-align: text-bottom;
                }
                span {
                    margin: 0;
                    padding: 0;
                }
            }
        }
        .lke {
            margin-left: 10px;
        }
        .editBtn {
            margin-top: 10px;
            margin-left: 10px;
            width: 100px;
        } 
    }
}
</style>