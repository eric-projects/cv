<template>
  <div id="app">
    <Header></Header>
    <Main />
    <Footer></Footer>
  </div>
</template>

<script>
import Main from "./components/Main.vue";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Main,
    Footer,
    Header,
  },
};
</script>

<style lang="less">
.border-radius(@topright: 0, @bottomright: 0, @bottomleft: 0, @topleft: 0) {
  -webkit-border-top-right-radius: @topright;
  -webkit-border-bottom-right-radius: @bottomright;
  -webkit-border-bottom-left-radius: @bottomleft;
  -webkit-border-top-left-radius: @topleft;
  -moz-border-radius-topright: @topright;
  -moz-border-radius-bottomright: @bottomright;
  -moz-border-radius-bottomleft: @bottomleft;
  -moz-border-radius-topleft: @topleft;
  border-top-right-radius: @topright;
  border-bottom-right-radius: @bottomright;
  border-bottom-left-radius: @bottomleft;
  border-top-left-radius: @topleft;
}

.box-sizing(@boxmodel) {
  -webkit-box-sizing: @boxmodel;
  -moz-box-sizing: @boxmodel;
  box-sizing: @boxmodel;
}

#app {
  position: relative;
  width: 1024px;
  margin: 50px auto;
  .border-radius(5px);
  background-color: #fff;
  overflow: hidden;
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin: 0;
    .border-radius(0);
  }
}

* {
  .box-sizing(border-box);
  user-select: none;
}

ol,
ul {
  list-style: none;
  padding: 0;
}

body {
  color: #333;
  font-size: 14px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: none;
  background-color: #eee;
  overflow: auto;
  padding-top: 5px;
  @media screen and (max-width: 1024px) {
    padding-top: 0;
  }
}

a {
  text-decoration: none;
  color: @primary-color;
}

.link {
  a {
    color: #fff;
    @media print {
      color: #000;
    }
    font-size: 14px;
    line-height: 22px;
    &:hover {
      color: #e8e8e8;
    }
    .iconfont {
      fill: #fff;
      vertical-align: text-top;
    }
  }
}
</style>
