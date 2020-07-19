<template>
  <div>
    <a-tag
      v-for="item in value"
      :key="item.name"
      :style="
        'margin-bottom: 10px;background-color:transparent;border-color:' +
          item.color +
          ';color:' +
          item.color
      "
    >
      <a :href="item.link">
        <img
          :width="item.width || 18"
          :height="item.height || 16"
          :src="item.icon"
        />
        {{ item.name }}
      </a>
    </a-tag>
  </div>
</template>

<script>
export default {
  name: "Tools",
  data: () => {
    return {
      value: [
        {
          color: "rgb(25, 142, 233)",
          icon:
            "https://visualstudio.microsoft.com/wp-content/uploads/2019/09/vs-code-responsive-01-1.png",
          link: "https://code.visualstudio.com/",
          width: 16,
          name: "VS Code",
        },
        {
          color: "rgb(142, 89, 203)",
          icon:
            "https://visualstudio.microsoft.com/wp-content/uploads/2019/06/BrandVisualStudioWin2019-3.svg",
          link: "https://visualstudio.microsoft.com/zh-hans/vs/",
          name: "Visual Studio",
        },
        {
          color: "rgb(251, 79, 40)",
          icon: "https://git-scm.com/favicon.ico",
          link: "https://git-scm.com/",
          name: "Git",
        },
        {
          color: "rgb(0, 0, 0)",
          icon: "https://github.githubassets.com/pinned-octocat.svg",
          link: "https://github.com/",
          name: "GitHub",
        },
        {
          color: "rgb(252, 109, 37)",
          icon: "https://about.gitlab.com/ico/favicon.ico",
          link: "https://about.gitlab.com/",
          name: "GitLab",
        },
        {
          color: "rgb(33, 133, 255)",
          icon:
            "https://www.sourcetreeapp.com/assets/img/favicons/sourcetree/favicon-32x32.png",
          link: "https://www.sourcetreeapp.com/",
          name: "SourceTree",
        },
        {
          color: "rgb(64, 194, 125)",
          icon:
            "http://www.navicat.com.cn/images/02.Product_00_AllProducts_Premium15.png",
          link: "http://www.navicat.com.cn/",
          name: "Navicat",
        },
        {
          color: "rgb(200, 36, 26)",
          icon: "https://redis.io/images/favicon.png",
          link: "https://redis.io/",
          name: "Redis",
        },
        {
          color: "rgb(65, 152, 52)",
          icon: "https://www.mongodb.com/assets/images/global/favicon.ico",
          link: "https://www.mongodb.com/",
          name: "MongoDB",
        },
        {
          color: "rgb(252, 129, 0)",
          icon: "https://sunlogin.oray.com/favicon.ico",
          link: "https://sunlogin.oray.com/",
          width: 16,
          name: "向日葵",
        },
        {
          color: "rgb(252, 105, 0)",
          icon:
            "https://img.alicdn.com/tfs/TB1_ZXuNcfpK1RjSZFOXXa6nFXa-32-32.ico",
          link: "https://www.aliyun.com/",
          name: "阿里云",
        },
        {
          color: "rgb(202, 100, 234)",
          icon:
            "https://imgazure.microsoftstore.com.cn/_ui/desktop/static/img/newOffice2020/onenote.png",
          link:
            "https://www.microsoft.com/zh-cn/microsoft-365/onenote/digital-note-taking-app",
          name: "OneNote",
        },
        {
          color: "rgb(27, 152, 214)",
          icon: "https://www.axure.com/wp-content/uploads/2019/04/favicon.ico",
          link: "https://www.axure.com/",
          name: "Axure",
        },
        {
          color: "rgb(230, 183, 16)",
          icon: "https://www.kernel.org/theme/images/logos/favicon.png",
          link: "https://www.kernel.org/",
          name: "Linux",
        },
      ],
    };
  },
};
</script>

<style lang="less"></style>
