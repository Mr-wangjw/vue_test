<template>
    <div>
        <mt-swipe :auto="4000">
            <!-- <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
               <img :src="item.src" alt="">
            </mt-swipe-item> -->
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src="../../images/menu1.png" alt="">
					<div class="mui-media-body">视频资讯</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src="../../images/menu2.png" alt="">
					<div class="mui-media-body">图片分享</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src="../../images/menu3.png" alt="">
					<div class="mui-media-body">商品购买</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src="../../images/menu4.png" alt="">
					<div class="mui-media-body">留言反馈</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src="../../images/menu5.png" alt="">
					<div class="mui-media-body">视频专区</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src="../../images/menu6.png" alt="">
					<div class="mui-media-body">联系我们</div></a>
					</li>
		           
		        </ul> 
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
 export default{
     data(){
         return{
            lunbotuList:[]
          }
         },
         created(){
            this.getLunbotuo();
         },
         methods:{
             getLunbotuo(){
               this.$http.get('http://vue.studyit.io.api.getlunbo').then(resules=>{
                   if(resules.status===0){
                     this.lunbotuList=resules.body.message;
                   }else{
                       Toast("图片加载失败")
                   }
                 
               })
             }
         }
     }
</script>
<style lang="scss" scoped>
    .mint-swipe{
        height: 200px;
    }
    .mint-swipe-item{
        &:nth-child(1){
            background-color: red;
        }
         &:nth-child(2){
            background-color: blue;
        }
         &:nth-child(3){
            background-color: yellow;
        }
    }
   .mui-grid-view.mui-grid-9{
       background-color: #fff;
       border: none;
       img{
           widows: 60px;
           height: 60px;
       }
       .mui-media-body{
           font-size: 13px
       }
   }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: 0
    }
</style>