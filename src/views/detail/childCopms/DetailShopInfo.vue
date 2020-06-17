<template>
  <div class="shop-info" v-if="Object.keys(shopInfo).length !== 0">
    <div class="title-info">
      <img :src="shopInfo.logo" alt />
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="sell-info">
      <div class="count-info sell-item">
        <div class="total-sell count-item">
          <div class="count">{{shopInfo.sells}}</div>
          <div class="text">总销量</div>
        </div>
        <div class="goods-count count-item">
          <div class="count">{{shopInfo.goodsCount}}</div>
          <div class="text">全部宝贝</div>
        </div>
      </div>
      <div class="grade-info sell-item">
        <div class="grade-row" v-for="(item, index) in shopInfo.score" :key="index">
          <div class="item name">{{item.name}}</div>
          <div
            class="item score"
            :class="{good: item.isBetter,less: !item.isBetter }"
          >{{item.score}}</div>
          <div
            class="item better"
            :class="{good: item.isBetter,less: !item.isBetter }"
          >{{item.isBetter ? '高' : '低'}}</div>
        </div>
      </div>
    </div>
    <div class="entrance">
      <van-button type="default">进店逛逛</van-button>
    </div>
  </div>
</template>

<script>
import { Button } from "vant";

export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    [Button.name]: Button
  }
};
</script>

<style lang="less" scoped>
.shop-info {
  background: #fff;
  padding: 0.16rem 0.24rem 0.5rem;
  border-bottom: 0.16rem solid #f2f2f2;

  .title-info {
    margin-top: 0.3rem;
    display: flex;
    align-items: center;
    img {
      width: 0.9rem;
      height: 0.9rem;
      border-radius: 0.46rem;
      border: 1px solid rgba(200, 200, 200, 0.6);
      vertical-align: middle;
    }
    span {
      margin-left: 0.18rem;
      position: relative;
      top: 0.06rem;
      font-size: 0.32rem;
    }
  }

  .sell-info {
    display: flex;
    margin: 0.4rem 0;
    .sell-item {
      flex: 1;
      text-align: center;
    }
    .count-info {
      display: flex;
      margin: 0.2rem 0;
      border-right: 1px solid rgba(200, 200, 200, 0.6);

      .count-item {
        flex: 1;
        text-align: center;
        .count {
          font-size: 0.4rem;
        }
        .text {
          font-size: 0.28rem;
          margin-top: 0.16rem;
        }
      }
    }
    .grade-info {
      font-size: 0.28rem;
      padding: 0 0.2rem;
      .grade-row {
        display: flex;
        .item {
          margin-top: 0.08rem;
        }
        .name {
          width: 2rem;
        }
        .score {
          flex: 1;
        }
        .better {
          flex: 1;
        }

        .good {
          color: #ff5777;
        }

        .less {
          color: #5ea732;
        }
      }
    }
  }

  .entrance {
    font-size: 0.3rem;
    text-align: center;
    button {
      padding: 0 1rem;
    }
  }
}
</style>