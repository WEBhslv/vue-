<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="(item,index) in newslist" :key="index">
        <router-link :to="'/home/newsinfo/'+item.id">
          <img class="mui-media-object mui-pull-left"
            src="item.img_url">
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class='mui-ellipsis'>
              <span>{{ item.add_time | dateFormat('YYYY-MM-DD')}}</span>
              <span>{{ item.click}}</span>
            </p>
          </div>
        </router-link>
      </li>
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
        newslist: [] // 新闻列表
      };
    },
    created() {
      this.getNewsList();
    },
    methods: {
      getNewsList() {
        // 获取新闻列表
        this.axios.get("api/getnewslist").then(result => {
          if (result.data.status === 0) {
            // 如果没有失败，应该把数据保存到 data 上
            this.newslist = result.data.message;
            // console.log(result.data)
          } else {
            // Toast("获取新闻列表失败！");
          }
        });
      }
    }

  }

</script>
<style scoped>
  .mui-table-view li h1 {
    font-size: 14px;
  }

  .mui-table-view .mui-ellipsis {
    font-size: 12px;
    color: #0094ff;
    display: flex;
    justify-content: space-between;
  }

</style>
