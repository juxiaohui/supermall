import { request } from './request'

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getGoodsData(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}


export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}


export function getRecommends() {
  return request({
    url: '/recommend'
  })
}

// 基本商品信息
export class GoodsBaseInfo {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

// 店铺信息
export class ShopInfo {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}


export class ParamInfo {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
} 




// 获取分类左边菜单 一级分类
export function getCategory() {
  return request({
    url: '/category',
  })
}

// 根据一级分类获取二级分类
export function getSubcategory(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

// 获取一级分类->2级分类对应的商品数据
export function getCategoryDetail(miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}
