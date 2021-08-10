<template>
  <div :class="{
    [bgClass]:true
  }" class="ui inverted vertical masthead center aligned segment">
    <div class="ui container">
      <div class="ui large borderless inverted menu" style="border: none">
        <div class="toc link icon item"><i class="sidebar icon"></i></div>
        <a class="header item loading-trigger">
          <div class="ui middle aligned image">
            <img
                alt="Logo"
                class="logo-image"
                src="../../assets/img/logo-white.svg"
            />
          </div>
          <div class="logo-text">Naver114</div>
        </a>
        <a
            v-for="(obj,index) in dataInfo.navList"
            :key="index"
            :title="$t(obj.label)"
            class="item loading-trigger"
            @click="obj.href.includes('http')? navTo(obj.href) : $router.replace(obj.href)"
        ><i :class="obj.icon" class="icon"></i>{{ $t(obj.label) }}</a
        >

        <div class="right menu">
          <a class="item"
          ><i class="mail red icon"></i>{{ $t("联系邮箱") }}：
            {{ dataInfo.mailOptions.mail }} </a
          >
        </div>
      </div>
    </div>
    <div class="ui text container">
      <div class="ui black pointing below label">
        <i class="smile icon"></i>{{ $t("Ctrl+D快速收藏本站") }}
      </div>
      <h1 class="ui inverted logo header">
        <img
            alt="Logo"
            class="ui centered image"
            src="../../assets/img/logo-white.svg"
        />
      </h1>
      <h2 class="ui inverted header">
        {{ $t("小X福利导航 - 满足您的欲望！") }}
      </h2>
      <div
          id="search-div"
          class="ui inverted fluid left icon right action input"
      >
        <i class="search icon"></i>
        <input
            id="search-query"
            v-model="searchText"
            autocomplete="off"
            autofocus="autofocus"
            placeholder="입력하세요(실시간검색어는No입력)"
            type="text"
        />
        <select
            id="search-services"
            ref="search"
            :style="{
            display: 'flex !important',
            width: '100px',
            paddingLeft: '0.5em',
            paddingRight: '0.5em',
          }"
            class="ui compact selection dropdown"
        >
          <option
              v-for="(obj, index) in dataInfo.selectOptions"
              :value="obj.value"
              data-suffix
          >
            {{ obj.label }}
          </option>
        </select>
        <div id="search-button" class="ui black icon button" @click="search()">
          Go
        </div>
      </div>
      <div class="ui labels shortcuts">
        <a
            v-for="(obj, index) in dataInfo.searchLink"
            :title="obj.title"
            class="ui black label"
            @click="navTo(obj.href)"
        >
          <span v-if="obj.icon" class="custom-icon"><img :src="obj.icon"/></span>
          {{ obj.title }}</a
        >
      </div>
      <div class="ui inverted link list">
        <a class="item loading-trigger">{{ $t("공짜：무료서비스") }}</a>
      </div>
    </div>
  </div>
  <div class="ui vertical stripe links segment">
    <div
        id="page-loading-progress"
        class="ui top attached blue inverted progress"
    >
      <div class="bar" style="transition-duration: 300ms"></div>
    </div>
    <div class="ui equal width stackable internally celled grid">
      <div class="center aligned row">
        <div class="links column" style="padding-bottom: 0 !important;border-top:1px solid rgba(34,36,38,.15)!important"
             @click="show['TOP'] = !show['TOP']">
          <div class="ui top attached label">{{ $t('TOP') }}</div>
          <div class="ui labels" v-if="showAll || show['TOP']">
            <a
                v-for="(obj, index) in dataInfo['TOP']"
                :style="{
                background: obj.color + '!important',
                color: obj.color ?'white !important':'black !important',
              }"
                :title="obj.title"
                class="ui purple label"
                rel="nofollow"
                target="_blank"
                @click="navTo(obj.href)"
            >
              <span v-if="obj.icon" class="custom-icon"><img :src="obj.icon"/></span>
              {{ obj.title }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="ui vertical stripe links segment">
    <div class="ui equal width stackable internally celled grid">
      <div class="center aligned row">
        <div class="links column" style="padding-bottom: 0 !important;border-top:1px solid rgba(34,36,38,.15)!important"
             @click="show['推荐①区'] = !show['推荐①区']">
          <div class="ui top attached label">{{ $t('推荐①区') }}</div>
          <div class="ui labels" v-if="showAll || show['推荐①区']">
            <a
                v-for="(obj, index) in dataInfo['推荐①区']"

                :style="{
                background: obj.color + '!important',
                color: obj.color ?'white !important':'black !important',
              }"
                :title="obj.title"
                class="ui blue label"
                rel="nofollow"
                target="_blank"
                @click="navTo(obj.href)"
            ><i class="paperclip white icon" style="display: none"></i
            >
              <span v-if="obj.icon" class="custom-icon"><img :src="obj.icon"/></span>
              {{ obj.title }}</a
            >
          </div>
        </div>

        <div class="links column" style="padding-bottom: 0 !important;border-top:1px solid rgba(34,36,38,.15)!important"
             @click="show['推荐②区'] = !show['推荐②区']">
          <div class="ui top attached label">{{ $t('推荐②区') }}</div>
          <div class="ui labels" v-if="showAll || show['推荐②区']">
            <a
                v-for="(obj, index) in dataInfo['推荐②区']"

                :style="{
                background: obj.color + '!important',
                color: obj.color ?'white !important':'black !important',
              }"
                :title="obj.title"
                class="ui teal label"
                rel="nofollow"
                target="_blank"
                @click="navTo(obj.href)"
            ><i class="paperclip white icon" style="display: none"></i
            >
              <span v-if="obj.icon" class="custom-icon"><img :src="obj.icon"/></span>
              {{ obj.title }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="ui vertical stripe links segment">
    <div class="ui equal width stackable internally celled grid">
      <div class="center aligned row">
        <div class="links column" style="padding-bottom: 0 !important;border-top:1px solid rgba(34,36,38,.15)!important"
             @click="show['站长推荐'] = !show['站长推荐']">
          <div class="ui top attached label">{{ $t('站长推荐') }}</div>
          <div class="ui labels" v-if="showAll || show['站长推荐']">
            <a
                v-for="(obj, index) in dataInfo['站长推荐']"

                :style="{
                background: obj.color + '!important',
                color: obj.color ?'white !important':'black !important',
              }"
                :title="obj.title"
                class="ui violet label"
                rel="nofollow"
                target="_blank"
                @click="navTo(obj.href)"
            ><i class="paperclip white icon" style="display: none"></i
            >
              <span v-if="obj.icon" class="custom-icon"><img :src="obj.icon"/></span>
              {{ obj.title }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="ui vertical stripe links segment">
    <div class="ui equal width stackable internally celled grid">
      <div class="center aligned row">
        <div class="links column" style="padding-bottom: 0 !important;border-top:1px solid rgba(34,36,38,.15)!important"
             @click="show['在线视频'] = !show['在线视频']">
          <div class="ui top attached label">{{ $t('在线视频') }}</div>
          <div class="ui labels" v-if="showAll || show['在线视频']">
            <a
                v-for="(obj, index) in dataInfo['在线视频']"

                :style="{
                background: obj.color + '!important',
                color: obj.color ?'white !important':'black !important',
              }"
                :title="obj.title"
                class="ui basic label"
                rel="nofollow"
                target="_blank"
                @click="navTo(obj.href)"
            >
              <span v-if="obj.icon" class="custom-icon"><img :src="obj.icon"/></span>
              {{ obj.title }}</a
            >
          </div>
        </div>

        <div class="links column" style="padding-bottom: 0 !important;border-top:1px solid rgba(34,36,38,.15)!important"
             @click="show['福利导航'] = !show['福利导航']">
          <div class="ui top attached label">{{ $t('福利导航') }}</div>
          <div class="ui labels" v-if="showAll || show['福利导航']">
            <a
                v-for="(obj, index) in dataInfo['福利导航']"

                :style="{
                background: obj.color + '!important',
                color: obj.color ?'white !important':'black !important',
              }"
                :title="obj.title"
                class="ui basic label"
                rel="nofollow"
                target="_blank"
                @click="navTo(obj.href)"
            >
              <span v-if="obj.icon" class="custom-icon"><img :src="obj.icon"/></span>
              {{ obj.title }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="ui vertical stripe links segment">
    <div class="ui equal width stackable internally celled grid">
      <div class="center aligned row">
        <div class="links column" style="padding-bottom: 0 !important;border-top:1px solid rgba(34,36,38,.15)!important"
             @click="show['论坛博客'] = !show['论坛博客']">
          <div class="ui top attached label">{{ $t('论坛博客') }}</div>
          <div class="ui labels" v-if="showAll || show['论坛博客']">
            <a
                v-for="(obj, index) in dataInfo['论坛博客']"

                :style="{
                background: obj.color + '!important',
                color: obj.color ?'white !important':'black !important',
              }"
                :title="obj.title"
                class="ui basic label"
                rel="nofollow"
                target="_blank"
                @click="navTo(obj.href)"
            >
              <span v-if="obj.icon" class="custom-icon"><img :src="obj.icon"/></span>
              {{ obj.title }}</a
            >
          </div>
        </div>

        <div class="links column" style="padding-bottom: 0 !important;border-top:1px solid rgba(34,36,38,.15)!important"
             @click="show['福利小说'] = !show['福利小说']">
          <div class="ui top attached label">{{ $t('福利小说') }}</div>
          <div class="ui labels" v-if="showAll || show['福利小说']">
            <a
                v-for="(obj, index) in dataInfo['福利小说']"

                :style="{
                background: obj.color + '!important',
                color: obj.color ?'white !important':'black !important',
              }"
                :title="obj.title"
                class="ui basic label"
                rel="nofollow"
                target="_blank"
                @click="navTo(obj.href)"
            >
              <span v-if="obj.icon" class="custom-icon"><img :src="obj.icon"/></span>
              {{ obj.title }}</a
            >
          </div>
        </div>

        <div class="links column" style="padding-bottom: 0 !important;border-top:1px solid rgba(34,36,38,.15)!important"
             @click="show['高清资源'] = !show['高清资源']">
          <div class="ui top attached label">{{ $t('高清资源') }}</div>
          <div class="ui labels" v-if="showAll || show['高清资源']">
            <a
                v-for="(obj, index) in dataInfo['高清资源']"

                :style="{
                background: obj.color + '!important',
                color: obj.color ?'white !important':'black !important',
              }"
                :title="obj.title"
                class="ui basic label"
                rel="nofollow"
                target="_blank"
                @click="navTo(obj.href)"
            >
              <span v-if="obj.icon" class="custom-icon"><img :src="obj.icon"/></span>
              {{ obj.title }}</a
            >
          </div>
        </div>

        <div class="links column" style="padding-bottom: 0 !important;border-top:1px solid rgba(34,36,38,.15)!important"
             @click="show['动漫ACG'] = !show['动漫ACG']">
          <div class="ui top attached label">{{ $t('动漫ACG') }}</div>
          <div class="ui labels" v-if="showAll || show['动漫ACG']">
            <a
                v-for="(obj, index) in dataInfo['动漫ACG']"

                :style="{
                background: obj.color + '!important',
                color: obj.color ?'white !important':'black !important',
              }"
                :title="obj.title"
                class="ui basic label"
                rel="nofollow"
                target="_blank"
                @click="navTo(obj.href)"
            >
              <span v-if="obj.icon" class="custom-icon"><img :src="obj.icon"/></span>
              {{ obj.title }}</a
            >
          </div>
        </div>

        <div class="links column" style="padding-bottom: 0 !important;border-top:1px solid rgba(34,36,38,.15)!important"
             @click="show['国外视频'] = !show['国外视频']">
          <div class="ui top attached label">{{ $t('国外视频') }}</div>
          <div class="ui labels" v-if="showAll || show['国外视频']">
            <a
                v-for="(obj, index) in dataInfo['国外视频']"

                :style="{
                background: obj.color + '!important',
                color: obj.color ?'white !important':'black !important',
              }"
                :title="obj.title"
                class="ui basic label"
                rel="nofollow"
                target="_blank"
                @click="navTo(obj.href)"
            >
              <span v-if="obj.icon" class="custom-icon"><img :src="obj.icon"/></span>
              {{ obj.title }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="ui vertical stripe links segment">
    <div class="ui equal width stackable internally celled grid">
      <div class="center aligned row">
        <div class="links column" style="padding-bottom: 0 !important;border-top:1px solid rgba(34,36,38,.15)!important"
             @click="show['购物'] = !show['购物']">
          <div class="ui top attached label">{{ $t('购物') }}</div>
          <div class="ui labels" v-if="showAll || show['购物']">
            <a
                v-for="(obj, index) in dataInfo['购物']"

                :style="{
                background: obj.color + '!important',
                color: obj.color ?'white !important':'black !important',
              }"
                :title="obj.title"
                class="ui basic label"
                rel="nofollow"
                target="_blank"
                @click="navTo(obj.href)"
            >
              <span v-if="obj.icon" class="custom-icon"><img :src="obj.icon"/></span>
              {{ obj.title }}</a
            >
          </div>
        </div>

        <div class="links column" style="padding-bottom: 0 !important;border-top:1px solid rgba(34,36,38,.15)!important"
             @click="show['工具'] = !show['工具']">
          <div class="ui top attached label">{{ $t('工具') }}</div>
          <div class="ui labels" v-if="showAll || show['工具']">
            <a
                v-for="(obj, index) in dataInfo['工具']"

                :style="{
                background: obj.color + '!important',
                color: obj.color ?'white !important':'black !important',
              }"
                :title="obj.title"
                class="ui basic label"
                rel="nofollow"
                target="_blank"
                @click="navTo(obj.href)"
            >
              <span v-if="obj.icon" class="custom-icon"><img :src="obj.icon"/></span>
              {{ obj.title }}</a
            >
          </div>
        </div>

        <div class="links column" style="padding-bottom: 0 !important;border-top:1px solid rgba(34,36,38,.15)!important"
             @click="show['社交'] = !show['社交']">
          <div class="ui top attached label">{{ $t('社交') }}</div>
          <div class="ui labels" v-if="showAll || show['社交']">
            <a
                v-for="(obj, index) in dataInfo['社交']"

                :style="{
                background: obj.color + '!important',
                color: obj.color ?'white !important':'black !important',
              }"
                :title="obj.title"
                class="ui basic label"
                rel="nofollow"
                target="_blank"
                @click="navTo(obj.href)"
            >
              <span v-if="obj.icon" class="custom-icon"><img :src="obj.icon"/></span>
              {{ obj.title }}</a
            >
          </div>
        </div>

        <div class="links column" style="padding-bottom: 0 !important;border-top:1px solid rgba(34,36,38,.15)!important"
             @click="show['学习'] = !show['学习']">
          <div class="ui top attached label">{{ $t('学习') }}</div>
          <div class="ui labels" v-if="showAll || show['学习']">
            <a
                v-for="(obj, index) in dataInfo['学习']"

                :style="{
                background: obj.color + '!important',
                color: obj.color ?'white !important':'black !important',
              }"
                :title="obj.title"
                class="ui basic label"
                rel="nofollow"
                target="_blank"
                @click="navTo(obj.href)"
            >
              <span v-if="obj.icon" class="custom-icon"><img :src="obj.icon"/></span>
              {{ obj.title }}</a
            >
          </div>
        </div>

        <div class="links column" style="padding-bottom: 0 !important;border-top:1px solid rgba(34,36,38,.15)!important"
             @click="show['求职'] = !show['求职']">
          <div class="ui top attached label">{{ $t('求职') }}</div>
          <div class="ui labels" v-if="showAll || show['求职']">
            <a
                v-for="(obj, index) in dataInfo['求职']"

                :style="{
                background: obj.color + '!important',
                color: obj.color ?'white !important':'black !important',
              }"
                :title="obj.title"
                class="ui basic label"
                rel="nofollow"
                target="_blank"
                @click="navTo(obj.href)"
            >
              <span v-if="obj.icon" class="custom-icon"><img :src="obj.icon"/></span>
              {{ obj.title }}</a
            >
          </div>
        </div>

        <div class="links column" style="padding-bottom: 0 !important;border-top:1px solid rgba(34,36,38,.15)!important"
             @click="show['娱乐'] = !show['娱乐']">
          <div class="ui top attached label">{{ $t('娱乐') }}</div>
          <div class="ui labels" v-if="showAll || show['娱乐']">
            <a
                v-for="(obj, index) in dataInfo['娱乐']"

                :style="{
                background: obj.color + '!important',
                color: obj.color ?'white !important':'black !important',
              }"
                :title="obj.title"
                class="ui basic label"
                rel="nofollow"
                target="_blank"
                @click="navTo(obj.href)"
            >
              <span v-if="obj.icon" class="custom-icon"><img :src="obj.icon"/></span>
              {{ obj.title }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="ui inverted vertical footer segment">
    <div class="ui container">
      <div class="ui stackable inverted divided equal height stackable grid">
        <div class="three wide column">
          <h4 class="ui inverted header">Built with</h4>
          <div class="ui inverted link list">
            <a
                v-for="(obj, index) in dataInfo['Built with']"
                :title="obj.title"
                class="item"
                target="_blank"
                @click="navTo(obj.href)"
            >
              <span v-if="obj.icon" class="custom-icon"><img :src="obj.icon"/></span>
              {{ obj.title }}</a
            >
          </div>
        </div>
        <div class="three wide column">
          <h4 class="ui inverted header">Powered by</h4>
          <div class="ui inverted link list">
            <a
                v-for="(obj, index) in dataInfo['Powered by']"
                :title="obj.title"
                class="item"
                target="_blank"
                @click="navTo(obj.href)"
            >
              <span v-if="obj.icon" class="custom-icon"><img :src="obj.icon"/></span>
              {{ obj.title }}</a
            >
          </div>
        </div>
        <div class="three wide column">
          <h4 class="ui inverted header">About</h4>
          <div class="ui inverted link list">
            <a
                v-for="(obj, index) in dataInfo['About']"
                :title="obj.title"
                class="item"
                target="_blank"
                @click="navTo(obj.href)"
            >
              <span v-if="obj.icon" class="custom-icon"><img :src="obj.icon"/></span>
              {{ obj.title }}</a
            >
          </div>
        </div>
        <div class="seven wide column">
          <h4 class="ui inverted header">한국야동,일본야동,서양야동,오피사이트,웹툰,토렌트순위,토토검증사이트 주소찾기</h4>
          <div class="ui inverted link list">
            <a
                v-for="(obj, index) in dataInfo['小X福利导航 - 这里只有精品！']"
                :title="obj.title"
                class="item"
                target="_blank"
                @click="navTo(obj.href)"
            >
              <span v-if="obj.icon" class="custom-icon"><img :src="obj.icon"/></span>
              {{ obj.title }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import database from "../../database.json";

export default {
  data() {
    return {
      dataInfo: database,
      searchText: "",
      interval: null,
      bgClass: "bg2",
      show: {},
      showAll: !navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i),
    };
  },
  mounted() {
    this.bgClass = 'bg' + Math.ceil(Math.random() * 14)
    this.interval = setInterval(() => {
      this.bgClass = 'bg' + Math.ceil(Math.random() * 14)
    }, 10000)
  },
  unmounted() {
    clearInterval(this.interval)
  },
  methods: {
    navTo(href) {
      window.open(
          window.location.origin +
          "/#/webview/index?href=" +
          encodeURIComponent(href)
      );
    },
    search() {
      window.open(this.$refs.search.selectedOptions[0].value + this.searchText);
    },
  },
};
</script>