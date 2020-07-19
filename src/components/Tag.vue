<template>
  <div class="title">
    <slot></slot>
    <span v-if="type" class="tag"
      ><a-button  type="danger" size="small" ghost>
        {{ type }}
      </a-button></span
    >
  </div>
</template>

<script>
export default {
  name: "Tag",
  props: {
    type: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped lang="less">
.transform(@deg) {
  transform: rotate(@deg);
  -ms-transform: rotate(@deg); /* IE 9 */
  -moz-transform: rotate(@deg); /* Firefox */
  -webkit-transform: rotate(@deg); /* Safari 和 Chrome */
  -o-transform: rotate(@deg); /* Opera */
}
.title {
  position: relative;
  .tag {
    position: absolute;
    top: -12px;
    left: -22px;
    z-index: 100;
    .transform (-30deg);
  }
}
</style>
