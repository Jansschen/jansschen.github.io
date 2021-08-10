<template>
  <div class="page-container">
    <div class="old-address">
      <span>www.naver114.net</span>
      <p>우회주소</p>
    </div>
    <div class="new-address">우회주소： <b>naver114.com</b> 북마크로저장!!</div>
    <div class="progress-bar">
      <div
        :style="{
          width: bar + '%',
        }"
      ></div>
    </div>
    <div class="progress-text">{{ bar }} %</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bar: 0,
      amount: "||",
    };
  },
  mounted() {
    this.count();
  },
  methods: {
    count() {
      this.bar += 2;
      this.amount += "||";
      if (this.bar < 99) {
        setTimeout(this.count, 80);
      } else {
        // window.location.replace("https://www.baidu.com");
        window.location.href = decodeURIComponent(this.$route.query.href);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.page-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    //margin: 0 !important;
  }

  * {
    line-height: initial !important;
    line-height: 100px !important;
  }

  .old-address {
    display: flex;
    font-size: 40px;
    font-weight: bold;

    > span {
      text-decoration: line-through;
    }
  }

  .new-address {
    display: flex;
    font-size: 40px;
    font-weight: bold;
    color: #73bf00;

    > b {
      color: #ff0000;
    }
  }

  .progress-bar {
    width: 1200px;
    height: 24px;
    margin-top: 50px;
    border-radius: 20px;
    background: #f5f5f5;

    > div {
      height: 100%;
      background: #73bf00;
      border-radius: 10px;
      transition: 222ms;
    }
  }
}
</style>
