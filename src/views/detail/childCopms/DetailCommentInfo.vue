<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="header">
      <div>用户评价</div>
      <div>更多></div>
    </div>
    <div class="user">
      <img v-lazy="commentInfo.user.avatar" />
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="comment">{{commentInfo.content}}</div>

    <div class="other-info">
      <div class="time">{{commentInfo.created | dateFormat}}</div>
      <div class="style">{{commentInfo.style}}</div>
    </div>

    <div class="picture">
      <template v-for="(item, index) in commentInfo.images">
        <van-image lazy-load :src="item" :key="index">
          <template v-slot:loading>
            <img src="~assets/img/common/placeholder.png" alt />
          </template>
        </van-image>
      </template>
    </div>
  </div>
</template>

<script>
import { Image } from "vant";
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    [Image.name]: Image
  }
};
</script>

<style >
.comment-info {
  background: #fff;
  padding: 0.30rem 0.24rem;
  border-bottom: 0.16rem solid #f2f2f2;
}

.header {
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.30rem;
  font-size: 0.30rem;
  border-bottom: 1px solid #eee;
}

.user {
  margin: 0.30rem 0;
  display: flex;
  align-items: center;
}

.user img {
  width: 0.84rem;
  height: 0.84rem;
  vertical-align: middle;
  border-radius: 0.42rem;
}

.user span{
  vertical-align: middle;
  margin-left: 0.16rem;
  font-size: 0.32rem;
  color: #666;
}

.comment {
  margin-top: -0.10rem;
}

.comment {
  font-size: 0.28rem;
  text-indent: 1.5em;
  line-height: 1.5;
}

.other-info {
  display: flex;
  font-size: 0.24rem;
  margin-top: 0.20rem;
  color: #888;
}

.other-info .time {
  margin-right: 0.10rem;
}

.picture {
  display: flex;
  justify-content: space-between;
  margin-top: 0.20rem;
}

.picture .van-image__img{
  max-width: 30% !important;
}
</style>