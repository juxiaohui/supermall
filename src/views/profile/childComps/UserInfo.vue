<template>
  <div id="user-info">
    <a href="#" class="info-box">
      <div class="left">
        <img class="privateImage-svg" src="~assets/img/profile/avatar.svg" alt />
        <div class="login-info">
          <div class="user-nickname">登录/注册</div>
          <div class="phone">
            <img class="icon-mobile" src="~assets/img/profile/phone.svg" alt />
            <span class="user-phone">暂无绑定手机号</span>
          </div>
        </div>
      </div>
      <img class="arrow-svg right" src="~assets/img/common/arrow-left.svg" alt />
    </a>
  </div>
</template>

<script>
export default {
  name: "UserInfo"
};
</script>

<style lang="less" scoped>
#user-info {
  background-color: var(--color-tint);
  padding: 15px;

  .info-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .privateImage-svg {
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 0.6rem;
    }

    .left {
      display: flex;
      align-items: center;
    }

    .login-info {
      color: #fff;
      margin-left: 0.24rem;

      .user-nickname {
        font-size: 0.4rem;
        font-weight: 500;
      }
      .phone {
        margin-top: 5px;
        font-size: 0.28rem;
        display: flex;
        align-items: center;
        // font-weight: 500;
        .user-phone {
          vertical-align: middle;
        }
      }
    }
  }

  .icon-mobile {
    width: 22px;
  }

  .arrow-svg {
    width: 22px;
    height: 44px;
  }
}
</style>
