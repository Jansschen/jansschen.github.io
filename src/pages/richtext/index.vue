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
      <h1 class="ui inverted header"><i class="qrcode icon"></i>개발의뢰받음</h1>
      <h2 class="ui inverted header">C++/Golang/Java/php：wjdrkdbs9310@163.com</h2>
    </div>
  </div>
  <div class="ui icon message">
    <i class="inbox icon"></i>
    <div class="content">
      <div class="header">
        <font style="vertical-align: inherit">
          <font style="vertical-align: inherit"
          >메일!!!： wjdrkdbs9310@163.com</font
          >
        </font>
      </div>
      <p>
        <font style="vertical-align: inherit">
          <font style="vertical-align: inherit"
          >광고 //동맹사이트 // 새로운주소</font
          >
        </font>
      </p>
    </div>
  </div>
  <div class="ui segment">
    <h2 class="ui left floated header">
      <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit">광고!!!</font></font
      >
    </h2>
    <div class="ui clearing divider"></div>
    <div class="ui tall stacked segment">
      <p>1、광고받습니다；</p>
      <br/>
      <p>2、Cps Cpc 다가능；</p>
      <br/>
      <p>3、pop up ads 안받습니다.；</p>
      <br/>
      <p>광고주분들 연락많이주세요。</p>
      <br/>
    </div>
  </div>
  <div class="ui segment">
    <h2 class="ui left floated header">
      <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit">동맹사이트 신청양식 안내</font></font
      >
    </h2>
    <div class="ui clearing divider"></div>
    <div class="ui tall stacked segment">
      <p> naver114입니다 // 링크교환가능： https://www.naver114.com/</p>
      <br/>
      <p>링크 무료로 추가해드리니 연락주세요</p>
      <br/>
      <p>

        차단우회 프로그램들중 가장 안전하고 쾌적한 프로그램들로 많이 리뷰되는 프로그램입니다.세이브비지트 - Savevisit

        PC와 모바일 전부 적용이 가능합니다.

        다운로드 : https://safevisit.org/ko
      </p>
      <br/>
      <p>//서버없이 운영되는 웹이여서 메일주시면 최대한빠르게 링크 걸어드릴게요//</p>
      <br/>
      <p>
        텔레그램 가입안함 나중에할거임!
        <a
            href="https://f.10yun.com/business/3/yw_sns/2019/0303/3_87856531.png?1551609159"
            target="_blank"
        ><img
            alt="텔레그램 그룹"
            border="0"
            src="https://f.10yun.com/business/3/yw_sns/2019/0303/3_87856531.png?1551609159"
            title="영상추천링크"
        /></a>
      </p>
      <br/>
      <p>메일주소:wjdrkdbs9310@163.com 위챗:wjdrkdbs9310 필요하신거있으면 연락주세요</p>
      <br/>

      <!-- 留言板 -->
      <div id="lv-container" data-id="city" data-uid="MTAyMC80Njc5My8yMzI5NA==">
        <!--<iframe src="https://was.livere.me/get-uuid" title="livere-uuid" id="livere-uuid" style="display: none;"></iframe>-->
        <!--<iframe title="livere" scrolling="no" frameborder="0" src="https://was.livere.me/comment/city?id=city&amp;refer=www.xxfldh.biz%2Fdonate%2F&amp;uid=MTAyMC8zOTI1NS8xNTc4Mg%3D%3D&amp;site=https%3A%2F%2Fwww.xxfldh.biz%2Fdonate%2F&amp;title=%2525u5408%2525u4F5C%2525u4E8B%2525u5B9C_%2525u5C0FX%2525u798F%2525u5229%2525u5BFC%2525u822A%252528XXFLDH.Com%252529%252520-%25252099%2525u70ED%2525u8FD9%2525u91CC%2525u53EA%2525u6709%2525u7CBE%2525u54C1%25252C%2525u798F%2525u5229%2525u89C6%2525u9891%25252C%2525u5348%2525u591C%2525u798F%2525u5229%25252C%2525u798F%2525u5229%2525u5728%2525u7EBF&amp;titleLength=50" id="lv-comment-443" style="min-width: 100%; width: 100px; height: 3430px; overflow: hidden; border: 0px; z-index: 124212;"></iframe>-->
      </div>
      <!-- 留言板已完成 -->
    </div>
  </div>
  <div class="ui segment" style="display: none">
    <h2 class="ui left floated header">
      <font style="vertical-align: inherit"
      ><font style="vertical-align: inherit">신청주소</font></font
      >
    </h2>
    <div class="ui clearing divider"></div>
    <div class="ui tall stacked segment"></div>
  </div>
  <div class="ui vertical stripe segment">
    <div class="ui center aligned container">
      <h3 class="ui header">
        【naver114】영구도메인：https://www.naver114.com/
      </h3>
      <p>북마크저장하시고 자주애용해주세요！！！</p>
    </div>
  </div>
  <div id="vcomments" style="display: none"></div>
  <div class="ui inverted vertical footer segment">
    <div class="ui container">
      <div class="ui stackable inverted divided equal height stackable grid">
        <div class="three wide column">
          <h4 class="ui inverted header">Built with</h4>
          <div class="ui inverted link list">
            <a
                class="item"
                href="http://semantic-ui.com/"
                target="_blank"
                title="Semantic UI"
            >Semantic UI</a
            >

            <a
                class="item"
                href="https://jquery.com/"
                target="_blank"
                title="jQuery"
            >jQuery</a
            >

            <a
                class="item"
                href="http://momentjs.com/"
                target="_blank"
                title="Moment.js"
            >Moment.js</a
            >

            <a
                class="item"
                href="https://inorganik.github.io/countUp.js/"
                target="_blank"
                title="CountUp.js"
            >CountUp.js</a
            >

            <a
                class="item"
                href="https://github.com/js-cookie/js-cookie"
                target="_blank"
                title="JavaScript Cookie"
            >JavaScript Cookie</a
            >

            <a
                class="item"
                href="https://github.com/websanova/js-url"
                target="_blank"
                title="url.js"
            >url.js</a
            >

            <a
                class="item"
                href="http://echarts.baidu.com/"
                target="_blank"
                title="ECharts"
            >ECharts</a
            >
          </div>
        </div>
        <div class="three wide column">
          <h4 class="ui inverted header">Powered by</h4>
          <div class="ui inverted link list">
            <a
                class="item"
                href="https://jekyllrb.com/"
                target="_blank"
                title="Jekyll"
            >Jekyll</a
            >

            <a
                class="item"
                href="https://pages.github.com/"
                target="_blank"
                title="GitHub Pages"
            >GitHub Pages</a
            >

            <a
                class="item"
                href="https://shields.io/"
                target="_blank"
                title="Shields.io"
            >Shields.io</a
            >

            <a
                class="item"
                href="http://hitokoto.cn/api"
                target="_blank"
                title="Hitokoto"
            >Hitokoto</a
            >

            <a
                class="item"
                href="https://shields.io/"
                target="_blank"
                title="Matomo"
            >Matomo</a
            >
          </div>
        </div>
        <div class="three wide column">
          <h4 class="ui inverted header">About</h4>
          <div class="ui inverted link list">
            <a
                class="item"
                href="https://www.naver114.com/"
                target="_blank"
                title="RICHARD"
            >wjdrkdbs9310</a
            >

            <a
                class="item"
                href="https://github.com/GoBelieveIO/im_service/"
                target="_blank"
                title="GITLAB.COM"
            >https://gitlab.com/</a
            >
          </div>
        </div>
        <div class="seven wide column">
          <h4 class="ui inverted header">
            Engin - Naver114 - Good Links！
          </h4>
          <div class="ui inverted link list">
            <div class="item">© 2021 Naver114</div>
            <div class="item">Theme hexoSite made by 니얼굴</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="loading-dimmer" class="ui page dimmer">
    <div class="ui massive loader"></div>
  </div>
  <ul id="scroll">
    <li>
      <a id="gotoTop" href="javascript:void(0)" title="위로가기"
      ><i class="arrow up icon"></i
      ></a>
    </li>
    <li>
      <a
          class="liuyan"
          href="https://wjdrkdbs9310.github.io/html/"
          title="주소"
      ><i class="comment icon"></i
      ></a>
    </li>
    <li class="qr-site">
      <a class="qr" href="javascript:void(0)" title="위챗바코드"
      ><i class="qrcode icon"></i
      ><span class="code"
      ><img alt src="../../assets/img/qrcode.jpg"/><b>위쳇추가</b></span
      ></a
      >
    </li>
  </ul>
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
