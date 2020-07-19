<template>
  <footer class="my-footer">
    <a class="footer-link" href="https://github.com/eric-projects/cv"
      >页面托管在Github Pages上</a
    >
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="less">
.my-footer {
  text-align: center;
  .footer-link {
    display: inline-block;
    color: @disabled-color;
    margin-bottom: 25px;
    @media screen and (max-width: 1024px) {
      margin-top: 25px;
    }
  }

  @media print {
    display: none;
  }
}
</style>
