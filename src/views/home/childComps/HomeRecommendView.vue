<template>
  <ul class="recommend">
    <li v-for="(item, index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt />
        <p>{{item.title}}</p>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {}
};
</script>

<style lang="less" scoped>
.recommend {
  background: #fff;
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 0.24rem;
  padding: 0.2rem 0 0.4rem;
  border-bottom: 0.2rem solid #eee;
  .recommend-item {
    flex: 1;
    text-align: center;
    a {
      img {
        width: 1.4rem;
        height: 1.4rem;
        margin-bottom: 0.2rem;
      }
      p{
        color: var(--color-text);
      }
    }
  }
}
</style>