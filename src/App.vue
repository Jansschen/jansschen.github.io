<template>
  <router-view v-if="$route.meta.hideHeader"></router-view>
  <div class="pusher" v-else>
    <div class="ui large top fixed borderless hidden menu">
      <div class="ui container">
        <a
          class="header item loading-trigger"
          href="https://hellogirls.github.io/"
        >
          <div class="ui middle aligned image">
            <img
              alt="Logo"
              class="logo-image"
              src="./assets/img/logo-dark.svg"
            />
          </div>
          <div class="logo-text">HELLOGIRLS</div>
        </a>

        <a class="item loading-trigger" href="/" title
          ><i class="home icon"></i>首页</a
        >

        <a class="item loading-trigger" href="/pages" title
          ><i class="qrcode icon"></i>收录&amp;留言</a
        >

        <a class="item loading-trigger" href="/donate" title
          ><i class="newspaper icon"></i>值得一看</a
        >

        <a
          class="item loading-trigger"
          href="https://github.com/hellogirls/XXFLDH/"
          title
          ><i class="location arrow icon"></i>最新地址</a
        >

        <div class="right menu">
          <a class="item"
            ><i class="mail red icon"></i>联系邮箱：wjdrkdbs9310@163.com</a
          >
        </div>
      </div>
    </div>
    <div class="ui vertical inverted sidebar menu left">
      <a class="header item loading-trigger">
        <div class="ui middle aligned image">
          <img
            alt="Logo"
            class="logo-image"
            src="./assets/img/logo-white.svg"
          />
        </div>
        <div class="logo-text">HELLOGIRLS</div>
      </a>

      <a
        class="item loading-trigger"
        title
        @click="$router.replace('/index/index')"
        ><i class="home icon"></i>首页</a
      >

      <a
        class="item loading-trigger"
        title
        @click="$router.replace('/richtext/index')"
        ><i class="qrcode icon"></i>收录&amp;留言</a
      >

      <a
        class="item loading-trigger"
        title
        @click="$router.replace('/richtext/index')"
        ><i class="newspaper icon"></i>值得一看</a
      >

      <a class="item loading-trigger" title
        ><i class="location arrow icon"></i>最新地址</a
      >
    </div>
    <router-view></router-view>
  </div>
</template>

<script></script>

<style lang="scss">
.custom-icon {
  width: 1em;
  height: 1em;
  margin-right: 4px;

  > img {
    width: 100%;
    height: 100%;
  }
}

.ui.label {
  display: inline-flex !important;
  align-items: center !important;
}

.links.column {

  .labels {
    margin-bottom: 2rem !important;
  }
}
</style>
