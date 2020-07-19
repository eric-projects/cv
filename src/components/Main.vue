<template>
  <div>
    <div class="my-tool">
      <Tools></Tools>
    </div>
    <a-divider class="my-group">
      <a-button-group>
        <a-button :ghost="type !== 1" @click="typeChange(1)" type="primary">
          框架模式
        </a-button>
        <a-button :ghost="type !== 2" @click="typeChange(2)" type="primary"
          >领域模式</a-button
        >
      </a-button-group></a-divider
    >
    <div class="content-bd my-content">
      <Project></Project>
    </div>
  </div>
</template>

<script>
import Project from "./Project";
import Tools from "./Tools";
export default {
  name: "Main",
  components: { Project, Tools },
  data() {
    return {
      type: 1,
    };
  },
  methods: {
    typeChange(v) {
      this.type = v;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.my-tool {
  width: 100%;
  padding: 20px 50px 0px;
  overflow: hidden;
  @media screen and (max-width: 720px) {
    padding: 20px 20px 0px;
  }
}

.my-group {
  width: 100%;
  padding: 20px 50px;
  @media screen and (max-width: 720px) {
    padding: 10px 30px;
  }
}

.my-content {
  width: 100%;
  min-height: 200px;
  padding: 20px 30px 50px;
  overflow: hidden;
  @media screen and (max-width: 720px) {
    padding: 20px 20px 50px;
  }
  ul {
    li {
      margin-top: 5px;
      list-style: square inside;
    }
  }
}
</style>
