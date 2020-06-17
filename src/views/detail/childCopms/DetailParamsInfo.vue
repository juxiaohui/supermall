<template>
  <div class="param-info">
    <div class="size">
      <div class="size-table" v-for="(itemx, indexx) in paramsInfo.sizes" :key="indexx">
        <div class="size-row row" v-for="(itemy, indexy) in itemx" :key="indexy">
          <div class="size-item" v-for="(itemz, indexz) in itemy" :key="indexz">{{itemz}}</div>
        </div>
      </div>
    </div>
    <!-- 参数信息 -->
    <div class="info">
      <template v-for="(item, index) in paramsInfo.infos">
        <div class="info-row row" :key="index">
          <div class="key">{{item.key}}</div>
          <div class="value">{{item.value}}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamsInfo",
  props: {
    paramsInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang="less" scoped>
.param-info {
  background: #fff;
  padding: 0.4rem 0.24rem;
  font-size: 0.30rem;
  border-bottom: 0.16rem solid #f2f2f2;
}

.row {
  display: flex;
  height: 0.84rem;
  line-height: 0.84rem;
  border-bottom: 1px solid #f2f2f2;
}

.size-item {
  flex: 1;
  margin-right: 0.42rem;
}

.info-row {
  display: flex;
}

.info-row .key {
  width: 1.60rem;
}

.info-row .value {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #f55777;
}
</style>