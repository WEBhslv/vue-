<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in imageList" :key="index">
        <img :src="item.img" alt="" id="lb">
      </mt-swipe-item>
    </mt-swipe>
    <transition>
      <router-view></router-view>
    </transition>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../images/menu1(1).png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../images/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../images/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../images/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../images/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div>
        </a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../images/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a></li>
    </ul>
  </div>
</template>

<script>
  import Vue from "vue";
  import axios from 'axios'
  // 2.2 安装vue-resource
  // Vue.use(axios)

  export default {
    data() {
      return {
        imageList: [] // 定义存放图片的数组
      };
    },
    created() {
      // 发起获取轮播图的数据请求
      this.getlunbo();
    },
    methods: {
      getlunbo() {
        // 使用vue-resource的get请求方式发送数据请求
        this.axios.get("api/getlunbo").then(result => {
          if (result.data.status === 0) {
            // 将请求回来的数据赋值给存放图片的数组
            this.imageList = result.data.message;
          } else {
            Toast("数据加载失败...");
          }
        });
      }
    }
  };

</script>
<style scoped>
  .app-container {
    padding-top: 40px;
    overflow-x: hidden;
    /*隐藏超出屏幕部分*/
  }

  .mint-swipe {
    height: 200px;
  }

  #lb  {
    width: 100%;
    height: 100%;
  }

  .mint-swipe .mint-swipe-item:nth-child(1) {
    background-color: skyblue;
  }

  .mint-swipe .mint-swipe-item:nth-child(2) {
    background-color: pink;
  }

  .mint-swipe .mint-swipe-item:nth-child(3) {
    background-color: cornflowerblue;
  }

  .mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: none;

  }

  .mui-grid-view.mui-grid-9 img {
    width: 60px;
    height: 60px;
  }

  .mui-grid-view.mui-grid-9 .mui-media-body {
    font-size: 13px;
  }

  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: 0;
  }

  .v-enter {
    opacity: 0;
    transform: translateX(100%);
    /*进入起点在屏幕100%部分,即屏幕最右*/
  }

  .v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    /*离开的终点在屏幕-100%部分*/
    position: absolute;
  }

  .v-enter-active,
  .v-leave-active {
    transition: all 0.5s ease;
  }

</style>
